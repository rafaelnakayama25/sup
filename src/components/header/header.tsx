import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-row justify-between shadow-md bg-gradient-to-br from-violet-400 via-indigo-300 to-sky-300 px-5 py-5 rounded-2xl rounded-t-none items-center text-2xl font-semibold text-violet-900">
      <h1 className="flex flex-row text-center">Sup, bitch</h1>
      <Bell className="text-violet-900" size={30} />
    </header>
  );
}
