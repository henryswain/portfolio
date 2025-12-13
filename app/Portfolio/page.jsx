import NavBar from '/app/components/NavBar'
import PortfolioContent from '../components/PortfolioContent'
export default function page() {
    return (
        <>
            <div className="flex gap-8 flex-col relative justify-start items-center bg-gradient">
                <NavBar/>
                <PortfolioContent/>
            </div>
        </>
    )
}