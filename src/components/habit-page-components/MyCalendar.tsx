"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DayState } from "./DayState";

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const firstDayWeekDay = date.getDay();
  const numberOfEmptyDays = Array(firstDayWeekDay).fill(null);
  const days = [...numberOfEmptyDays];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const daysInMonth = getDaysInMonth(currentMonth, currentYear);

export default function MyCalendar({ habit, habitStreak }: { habit: string; habitStreak: Record<string, boolean> | null}) {

  const[month, setMonth] = useState(currentMonth);
  const[year, setYear] = useState(currentYear);
  const[selectedDate, setSelectedDate] = useState(new Date());
  const[daysInMonth, setDaysInMonth] = useState(getDaysInMonth(currentMonth, currentYear));

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(month, year));
    setSelectedDate(new Date(year, month, 1));
  }, [month, year]);

  function goToPreviousMonth() {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }
  function goToNextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  function getFullDateString() {

    const monthName = `${selectedDate.toLocaleString("pt-BR", {month: "long"})}`;
    
    const upperCaseMonthName = monthName[0].toUpperCase() + monthName.slice(1);
    return ` ${upperCaseMonthName} de ${selectedDate.getFullYear()}`;
  }

  function getDayString(date: Date) {
    return `${year.toString()}-${(month + 1).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")}`;
  }

  return (
    <section className="w-full my-2 rounded-md bg-neutral-800">
    <div className="flex justify-between items-center mx-2 my-4 font-sans text-neutral-400">
      <Button onClick={goToPreviousMonth}>
        <ChevronLeft className="stroke-neutral-400 w-5 h-5" />
      </Button>
      <span>{getFullDateString()}</span>
      <Button onClick={goToNextMonth}>
        <ChevronRight className="stroke-neutral-400 w-5 h-5" />
      </Button>
    </div>
    <div className="grid w-full grid-cols-7 mt-2">
      {weekDays.map((day) => (
        <div key={day} className="flex flex-col items-center">
          <span className="font-sans text-xs font-light text-neutral-200">
            {day}
          </span>
        </div>
      ))}
      {daysInMonth.map((day, index) => (
        <div key={index} className="flex flex-col items-center p-2">
          <span className="font-sans text-xs font-light text-neutral-200">
            {day?.getDate()}
          </span>
          {day && (<DayState day={habitStreak ? habitStreak[getDayString(day)] : undefined} />
          )}
        </div>
      ))}
    </div>
  </section>
  );
}
