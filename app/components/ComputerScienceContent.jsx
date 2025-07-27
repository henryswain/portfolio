"use client";

import Card from "@/app/components/Card"
import {useEffect, useState} from 'react'

export default function page() {

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
            wrapper.style.height = "135vh";
        } else if (currentBreakpoint === "xs") {
            wrapper.style.height = "100vh";
        } else {
            // Optional: reset height or handle other cases
            wrapper.style.height = '';
        }

    }, [currentBreakpoint]); // Dependency on currentBreakpoint state: runs when breakpoint state changes
    return (
        <>
            <div className="relative">
                <div className="bg-teal-950 left-1/2 top-8 -translate-x-1/2 absolute h-147 sm:h-220 md:h-125 w-70 sm:w-110 md:w-190 lg:w-240 lg:h-158 rounded-lg grid grid-cols-12 md:grid-cols-18">
                    <div className="aspect-16/10 col-span-12 md:col-span-9 md:col-start-1 m-4 bg-white rounded-lg">
                        <Card 
                            imagePath="/career-quest-screenshots/career-quest-home.png"
                            linkPath="/Portfolio/computer-science/CareerQuest"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="2xl"
                            smSize="2xl"
                            mdSize="3xl"
                            lg="4xl"
                            textContent="CareerQuest"
                        />
                    </div>


                    <div className="aspect-16/10 col-span-12 md:col-start-10 md:col-span-9 m-4 bg-white rounded-lg">
                        <Card 
                            imagePath="/film-track-screenshots/film-track-all-movies.png"
                            linkPath="/Portfolio/computer-science/FilmTrack"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="2xl"
                            smSize="2xl"
                            mdSize="3xl"
                            lg="4xl"
                            textContent="Film Track"
                        />
                    </div>

                    <div className="aspect-16/10 col-span-12 md:col-span-9 md:col-start-1 m-4 bg-white rounded-lg">
                        <Card 
                            imagePath="/honors-contract-screenshots/honors-contract-sleep.png"
                            linkPath="/Portfolio/computer-science/HonorsContract"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="2xl"
                            smSize="2xl"
                            mdSize="3xl"
                            lg="4xl"
                            textContent="Honors Contract"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}