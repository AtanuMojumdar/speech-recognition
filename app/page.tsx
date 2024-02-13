import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Home = () => {
  return (
    <>

      <div className='md:mt-28 mt-20 scale-up-center'>
        <h1 className='md:text-6xl text-5xl font-bold text-center'>Speech Recognition</h1>
        <p className='text-center text-gray-400 mt-4 md:w-[30%] w-[90%] mx-auto'>&quot;Empower Your Voice, Transform Your World: Welcome to Seamless Speech Recognition&quot;</p>

        <div className='flex justify-center mt-8'>
          <Button asChild className='hover:shadow-lg'>
            <Link href="/speak">Start Speaking</Link>
          </Button>
        </div>
      </div>


    </>
  )
}

export default Home