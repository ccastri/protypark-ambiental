'use client'
import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { Mail, MailOutline, PhoneIphone } from '@mui/icons-material';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter()
  const currentPath= usePathname()
  const getMenuOptions = () => {
    // switch (currentPath) {
      // case '/':
            return [

              
                
            {
              label: 'Home',
              path: '/',
              items: [
              { label: 'Nuestros Sistemas', section: '/#graphics' },
              { label: 'Nuestras Cepas', section: '/#strains' },
              { label: 'Nuestros Servicios', section: '/#services' },
              { label: 'Sobre Nosotros', section: '/#about' },
              { label: 'Productos', section: '/#products' },
              { label: 'Contáctanos', section: '/#contact-form' }
            ]
          },
        // ];
      // case '/projects/shareflow':
        // return [
          {
            label:'Proyectos', 
            path: '/projects/shareflow',
            items: [
              { label: 'Paradero autosostenible', section: '/projects/shareflow/#busstop' }, // Opción para volver a la página de inicio
              { label: 'Hacer un reporte', section: '/projects/shareflow/#report' },
              { label: 'Nuestra iniactiva', section: '/projects/shareflow/#values' },
              { label: 'Factor tecnologico', section: '/projects/shareflow/#tech' }
            ]
          },
          {
            label:'Productos', 
            path: '/projects/shareflow',
            items: [
              { label: 'Cultivo de Cepas', section: '/projects/shareflow/#busstop' }, // Opción para volver a la página de inicio
              { label: 'Fotobioreactores', section: '/projects/shareflow/#report' },
              { label: 'Lamparas reductoras de CO2', section: '/projects/shareflow/#values' },
              { label: 'Comprimidos y derivados', section: '/projects/shareflow/#tech' }
            ]
          }
        ]
        
      };
  // let currentPosition= 0
  const handleHomeMenuClick = () => {
    setIsOpen(!isOpen);

    // Verifica si el usuario está en la página principal
    if (location.pathname === '/') {
      scrollToSection('home');
    } else {
      // Si no está en la página principal, redirige al path raíz
      router.push('/');
    }
  };
  const handleScroll = () => {
    const currentPosition = window.scrollY;
   const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const newPosition = (currentPosition / totalHeight) * 100; // Calculate relative position

    setScrollPosition(newPosition);
 if (currentPosition > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking
  };
  return (
    // <div className='fixed h-24'>
    <nav className={`${isScrolled && 'bg-[#f1f1f1]  '}  fixed  w-full top-0 z-50 `}>
      <div className={`${isSubMenuOpen? 'md:flex': 'hidden'} opacity-0 md:opacity-100 bg-white h-[500px] w-screen absolute -z-30 `}/>
      <div className='hidden md:flex justify-end   px-16 space-x-20 h-14 w-full  '>
      {/* <ul className={`text-center  w-screen  mx-auto items-center justify-center ${isOpen ?'flex flex-col space-y-6' :'hidden h-0'}`}> */}
      {getMenuOptions().map((menuItem: { label: string, path: string, items: { label: string, section: string }[] }, index: number) => (
    
    <div className="group   z-20 cursor-pointer py-4 relative flex flex-col space-y-8 items-center justify-between  text-center button-hovered " key={index}>
    
      <span className="text-center px-4 z-20  h-auto"  onMouseEnter={() => setIsSubMenuOpen(true)}  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>{menuItem.label}</span>
      {/* Lista de submenú */}
      <div 
      className={`${isSubMenuOpen? 'flex': 'hidden'} -z-30 absolute justify-between   items-center h-96   flex-col  mx-6 py-12 cursor-pointer`}
      onMouseEnter={() => setIsSubMenuOpen(true)}
      
      >

        {menuItem.items.map((subMenuItem, subIndex) => (
          <span
            key={subIndex}
            className='button-hovered w-full mx-4 py-2 flex-col  flex z-50  '
            onClick={() => {
              setIsOpen(false)
              setIsSubMenuOpen(false) // Close the menu
              router.push(subMenuItem.section); // Navigate to the specified route
            }}
          >
            {subMenuItem.label}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
      <div className="w-screen md:hidden right-0 flex justify-between  py-4 px-5">
        <MenuIcon className ={`${isScrolled&& ''}`}onClick={()=>setIsOpen(!isOpen)}/>
        <div className=' hidden md:block px-4 space-x-4'>
          <span><PhoneIphone/> 3103452435</span>
        <span><MailOutline/> protyparkcorreo@gmail.com</span>
        </div>
        </div>
      <div  className={`w-screen  ${
          isOpen ? 'ease-in-out h-screen flex space-y-6 opacity-100' : 'h-0 top-0 -z-50 opacity-0'
        } items-center mx-auto py-4 z-50 flex-col top-10  bg-[#fafafa] transition-all duration-200  absolute left-0 right-0`}>
        <h1 className='text-xl font-bold '>Menu</h1>
        <ul className={`text-center  w-screen  mx-auto items-center justify-center ${isOpen ?'flex flex-col space-y-6' :'hidden h-0'}`}>
        {getMenuOptions().map((menuItem: { label: string, path: string, items: { label: string, section: string }[] }, index: number) => (
          <li className="group cursor-pointer button-hovered" key={index}>
            <span  onClick={() => scrollToSection(menuItem.path)}>{menuItem.label}</span>
            {/* Lista de submenú */}
            <ul className='hidden group-hover:flex flex-col cursor-pointer '>
              {menuItem.items.map((subMenuItem, subIndex) => (
                <li key={subIndex} className='button-hovered' onClick={() => {
                  setIsOpen(!isOpen)
                  router.push(`${subMenuItem.section}`)
                  
                }
                }>{subMenuItem.label}</li>
              ))}
            </ul>
          </li>
        ))}

           
        </ul>
        {typeof window !== 'undefined' && window.location.pathname!= ('/') && <span onClick={handleHomeMenuClick}className="border-4 text-xl font-semibold md:hidden tracking-wide border-green-600 rounded-full px-4 py-3 hover:text-[#fafafa] border-2 hover:bg-slate-700 text-slate-700" >Volver a home</span>}
        <span onClick={()=>scrollToSection('contact-form')}className="border-4 text-xl font-semibold tracking-wide border-green-600 rounded-full px-4 py-3md:hidden  hover:text-[#fafafa] border-2 hover:bg-slate-700 text-slate-700" >Necesito ayuda </span>
      </div>
    <div 
     style={{ width: `${scrollPosition}%` }}
    className={`z-50  bottom-0 h-2 bg-yellow-400 `}/>
    </nav>
    // </div>
  )
}

export default Header
