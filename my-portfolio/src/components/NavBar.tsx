import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { NavItem } from '@/pages/constants/NavItem';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const NavBar = () => {

    const { setTheme } = useTheme()


  return (
    <div className= 'justify-between flex sticky top-0 py-5 shadow-lg backdrop-blur-md'>
      <Link href={"/"} className='text-4xl font-semibold ml-4'>
        ken.y
      </Link>
      <div className='flex gap-5 text-xl'>
        <Link href={NavItem.Home}>
          <Button variant={'ghost'}>Home</Button>
        </Link>
        <Link href={NavItem.About}>
          <Button variant={'ghost'}>About</Button>
        </Link>
        <Link href={NavItem.Projects}>
          <Button variant={'ghost'}> Projects</Button>
        </Link>
        <Link href={NavItem.Contact}>
          <Button variant={'ghost'}>Contact</Button>
        </Link>

        <div className="mr-5">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                System
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
      </div>
      </div>
      
    


    </div>
  );
};

export default NavBar;
