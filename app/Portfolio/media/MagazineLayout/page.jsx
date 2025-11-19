import NavBar from "@/app/components/NavBar"
import Link from "next/link"
export default function page() {
    return (
        <>
            <div className="flex gap-8 flex-col relative justify-between items-center bg-gradient">
                <NavBar/>
                <div className="bg-teal-950 rounded-lg w-85 md:w-180">
                    <h1 className="text-[3rem] w-full pb-4 pt-2 px-4 text-white">
                        Magazine Feature Article Layout
                    </h1>
                    <hr className="text-white mx-4 py-2"></hr>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For this magazine article layout project in my graphic design class, I have been tasked with designing a visually compelling lead spread for 
                        a feature article about drone use in precision agriculture.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        In the beginning, I was taught several visually compelling techniques, including but not limited to extreme magnification, type as object, type as illustration, 
                        playing with scale, using a play on words, and more.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        After reading the article, I began brainstorming titles focused around my chosen angle - "the shift from military to agricultural drones".
                         I also began brainstorming various objects, symbols, and metaphors to represent the article for potential use in my design.
                    </p>
                    <ul className="pb-4 px-8 list-disc w-full text-white">
                        <li>Drones: from military use to precision agriculture</li>
                        <li>The evolution of a drone: From war to farm</li>
                        <li>The new use for drones: Precision agriculture</li>
                    </ul>
                    <div className="columns-1 md:columns-2">
                        <img src="/magazine/objects-symbols-signs.png" alt="15 brainstormed objects and symbols magazine lead spread" className="pr-4 pl-4 py-4 md:pr-2"/>
                        <img src="/magazine/metaphores.png" alt="5 brainstormed metaphors magazine lead spread" className="pr-4 py-4 pl-4 md:pl-2"/>
                    </div>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        Using the the objects, I then created 4 basic sketches, each utilizing a different technique.
                    </p>
                    <div className="columns-1 md:columns-2">
                        <img src="/magazine/sketches/sketch1.png" alt="sketch 1" className="pr-4 pl-4 py-4 md:pr-2"/>
                        <img src="/magazine/sketches/sketch2.png" alt="sketch 2" className="pr-4 py-4 pl-4 md:pl-2"/>
                        <img src="/magazine/sketches/sketch3.png" alt="sketch 3" className="pr-4 pl-4 py-4 md:pr-2"/>
                        <img src="/magazine/sketches/sketch4.png" alt="sketch 4" className="pr-4 py-4 pl-4 md:pl-2"/>
                    </div>

                    <p className="pb-4 w-full text-wrap text-white px-4">
                        After picking my favorite sketch, since finding photos online for it would not be possible, and my design was too detailed for me to accurately draw,
                        I began a series of prompts with Generative AI image models to get the pieces for my design. after some very unsuccessfull chats with OpenAI's Dall-E, 
                        and a few moderately successfull chats with google gemini, I had pieces that were close enough to be finished using photoshops built in AI (generative expand)
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        Chats used for generating drone image.
                    </p>
                    <ul className="pl-8 list-disc text-white pb-4">
                        <li>https://chatgpt.com/share/691d1e5c-c2a0-8007-86ea-d1da37593042</li>
                        <li>https://gemini.google.com/share/4d96483de0e9</li>
                        <li>https://gemini.google.com/share/8fc4fde00d00</li>
                        <li>https://chatgpt.com/share/691d1ebd-e968-8007-bc67-4af27503c065</li>
                        <li>https://gemini.google.com/share/8aebc7b80a68</li>
                        <li>https://gemini.google.com/share/bb007b17807f</li>
                    </ul>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        Chats used for generating farmland and warzone images.
                    </p>
                    <ul className="pb-4 pl-8 list-disc text-white">
                        <li>https://gemini.google.com/share/ef9641992530</li>
                        <li>https://gemini.google.com/share/8ba89ab66ae5</li>
                    </ul>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        After fine tuning the images with generative expand in photoshop and upscaling them to print size in web photoshop, 
                        I brought all the pieces together to make the lead spread in Adobe Indesign.
                    </p>
                    <img src="/magazine/lead spread.png" alt="final lead spread" className="px-4 pb-4"/>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        I really like my final design because it clearly shows that drones can be destructive in the military, but that they can also be used to improve agriculture. 
                        I like that since we read from left to right, we see it as starting with war, but looking to a more positive future. 
                        I also like dual-sided nature of the drone. While the assets are tailored to their different use cases, they are also angled to their appropriate page. 
                        Keeping the dual-sided drone front and center, and straddling the scene keeps the message clear, concise, and to the point.
                    </p>
                </div>
                <div className="flex w-full flex-row justify-between">
                    <Link href="/Portfolio/media/TypographicPoster" className="pl-15 sm:pl-20 text-lg pb-12 pt-8">&#10094; Previous Project</Link>
                </div>
            </div>
        </>
    )
}