"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
export default function AboutContent() {

    const xsQuery = window.matchMedia("(width < 40rem)");
    const smQuery = window.matchMedia("(width >= 40rem) and (width < 48rem)"); // Corrected for ranges
    const mdQuery = window.matchMedia("(width >= 48rem) and (width < 64rem)"); // Corrected for ranges
    const lgQuery = window.matchMedia("(width >= 64rem)");
    // 1. State to store the current breakpoint
    const [currentBreakpoint, setCurrentBreakpoint] = useState(getInitialBreakpoint());

    // Helper to determine the breakpoint based on current matches
    function getInitialBreakpoint() {
        if (lgQuery.matches) {
            return "lg";
        } else if (mdQuery.matches) {
            return "md";
        } else if (smQuery.matches) {
            return "sm";
        } else if (xsQuery.matches) {
            return "xs";
        }
        return "unknown"; // Fallback
    }

    // 2. useEffect to manage event listeners (runs once on mount, cleans on unmount)
    useEffect(() => {
        const handleMediaQueryChange = () => {
            // Update the React state, which triggers a re-render of the component
            setCurrentBreakpoint(getInitialBreakpoint());
        };

        // Add listeners
        xsQuery.addEventListener('change', handleMediaQueryChange);
        smQuery.addEventListener('change', handleMediaQueryChange);
        mdQuery.addEventListener('change', handleMediaQueryChange);
        lgQuery.addEventListener('change', handleMediaQueryChange);

        // Cleanup function: removes listeners when component unmounts
        return () => {
            xsQuery.removeEventListener('change', handleMediaQueryChange);
            smQuery.removeEventListener('change', handleMediaQueryChange);
            mdQuery.removeEventListener('change', handleMediaQueryChange);
            lgQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []); // Empty dependency array: runs only on mount/unmount

    // 3. useEffect to apply DOM changes, depending on the React state
    useEffect(() => {
        console.log("useEffect for height called. Current breakpoint:", currentBreakpoint);
        const wrapper = document.querySelector('.background-gradient');

        if (!wrapper) {
            console.warn("Wrapper element '.background-gradient' not found.");
            return;
        }

        setTimeout(() => {
        const height = document.querySelectorAll(".bg-teal-950")[1].scrollHeight;

        console.log("height: ", height)
        wrapper.style.height = `calc(${height}px + 10rem)`
        console.log("wrapper.style.height: ", wrapper.style.height)
        }, 0)
    })
    return (
        <>
            {/* dark teal section with information about me */}
            <div className='relative top-8'>
                <div className='absolute top-1/5 -translate-x-1/2 left-1/2 h-265 md:h-175 w-75 md:w-190 sm:w-150 sm:h-150 rounded-lg bg-teal-950 sm:grid sm:grid-cols-2'>
                    {/* my profile picture */}
                    <img src="/profile-pic.jpg" className='p-4'></img>

                    {/* my name and field of study */}
                    <div className='sm:m-4 mx-4 mt-0 mb-2'>
                        <p className='text-white font-bold md:text-[90px] sm:text-[70px] text-[35px] sm:leading-none'>HENRY SWAIN</p>
                        <p className='text-white font-thin md:text-[36px] sm:text-[26px] text-[26px] pt-1 md:pt4'>Informatics (media) student at the University of Iowa minoring in Computer Science</p>
                    </div>
                    <hr className='col-span-2 text-white mx-4 mb-2'></hr>

                    {/* breaf bio */}
                    <p className='col-span-2 text-white sm:text-sm md:text-md mx-4 sm:mb-2 mb-3'>
                        As an Informatics student, I'm hoping for a career in web or software development 
                        after graduation.​ I'm usually swamped with school work, but when I have a little bit
                         of free time, I like to get outside and take pictures of birds.
                    </p>
                    <p className='col-span-2 text-white sm:text-sm md:text-md mx-4 mb-2'>
                        My dad (a retired high school science teacher) is writing a book about the ways
                         of knowing. My mom works as a Title 1 reading teacher, and my brother has moved out
                          and does landscaping work in Idaho. Finally, my dog Lola (yellow lab)
                           is wild and crazy, but loving.
                    </p>
                </div>
            </div>
        </>
    )
}