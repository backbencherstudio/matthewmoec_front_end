// "use client";
// import React, { useState, useEffect } from "react";
// import Container from "../ui/Container";
// import LanguageToggle from "../ui/LanguageToggle";

// // NavItems array of objects with proper typing
// interface NavItem {
//   name: string;
//   href: string;
// }

// const navItems: NavItem[] = [
//   { name: "Home", href: "#home" },
//   { name: "How it Works", href: "#/how-it-works" },
//   { name: "Charity", href: "#charity" },
//   { name: "Receipts", href: "#receipts" },
//   { name: "About", href: "#about" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent): void => {
//       const menu = document.getElementById("mobile-menu");
//       const hamburger = document.getElementById("hamburger-button");
      
//       if (menuOpen && menu && !menu.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [menuOpen]);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [menuOpen]);

//   // Handle smooth scroll
//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <Container>
//       <div
//         className="mt-8 rounded-full relative"
//         style={{ background: "linear-gradient(to bottom, #D6DFFD, #F3F6FF)" }}
//       >
//         <div className="p-4 md:p-6">
//           {/* Navbar content */}
//           <div className="flex justify-between items-center">
//             {/* Left section: Logo and Name */}
//             <div className="flex items-center space-x-2 h-9">
//               <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
//               <span className="text-lg md:text-xl font-semibold">CartForGood</span>
//             </div>

//             {/* Middle section: Navigation Links */}
//             <div className="hidden lg:flex space-x-4 xl:space-x-6 h-5.5">
//               {navItems.map((item: NavItem) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="text-base xl:text-lg hover:text-blue-500 capitalize duration-300 transition-colors"
//                   onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>

//     <div className="flex ">
//               {/* Right section: Language Toggle and Download Button */}
//             <div className="flex items-center gap-3 md:gap-4">
//               <div className="hidden md:block">
//                 <LanguageToggle />
//               </div>
//               <button className="hidden md:block px-6 py-2 md:px-8 md:py-3 rounded-[30px] bg-gradient-to-b from-[#395CBC] to-[#1A2A56] text-white opacity-100 hover:opacity-90 transition-opacity text-sm md:text-base whitespace-nowrap">
//                 Download
//               </button>
//             </div>

//             {/* Hamburger Menu for Mobile */}
//             <div className="lg:hidden flex items-center">
//               <button
//                 id="hamburger-button"
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="text-2xl md:text-3xl p-2 focus:outline-none z-50 relative"
//                 aria-label="Toggle menu"
//               >
//                 {menuOpen ? "✖" : "☰"}
//               </button>
//             </div>
//     </div>

//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
//           menuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => setMenuOpen(false)}
//       />

//       {/* Mobile Menu - Slides from right to left */}
//       <div
//         id="mobile-menu"
//         className={`lg:hidden fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl z-50 transition-transform duration-500 ease-out transform ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{
//           boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.15)",
//         }}
//       >
//         {/* Menu Header */}
//         <div className="p-6 border-b border-gray-100">
//           <div className="flex items-center space-x-2">
//             <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
//             <span className="text-xl font-semibold bg-gradient-to-r from-[#395CBC] to-[#1A2A56] bg-clip-text text-transparent">
//               CartForGood
//             </span>
//           </div>
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-6 text-2xl text-gray-500 hover:text-gray-700 transition-colors"
//             aria-label="Close menu"
//           >
//             ✖
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col p-6 space-y-4">
//           {navItems.map((item: NavItem, index: number) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 capitalize"
//               style={{
//                 animation: menuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : "none",
//                 opacity: 0,
//                 transform: "translateX(20px)",
//               }}
//               onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
//           <div className="space-y-3">
//             <div className="block md:hidden">
//               <LanguageToggle />
//             </div>
//             <button className="w-full py-3 rounded-[30px] bg-gradient-to-b from-[#395CBC] to-[#1A2A56] text-white hover:opacity-90 transition-opacity">
//               Download
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Add animation styles */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default Navbar;






