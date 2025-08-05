import Link from 'next/link'
export default function ProjectContent({description, link, linkText, projectType, title, screenshots = null, date}) {
    return (
        <>
            {/* for media projects */}
            {projectType == "media" && (
                <div className={`bg-teal-950 min-h-100 md:min-h-100 w-75 md:w-190 lg:w-230 sm:w-150 sm:min-h-40 rounded-lg bg-teal-950 p-4 grid grid-cols-2`}>
                    <h1 className='text-teal-300 font-bold col-span-2 text-4xl mb-4'>{title}</h1>
                    <div className={`col-span-2 ${linkText == "UAY Promo" ? "sm:col-span-2" : "md:col-span-1"}`}>
                        {/* embed youtube video */}
                        <iframe 
                            className="aspect-4/3 mb-4 sm:mr-2"
                            src={link} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        />
                    </div>
                    <div className={`col-span-2 ${linkText == "UAY Promo" ? "sm:col-span-2" : "md:col-span-1"}`}>
                        <div className='text-teal-300 font-bold text-2xl mb-2 sm:ml-2'>
                            Description: 
                            {description}
                        </div>
                        <h1 className='text-teal-300 font-bold text-2xl sm:ml-2'>Date: <span className='text-white font-light text-2xl'>{date}</span></h1>
                    </div>
                </div>
            )}
            
            {/* for computer science projects */}
            {projectType == "computer-science" && (

                <div className={`bg-teal-950 ${linkText == "CareerQuest" ? "h-400 md:h-410 sm:h-350" : ""} ${linkText == "FilmTrack" ? "h-430 sm:h-380 md:h-445" : ""} ${linkText == "HonorsContract" ? "h-300 sm:h-410 md:h-495" : ""} w-75 md:w-190 sm:w-150 rounded-lg bg-teal-950 p-4 grid gap-2 grid-cols-2`}>
                <div className='col-span-2'>
                    <h1 className='text-teal-300 font-bold text-2xl mb-1'>Link to site: <Link href={link} className='text-white hover:text-blue-200 font-light underline text-2xl mb-0'>{linkText}</Link></h1>
                    <div className='text-teal-300 font-bold text-2xl mb-2'>
                        Description: 
                        {description}
                    </div>
                    <h1 className='text-teal-300 font-bold text-2xl mb-2'>Date: <span className='text-white font-light text-2xl'>{date}</span></h1>
                    <hr className='text-white'></hr>
                </div>
                {screenshots.map(photo => {
                    return (
                        <div key={photo.id} className={photo.width == 3 ? "col-span-2 sm:col-span-1" : "col-span-2"}>
                            <img src={photo.src} alt="" className={photo.width == 3 ? "aspect-3/4 object-cover" : "aspect-video object-cover"}/>
                        </div>
                    )
                })}
                </div>
            )}
        </>
    )
}