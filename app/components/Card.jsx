import Link from 'next/link'
export default function Card({aspectRatio = "4/3", imagePath, linkPath, xsSize, smSize, mdSize, lgSize, textContent, textColor = "white", textContainerHeight = "h-9"} = {}) {
    return (
        <Link href={linkPath}>
            <div className='bg-black'>
                <img src={imagePath} alt="clickable image for computer science category" className={`aspect-${aspectRatio} object-cover rounded-t-lg hover:opacity-75 transition-opacity duration-250`} />
            </div>
            <div className={`relative ${textContainerHeight} w-full`}>
                <h1 className={`text-nowrap absolute mt-1 left-1/2 -translate-x-1/2 text-${textColor} text-${xsSize} sm:text-${smSize} md:text-${mdSize} lg:text-${lgSize}`}>{textContent}</h1>
            </div>
        </Link>
    )
}