import Link from "next/link"
import NavBar from "@/app/components/NavBar"
import ProjectContent from "@/app/components/ProjectContent"
export default function page() {
    const title = "Honors Contract - Mental health and social media in Bangladesh in 2021"
    const linkText = "HonorsContract"
    const link = "https://henryswain.github.io/honors-contract/"
    const projectType = "computer-science"
    const date = "spring 2024"
    const description = (
            <div className="text-white text-sm mt-2">
                <p>
                    For extra honors credit with the University of Iowa Honors program,
                     I met with Dr. Juan Pablo Hourcade - my Human Computer Interaction professor
                      for the spring 2024 semester - to discuss project requirements. 
                      We determined that I would find a dataset of interest online, and 
                      create wireframe for an app that would analyze and present the data 
                      in a readable format. I then spoke with stakeholders and others to gain 
                      feedback on the prototype. After I received feedback, I developed the app, 
                      which shows the relationship between sleep, anxiety, depression and social 
                      media platforms in Bangladesh. The app was built with VueJS, Bootstrap, and ChartJS.
                </p>
            </div>
            )
    const screenshots = [
        {
            src: "/honors-contract-screenshots/honors-contract-sleep.png",
            width: 2918,
            height: 1464
        },
        {
            src: "/honors-contract-screenshots/honors-contract-home.png",
            width: 2912,
            height: 1226
        },
        {
            src: "/honors-contract-screenshots/honors-contract-anxiety.png",
            width: 2914,
            height: 1512
        },
        {
            src: "/honors-contract-screenshots/honors-contract-depression.png",
            width: 2912,
            height: 1514
        }
    ]
    console.log("link: ", link)
    return (
        <>
            <div className="flex flex-col items-center gap-8">
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
                <Link href="/Portfolio/computer-science/FilmTrack" className="justify-start w-full pl-15 sm:pr-20 text-lg pb-4">&#10094; Prevous Project</Link>
            </div>
        </>
    )
}