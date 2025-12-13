import Link from "next/link"
import NavBar from "@/app/components/NavBar"
import ProjectContent from "@/app/components/ProjectContent"
export default function page() {
    const title = "Profile story: a metal sculptor"
    const linkText = "Profile story: a metal sculptor"
    const link = "https://www.youtube.com/embed/zFLQD31oEow?si=F2k0jR5vrPer5fkX"

    const projectType = "media"
    const date = "April 2025"
    const description = (
            <div className="text-white">
                <p className="text-xs sm:text-xs md:text-[1rem] lg:text-lg mt-2">
                    For this profile story, I focused on Lisa Swain, who is a retired biochemistry professor, 
                    and is currently a metalworker. This video was also selected to be featured at the 
                    Storytelling Across Media Student Showcase in Spring 2026 at the University of Iowa.
                </p>
            </div>
        )

    return (
        <>
            <div className="flex flex-col items-center gap-12 sm:gap-8 md:gap-25 lg:gap-20 bg-gradient pb-8 justify-between">
                <NavBar/>
                <ProjectContent 
                    description={description} 
                    link={link} 
                    linkText={linkText} 
                    projectType={projectType} 
                    title={title} 
                    date={date} 
                />
                <Link href="/Portfolio/media/UAYPromo" className="flex justify-end w-full pr-15 sm:pr-20 text-lg">Next Project &#10095;</Link>
            </div>
        </>
    )
}