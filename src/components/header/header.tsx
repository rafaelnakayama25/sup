import { Bell } from "lucide-react";

export default function Header() {
    return (
        <header className="flex flex-row justify-between px-5 py-7 text-2xl rounded-2xl bg-primary rounded-t-none border items-center font-semibold text-slate-50 ">
            <h1>Bom dia, Rafael!</h1>
            <Bell size={30} />
        </header>
    );
} 