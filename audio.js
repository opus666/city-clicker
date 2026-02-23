/**
 * audio.js — Web Audio API synthesized music & SFX
 * No external files needed — everything is generated programmatically.
 */

const Audio = (() => {
    let ctx = null;
    let masterGain, musicGain, sfxGain;
    let musicPlaying = false;
    let chordTimer = null, arpTimer = null;
    let chordIndex = 0, arpStep = 0;

    // Pentatonic-friendly chord progressions
    const CHORDS = [
        [261.63, 329.63, 392.00],  // C - E - G
        [293.66, 369.99, 440.00],  // D - F# - A
        [329.63, 392.00, 493.88],  // E - G - B
        [261.63, 392.00, 523.25],  // C - G - C  (open 5th)
    ];

    function init() {
        if (ctx) return true;
        try {
            ctx = new (window.AudioContext || window.webkitAudioContext)();
            masterGain = ctx.createGain();
            masterGain.gain.setValueAtTime(0.35, ctx.currentTime);
            masterGain.connect(ctx.destination);

            musicGain = ctx.createGain();
            musicGain.gain.setValueAtTime(0.22, ctx.currentTime);
            musicGain.connect(masterGain);

            sfxGain = ctx.createGain();
            sfxGain.gain.setValueAtTime(0.55, ctx.currentTime);
            sfxGain.connect(masterGain);
            return true;
        } catch (e) { console.warn('AudioContext unavailable', e); return false; }
    }

    function setMasterVol(v) { if (masterGain) masterGain.gain.setTargetAtTime(v, ctx.currentTime, 0.05); }
    function setMusicVol(v) { if (musicGain) musicGain.gain.setTargetAtTime(v, ctx.currentTime, 0.05); }
    function setSfxVol(v) { if (sfxGain) sfxGain.gain.setTargetAtTime(v, ctx.currentTime, 0.05); }

    // ── Core tone helpers ──────────────────────────────────
    function toneAt(delay, freq, type, attack, sustain, release, vol = 0.3, dest) {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        const t = ctx.currentTime + delay;
        osc.type = type;
        osc.frequency.setValueAtTime(freq, t);
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(vol, t + attack);
        env.gain.setValueAtTime(vol, t + attack + sustain);
        env.gain.linearRampToValueAtTime(0, t + attack + sustain + release);
        osc.connect(env);
        env.connect(dest || sfxGain);
        osc.start(t);
        osc.stop(t + attack + sustain + release + 0.05);
    }

    function tone(freq, type, attack, sustain, release, vol = 0.3, dest) {
        toneAt(0, freq, type, attack, sustain, release, vol, dest);
    }

    // ── SFX ───────────────────────────────────────────────

    function sfxClick() {
        if (!ctx) return;
        tone(880, 'sine', 0.003, 0.015, 0.08, 0.12);
        tone(1320, 'sine', 0.003, 0.008, 0.06, 0.06);
    }

    function sfxPurchase() {
        if (!ctx) return;
        [523.25, 659.26, 783.99].forEach((f, i) =>
            toneAt(i * 0.08, f, 'sine', 0.01, 0.08, 0.15, 0.2)
        );
    }

    function sfxAchievement() {
        if (!ctx) return;
        [523.25, 659.26, 783.99, 1046.50].forEach((f, i) =>
            toneAt(i * 0.1, f, 'triangle', 0.01, 0.14, 0.22, 0.25)
        );
    }

    function sfxGoldenSpawn() {
        if (!ctx) return;
        for (let i = 0; i < 5; i++)
            toneAt(i * 0.05, 1760 - i * 110, 'sine', 0.005, 0.04, 0.14, 0.16);
    }

    function sfxGoldenCollect() {
        if (!ctx) return;
        [1318, 1568, 2093, 2637].forEach((f, i) =>
            toneAt(i * 0.06, f, 'sine', 0.005, 0.06, 0.22, 0.24)
        );
    }

    function sfxPrestige() {
        if (!ctx) return;
        [261.63, 329.63, 392, 523.25, 659.26, 783.99, 1046.50, 1318.51].forEach((f, i) =>
            toneAt(i * 0.07, f, 'sine', 0.01, 0.18, 0.3, 0.28)
        );
    }

    function sfxDisaster() {
        if (!ctx) return;
        for (let i = 0; i < 4; i++) {
            toneAt(i * 0.28, 220, 'sawtooth', 0.01, 0.12, 0.1, 0.18);
            toneAt(i * 0.28, 196, 'sawtooth', 0.01, 0.12, 0.1, 0.12);
        }
    }

    function sfxQuestComplete() {
        if (!ctx) return;
        [392, 523.25, 659.26, 783.99, 1046.50].forEach((f, i) =>
            toneAt(i * 0.09, f, 'triangle', 0.005, 0.12, 0.2, 0.22)
        );
    }

    // ── Background Music ───────────────────────────────────

    function playChord(notes, duration) {
        if (!ctx || !musicPlaying) return;
        notes.forEach((freq, ni) => {
            const osc = ctx.createOscillator();
            const env = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.detune.setValueAtTime((Math.random() - 0.5) * 6, ctx.currentTime);
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(900 + ni * 200, ctx.currentTime);
            env.gain.setValueAtTime(0, ctx.currentTime);
            env.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.4);
            env.gain.setValueAtTime(0.1, ctx.currentTime + duration - 0.8);
            env.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
            osc.connect(filter); filter.connect(env); env.connect(musicGain);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + duration + 0.1);
        });
        // Sub bass
        const bass = ctx.createOscillator();
        const bassEnv = ctx.createGain();
        bass.type = 'triangle';
        bass.frequency.setValueAtTime(notes[0] * 0.5, ctx.currentTime);
        bassEnv.gain.setValueAtTime(0, ctx.currentTime);
        bassEnv.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.6);
        bassEnv.gain.setValueAtTime(0.07, ctx.currentTime + duration - 1);
        bassEnv.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
        bass.connect(bassEnv); bassEnv.connect(musicGain);
        bass.start(ctx.currentTime);
        bass.stop(ctx.currentTime + duration + 0.1);
    }

    function playArp() {
        if (!ctx || !musicPlaying) return;
        const chord = CHORDS[chordIndex];
        const notes = [...chord, chord[0] * 2, chord[1] * 2, chord[0] * 4];
        const freq = notes[arpStep % notes.length];
        arpStep++;
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        env.gain.setValueAtTime(0, ctx.currentTime);
        env.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.015);
        env.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.38);
        osc.connect(env); env.connect(musicGain);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.42);
    }

    function scheduleChord() {
        if (!musicPlaying) return;
        playChord(CHORDS[chordIndex], 4.8);
        chordIndex = (chordIndex + 1) % CHORDS.length;
        chordTimer = setTimeout(scheduleChord, 4000);
    }

    function scheduleArp() {
        if (!musicPlaying) return;
        playArp();
        arpTimer = setTimeout(scheduleArp, 440 + Math.random() * 100);
    }

    function startMusic() {
        if (!ctx || musicPlaying) return;
        musicPlaying = true;
        scheduleChord();
        setTimeout(scheduleArp, 600);
    }

    function stopMusic() {
        musicPlaying = false;
        clearTimeout(chordTimer);
        clearTimeout(arpTimer);
        chordTimer = arpTimer = null;
    }

    function toggleMusic() {
        if (musicPlaying) stopMusic(); else startMusic();
        return musicPlaying;
    }

    return {
        init, startMusic, stopMusic, toggleMusic,
        setMasterVol, setMusicVol, setSfxVol,
        isPlaying: () => musicPlaying,
        sfxClick, sfxPurchase, sfxAchievement,
        sfxGoldenSpawn, sfxGoldenCollect,
        sfxPrestige, sfxDisaster, sfxQuestComplete,
    };
})();
