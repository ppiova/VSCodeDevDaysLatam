'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg min-w-[80px] sm:min-w-[100px]">
        <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
          {timeLeft.days}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
          Días
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg min-w-[80px] sm:min-w-[100px]">
        <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
          {timeLeft.hours}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
          Horas
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg min-w-[80px] sm:min-w-[100px]">
        <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
          {timeLeft.minutes}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
          Minutos
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg min-w-[80px] sm:min-w-[100px]">
        <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
          {timeLeft.seconds}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
          Segundos
        </div>
      </div>
    </div>
  );
}
