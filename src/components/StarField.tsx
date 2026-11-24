import React, { useMemo } from 'react';

interface StarFieldProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export const StarField: React.FC<StarFieldProps> = ({ density = 'medium', className = '' }) => {
  const count = density === 'low' ? 35 : density === 'medium' ? 65 : 95;

  const stars = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        top: `${(Math.sin(i * 997) * 49 + 50).toFixed(2)}%`,
        left: `${(Math.cos(i * 571) * 49 + 50).toFixed(2)}%`,
        size: (i % 3 === 0 ? 2.5 : i % 5 === 0 ? 3 : 1.5),
        opacity: (0.2 + (i % 7) * 0.1).toFixed(2),
        animationDelay: `${(i % 5) * 1.2}s`,
        animationDuration: `${3.5 + (i % 4) * 1.5}s`,
        color: i % 4 === 0 ? '#E8D5A5' : i % 3 === 0 ? '#B9A9FF' : '#F5F4FF',
      });
    }
    return list;
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};
