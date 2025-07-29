"use client";
import Link from 'next/link'
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useState, useEffect } from 'react'
export default function ProjectContent({description, link, linkText, projectType, title, screenshots = null, date}) {
    const [currentBreakpoint, setCurrentBreakpoint] = useState("xs");

    // calculate gradient height based on visible height of dark teal container, 
    // height of navbar, and the flex gap
    function adjustGradientHeight() {
        const wrapper = document.querySelector('.background-gradient');
        const flexContainer = document.querySelectorAll('.flex')[1]
        const gap = window.getComputedStyle(flexContainer).rowGap.substring(0, 2)
        if (!wrapper) {
            console.warn("Wrapper element '.background-gradient' not found.");
            return;
        }
        function getVisibleHeight(element) {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Element is completely above viewport
            if (rect.bottom <= 0) return 0;
            
            // Element is completely below viewport
            if (rect.top >= viewportHeight) return 0;
            
            // Calculate visible portion
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(viewportHeight, rect.bottom);
            
            return visibleBottom - visibleTop;
        }



        const height = document.querySelectorAll(".bg-teal-950")[1].scrollHeight;
        const elementVisibleHeight = getVisibleHeight(document.querySelectorAll(".bg-teal-950")[1]);

        
        const viewportHeight = window.innerHeight
   
        if ((2 * gap + elementVisibleHeight + 48 + 60) < viewportHeight) {
            wrapper.style.height = "100vh"
        }
        else {
            wrapper.style.height = `${2 * gap + height + 48 + 100}px`
        }
    }

    function checkBreakpoint() {
        //  condition for each breakpoint
        // if the currentBreakpoint isn't what was just checked,
        //  change current breakpoint to what was just checked
        // and adjust gradient height accordingly
        if (window.innerWidth < (40 * 16)) {
            if (currentBreakpoint != "xs") {
                console.log("window.innerWidth: ", window.innerWidth)
                console.log('currentBreakpoint != "xs"')
                adjustGradientHeight()
                setCurrentBreakpoint("xs")
            }
        }
        else if ((window.innerWidth >= (40 * 16)) && (window.innerWidth < (48 * 16))) {
            if (currentBreakpoint != "sm") {
                console.log("window.innerWidth: ", window.innerWidth)
                console.log('currentBreakpoint != "sm"')
                adjustGradientHeight()
                setCurrentBreakpoint("sm")
            }
        }
        else if ((window.innerWidth >= (48 * 16)) && (window.innerWidth < (64 * 16))) {
            if (currentBreakpoint != "md") {
                console.log("window.innerWidth: ", window.innerWidth)
                console.log('currentBreakpoint != "md"')
                adjustGradientHeight()
                setCurrentBreakpoint("md")
            }
        }
        else if (window.innerWidth > (64 * 16)) {
            if (currentBreakpoint != "lg") {
                console.log("window.innerWidth: ", window.innerWidth)
                console.log('currentBreakpoint != "md"')
                adjustGradientHeight()
                setCurrentBreakpoint("lg")
            }
        }
    }
    window.addEventListener("resize", checkBreakpoint)

    useEffect(() => {
        adjustGradientHeight()
    })

    return (
        <>
            {projectType == "media" && (
                <div className={`bg-teal-950 min-h-100 md:min-h-100 w-75 md:w-190 lg:w-230 sm:w-150 sm:min-h-40 rounded-lg bg-teal-950 p-4 grid grid-cols-2`}>
                    <h1 className='text-teal-300 font-bold col-span-2 text-4xl mb-4'>{title}</h1>
                    <div className={`col-span-2 ${linkText == "UAY Promo" ? "sm:col-span-2" : "md:col-span-1"}`}>
                        <iframe 
                            className="aspect-4/3 mb-4 sm:mr-2"
                            src={link} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        />
                    </div>
                    <div className={`col-span-2 ${linkText == "UAY Promo" ? "sm:col-span-2" : "md:col-span-1"}`}>
                        <div className='text-teal-300 font-bold text-2xl mb-2 sm:ml-2'>
                            Description: 
                            {description}
                        </div>
                        <h1 className='text-teal-300 font-bold text-2xl sm:ml-2'>Date: <span className='text-white font-light text-2xl'>{date}</span></h1>
                    </div>
                </div>
            )}
                {projectType == "computer-science" && (

                    <div className={`bg-teal-950 ${linkText == "CareerQuest" ? "h-400 md:h-410 sm:h-350" : ""} ${linkText == "FilmTrack" ? "h-430 sm:h-380 md:h-445" : ""} ${linkText == "HonorsContract" ? "h-300 sm:h-410 md:h-495" : ""} w-75 md:w-190 sm:w-150 rounded-lg bg-teal-950 p-4 grid gap-2 grid-cols-2`}>
                    <div className='col-span-2'>
                        <h1 className='text-teal-300 font-bold text-2xl mb-1'>Link to site: <Link href={link} className='text-white hover:text-blue-200 font-light underline text-2xl mb-0'>{linkText}</Link></h1>
                        <div className='text-teal-300 font-bold text-2xl mb-2'>
                            Description: 
                            {description}
                        </div>
                        <h1 className='text-teal-300 font-bold text-2xl mb-2'>Date: <span className='text-white font-light text-2xl'>{date}</span></h1>
                        <hr className='text-white'></hr>
                    </div>
                    {screenshots.map(photo => {
                        return (
                            <div key={photo.id} className={photo.width == 3 ? "col-span-2 sm:col-span-1" : "col-span-2"}>
                                <img src={photo.src} alt="" className={photo.width == 3 ? "aspect-3/4 object-cover" : "aspect-video object-cover"}/>
                            </div>
                        )
                    })}
                    </div>
                )}
        </>
    )
}