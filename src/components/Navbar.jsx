import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  const navbarClasses = `
    w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
    ${scrolled ? 'bg-gradient-to-r from-white to-orange-500 shadow-lg py-3' : 'bg-transparent py-5'}
  `;


  const mobileMenuClasses = `
    fixed top-0 left-0 h-full w-full bg-white transition-transform duration-300 ease-in-out z-40
    transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `;

  return (
    <>
     
      <nav className={navbarClasses}>
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
     
          {/* <a
            href="/"
            className={`font-extrabold text-2xl md:text-3xl bg-clip-text text-transparent
              ${scrolled ? 'bg-gradient-to-r from-gray-700 to-gray-900' : 'bg-gradient-to-r from-gray-700 to-gray-900'}`}
          >
            Computer Town
          </a> */}
  
<a
  href="/"
  className={`font-extrabold text-2xl md:text-3xl bg-clip-text text-transparent
    ${scrolled ? 'from-indigo-600 to-purple-800' : 'from-gray-700 to-gray-900'}
    bg-gradient-to-r
    gradient-transition`} // The custom class handles the transition
>
  Computer Town
</a>

          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 text-white">
            <li><a href="#" className="hover:text-gray-200 transition-colors duration-300">Home</a></li>
            <li><a href="#brands" className="hover:text-gray-200 transition-colors duration-300">Laptops</a></li>
            <li><a href="#services" className="hover:text-gray-200 transition-colors duration-300">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-200 transition-colors duration-300">Contact</a></li>
            <li><a href="#about" className="hover:text-gray-200 transition-colors duration-300">About</a></li>
          </ul>
        </div>
      </nav>

   
      <div className={mobileMenuClasses}>
        <div className="p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 absolute top-4 right-4 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col space-y-4 text-gray-800 text-lg mt-16">
            <li><a href="#/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#brands" onClick={() => setIsMenuOpen(false)}>Laptops</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // ✅ import Link

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navbarClasses = `
//     w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
//     ${scrolled ? "bg-gradient-to-r from-white to-orange-500 shadow-lg py-3" : "bg-transparent py-5"}
//   `;

//   const mobileMenuClasses = `
//     fixed top-0 left-0 h-full w-full bg-white transition-transform duration-300 ease-in-out z-40
//     transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
//   `;

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className={navbarClasses}>
//         <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="font-extrabold text-2xl md:text-3xl bg-clip-text text-transparent
//               bg-gradient-to-r from-gray-700 to-gray-900"
//           >
//             Computer Town
//           </Link>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 focus:outline-none"
//             >
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Links */}
//           <ul className="hidden md:flex space-x-8 text-white">
//             <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
//             <li><Link to="/products" className="hover:text-gray-200">Laptops</Link></li>
//             <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
//             <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div className={mobileMenuClasses}>
//         <div className="p-6">
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="text-gray-700 absolute top-4 right-4 focus:outline-none"
//           >
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <ul className="flex flex-col space-y-4 text-gray-800 text-lg mt-16">
//             <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//             <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Laptops</Link></li>
//             <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
//             <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
