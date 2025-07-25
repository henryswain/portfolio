import Link from 'next/link'
export default function Card({aspectRatio, imagePath, linkPath, xsSize, smSize, mdSize, lgSize, textContent}) {
    return (
        <Link href={linkPath}>
            <img src={imagePath} alt="clickable image for computer science category" className={`aspect-${aspectRatio} object-cover rounded-t-lg`} />
            <div className='relative h-1/8 w-full'>
                <h1 className={`text-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white ${xsSize} sm:text-${smSize} md:text-${mdSize} lg:text-${lgSize}`}>{textContent}</h1>
            </div>
        </Link>
    )
}