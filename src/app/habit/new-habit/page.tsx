import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewHabit() {
  async function newHabit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");
    await kv.hset("habits", { [habit as string]: {} });

    revalidatePath("/habit");
    redirect("/habit");
  }

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-center text-black font-display">
        New Habit
      </h1>

      <form action={newHabit} className="flex flex-col gap-4 mt-4">
        <input
          id="habit"
          type="text"
          name="habit"
          placeholder="Habit name"
          className="p-2 rounded-md border text-white bg-neutral-800 border-gray-300"
        />

        <button
          type="submit"
          className="bg-green-400 font-display text-neutral-900 font-regular text-2xl p-2 rounded-md mt-8"
        >
          cadastrar
        </button>

        <button className="bg-red-400 font-display text-neutral-900 font-regular text-2xl rounded-md p-2 ">
          cancelar
        </button>
      </form>
    </main>
  );
}
