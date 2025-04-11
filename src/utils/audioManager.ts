let currentAudio: HTMLAudioElement | null = null;

export const stopCurrentAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
};

export const setCurrentAudio = (audio: HTMLAudioElement) => {
  stopCurrentAudio();
  currentAudio = audio;
};

export const getCurrentAudio = () => currentAudio; 