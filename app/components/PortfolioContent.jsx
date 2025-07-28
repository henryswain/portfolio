"use client";

import Card from './Card'
import {useState, useEffect} from 'react'
export default function PortfolioContent() {

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

        // Apply styles based on the current breakpoint state
        if (currentBreakpoint === "md") {
            wrapper.style.height = '100vh';
        } else if (currentBreakpoint === "sm") {
            wrapper.style.height = "100vh";
        } else if (currentBreakpoint === "xs") {
            wrapper.style.height = "160vh";
        } else {
            // Optional: reset height or handle other cases
            wrapper.style.height = '';
        }

    }, [currentBreakpoint]); // Dependency on currentBreakpoint state: runs when breakpoint state changes
    return (
        <>
            {/* <NavBar/> */}
            <div className='relative top-12 '>
                <div className='grid-cols-12 grid sm:grid-cols-15'>
                    {/* computer science card */}
                    <div className='xl:col-start-3 xl:col-span-4 lg:col-start-3 lg:col-span-5 sm:col-start-2 sm:col-span-6 my-8 col-start-3 col-span-8 bg-teal-950 aspect-7/8 rounded-lg pb-2'>
                        <Card 
                            aspectRatio="square" 
                            imagePath="/me-coding-at-desk.jpeg" 
                            linkPath="/Portfolio/computer-science" 
                            xsSize="2xl" 
                            smSize="2xl" 
                            mdSize="3xl" 
                            lgSize="4xl"
                            textContent="Computer Science"
                        />
                    </div>

                    {/* media card */}
                    <div className='xl:col-start-10 xl:col-span-4 lg:col-start-9 lg:col-span-5 sm:col-start-9 sm:col-span-6 my-8 col-start-3 col-span-8 bg-teal-950 aspect-7/8 rounded-lg pb-2'>
                        <Card
                            aspectRatio="square"
                            linkPath="/Portfolio/media"
                            imagePath="/media-cover-photo.jpeg"
                            xsSize="2xl"
                            smSize="2xl"
                            mdSize="3xl"
                            lgSize="4xl"
                            textContent="Media"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}