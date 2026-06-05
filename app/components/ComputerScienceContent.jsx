import Card from "@/app/components/Card"
export default function page() {
    return (
        <>
            {/* <div className="relative"> */}
                <div className="bg-teal-950 w-70 sm:w-110 md:w-190 lg:w-240 rounded-lg grid grid-cols-12 md:grid-cols-18 p-2">
                    <div className="aspect-16/10 col-span-12 md:col-span-9 md:col-start-1 m-2 bg-white rounded-lg">
                        <Card 
                            imagePath="/gait/cover-photo.jpeg"
                            linkPath="/Portfolio/computer-science/GAIT"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="lg"
                            smSize="lg"
                            mdSize="2xl"
                            lgSize="2xl"
                            textContent="Interior Design AI Assistant"
                        /> 
                    </div>
                    <div className="aspect-16/10 col-span-12 md:col-start-10 md:col-span-9 m-2 bg-white rounded-lg">
                        <Card 
                            imagePath="/career-quest-screenshots/career-quest-home.png"
                            linkPath="/Portfolio/computer-science/CareerQuest"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="lg"
                            smSize="2xl"
                            mdSize="2xl"
                            lgSize="2xl"
                            textContent="CareerQuest"
                        />
                    </div>
                    <div className="aspect-16/10 col-span-12 md:col-span-9 md:col-start-1 m-2 bg-white rounded-lg">
                        <Card 
                            imagePath="/film-track-screenshots/film-track-watched.png"
                            linkPath="/Portfolio/computer-science/FilmTrack"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="lg"
                            smSize="2xl"
                            mdSize="2xl"
                            lgSize="2xl"
                            textContent="Film Track"
                        />
                    </div>   
                    <div className="aspect-16/10 col-span-12 md:col-start-10 md:col-span-9 m-2 bg-white rounded-lg">
                        <Card 
                            imagePath="/honors-contract-screenshots/honors-contract-sleep.png"
                            linkPath="/Portfolio/computer-science/HonorsContract"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="lg"
                            smSize="2xl"
                            mdSize="2xl"
                            lgSize="2xl"
                            textContent="Honors Contract"
                        />
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}