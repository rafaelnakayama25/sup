"use client";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { deleteHabit } from "@/app/actions";

export default function DeleteButton({ habit }: { habit: string }) {
  return (
    <Button onClick={() => deleteHabit(habit)}>
      <Trash className="text-white" size={20} />
    </Button>
  );
}
