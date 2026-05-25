export default function AboutContent() {
    return (
        <>
            {/* dark teal section with information about me */}
            <div className='h-265 md:h-175 w-75 md:w-190 sm:w-150 sm:h-150 rounded-lg bg-teal-950 sm:grid sm:grid-cols-2'>
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
                    In May 2026, I completed my B.A. in Informatics and minor in Computer Science from the University of Iowa with University Honors.
                    I would love to apply my knowledge to land a career and thrive in the tech industry.
                </p>
                <p className='col-span-2 text-white sm:text-sm md:text-md mx-4 mb-2'>
                    I also enjoy photography and videography, and I recently recieved my FAA drone certification to fly drones commercially.
                    My photography efforts for that past few years are primarily focused on nature and wildlife, and I've made a <a href="https://henryswain.github.io/henry-swain-photography/" style={{color: "#00FFFF !important;", textDecoration: "underline !important;"}} target="_blank">website</a> to showcase my best work
                </p>
            </div>
        </>
    )
}