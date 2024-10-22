import Image from 'next/image'
import horselogo from "../public/horseLogo.jpg"
import { Socials } from '@/constants'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='relative'>
            <Image 
            src={horselogo}
            alt='logo'
            width={40}
            height={40}
            className='w-full h-full rounded-full object-contain '
            />
        </div>
        <h1 className='text-white text-[25px] font-semibold'>Webchain dev</h1>
      </div>

      <div className='flex flex-row mb-2 gap-5'>
        {Socials.map((social) =>(
            <Image 
            key={social.name}
            src={social.src}
            alt= {social.name}
            width={28}
            height={28}
            />
        ))}
      </div>
    </div>
  )
}

export default Navbar
