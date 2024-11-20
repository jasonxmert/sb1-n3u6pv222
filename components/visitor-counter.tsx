"use client";

import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    const initialCount = storedCount ? parseInt(storedCount, 10) : 500;
    const newCount = initialCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);
  }, []);

  if (count === null) return null;

  return (
    <div className="inline-block bg-gradient-to-r from-primary to-secondary p-[2px] rounded-lg shadow-lg">
      <div className="px-4 py-2 bg-background rounded-[calc(0.5rem-2px)]">
        <p className="text-sm font-medium text-foreground">
          Visitors Today: <span className="font-bold">{count.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
}