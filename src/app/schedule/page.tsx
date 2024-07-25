"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import * as React from "react";
import DayState from "./daystate/page";
import Link from "next/link";

type HabitStreak = {
  [date: string]: boolean;
};

type Habits = {
  [habit: string]: HabitStreak;
};

export default function Home() {
  const habits: Habits = {
    "beber água": {
      "2024-07-24": true,
      "2024-07-23": false,
      "2024-07-22": false,
    },
    programar: {
      "2024-07-24": true,
      "2024-07-23": true,
      "2024-07-22": false,
    },
  };

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits == null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            No habits yet
          </h1>
        ))}
      {habits != null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-light text-black">{habit}</span>
              <Button>
                <Trash className="text-white" size={20} />
              </Button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {sortedWeekDays.map((day, index) => {
                const dates = Object.keys(habitStreak);
                const dayKey = dates[dates.length - 1 - index];
                const dayState = habitStreak[dayKey] ?? undefined;

                return (
                  <div key={day} className="flex flex-col last:font-bold">
                    <span className="text-white text-xs text-center">{day}</span>
                    <DayState day={dayState} />
                  </div>
                );
              })}
            </section>
          </div>
        ))}
      <Link
        href="/new-habit"
        className="sticky text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-green-500 font-display font-regular text-2xl p-2 rounded-md"
      >
        Novo hábito
      </Link>
    </main>
  );
}
