import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Countdown, calculateTimeRemaining } from '@/components/Countdown';

describe('calculateTimeRemaining', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('calculates days, hours, minutes, and seconds correctly', () => {
    const now = new Date('2026-01-01T00:00:00Z');
    vi.setSystemTime(now);

    const targetDate = '2026-01-02T01:02:03Z';
    const result = calculateTimeRemaining(targetDate);

    expect(result.days).toBe(1);
    expect(result.hours).toBe(1);
    expect(result.minutes).toBe(2);
    expect(result.seconds).toBe(3);
  });

  it('returns zeros when target date is in the past', () => {
    const now = new Date('2026-01-02T00:00:00Z');
    vi.setSystemTime(now);

    const targetDate = '2026-01-01T00:00:00Z';
    const result = calculateTimeRemaining(targetDate);

    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it('handles exact match correctly', () => {
    const now = new Date('2026-01-01T00:00:00Z');
    vi.setSystemTime(now);

    const targetDate = '2026-01-01T00:00:00Z';
    const result = calculateTimeRemaining(targetDate);

    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });
});

describe('Countdown Component', () => {
  it('renders countdown labels', () => {
    const targetDate = '2026-06-11T16:00:00Z';
    render(<Countdown startDate={targetDate} />);

    expect(screen.getByText('Días')).toBeInTheDocument();
    expect(screen.getByText('Horas')).toBeInTheDocument();
    expect(screen.getByText('Minutos')).toBeInTheDocument();
    expect(screen.getByText('Segundos')).toBeInTheDocument();
  });

  it('has aria-live attribute for accessibility', () => {
    const targetDate = '2026-06-11T16:00:00Z';
    const { container } = render(<Countdown startDate={targetDate} />);

    const countdownElement = container.querySelector('[aria-live="polite"]');
    expect(countdownElement).toBeInTheDocument();
  });
});
