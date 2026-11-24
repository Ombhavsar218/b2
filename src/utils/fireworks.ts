import confetti from 'canvas-confetti';

export const launchCelestialFireworks = () => {
  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;

  // Initial immediate starburst
  confetti({
    particleCount: 50,
    spread: 100,
    startVelocity: 35,
    origin: { x: 0.5, y: 0.6 },
    colors: ['#E8D5A5', '#B9A9FF', '#B9D9FF', '#FFFFFF', '#FFD700'],
    shapes: ['star', 'circle'],
    ticks: 80,
  });

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 35 * (timeLeft / duration);

    // Left side celestial rocket burst
    confetti({
      particleCount,
      spread: 80,
      startVelocity: 40,
      angle: 60,
      origin: { x: 0.15, y: 0.7 },
      colors: ['#E8D5A5', '#B9A9FF', '#FFFFFF', '#FFD700'],
      shapes: ['star', 'circle'],
      ticks: 70,
    });

    // Right side celestial rocket burst
    confetti({
      particleCount,
      spread: 80,
      startVelocity: 40,
      angle: 120,
      origin: { x: 0.85, y: 0.7 },
      colors: ['#B9A9FF', '#B9D9FF', '#FFFFFF', '#E8D5A5'],
      shapes: ['star', 'circle'],
      ticks: 70,
    });

    // High center bloom
    if (Math.random() > 0.4) {
      confetti({
        particleCount: 25,
        spread: 120,
        startVelocity: 25,
        origin: { x: 0.5, y: 0.35 },
        colors: ['#E8D5A5', '#F5F4FF', '#B9A9FF'],
        shapes: ['circle'],
        ticks: 90,
      });
    }
  }, 350);
};

export const launchImmediateBurst = () => {
  confetti({
    particleCount: 80,
    spread: 120,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.75 },
    colors: ['#E8D5A5', '#B9A9FF', '#B9D9FF', '#FFFFFF', '#FFD700'],
    shapes: ['star', 'circle'],
    ticks: 100,
  });
};
