import NavBar from "@/app/components/NavBar"
import ComputerScienceContent from "@/app/components/ComputerScienceContent"

export default function page() {
    return (
        <>
            <div className="flex gap-8 flex-col relative justify-start items-center bg-gradient pb-8">
                <NavBar/>
                <ComputerScienceContent/>
            </div>
        </>
    )
}