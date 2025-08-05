import NavBar from "@/app/components/NavBar"
import ComputerScienceContent from "@/app/components/ComputerScienceContent"

export default function page() {
    return (
        <>
            <div className="bg-gradient-cs sm:bg-gradient-cs-sm md:bg-gradient-cs-md">
                <NavBar/>
                <ComputerScienceContent/>
            </div>
        </>
    )
}