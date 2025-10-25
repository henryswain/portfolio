import NavBar from "@/app/components/NavBar";
import MediaContent from "@/app/components/MediaContent";
export default function page() {
    return (
        <>
            <div className="flex gap-8 flex-col relative justify-between items-center bg-gradient">
                <NavBar/>
                <MediaContent/>
                <div></div>
            </div>
        </>
    )
}