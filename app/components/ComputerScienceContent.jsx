import Card from "@/app/components/Card"
export default function page() {
    return (
        <>
            <section className="bg-teal-950 w-70 sm:w-110 md:w-190 lg:w-240 rounded-lg p-4 flex flex-wrap">
                <Card 
                    imagePath="/gait/cover-photo.jpeg"
                    linkPath="/Portfolio/computer-science/GAIT"
                    textColor="black"
                    xsSize="md"
                    smSize="lg"
                    mdSize="xl"
                    lgSize="xl"
                    textContent="Interior Design AI Assistant"
                    imgWidth="1847"
                    imgHeight="1039"
                /> 
                <Card 
                    imagePath="/career-quest-screenshots/career-quest-home.png"
                    linkPath="/Portfolio/computer-science/CareerQuest"
                    textColor="black"
                    xsSize="md"
                    smSize="lg"
                    mdSize="xl"
                    lgSize="xl"
                    textContent="CareerQuest"
                    imgWidth="2684"
                    imgHeight="1510"
                />
                <Card 
                    imagePath="/film-track-screenshots/film-track-watched.png"
                    linkPath="/Portfolio/computer-science/FilmTrack"
                    textColor="black"
                    xsSize="md"
                    smSize="lg"
                    mdSize="xl"
                    lgSize="xl"
                    textContent="Film Track"
                    imgWidth="2677"
                    imgHeight="1506"
                />
                <Card 
                    imagePath="/honors-contract-screenshots/honors-contract-sleep.png"
                    linkPath="/Portfolio/computer-science/HonorsContract"
                    textColor="black"
                    xsSize="md"
                    smSize="lg"
                    mdSize="xl"
                    lgSize="xl"
                    textContent="Honors Contract"
                    imgWidth="2603"
                    imgHeight="1464"
                />
            </section>
        </>
    )
}