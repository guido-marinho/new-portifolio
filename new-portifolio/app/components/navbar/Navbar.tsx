'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar()  {

  const  path  = usePathname();

  
  return (
    <nav className='nav-container'>
      <Link href='/' className='links-main'>
        <h3
          className={`h3-nav ${path === '/' ? 'active' : ''}`}>
              Feed</h3>
      </Link>
      <Link href='/about' className='links-main'>
        <h3 
          className={`h3-nav ${path === '/about' ? 'active' : ''}`} >
                Sobre mim
        </h3>
      </Link>
      <Link href='/projects' className='links-main'>
        <h3 
          className={`h3-nav ${path === '/projects' ? 'active' : ''}`}>
                Projetos
        </h3>
      </Link>
      <Link href='/contact' className='links-main'>
        <h3 
          className={`h3-nav ${path === '/contact' ? 'active' : ''}`}>
              Contato
        </h3>
      </Link>
    </nav>
  );
}