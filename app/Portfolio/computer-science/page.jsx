import NavBar from "@/app/components/NavBar"
import Card from "@/app/components/Card"
export default function page() {
    return (
        <>
            <NavBar/>
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