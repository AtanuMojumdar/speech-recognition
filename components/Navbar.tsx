import {NavigationMenuDemo} from '@/components/Navigation';
import {DropdownMenuDemo}  from '@/components/DropDown';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="p-4">
        <div className='flex items-center gap-12 md:justify-start justify-between'>
            <Link href='/' className="text-2xl font-extralight">Speech Recognition</Link>
            <span className='md:block hidden'><NavigationMenuDemo/></span>
            <span className=' block md:hidden'>
              <DropdownMenuDemo/>
            </span>
        </div>
        
    </nav>
  )
}

export default Navbar