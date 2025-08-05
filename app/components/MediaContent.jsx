import Card from "@/app/components/Card"
export default function MediaContent() {
    return (
        <>
          <div className="relative">
                <div className="bg-teal-950 left-1/2 top-8 -translate-x-1/2 absolute h-130 sm:h-195 md:h-85 w-70 sm:w-110 md:w-190 lg:w-240 lg:h-105 rounded-lg grid grid-cols-12 md:grid-cols-18">
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
                </div>
            </div>
        </>
    )
}