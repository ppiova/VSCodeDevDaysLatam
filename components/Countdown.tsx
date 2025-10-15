"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CountdownProps {
  startDate: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeRemaining(targetDate: string): TimeRemaining {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function Countdown({ startDate }: CountdownProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(startDate)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Días", "Horas", "Minutos", "Segundos"].map((label) => (
          <Card key={label}>
            <CardContent className="p-6">
              <div className="text-4xl md:text-6xl font-bold text-primary text-center">
                --
              </div>
              <div className="text-sm md:text-base text-muted-foreground text-center mt-2">
                {label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      aria-live="polite"
      aria-atomic="true"
    >
      <Card>
        <CardContent className="p-6">
          <div className="text-4xl md:text-6xl font-bold text-primary text-center">
            {timeRemaining.days}
          </div>
          <div className="text-sm md:text-base text-muted-foreground text-center mt-2">
            Días
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-4xl md:text-6xl font-bold text-primary text-center">
            {timeRemaining.hours}
          </div>
          <div className="text-sm md:text-base text-muted-foreground text-center mt-2">
            Horas
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-4xl md:text-6xl font-bold text-primary text-center">
            {timeRemaining.minutes}
          </div>
          <div className="text-sm md:text-base text-muted-foreground text-center mt-2">
            Minutos
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-4xl md:text-6xl font-bold text-primary text-center">
            {timeRemaining.seconds}
          </div>
          <div className="text-sm md:text-base text-muted-foreground text-center mt-2">
            Segundos
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export { calculateTimeRemaining };
