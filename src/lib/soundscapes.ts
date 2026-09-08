export type SoundId = "campfire" | "ocean" | "rain" | "forest";

type Handle = { stop: () => void };

function makeNoise(ctx: AudioContext, seconds = 2) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function brownNoise(ctx: AudioContext) {
  const length = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.2;
  }
  return buffer;
}

function connectLoop(
  ctx: AudioContext,
  buffer: AudioBuffer,
  filterType: BiquadFilterType,
  freq: number,
  gainValue: number,
) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.value = freq;
  const gain = ctx.createGain();
  gain.gain.value = 0;
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start();
  gain.gain.linearRampToValueAtTime(gainValue, ctx.currentTime + 0.35);
  return { src, gain };
}

export function startSoundscape(id: SoundId, ctx: AudioContext): Handle {
  const nodes: Array<{ src: AudioBufferSourceNode; gain: GainNode }> = [];

  if (id === "ocean") {
    nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 380, 0.28));
    nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 180, 0.12));
  } else if (id === "rain") {
    nodes.push(connectLoop(ctx, makeNoise(ctx), "highpass", 1200, 0.08));
    nodes.push(connectLoop(ctx, makeNoise(ctx), "bandpass", 2400, 0.06));
  } else if (id === "campfire") {
    nodes.push(connectLoop(ctx, makeNoise(ctx, 1), "lowpass", 900, 0.1));
    nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 320, 0.16));
  } else {
    nodes.push(connectLoop(ctx, brownNoise(ctx), "lowpass", 500, 0.14));
    nodes.push(connectLoop(ctx, makeNoise(ctx), "bandpass", 1800, 0.03));
  }

  return {
    stop: () => {
      nodes.forEach((n) => {
        n.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
        window.setTimeout(() => {
          try {
            n.src.stop();
          } catch {
            /* already stopped */
          }
        }, 240);
      });
    },
  };
}
