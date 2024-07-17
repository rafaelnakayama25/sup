'use client'
 
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Bolt, CalendarDays, Settings, Smile, Wind } from "lucide-react";
import Link from "next/link";

export default function MobileNavBar() {
    const pathname = usePathname();
  return (
    <NavigationMenu className='h-20'>
      <NavigationMenuList className="p-4 fixed bottom-0 w-full z-50 justify-around bg-zinc-50">
        <NavigationMenuItem>
          <Link href="/meditation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Wind size={40} className={`${pathname === '/meditation' ? 'text-primary' : ''}`}/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/emotional" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Smile size={40} className={`${pathname === '/emotional' ? 'text-primary' : ''}`}/>
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
              <Settings size={40} className={`${pathname === '/dsadsa' ? 'text-primary' : ''}`}/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
