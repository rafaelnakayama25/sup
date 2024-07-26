import MyCalendar from "@/components/habit-page-components/MyCalendar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Home({
  params: { habit },
}: {
  params: { habit: string };
}) {
  const decodedHabit = decodeURI(habit);
  const habitStreak = {
    "2024-07-24": true,
    "2024-07-23": true,
    "2024-07-22": false,
  };

  return (
    <main className="container relative flex flex-col gap-2 px-4 pt-2">
      <h1 className="text-2xl font-light text-black text-center font-display">
        {decodedHabit}
      </h1>

      <Button className="w-28 h-12">
        <Link
          className="flex items-center font-sans text-lg text-black"
          href="/"
        >
          <ChevronLeft />
          Voltar
        </Link>
      </Button>

      <MyCalendar habit={decodedHabit} habitStreak={habitStreak}/>
    </main>
  );
}
