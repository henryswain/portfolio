import Link from 'next/link'

export default function page() {
    return (
        <>
            <div className="bg-teal-950 w-100vw h-12 flex flex-row justify-between gap-4 px-4 items-center">
                <div className='flex gap-4'>
                <Link href="/About" className='hover:underline hover:text-blue-100 text-teal-50'>About</Link>
                <Link href="/Portfolio" className='hover:underline hover:text-blue-100 text-teal-50'>Portfolio</Link>
                </div>
                <div className='flex'>
                    <p className='text-blue-50'>testing</p>
                </div>
            </div>
            <div className='relative top-12 '>
                <div className='grid-cols-12 grid sm:grid-cols-15'>
                    <div className='xl:col-start-3 xl:col-span-4 lg:col-start-3 lg:col-span-5 sm:col-start-2 sm:col-span-6 my-8 col-start-3 col-span-8 bg-teal-950 aspect-7/8 rounded-lg pb-2'>
                        <img src="/me-coding-at-desk.jpeg" alt="clickable image for computer science category" className='aspect-squarae object-cover rounded-t-lg' />
                        <div className='relative h-1/8 w-full'>
                            <h1 className='text-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>Computer Science</h1>
                        </div>
                    </div>
                    <div className='xl:col-start-10 xl:col-span-4 lg:col-start-9 lg:col-span-5 sm:col-start-9 sm:col-span-6 my-8 col-start-3 col-span-8 bg-teal-950 aspect-7/8 rounded-lg pb-2'>
                        <img src="/media-cover-photo.jpeg" alt="clickable image for media category" className='aspect-square object-cover rounded-t-lg' />
                        <div className='relative h-1/8'>
                            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>Media</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}