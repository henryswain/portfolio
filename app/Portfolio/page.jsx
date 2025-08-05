import NavBar from '/app/components/NavBar'
import PortfolioContent from '../components/PortfolioContent'
export default function page() {
    return (
        <>
            <div className='bg-gradient-portfolio sm:bg-gradient-portfolio-sm'>
                <NavBar/>
                <PortfolioContent/>
            </div>
        </>
    )
}