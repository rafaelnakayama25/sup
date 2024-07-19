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
      <NavigationMenuList className="h-20 p-4 fixed bottom-0 w-full z-50 justify-around items-center bg-white border-t-2 from-sky-300 via-indigo-300 to-violet-400">
        <NavigationMenuItem>
          <Link href="/meditation" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center bg-indigo-500 text-white px-2 `}
            >
              <Icon
                iconNode={flowerLotus}
                size={38} // Adjusted size
                className={`${pathname === "/meditation" ? "text-primary" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/emotional" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center text-gray-500`}
            >
              <NotebookPen
                size={38} // Adjusted size
                className={`${pathname === "/emotional" ? "text-primary" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/schedule" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center text-gray-500`}
            >
              <CalendarDays
                size={38} // Adjusted size
                className={`${pathname === "/schedule" ? "text-primary" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/settings" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-14 w-14 flex items-center justify-center`}
            >
              <Cog
                size={38} // Adjusted size
                className={`${pathname === "/settings" ? "text-primary" : ""}`}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
