import Link from 'next/link'
import Card from '../components/Card'
import NavBar from '/app/components/NavBar'
export default function page() {
    return (
        <>
            <NavBar/>
            <div className='relative top-12 '>
                <div className='grid-cols-12 grid sm:grid-cols-15'>
                    {/* computer science card */}
                    <div className='xl:col-start-3 xl:col-span-4 lg:col-start-3 lg:col-span-5 sm:col-start-2 sm:col-span-6 my-8 col-start-3 col-span-8 bg-teal-950 aspect-7/8 rounded-lg pb-2'>
                        <Card 
                            aspectRatio="square" 
                            imagePath="/me-coding-at-desk.jpeg" 
                            linkPath="/Portfolio/computer-science" 
                            xsSize="2xl" 
                            smSize="2xl" 
                            mdSize="3xl" 
                            lgSize="4xl"
                            textContent="Computer Science"
                        />
                    </div>

                    {/* media card */}
                    <div className='xl:col-start-10 xl:col-span-4 lg:col-start-9 lg:col-span-5 sm:col-start-9 sm:col-span-6 my-8 col-start-3 col-span-8 bg-teal-950 aspect-7/8 rounded-lg pb-2'>
                        <Card
                            aspectRatio="square"
                            linkPath="/Portfolio/media"
                            imagePath="/media-cover-photo.jpeg"
                            xsSize="2xl"
                            smSize="2xl"
                            mdSize="3xl"
                            lgSize="4xl"
                            textContent="Media"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}