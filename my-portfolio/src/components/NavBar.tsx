import React from 'react';
import { useRouter } from 'next/router';
import { Button } from './ui/button';
import Link from 'next/link';
import {NavItem} from './constants/NavItem';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Link as ScrollLink } from 'react-scroll';
import Contact from './Contact';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const NavBar = () => {

    const { setTheme } = useTheme()
    const router = useRouter();
    const isActive = (path: string) => router.pathname === path;


  return (
    <nav className= 'flex justify-between p-4 w-full bg-secondary '>
      <Link href={"/"} className='text-4xl font-semibold ml-4'>
        ken.y
      </Link>
      <div className='flex gap-5 text-xl'>
        <ScrollLink to="home-section" smooth={true} duration={500} href={NavItem.Home}>
          <Button variant={'ghost'}>Home</Button>
        </ScrollLink>
        <ScrollLink to="about-section" smooth={true} duration={500}>
          <Button variant={'ghost'}>About</Button>
        </ScrollLink>
        <ScrollLink to="project-section" smooth={true} duration={500}>
          <Button variant={'ghost'}> Projects</Button>
        </ScrollLink>
        <ScrollLink to="contact-section" smooth={true} duration={500}>
          <Button variant={'ghost'}>Contact</Button>
        </ScrollLink>


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
      
    


    </nav>
  );
};

export default NavBar;
