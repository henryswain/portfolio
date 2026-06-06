import NavBar from '../components/NavBar'
import AboutContent from '../components/AboutContent'
export default function page() {
    return (
        <>
            <div className="flex gap-4 flex-col items-center bg-gradient">
                <NavBar/>
                <AboutContent/>
            </div>
        </>
    )
}