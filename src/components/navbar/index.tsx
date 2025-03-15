"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    let lastScrollTop = 0;
    
    const toggleNavbar = (): void => {
        setIsClicked(prevState => !prevState);
    };

    const closeNavbar = (): void => {
        setIsClicked(false);
    };

    const handleScroll = (): void => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        {name:"Home",url:"#home"},
        {name:"About",url:"#about"},
        {name:"Experience",url:"#experience"},
        {name:"Skills",url:"#skills"},
        {name:"Portfolio",url:"#portfolio"},
        {name:"Contact",url:"#contact"},
    ];


    return (
        <nav className={`bg-mycolor4 fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link className="text-mycolor2 text-xl" href="#">
                                <p><span className="font-bold text-mycolor1">Nahl</span>Bee</p>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            {links.map(({ name, url }) => (
                                <a key={name} className="text-mycolor2 hover:bg-mycolor2 hover:text-mycolor4 rounded-lg p-2" href={url}>{name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button 
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                            onClick={toggleNavbar}
                            aria-label="Toggle navigation"
                        >
                            {isClicked ? 
                                <svg  className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                                </svg> :  
                                <svg  className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>}
                        </button>
                    </div>
                </div>
            </div>
            {isClicked && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {links.map(({ name, url }) => (
                            <Link key={name} className="block ml-4 w-28 text-mycolor2 hover:bg-mycolor2 hover:text-mycolor4 rounded-lg p-2" href={url} onClick={closeNavbar}>{name}</Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
};
