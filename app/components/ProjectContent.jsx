"use client";
import Link from 'next/link'
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useState, useEffect } from 'react'
export default function ProjectContent({description, link, linkText, projectType, title, screenshots, date}) {


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
    }, [currentBreakpoint]); // Dependency on currentBreakpoint state: runs when breakpoint state changes

    return (
        <>
            <div className="bg-teal-950 min-h-235 md:min-h-200 w-75 md:w-190 sm:w-150 sm:min-h-180 rounded-lg bg-teal-950 p-4 sm:grid sm:grid-cols-2">
                <h1 className='text-teal-300 font-bold text-4xl mb-4'>{title}</h1>
                {projectType == "media" && (
                    <div className="m-4">
                        <iframe src={link} className="aspect-4/3 width-full mb-4"></iframe>
                        <div className='text-teal-300 font-bold text-2xl mb-2'>
                            Description: 
                            {description}
                        </div>
                        <h1 className='text-teal-300 font-bold text-2xl mb-2'>Date: <span className='text-white font-light text-2xl'>{date}</span></h1>
                    </div>
                )}
                {projectType == "computer-science" && (
                    <div className='col-span-2'>
                        <h1 className='text-teal-300 font-bold text-2xl mb-1'>Link to site: <Link href={link} className='text-white hover:text-blue-200 font-light underline text-2xl mb-0'>{linkText}</Link></h1>
                        <div className='text-teal-300 font-bold text-2xl mb-2'>
                            Description: 
                            {description}
                        </div>
                        <h1 className='text-teal-300 font-bold text-2xl mb-2'>Date: <span className='text-white font-light text-2xl'>{date}</span></h1>
                        <hr></hr>
                        <RowsPhotoAlbum 
                            photos={screenshots} 
                            rowConstraints={{ maxPhotos: 2 }}
                        />
                    </div>
                )}
            </div>
        </>
    )
}