// "use client";
// import React, { useState, useEffect } from "react";
// import Container from "../ui/Container";
// import LanguageToggle from "../ui/LanguageToggle";

// // NavItems array of objects with proper typing
// interface NavItem {
//   name: string;
//   href: string;
// }

// const navItems: NavItem[] = [
//   { name: "Home", href: "#home" },
//   { name: "How it Works", href: "#/how-it-works" },
//   { name: "Charity", href: "#charity" },
//   { name: "Receipts", href: "#receipts" },
//   { name: "About", href: "#about" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent): void => {
//       const menu = document.getElementById("mobile-menu");
//       const hamburger = document.getElementById("hamburger-button");
      
//       if (menuOpen && menu && !menu.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [menuOpen]);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [menuOpen]);

//   // Handle smooth scroll
//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <Container>
//       <div
//         className="mt-4 md:mt-6 lg:mt-8 rounded-full relative mx-2 md:mx-0"
//         style={{ background: "linear-gradient(to bottom, #D6DFFD, #F3F6FF)" }}
//       >
//         <div className="p-3 md:p-4 lg:p-6">
//           {/* Navbar content */}
//           <div className="flex justify-between items-center">
//             {/* Left section: Logo and Name */}
//             <div className="flex items-center space-x-1 md:space-x-2 h-7 md:h-8 lg:h-9">
//               <img src="/logo.png" alt="Logo" className="h-6 w-auto md:h-7 lg:h-8" />
//               <span className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold whitespace-nowrap">CartForGood</span>
//             </div>

//             {/* Middle section: Navigation Links */}
//             <div className="hidden lg:flex space-x-3 xl:space-x-4 2xl:space-x-6">
//               {navItems.map((item: NavItem) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="text-sm xl:text-base 2xl:text-lg hover:text-blue-500 capitalize duration-300 transition-colors whitespace-nowrap"
//                   onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>

//             <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
//               {/* Right section: Language Toggle and Download Button */}
//               <div className="hidden md:block">
//                 <LanguageToggle />
//               </div>
//               <button className="hidden md:block px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3 rounded-[30px] bg-gradient-to-b from-[#395CBC] to-[#1A2A56] text-white opacity-100 hover:opacity-90 transition-opacity text-xs md:text-sm lg:text-base whitespace-nowrap">
//                 Download
//               </button>

//               {/* Hamburger Menu for Mobile */}
//               <div className="lg:hidden flex items-center">
//                 <button
//                   id="hamburger-button"
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="text-xl md:text-2xl p-1.5 md:p-2 focus:outline-none z-50 relative"
//                   aria-label="Toggle menu"
//                 >
//                   {menuOpen ? "✖" : "☰"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
//           menuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => setMenuOpen(false)}
//       />

//       {/* Mobile Menu - Slides from right to left */}
//       <div
//         id="mobile-menu"
//         className={`lg:hidden fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 bg-white shadow-2xl z-50 transition-transform duration-500 ease-out transform ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{
//           boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.15)",
//         }}
//       >
//         {/* Menu Header */}
//         <div className="p-4 md:p-6 border-b border-gray-100">
//           <div className="flex items-center space-x-2">
//             <img src="/logo.png" alt="Logo" className="h-7 w-auto md:h-8" />
//             <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#395CBC] to-[#1A2A56] bg-clip-text text-transparent">
//               CartForGood
//             </span>
//           </div>
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-4 md:top-6 right-4 md:right-6 text-xl md:text-2xl text-gray-500 hover:text-gray-700 transition-colors"
//             aria-label="Close menu"
//           >
//             ✖
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col p-4 md:p-6 space-y-2 md:space-y-4">
//           {navItems.map((item: NavItem, index: number) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block py-2.5 md:py-3 px-3 md:px-4 text-base md:text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 capitalize"
//               style={{
//                 animation: menuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : "none",
//                 opacity: 0,
//                 transform: "translateX(20px)",
//               }}
//               onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 border-t border-gray-100">
//           <div className="space-y-3">
//             <div className="block md:hidden">
//               <LanguageToggle />
//             </div>
//             <button className="w-full py-2.5 md:py-3 rounded-[30px] bg-gradient-to-b from-[#395CBC] to-[#1A2A56] text-white hover:opacity-90 transition-opacity text-sm md:text-base">
//               Download
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Add animation styles */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default Navbar;











