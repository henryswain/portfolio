import NavBar from "@/app/components/NavBar"
import Link from "next/link"
export default function page() {
    return (
        <>

            <div className="flex gap-4 flex-col relative justify-between items-center bg-gradient">
                <NavBar/>
                <div className="bg-teal-950 rounded-lg w-85 md:w-180">
                    {/* title of project */}
                    <h1 className="text-[3rem] w-full pb-4 pt-2 px-4 text-white">
                        Type Specimin Poster
                    </h1>
                    <hr className="text-white mx-4 py-2"></hr>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        My ultimate goal for this project in my graphic design class was to create a teaching poster to teach my classmates about the typeface "Rockwell".
                        I needed to ensure this poster was both clean and visually compelling using a modular grid in order to catch viewers eyes at a distance 
                        and keep them engaged for the entirety of the informational content.
                    </p>
                    {/* research */}
                    <h2 className="text-[2rem] pb-4 w-full text-wrap text-white px-4">
                        Research:
                    </h2> 
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        First I needed to do research on the typeface assigned to me "Rockwell". I used gemini to get a general summary of key information about Rockwell, including
                        who created it and when, its origin/history, and its qualities and characteristics. After fact checking gemini's bulleted output, I began to search for an appropriate color scheme. 
                        to do this, I simply googled common graphic design styles in 1934 - 1934 was chosen because rockwell was created in 1934. The common finding was that "art deco" was common during that time period.
                        upon finding a list of common art deco colors in an artical by <Link href="https://www.adobe.com/uk/express/learn/blog/all-about-art-deco">adobe</Link>, I began assembing two completely separate rough drafts.
                    </p>
                    {/* two roughs */}
                    <h2 className="text-[2rem] pb-4 w-full text-wrap text-white px-4">
                        Development of two rough drafts:
                    </h2> 
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        The purpose of having multiple rough drafts was to give me more options and flexibility when choosing the path forward for my final product.
                        I would discard 1 rough and pursue the other based on feedback from peer critique regarding what worked, what didn't, and which rough holds the most potential.
                    </p>  
                    
                    {/* rough 1 */}
                    <p className="text-white pb-4 px-4 w-full text-[1.5rem]">
                        Rough 1
                    </p>
                    <img src="/roughs/rough-2.png" className="w-full pb-4 px-4" alt="my first rough draft"></img>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For my second rough draft, as suggested by my professor, I used a distinct letter form - I chose the letter A due to its unique serif at its apex - from the typeface and enlarged it to an extreme extent. This would be the main feature that would catch the viewer's eye from a distance.
                        I then brought the viewer's eye to the top left via the font name in a large font size and bold weight. From there, I let the bolded headers, slightly smaller subheaders, and plain text guide the viewers eye through the remainder of the hierarchy. The two overarching categories separated by the subheaders include
                        its origin and history, as well as its qualities and characteristics.
                    </p>  
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For the remainder of the design, I created geometric shapes behind the text to further group the text based on similarity. I then colored them appropriately based on the hex codes I found during research.
                        To ensure proper contrast between the colored shapes and the text for proper readability, I left the text black or dark for the lighter colored geometric shapes, but I inverted the text color and made it
                        lighter or white for background colors that were more dark.
                    </p> 
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        Overall I liked this design because It had clear primary and secondary hooks, as well as hierarchy, but I didn't like that it didn't feel particularly dynamic.
                    </p>                    
                    <h2 className="text-[1.5rem] pb-4 px-4 text-white">
                        Rough 2
                    </h2>
                    <img src="/roughs/rough-1.png" className="w-full pb-4 px-4" alt="my second rough draft"></img>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For this design, I wanted to attract the viewer to the name of the font first, then direct them to the font's origin and history, and lastly, to the qualities and characteristics of the font.
                        To draw the viewer to the name of the font first, I used a very large font size, and a bold weight. To direct the viewer to the top of the page with the origin and history, I positioned part of the font name 
                        at an angle such that it pointed to the top left of the page - a typical starting point when reading in western culture. From there I directed the viewer along a curve contain "origin and history" - a header 
                        indicating the subject matter - from the top left to just above the bolded font name. Along that path, I included three main blocks of text, each with their own subheader in a hierarchical order. From there,
                        I let the viewer proceed to the bottom right via standard western reading practices stopping to catch different qualities and characteristics of the font, each with its own subheading. 
                    </p>  
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For the remainder of the design, I created geometric shapes behind the text to further group the text based on similarity. I then colored them appropriately based on the hex codes I found during research.
                        To ensure proper contrast between the colored shapes and the text for proper readability, I left the text black or dark for the lighter colored geometric shapes, but I inverted the text color and made it
                        lighter or white for background colors that were more dark.
                    </p>        
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        Overall, I liked this design because it seemed the most visually compelling with clear dynamism. However, I didn't like that it felt particularly towards the top, with some information feeling forced.
                    </p>

                    {/* feedback */}
                    <p className="text-white pb-4 px-4 w-full text-[2rem]">
                        Feedback on roughs
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        The general feedback from my peers indicated that rough 1 was more compelling. I was encouraged to swap the yellow and silver toward the bottom to help direct the viewers eye more to the 
                        name of the font because our eyes are drawn more to lighter colors than darker colors. I was also encouraged to remove "released in 1934" altogether and keep just "1934" - but increase the font size
                        and place it in the square section just to the top right of "WELL" from "ROCKWELL".
                    </p> 
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        My professor then noticed that something seemed off about my color scheme, and he didn't think it really matched the art deco style that I was going for. He thought colors in art deco were more muted and less saturated,
                        and a quick google search confirmed this. It was then suggested that I install the chrome extension "ColorZilla". This extension worked wonders and allowed me to get the exact hex codes of any color from any image on google.
                        I used it to get the hex codes of an art deco color palette that I found particularly attractive.
                    </p> 
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        My professor also thought the curvature in the green didn't quite align with art deco since art deco focuses more on clean geometric shapes.
                    </p> 
                    <p className="text-white pb-4 px-4 w-full text-[2rem]">
                        Final Poster
                    </p>
                    <img src="/final typographic poster.png" alt="final typographic poster" className="w-full pb-4 px-4"/>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        My final typographic poster kept the best parts of my initial rough draft, but it also incorporated all the feedback that I received.
                        Overall, I'm very happy with the final product, and I think it does a great job catching the viewer's eye at a distance, and keeping their attention through the rest
                        of the poster. I did this through the use of a clean design using a guttered modular grid with margin, a clear primary and and secondary hook, with a color scheme and style 
                        that matched art deco, a common style from the time period of Rockwell's origin. 
                    </p> 
                </div>
                <Link href="/Portfolio/media/AmbiguousLogo" className="flex w-full justify-start pl-15 sm:pl-20 text-lg pb-12 pt-8">&#10094; Previous Project</Link>
            </div>
          
        </>
    )
}