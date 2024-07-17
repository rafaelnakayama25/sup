import { EmocionalMeditationChart } from "@/components/charts/emotional-meditation-chart";
import { Overview } from "@/components/charts/overview";

export default function Home() {
  return (
    <main className="flex flex-col justify-center bg-blue-300">
      <Overview />
      <EmocionalMeditationChart />
    </main>
  );
}
