import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { navLinks, navSocial } from './assets/navlinks';

const NavBar = () => {
  const navLinksRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);

  const toggleNav = () => {
    setShowLinks(!showLinks);
  };

  // Version-1 using classList and max-height property

  // useEffect(() => {
  //   if (showLinks) {
  //     navLinksRef.current.classList.add('show');
  //   } else {
  //     navLinksRef.current.classList.remove('show');
  //   }
  // }, [showLinks]);

  // Version-2 initial height 0 and using scrollHeight to set the height;

  useEffect(() => {
    if (showLinks) {
      navLinksRef.current.style.height = `${navLinksRef.current.scrollHeight}px`;
    } else {
      navLinksRef.current.style.height = 0;
    }
  }, [showLinks]);

  // Version-3 using getBoundingClientRect() to get the height of the element
  // please note having to use a parent container to determine the links height otherwise it will default to zero

  // useEffect(() => {
  //   const linksContainerHeight =
  //     navLinksRef.current.getBoundingClientRect().height;
  //   console.log(linksContainerHeight);

  //   if (showLinks) {
  //     navLinksRef.current.style.height = `${linksContainerHeight}px`;
  //   } else {
  //     navLinksRef.current.style.height = '0px';
  //   }
  // }, [showLinks]);

  const links = navLinks.map((link) => (
    <li key={link.id}>
      <a
        className='block py-1 px-2 border border-[#f2f2f2] rounded-md capitalize hover:bg-[#ccc] md:p-2 md:border-0 transition-all duration-[0.2s] ease-out'
        href={link.url}
      >
        <span className='block hover:translate-x-[5px] transition-all duration-[0.2s] ease-out md:hover:translate-x-[0px]'>
          {link.text}
        </span>
      </a>
    </li>
  ));

  const socials = navSocial.map((link) => (
    <a key={link.id} href={link.url} rel='noreferrer'>
      {link.icon}
    </a>
  ));

  return (
    <nav className='px-8 py-4 flex flex-col justify-between md:flex-row md:items-center shadow-md'>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-2xl'>Logo</h3>
        <button
          className='bg-[#242424] px-2 py-2 rounded md:hidden border text-white hover:bg-[#f5f5f5] hover:text-black hover:border hover:border-black transition ease-linear duration-[0.2s]'
          onClick={toggleNav}
        >
          <FaBars className='text-xl' />
        </button>
      </div>

      <div className='nav-links flex md:!h-auto' ref={navLinksRef}>
        <ul className='flex flex-1 flex-col space-y-3 pt-6 text-[0.98rem] font-bold text-gray-700 md:flex-row md:space-y-0 md:space-x-8 md:pt-0'>
          {links}
        </ul>
      </div>

      <div className='social-links hidden md:flex'>
        <ul className='flex space-x-2 text-[1.4rem] text-gray-700'>
          {socials}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
