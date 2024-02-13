import {
    User,
    Info
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import { GiHamburgerMenu } from "react-icons/gi";

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";
  
  export function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
          <GiHamburgerMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Members</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link className="flex" href='https://www.linkedin.com/in/atanu-mojumdar-b4629821a'>
              <User className="mr-2 h-4 w-4" />
              <span>Atanu Mojumdar</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link className="flex" href='https://www.linkedin.com/in/prathamesh-vitthalwad-a70820213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <User className="mr-2 h-4 w-4" />
              <span>Prathmesh Vitthalwad</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link className="flex" href='https://www.linkedin.com/in/nayan-kohare-607146234/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <User className="mr-2 h-4 w-4" />
              <span>Nayan Kohare</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link className="flex" href='https://www.linkedin.com/in/atharva-bhusange-08848b26a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <User className="mr-2 h-4 w-4" />
              <span>Atharva Bhusange</span>
              </Link>
            </DropdownMenuItem>

          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
            <Info className="mr-2 h-4 w-4" />
              <Link href='https://pcenagpur.edu.in/'>PCE</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  