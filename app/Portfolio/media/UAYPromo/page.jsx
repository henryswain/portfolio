import Link from "next/link"
import NavBar from "@/app/components/NavBar"
import ProjectContent from "@/app/components/ProjectContent"
export default function page() {
    const title = "United Action for Youth (UAY) promotional video"
    const linkText = "UAY video"
    const link = "https://www.youtube.com/embed/IP5J2sn0QLo?si=dJhx5ChYKe-jMC3_"
    const projectType = "media"
    const date = "May 2025"
    const description = (
            <div className="text-white text-sm mt-2">
                <p className="mb-4">
                    For my video production class, I was instructed to work with an external client 
                    (e.g. a local non-profit or small business) to make a promotional, profile or 
                    tutorial video that would fit their needs. 
                </p>
                <p>
                    I communicated with one of the staff members of United Action for Youth - 
                    (UAY) a local non profit in Iowa City - to see if they would want me to work with 
                    them to make such a video. It was concluded that the staff loved the idea of getting 
                    a promotional video made for their services. After a few weeks of production and editing, 
                    the video was complete, and the UAY Staff were very happy with the end result.
                </p>
            </div>
            )
    return (
        <>
            <div className="flex flex-col items-center gap-12 sm:gap-8 md:gap-18">
                <NavBar/>
                <ProjectContent 
                    description={description} 
                    link={link} 
                    linkText={linkText} 
                    projectType={projectType} 
                    title={title} 
                    date={date} 
                />
                <Link href="/Portfolio/media/Profile" className="flex justify-start w-full pl-15 sm:pl-20 text-lg">&#10094; Previous Project </Link>
            </div>
        </>
    )
}