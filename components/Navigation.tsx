"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import {
  Info,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Atanu Mojumdar",
    href: "https://www.linkedin.com/in/atanu-mojumdar-b4629821a",
    description:
      "Web Dev",
  },
  {
    title: "Prathmesh Vitthalwad",
    href: "https://www.linkedin.com/in/prathamesh-vitthalwad-a70820213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description:
      "Android Dev",
  },
  {
    title: "Nayan Kohare",
    href: "https://www.linkedin.com/in/nayan-kohare-607146234/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description:
      "Frontend Dev",
  },
  {
    title: "Atharva Bhusange",
    href: "https://www.linkedin.com/in/atharva-bhusange-08848b26a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description: "Frontend Dev",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Introduction</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-6 md:w-[300px] lg:w-[300px] ">
              <p className="text-base flex items-center">
                Introduction
              </p>
              <li className="text-gray-400 text-sm">
                This project <span className="underline underline-offset-1">recognizes</span>  audio and <span className="underline underline-offset-1">converts</span> it into text.
                </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Members</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[400px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/speak" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()+" underline underline-offset-2"}>
            Get Started
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
