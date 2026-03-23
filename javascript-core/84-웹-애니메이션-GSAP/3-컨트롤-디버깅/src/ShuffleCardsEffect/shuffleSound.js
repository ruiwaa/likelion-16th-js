const SOUND_URL = '/media/cards-shuffle-effect-sound.mp3'

function initShuffleSound() {
  const shuffleSound = new Audio(SOUND_URL)

  const playSound = ({ volume = 1, currentTime = 0 } = {}) => {
    const soundClone = shuffleSound.cloneNode()
    soundClone.currentTime = currentTime
    soundClone.volume = volume
    soundClone.play()
  }

  return playSound
}

export default initShuffleSound