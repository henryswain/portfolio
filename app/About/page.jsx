import Link from 'next/link'

export default function page() {
    return (
        <>
            {/* navbar */}
            <div className="bg-teal-950 w-100vw h-12 flex flex-row justify-between gap-4 px-4 items-center relative">
                <div className='flex gap-4'>
                <Link href="/About" className='hover:underline hover:text-blue-100 text-teal-50'>About</Link>
                <Link href="/Portfolio" className='hover:underline hover:text-blue-100 text-teal-50'>Portfolio</Link>
                </div>
                <div className='flex'>
                    <p className='text-blue-50'>testing</p>
                </div>
            </div>

            {/* dark teal section with information about me */}
            <div className='relative top-8'>
                <div className='absolute top-1/5 -translate-x-1/2 left-1/2 h-265 md:h-175 w-75 md:w-190 sm:w-150 sm:h-150 rounded-lg bg-teal-950 sm:grid sm:grid-cols-2'>
                    {/* my profile picture */}
                    <img src="/profile-pic.jpg" className='p-4'></img>

                    {/* my name and field of study */}
                    <div className='sm:m-4 mx-4 mt-0 mb-2'>
                        <p className='text-white font-bold md:text-[90px] sm:text-[70px] text-[35px] sm:leading-none'>HENRY SWAIN</p>
                        <p className='text-white font-thin md:text-[36px] sm:text-[26px] text-[26px] pt-1 md:pt4'>Informatics (media) student at the University of Iowa minoring in Computer Science</p>
                    </div>
                    <hr className='col-span-2 text-white mx-4 mb-2'></hr>

                    {/* breaf bio */}
                    <p className='col-span-2 text-white sm:text-sm md:text-md mx-4 sm:mb-2 mb-3'>
                        As an Informatics student, I'm hoping for a career in web or software development 
                        after graduation.​ I'm usually swamped with school work, but when I have a little bit
                         of free time, I like to get outside and take pictures of birds.
                    </p>
                    <p className='col-span-2 text-white sm:text-sm md:text-md mx-4 mb-2'>
                        My dad (a retired high school science teacher) is writing a book about the ways
                         of knowing. My mom works as a Title 1 reading teacher, and my brother has moved out
                          and does landscaping work in Idaho. Finally, my dog Lola (yellow lab)
                           is wild and crazy, but loving.
                    </p>
                </div>
            </div>
        </>
    )
}