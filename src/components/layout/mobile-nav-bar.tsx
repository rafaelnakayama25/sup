"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CalendarDays, Cog, NotebookPen } from "lucide-react";
import { flowerLotus } from "@lucide/lab";
import { Icon } from "lucide-react";
import Link from "next/link";

export default function MobileNavBar() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="h-20 p-4 fixed bottom-0 w-full z-50 justify-around items-center bg-gradient-to-b from-slate-50 to-slate-300 border-t-1">
        <NavigationMenuItem>
          <Link href="/meditation" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center bg-gradient-to-b from-sky-300 via-indigo-300 to-violet-400 text-white px-2 `}
            >
              <Icon
                iconNode={flowerLotus}
                size={38} // Adjusted size
                className={`${pathname === "/meditation" ? "text-indigo-800" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/emotional" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center bg-gradient-to-b from-sky-300 via-indigo-300 to-violet-400 text-white px-2`}
            >
              <NotebookPen
                size={38} // Adjusted size
                className={`${pathname === "/emotional" ? "text-indigo-800" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/habit" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center bg-gradient-to-b from-sky-300 via-indigo-300 to-violet-400 text-white px-2`}
            >
              <CalendarDays
                size={38} // Adjusted size
                className={`${pathname === "/habit" ? "text-indigo-800" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/settings" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center bg-gradient-to-b from-sky-300 via-indigo-300 to-violet-400 text-white px-2`}
            >
              <Cog
                size={38} // Adjusted size
                className={`${pathname === "/settings" ? "text-indigo-800" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
