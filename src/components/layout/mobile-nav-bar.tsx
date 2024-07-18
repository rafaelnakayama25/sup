'use client'
 
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {CalendarDays, Cog, NotebookPen, Scale, Settings} from "lucide-react";
import { flowerLotus } from '@lucide/lab';
import { Icon } from "lucide-react";
import Link from "next/link";

export default function MobileNavBar() {
    const pathname = usePathname();
  return (
    <NavigationMenu className='h-20'>
      <NavigationMenuList className="p-4 fixed bottom-0 w-full z-50 justify-around bg-zinc-50">
        <NavigationMenuItem>
          <Link href="/meditation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Icon iconNode={flowerLotus} size={40} className={`${pathname === '/meditation' ? 'text-primary' : ''}`}/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/emotional" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <NotebookPen size={40} className={`${pathname === '/emotional' ? 'text-primary' : ''}`}/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <CalendarDays size={40} className={`${pathname === '/dasd' ? 'text-primary' : ''}`}/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Cog size={40} className={`${pathname === '/dsadsa' ? 'text-primary' : ''}`}/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
