import Card from "@/app/components/Card"
import Link from "next/link"
export default function MediaContent() {
    return (
        <>
            <section className="bg-teal-950 w-70 sm:w-110 md:w-190 lg:w-240 flex flex-wrap rounded-lg p-4">
                <Card 
                    imagePath="/profile-story.jpeg"
                    linkPath="/Portfolio/media/Profile"
                    textColor="black"
                    xsSize="xs"
                    smSize="xs"
                    mdSize="sm"
                    lgSize="md"
                    textContent="Profile Story: A metal sculptor"
                    imgWidth="1500"
                    imgHeight="1200"

                />
                <Card
                    linkPath="/Portfolio/media/AmbiguousLogo"
                    imagePath="/iterations/ArmstrongsEnchiladas.png"
                    textColor="black"
                    xsSize="xs"
                    smSize="xs"
                    mdSize="sm"
                    lgSize="md"
                    bb="border-b-2"
                    textContent="Ambiguous Logo"
                    imgWidth="943"
                    imgHeight="943"
                />
                <Card 
                    imagePath="/UAY_Horizontal_Logo_LightBlue.jpeg"
                    linkPath="/Portfolio/media/UAYPromo"
                    textColor="black"
                    xsSize="xs"
                    smSize="xs"
                    mdSize="sm"
                    lgSize="md"
                    bb="border-b-2"
                    imgWidth="1500"
                    imgHeight="1200"
                    textContent="United Action for Youth promotional video"
                />
                <Card
                    linkPath="/Portfolio/media/DeconstructivismActivismPoster"
                    imagePath="/deconstructivism/final_poster.jpg"
                    textColor="black"
                    xsSize="xs"
                    smSize="xs"
                    mdSize="xs"
                    imgWidth="792"
                    imgHeight="1224"
                    lgSize="xs"
                    bb="border-b-2"
                    textContent="Deconstructivism activism poster"
                />
                <Card
                    linkPath="/Portfolio/media/TypographicPoster"
                    imagePath="/final typographic poster.png"
                    textColor="black"
                    xsSize="xs"
                    smSize="xs"
                    mdSize="sm"
                    imgWidth="998"
                    imgHeight="1546"
                    lgSize="md"
                    bb="border-b-2"
                    textContent="Typographic teaching poster"
                />
                <Card
                    linkPath="/Portfolio/media/MagazineLayout"
                    imagePath="/magazine/lead spread.png"
                    textColor="black"
                    xsSize="xs"
                    smSize="xs"
                    mdSize="xs"
                    imgWidth="2742"
                    imgHeight="1780"
                    lgSize="md"
                    bb="border-b-2"
                    textContent="Magazine layout design"
                />
            </section>
        </>
    )
}