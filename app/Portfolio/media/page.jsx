import NavBar from "@/app/components/NavBar";
import MediaContent from "@/app/components/MediaContent";
export default function page() {
    return (
        <>
            <div className="bg-gradient-media sm:bg-gradient-media-sm md:bg-gradient-media-md lg:bg-gradient-media-lg">
                <NavBar/>
                <MediaContent/>
            </div>
        </>
    )
}