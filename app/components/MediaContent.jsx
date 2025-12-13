import Card from "@/app/components/Card"
import Link from "next/link"
export default function MediaContent() {
    return (
        <>
          {/* <div className="relative"> */}
                <div className="bg-teal-950 w-70 sm:w-110 md:w-190 lg:w-240 rounded-lg grid grid-cols-12 md:grid-cols-18">
                    <div className="aspect-16/10 col-span-12 md:col-span-9 md:col-start-1 m-4 bg-white rounded-lg">
                        <Card 
                            imagePath="/profile-story.jpeg"
                            linkPath="/Portfolio/media/Profile"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="xs"
                            smSize="md"
                            mdSize="md"
                            lg="lg"
                            textContent="Profile Story: A metal sculptor"
                            textContainerHeight="h-7"
                        />
                    </div>


                    <div className="aspect-16/10 col-span-12 md:col-start-10 md:col-span-9 m-4 bg-white rounded-lg">
                        <Card 
                            imagePath="/UAY_Horizontal_Logo_LightBlue.jpeg"
                            linkPath="/Portfolio/media/UAYPromo"
                            aspectRatio="16/9"
                            textColor="black"
                            xsSize="xs"
                            smSize="md"
                            mdSize="md"
                            lg="lg"
                            bb="border-b-2"
                            textContent="United Action for Youth promotional video"
                            textContainerHeight="h-7"
                        />
                    </div>
                    <div className="aspect-8/9 col-span-12 md:col-start-1 md:col-span-9 m-4 bg-white rounded-lg">
                        <Card
                            linkPath="/Portfolio/media/DeconstructivismActivismPoster"
                            imagePath="/deconstructivism/final_poster.jpg"
                            aspectRatio="11/17"
                            textColor="black"
                            xsSize="xs"
                            smSize="md"
                            mdSize="md"
                            lg="lg"
                            bb="border-b-2"
                            textContent="Deconstructivism activism poster"
                            textContainerHeight="h-7"
                        />
                    </div>
                    <div className="aspect-8/9 col-span-12 md:col-start-10 md:col-span-9 m-4 bg-white rounded-lg">
                        <Card
                            linkPath="/Portfolio/media/TypographicPoster"
                            imagePath="/final typographic poster.png"
                            aspectRatio="11/17"
                            textColor="black"
                            xsSize="xs"
                            smSize="md"
                            mdSize="md"
                            lg="lg"
                            bb="border-b-2"
                            textContent="Typographic teaching poster"
                            textContainerHeight="h-7"
                        />
                    </div>
                    <div className="aspect-8/9 col-span-12 md:col-span-9 md:col-start-1 m-4 bg-white rounded-lg">
                        <Card
                            linkPath="/Portfolio/media/AmbiguousLogo"
                            imagePath="/iterations/ArmstrongsEnchiladas.png"
                            aspectRatio="square"
                            textColor="black"
                            xsSize="xs"
                            smSize="md"
                            mdSize="md"
                            lg="lg"
                            bb="border-b-2"
                            textContent="Ambiguous Logo"
                            textContainerHeight="h-7"
                        />
                    </div>
                    <div className="aspect-9/6 col-span-12 md:col-start-10 md:col-span-9 m-4 bg-white rounded-lg">
                        <Card
                            linkPath="/Portfolio/media/MagazineLayout"
                            imagePath="/magazine/lead spread.png"
                            aspectRatio="17/11"
                            textColor="black"
                            xsSize="xs"
                            smSize="md"
                            mdSize="md"
                            lg="lg"
                            bb="border-b-2"
                            textContent="Magazine layout design"
                            textContainerHeight="h-7"
                        />
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}