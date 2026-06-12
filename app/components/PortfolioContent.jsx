import Card from './Card'
export default function PortfolioContent() {
    return (
        <>
            <div className='grid-cols-12 grid sm:grid-cols-15 w-full'>
                {/* computer science card */}
                <div className='xl:col-start-3 xl:col-span-4 lg:col-start-3 lg:col-span-5 sm:col-start-2 sm:col-span-6 my-8 col-start-3 col-span-8 rounded-lg w-full p-0 m-0'>
                    <Card 
                        imagePath="/cover-photos/me-coding-at-desk_compressed" 
                        linkPath="/Portfolio/computer-science" 
                        forPortfolioPage="true"
                        xsSize="xl" 
                        smSize="xl" 
                        mdSize="xl" 
                        lgSize="xl"
                        imgHeight="3014"
                        imgWidth="3014"
                        textContent="Computer Science"
                    />
                </div>

                {/* media card */}
                <div className='xl:col-start-10 xl:col-span-4 lg:col-start-9 lg:col-span-5 sm:col-start-9 sm:col-span-6 my-8 col-start-3 col-span-8 rounded-lg'>
                    <Card
                        linkPath="/Portfolio/media"
                        imagePath="/cover-photos/media-cover-photo_compressed"
                        xsSize="xl"
                        smSize="xl"
                        mdSize="xl"
                        lgSize="xl"
                        imgHeight="1900"
                        imgWidth="1900"
                        forPortfolioPage="true"
                        textContent="Media"
                    />
                </div>
            </div>
        </>
    )
}