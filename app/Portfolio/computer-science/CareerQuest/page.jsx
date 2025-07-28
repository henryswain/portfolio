import NavBar from "@/app/components/NavBar"
import Link from "next/link"
import ProjectContent from "@/app/components/ProjectContent"
export default function page() {
    const title = "CareerQuest"
    const linkText = "CareerQuest"
    const link = "https://main.d2avs5kpfmpgfb.amplifyapp.com"
    const projectType = "computer-science"
    const date = "May 2025"
    const description = (
            <div className="text-white text-sm mt-2">
                <p className="mb-4">
                    CareerQuest serves as a job search platform similar to handshake or indeed.
                    It was a group project that I helped to develop for my informatics capstone course.
                    I was primarily a backend developer working with multiple services from AWS, 
                    but I oversaw some of the frontend as well.
                </p>
                <p>
                    Not only did this project help me to develop my computer programming skills, 
                    it also heavily fostered both group, and independent work. Additionally, 
                    I helped to plan and present Sprint presentations that occurred about once every 
                    four weeks.
                </p>
            </div>
            )
    const screenshots = [
        {
            src: "/career-quest-screenshots/career-quest-home.png",
            width: 2980,
            height: 1510
        },
        {
            src: "/career-quest-screenshots/career-quest-settings.png",
            width: 1116,
            height: 1272
        },
        {
            src: "/career-quest-screenshots/career-quest-learn-more.png",
            width: 2888,
            height: 1496
        },
        {
            src: "/career-quest-screenshots/career-quest-find-jobs.png",
            width: 2902,
            height: 1350
        }
    ]
    console.log("link: ", link)
    return (
        <>
            <div className="flex gap-4 flex-col justify-between items-center">
                <NavBar/>
                <ProjectContent 
                    description={description} 
                    link={link} 
                    linkText={linkText} 
                    projectType={projectType} 
                    title={title} 
                    screenshots={screenshots} 
                    date={date} 
                />
                <Link href="/Portfolio/computer-science/FilmTrack" className="flex w-full justify-end pr-15 sm:pr-20 text-lg pt-4"> Next Project &#10095;</Link>
            </div>
        </>
    )
}