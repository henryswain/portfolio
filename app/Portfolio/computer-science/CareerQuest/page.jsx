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
                <p className="mb-2">
                    CareerQuest serves as a job search platform similar to handshake or indeed.
                    It was a group project that I helped to develop for my informatics capstone course.
                    I was primarily a backend developer working with multiple services from AWS, 
                    but I oversaw some of the frontend as well.
                </p>
                <p className="mb-6">
                    Not only did this project help me to develop my computer programming skills, 
                    it also heavily fostered both group, and independent work. Additionally, 
                    I helped to plan and present Sprint presentations that occurred about once every 
                    four weeks.
                </p>
                <p className="mb-2 text-teal-300"><strong>Key features:</strong></p>
                <ul className="mb-4 pl-8 list-disc">
                    <li>User authentication with AWS Amplify gen 2</li>
                    <li>Text search for keywords in job title or job description</li>
                    <li>Find Jobs page for browse open job positions in New York</li>
                    <li>Advanced filter to narrow down the search</li>
                    <li>Logged in users can save jobs and view them later on Saved Jobs page</li>
                    <li>Profile page - located under account dropdown - allows users to upload profile picture, education, experience, and skills</li>
                    <li>Settings page - also located under account dropdown - allows users to customize settings such as dark mode, font size, jobs per page, and language</li>
                    <li>Additional pages - available through footer - include about, contact, privacy, and terms</li>
                </ul>
            </div>
            )
    const screenshots = [
        {
            src: "/career-quest-screenshots/career-quest-home.png",
            width: 16,
            id: 1
        },
        {
            src: "/career-quest-screenshots/career-quest-settings.png",
            width: 3,
            id: 2
        },
        {
            src: "/career-quest-screenshots/career-quest-learn-more.png",
            width: 3,
            id: 3
        },
        {
            src: "/career-quest-screenshots/career-quest-find-jobs.png",
            width: 16,
            id: 4
        }
    ]
    console.log("link: ", link)
    return (
        <>
            <div className="flex gap-8 flex-col justify-between items-center bg-gradient pb-8">
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
                <div className="flex w-full flex-row justify-between">
                    <Link href="/Portfolio/computer-science/GAIT" className="pl-15 sm:pr-20 text-lg">&#10094; Previous Project</Link>
                    <Link href="/Portfolio/computer-science/FilmTrack" className="pr-15 sm:pr-20 text-lg">Next Project &#10095;</Link>
                </div> 
            </div>
        </>
    )
}