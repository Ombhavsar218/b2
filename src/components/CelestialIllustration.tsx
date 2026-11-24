import React from 'react';

interface CelestialIllustrationProps {
  type: 'moon' | 'planet' | 'ringed-planet' | 'constellation' | 'sparkle' | 'sun-burst';
  className?: string;
  size?: number;
}

export const CelestialIllustration: React.FC<CelestialIllustrationProps> = ({
  type,
  className = '',
  size = 64
}) => {
  if (type === 'moon') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <defs>
          <linearGradient id="moonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F4FF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#E8D5A5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B9A9FF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="moonBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path
          d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C42 76 37 63.8 37 50C37 36.2 42 24 50 15Z"
          fill="url(#moonGlow)"
          filter="url(#moonBlur)"
        />
        {/* Tiny star near crescent */}
        <circle cx="72" cy="36" r="2" fill="#E8D5A5" opacity="0.9" />
        <circle cx="62" cy="68" r="1.5" fill="#B9A9FF" opacity="0.7" />
      </svg>
    );
  }

  if (type === 'ringed-planet') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <defs>
          <linearGradient id="planetGrad" x1="20%" y1="20%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#B9A9FF" />
            <stop offset="40%" stopColor="#5B5891" />
            <stop offset="100%" stopColor="#111831" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A5" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#B9A9FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E8D5A5" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Back of ring */}
        <ellipse
          cx="60"
          cy="60"
          rx="52"
          ry="15"
          transform="rotate(-24 60 60)"
          stroke="url(#ringGrad)"
          strokeWidth="3.5"
          strokeDasharray="60 40"
          opacity="0.4"
        />
        {/* Planet Sphere */}
        <circle cx="60" cy="60" r="28" fill="url(#planetGrad)" />
        {/* Front of ring */}
        <ellipse
          cx="60"
          cy="60"
          rx="52"
          ry="15"
          transform="rotate(-24 60 60)"
          stroke="url(#ringGrad)"
          strokeWidth="3.5"
          strokeDasharray="100 80"
          strokeDashoffset="70"
        />
      </svg>
    );
  }

  if (type === 'planet') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <defs>
          <radialGradient id="sphereLight" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#B9D9FF" />
            <stop offset="45%" stopColor="#4A4582" />
            <stop offset="100%" stopColor="#0B1026" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="38" fill="url(#sphereLight)" />
        <ellipse cx="50" cy="50" rx="36" ry="10" stroke="#B9A9FF" strokeWidth="0.8" strokeOpacity="0.3" transform="rotate(-15 50 50)" />
      </svg>
    );
  }

  if (type === 'constellation') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 140 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <path
          d="M20 70 L50 60 L75 35 L105 30 L125 50 L95 75 L50 60"
          stroke="#B9A9FF"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          strokeOpacity="0.5"
        />
        {[[20, 70], [50, 60], [75, 35], [105, 30], [125, 50], [95, 75]].map(([x, y], idx) => (
          <circle key={idx} cx={x} cy={y} r="3" fill="#E8D5A5" />
        ))}
      </svg>
    );
  }

  if (type === 'sparkle') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <path
          d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
          fill="#E8D5A5"
        />
      </svg>
    );
  }

  return null;
};