"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import LanguageToggle from "../ui/LanguageToggle";

// NavItems array of objects with proper typing
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Charity", href: "/charity" },
  { name: "Receipts", href: "#receipts" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const menu = document.getElementById("mobile-menu");
      const hamburger = document.getElementById("hamburger-button");

      if (
        menuOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        !hamburger?.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Handle smooth scroll only for hash links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      setMenuOpen(false);
    }
  };

  return (
     <div className="sticky top-0 z-50">
    <Container>
     
      <div
        className="mt-4 md:mt-6 lg:mt-8 rounded-full relative mx-2 md:mx-0"
        style={{ background: "linear-gradient(to bottom, #D6DFFD, #F3F6FF)" }}
      >
        <div className="p-3 md:p-4 lg:p-6">
          {/* Navbar content */}
          <div className="flex justify-between items-center">
            {/* Left section: Logo and Name */}
            <div className="flex items-center space-x-1 md:space-x-2 h-7 md:h-8 lg:h-9">
              <img src="/logo.png" alt="Logo" className="h-6 w-auto md:h-7 lg:h-8" />
              <span className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold whitespace-nowrap">
                CartForGood
              </span>
            </div>

            {/* Middle section: Navigation Links */}
            <div className="hidden lg:flex space-x-3 xl:space-x-4 2xl:space-x-6">
              {navItems.map((item: NavItem) => {
                if (item.href.startsWith("#")) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm xl:text-base 2xl:text-lg hover:text-blue-500 capitalize duration-300 transition-colors whitespace-nowrap"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                        handleNavClick(e, item.href)
                      }
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm xl:text-base 2xl:text-lg hover:text-blue-500 capitalize duration-300 transition-colors whitespace-nowrap"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
              {/* Right section: Language Toggle and Download Button */}
              <div className="hidden md:block">
                <LanguageToggle />
              </div>
              <button className="hidden md:block px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3 rounded-[30px] bg-gradient-to-b from-[#395CBC] to-[#1A2A56] text-white opacity-100 hover:opacity-90 transition-opacity text-xs md:text-sm lg:text-base whitespace-nowrap">
                Download
              </button>

              {/* Hamburger Menu for Mobile */}
              <div className="lg:hidden flex items-center">
                <button
                  id="hamburger-button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-xl md:text-2xl p-1.5 md:p-2 focus:outline-none z-50 relative"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? "✖" : "☰"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu - Slides from right to left */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 bg-white shadow-2xl z-50 transition-transform duration-500 ease-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Menu Header */}
        <div className="p-4 md:p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-7 w-auto md:h-8" />
            <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#395CBC] to-[#1A2A56] bg-clip-text text-transparent">
              CartForGood
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 md:top-6 right-4 md:right-6 text-xl md:text-2xl text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close menu"
          >
            ✖
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-4 md:p-6 space-y-2 md:space-y-4">
          {navItems.map((item: NavItem, index: number) => {
            const commonClassName =
              "block py-2.5 md:py-3 px-3 md:px-4 text-base md:text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 capitalize";

            const commonStyle = {
              animation: menuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : "none",
              opacity: 0,
              transform: "translateX(20px)",
            };

            if (item.href.startsWith("#")) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={commonClassName}
                  style={commonStyle}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleNavClick(e, item.href)
                  }
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={commonClassName}
                style={commonStyle}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 border-t border-gray-100">
          <div className="space-y-3">
            <div className="block md:hidden">
              <LanguageToggle />
            </div>
            <button className="w-full py-2.5 md:py-3 rounded-[30px] bg-linear-to-b from-[#395CBC] to-[#1A2A56] text-white hover:opacity-90 transition-opacity text-sm md:text-base">
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

     
    </Container>
     </div>
  );
};

export default Navbar;