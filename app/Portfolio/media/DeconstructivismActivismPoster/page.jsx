import NavBar from "@/app/components/NavBar"
import Link from "next/link"
export default function page() {
    return (
        <>
            <div className="flex gap-8 flex-col relative justify-between items-center bg-gradient pb-8">
                <NavBar/>
                <div className="bg-teal-950 rounded-lg w-85 md:w-180">
                    <h1 className="text-[3rem] w-full pb-4 pt-2 px-4 text-white">
                        Deconstructivism Activism Poster
                    </h1>
                    <hr className="text-white mx-4 py-2"></hr>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For this poster project in my graphic design class, I have been tasked with designing a creative and visually compelling 11 by 17 poster that supports a cause that I'm passionate about using remixing and alternative type/layout systems.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        In the beginning, I focused on creating two unique slogans that would provide the foundation for two completely unique rough drafts.
                    </p>
                    <h1 className="text-[2rem] w-full pb-4 pt-2 px-4 text-white">
                        Rough 1: Thoughts and prayers won't fix the housing inequality crisis
                    </h1>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        for my first slogan, "thoughts and prayers won't fix the housing inequality crisis", I wanted to use imagery that conveyed praying at a church, but also the crisis of housing inequality. for the thoughts and prayers portion, I looked up prayers and episcopal churches on wikimedia commons. I chose one of the few relatively short horizontalimages of a church because I wanted the image to span the entire width of opproximately the top third of the poster.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For the housing inequality crisis portion, I wanted to convey to two extreme ends of housing inequality - a beach house to represent luxure living and a homeless person sleaping on a bench to represent the extreme poverty end of things I also fond these images on wikimedia commons. To further represent this inequality as a crisis, I placed the beach house and the homeless person at uncomfortable opposing steep angles to give the appearance of falling chaoticall through the poster.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        to further convey the desired grunge look, I placed a gradient and threshold map the images (with cool hues on the top half, and warm hues on the bottom half to represent the positive and the negative sides), and I used churchy typeface for the the thoughts and prayers portion, but a grunge typeface for the crisis portion.
                    </p>
                    <div className="columns-1">
                        <img src="/deconstructivism/rough1.jpg" alt="rough 1" className="pr-4 pl-4 py-4"/>
                    </div>
                    <h1 className="text-[2rem] w-full pb-4 pt-2 px-4 text-white">
                        Rough 2: No home, No safety, No security
                    </h1>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For my second slogan, "No home, No safety, No security", I wanted to convey general discofort though negative imagery.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        Using images found on wikimedia commons, I found a picture of a roaring wildfire to represent a lack of safety, as well as an open padlock with a pair of keys to represent a lack of security, and finally, to represent No home, I found a picture of a tent.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For this rough draft, I really wanted to convey an eerie and uncomfortable vibe, so I put the background wildfire through a black and white gradient, and the tent, padlock, and keys through dark green gradient mask.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For this purely negative design, I wanted it to look like negativity is everywhere, so I spread out the negative imagery equally throughout the entire poster with the text filling in the gaps in a radial layout.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        To further convey the desired grunge look, I used a very thick, bold typeface for the slogan.
                    </p>
                    <div className="columns-1">
                        <img src="/deconstructivism/rough2.jpg" alt="rough 2 - No home, No safety, No security" className="pr-4 pl-4 py-4"/>
                    </div>
                    <h1 className="text-[2rem] w-full pb-4 pt-2 px-4 text-white">
                        peer critique and final design
                    </h1>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        During the peer critique session, it became clear that my first rough was more visually compelling, but I was advised to add a gradient on the right to provide a better transition between the two different section.
                         I was also advised to move the middle text box up slightly to increase a gap between it and the word crisis for improved readability. 
                         Additionally, my peers suggested that I remove the churchy text and replace it with the grunge typeface that I had previously used but instead of the black color, use the same yellow as that of the sleeping man on the bench.
                        To tie it all together, they thought I should sprinkle in some additional statistics about the housing crisis throughout the poster.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        I agreed with all of the suggestions so Implemented them into my final poster.
                        Overall, I am very happy with how my final poster turned out because it illustrates how extreme housing inequality is today, and it shows that it is a true crisis, that isn't getting resolved as people just sit around hoping that it gets better. 
                        I think the combination of transitional, and random typeographic layout helps to illustrate how chaotic, and unstable the problem is. I also love that it demonstrates clear hierarchy, but with an unsettling vibe to match the problem at hand.
                    </p>
                    <img src="/deconstructivism/final_poster.jpg" alt="final deconstructivism activism poster" className="px-4 pb-4"/>

                </div>
                <div className="flex w-full flex-row justify-between">
                    <Link href="/Portfolio/media/MagazineLayout" className="pl-15 sm:pl-20 text-lg">&#10094; Previous Project</Link>
                </div>
            </div>
        </>
    )
}