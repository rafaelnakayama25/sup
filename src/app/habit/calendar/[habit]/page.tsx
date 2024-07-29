import MyCalendar from "@/components/habit-page-components/MyCalendar";
import { Button } from "@/components/ui/button";
import { kv } from "@vercel/kv";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Habit({
  params: { habit },
}: {
  params: { habit: string };
}) {
  const decodedHabit = decodeURI(habit);
  const habitStreak: Record<string, boolean> | null = await kv.hget(
    "habits",
    decodedHabit
  );

  return (
    <main className="container relative flex flex-col gap-2 px-4 pt-2">
      <h1 className="text-2xl font-light text-black text-center font-display">
        {decodedHabit}
      </h1>

      <Button className="w-28 h-12">
        <Link
          className="flex items-center font-sans text-lg text-black"
          href="/habit"
        >
          <ChevronLeft />
          Voltar
        </Link>
      </Button>

      <MyCalendar habit={decodedHabit} habitStreak={habitStreak}/>
    </main>
  );
}
