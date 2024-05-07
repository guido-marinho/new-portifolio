'use client'

import Image from 'next/image';

import { HiCake } from "react-icons/hi";
import { ImLinkedin, ImWhatsapp } from 'react-icons/im';
import { IoIosLink, IoMdCalendar } from "react-icons/io";
import { IoBag } from "react-icons/io5";

import Link from 'next/link';
import { MdVerified } from 'react-icons/md';
import cover from '../images/cover.png';
import profile from '../images/profile.png';

export default function Header() {

  const pink = '#cc0088';

  const openLinkedin = () => {
    const link = 'https://www.linkedin.com/in/guilhermegattimarinho/';
    window.open(link, '_blank');
  };

  const openWpp = () => {
    const link = 'https://wa.me/+5535999423364';
    window.open(link, '_blank');
  };

  return (
    <header className=" flex flex-col mt-3">
      <div className="w-full rounded-md">
          <Image
          src={cover}
          alt="Guilherme Marinho"
          width={600}
          height={100}
          className='rounded-md'
        />
      </div>
      <div >

        <section className="flex justify-between relative">
          <Image
          src={profile}
          alt="Guilherme Marinho"
          width={110}
          height={110}
          className="rounded-full absolute -top-3/4 border-4 border-white mx-3"
        />
        <div className='w-30 flex gap-5 justify-end w-full p-5'
        >
          <button 
            onClick={openLinkedin}
          >
            <ImLinkedin color={pink}size={30}/>
          </button>
          <button 
            onClick={openWpp}
          >
            <ImWhatsapp color={pink} size={30}/>
          </button>
        </div>
        </section>

        <section className="flex-col mx-3">
          <div className="flex justify-start gap-2 items-center mt-1">
            <h1 className=' text-2xl font-extrabold'>Guilherme Marinho</h1>
            <MdVerified color={pink} size={20}/>
          </div>
          <p className='font-light m-1'>Desenvolvedor de Software</p>
        </section>

        <section className="flex justify-between mt-5 mx-3">
          <p className="flex gap-2 items-center" >
            <IoBag color='grey'/>
            <span>Disponível</span>
          </p > 
          <p className="flex gap-2 items-center">
            <IoIosLink color={pink}/>
            <Link href='/links' className='text-custom-pink'>/links</Link>
          </p >
          <p className="flex gap-2 items-center">
            <HiCake color='grey'/>
            <span>julho 15th</span>
          </p >
          <p className="flex gap-2 items-center">
            <IoMdCalendar color='grey'/>
            <span>fev 2023</span>
          </p>
        </section>
      </div>
    </header>
  )
}
