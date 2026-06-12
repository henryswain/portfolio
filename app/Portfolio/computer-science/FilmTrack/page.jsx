import Link from "next/link"
import NavBar from "@/app/components/NavBar"
import ProjectContent from "@/app/components/ProjectContent"
export default function page() {
    const title = "FilmTrack"
    const linkText = "FilmTrack"
    const link = "https://movie-watchlist-khaki.vercel.app/"
    const projectType = "computer-science"
    const date = "May 2025"
    const description = (
            <div className="text-white text-sm mt-2">
                <p className="mb-4">For my final Project in my CS Topics course, I worked with a group of 2 other student
                     (Marcus Bodnar and Aron Ramiscal) to expand upon Joey Wroble's glorified CRUD 
                     application - Movie-Watchlist.
                </p>
                <p className="mb-2 text-teal-300"><strong>Key Features:</strong></p>
                <ul className="mb-4 pl-8 list-disc">
                    <li>User authentication with JWT tokens</li>
                    <li>Add movies with titles, comments, and ratings</li>
                    <li>Mark movies as watched/unwatched</li>
                    <li>Write and view movie reviews</li>
                    <li>Filter movies by status (all, watched, not watched, my movies)</li>
                    <li>Import picture as a background (.jpeg, .jpg, .png, .gif)</li>
                    <li>Schedule viewing dates with calendar event export</li>
                    <li>Administrative privileges for managing all content</li>
                    <li>The app uses Python (FastAPI), VueJS, and MongoDB for the tech stack.</li>
                </ul>
            </div>
    )
    const screenshots = [
        {
            src: "/computer-science/film-track-screenshots/film-track-watched_compressed",
            width: 16,
            id: 1
        },
        {
            src: "/computer-science/film-track-screenshots/film-track-add-new-movie_compressed",
            width: 3,
            id: 2
        },
        {
            src: "/computer-science/film-track-screenshots/film-track-edit-movie_compressed",
            width: 3,
            id: 3
        },
        {
            src: "/computer-science/film-track-screenshots/film-track-home_compressed",
            width: 16,
            id: 4
        }
    ]
    console.log("link: ", link)
    return (
        <>
            <div className="flex gap-8 flex-col items-center bg-gradient pb-8">
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
                    <Link href="/Portfolio/computer-science/CareerQuest" className="pl-15 sm:pr-20 text-lg">&#10094; Previous Project</Link>
                    <Link href="/Portfolio/computer-science/HonorsContract" className="pr-15 sm:pr-20 text-lg">Next Project &#10095;</Link>
                </div>
            </div>
        </>
    )
}