'use client'

import Image from 'next/image';

import { HiCake } from "react-icons/hi";
import { ImLinkedin, ImWhatsapp } from 'react-icons/im';
import { IoIosLink, IoMdCalendar } from "react-icons/io";
import { IoBag } from "react-icons/io5";

import cover from '../images/cover.png';
import verifyIcon from '../images/icons/verify.png';
import profile from '../images/profile.png';

export default function Header() {

  const openLinkedin = () => {
    const link = 'https://www.linkedin.com/in/guilhermegattimarinho/';
    window.open(link, '_blank');
  };

  const openWpp = () => {
    const link = 'https://wa.me/+5535999423364';
    window.open(link, '_blank');
  };

  return (
    <header>
      <div className="cover">
          <Image
          src={cover}
          alt="Guilherme Marinho"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="container">

        <section className="header-level-1">
          <Image
          src={profile}
          alt="Guilherme Marinho"
          width={50}
          height={50}
          className="rounded-full"
        />
          <button onClick={openLinkedin}><ImLinkedin/></button>
          <button onClick={openWpp}><ImWhatsapp/></button>
        </section>

        <section className="header-level-2">
          <div className="header-title">
            <h1>Guilherme Marinho</h1>
            <Image
              src={verifyIcon}
              alt="Guilherme Marinho"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p>Desenvolvedor Fullstack</p>
        </section>

        <section className="header-icons">
          <p className="icon">
            <IoBag />
            <span>Disponível</span>
          </p > 
          <p className="icon">
            <IoIosLink />
            <span>/links</span>
          </p >
          <p className="icon">
            <HiCake />
            <span>julho 15th</span>
          </p >
          <p className="icon">
            <IoMdCalendar />
            <span>fev 2023</span>
          </p>
        </section>
      </div>
    </header>
  )
}
