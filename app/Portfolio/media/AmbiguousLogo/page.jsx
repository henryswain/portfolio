import NavBar from "@/app/components/NavBar"
import Link from "next/link"
export default function page() {
    return (
        <>
            <div className="flex gap-8 flex-col relative justify-between items-center bg-gradient pb-8">
                <NavBar/>
                <div className="bg-teal-950 rounded-lg w-85 md:w-180">
                    <h1 className="text-[3rem] w-full pb-4 pt-2 px-4 text-white">
                    Ambiguous Logo
                    </h1>
                    <hr className="text-white mx-4 py-2"></hr>
                    <h2 className="text-[2rem] w-full pb-2 text-white px-4">Research and Ideation</h2>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        For my first project in my graphic desigin class, I have been tasked with designing a logo for a restaurant based on a historical figure.
                        I have been instructed to design this logo using creative visual ambiguity - combining two balanced forms into one to allow for multiple interpretations of the same object - while maintaining
                        balance and an appropriate feel.
                    </p>
                    <p className="pb-4 w-full text-wrap text-white px-4">
                        In the beginning, I select my restaurant type and historical figure (mexican restaurant and Neil Armstrong respectively). 
                        I then began my research on my selections to find related iconic images, facts, and nouns that may be useful when designing my logo.
                        When brainstorming nouns, I created mind maps using Miro boards.
                    </p>
                    <h2 className="text-[1.5rem] pb-4 w-full text-wrap text-white px-4">
                        Iconic images of Neil Armstrong:
                    </h2>
                    {/* icon neil armstrong images */}
                    <div className="columns-1 md:columns-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Neil_Armstrong_pose.jpg" alt="Neil Armstrong portrait" className="pl-4 pr-4 pb-4 md:pb-0 md:pr-0"/>
                    <img src="https://cdn.britannica.com/92/118692-050-194A0468/Neil-Armstrong-Apollo-11-Michael-Collins-Edwin.jpg" alt="Neil Armstrong portrait with his crew" className="pr-4 pl-4 md:pl-0"/>
                    <img src="https://hodinkee.imgix.net/uploads/article/hero_image/778/_24_28KGrHqF_2C_21lsE9JRmSbyyBPo91_217Zc_21_7E_7E60_57.JPG?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=2400" alt="Neil Armstrong portrait on moon" className="pr-4 py-4 pl-4 md:pl-0"/>
                    </div>
                    <h2 className="text-[1.5rem] pb-4 px-4 text-white">
                        Images of Mexican Foods:
                    </h2>
                    {/* images of mexican foods */}
                    <div className="columns-1 md:columns-2">
                        <img src="https://images.unsplash.com/photo-1569692062823-f1196218f0a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFqaXRhc3xlbnwwfHwwfHx8MA%3D%3D" alt="fajita" className="pl-4 pr-4 md:pr-0 pb-4"/>
                        <img src="https://images.unsplash.com/photo-1632739186171-b2a442047bcd?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="margarita" className="pl-4 pr-4 md:pr-0 pb-4" />
                        <img src="https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="quesidilla" className="pl-4 pr-4 md:pr-0 pb-4"/>
                        <img src="https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNwYW5pc2glMjByaWNlfGVufDB8fDB8fHww" alt="spanish rice" className="pl-4 pr-4 md:pr-0 pb-4"/>
                        <img src="https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="refried beans" className="pl-4 pr-4 md:pr-0 pb-4"/>
                        <img src="https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D" alt="taco" className="pr-4 pl-4 md:pl-0 pb-4"/>
                        <img src="https://images.unsplash.com/photo-1684353763409-9567253bd218?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hY2hvc3xlbnwwfHwwfHx8MA%3D%3D" alt="nachos" className="pr-4 pl-4 md:pl-0 pb-4" />
                        <img src="https://plus.unsplash.com/premium_photo-1673018249121-b7618b433466?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5jaGlsYWRhfGVufDB8fDB8fHww" alt="enchilada" className="pr-4 pl-4 md:pl-0 pb-4"/>
                        <img src="https://images.unsplash.com/photo-1585238342107-49a3cdace47f?q=80&w=934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burrito" className="pr-4 pl-4 md:pl-0 pb-4"/>
                        <img src="https://images.unsplash.com/photo-1611942766601-12d3aedc6c2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpcHMlMjBhbmQlMjBzYWxzYXxlbnwwfHwwfHx8MA%3D%3D" alt="chips and salsa" className="pr-4 pl-4 md:pl-0 pb-4"/>
                    </div>
                    <h2 className="text-[1.5rem] pb-4 w-full text-white px-4">
                        Facts about Neil Armstrong:
                    </h2>
                    {/* facts about niel armstrong */}
                    <ul className="pb-4 px-8 list-disc w-full text-white">
                        <li>Commander of apollo 11, where he became the first man on the moon</li>
                        <li>Commander of gemini 8, where he successfully performed the first space docking between spacecraft.</li>
                        <li>Pilot for us navy during korean war</li>
                        <li>He was a Test pilot</li>
                        <li>Received the Congressional Space Medal of Honor.</li>
                        <li>Was awarded the presidential medal of freedom</li>
                        <li>Received the congressional gold medal for distinguished astronauts</li>
                        <li>Was inducted into astronaut hall of fame</li>
                        <li>He obtained his pilots licence before he obtained his drivers licence</li>
                        <li>Engineer</li>
                        <li>Professor of engineering at university of cincinnati</li>
                    </ul>
                    
                    <h2 className="text-[1.5rem] pb-4 px-4 text-white">
                        Mind maps:
                    </h2>

                    <p className="text-white pb-4 px-4 w-full">
                        finaly, I put my research together by creating two mind maps (one for Niel Armstrong, and one for a mexican restaraunt)
                    </p>
                    {/* mind maps from miro linked on iframe */}
                    <img src="/mind-maps/armstrong-mind-map.png" className="pb-2 px-4"></img>
                    <img src="/mind-maps/mexican-restaraunt-mind-map.png" className="pb-2 px-4"></img>

                    <hr className="my-4 text-white mx-4"></hr>
                    <h2 className="text-[2rem] text-white px-4">Conceptualization</h2>
                    <p className="text-[1rem] pb-4 px-4 text-white">
                        With the two mind maps complete, I began making basic thumbnail sketches of Ideas on ways to combine the objects to make creative visually ambiguous designs using Adobe Fresco.
                        This was very challenging for me because the majority of the nouns from my mind maps for me to get inspiration from weren't particularily visually complex
                            (fajita, burrito, enchilada, etc.), forcing me to dismiss those from the mind map, which left me with far fewer options.
                            In the future, to make this step easier, I plan to take more time and care in the mind map to generate nouns that could easily be iconified.
                    </p>
                    <div className="columns-1 md:columns-2">
                        <img src="/thumbnail-sketches/partial-positive.png" className="pl-4 pr-4 md:pr-0 pb-4"></img>
                        <img src="/thumbnail-sketches/full-positive.png" className="pl-4 pr-4 md:pr-0 pb-4"></img>
                        <img src="/thumbnail-sketches/open-negative.png" className="pr-4 pl-4 md:pl-0 pb-4"></img>
                        <img src="/thumbnail-sketches/closed-negative.png" className="pr-4 pl-4 md:pl-0 pb-4"></img>
                    </div>
                    <hr className="my-4 text-white mx-4"></hr>
                    <h2 className="text-[2rem] text-white px-4">Iteration</h2>
                    <p className="text-[1rem] pb-4 px-4 text-white">
                        I decided to move forward with my space helmet sombrero icon because the parts seemed the least generic in how they
                            represented the restaraunt and historical figure (a sombrero is clearly a mexican hat, and Neil Armstrong obviously wore a space
                            helmet on the mission he is most famously known for), and it most clearly represents both at the same time.
                        Upon making that decision, I made a series of iterations to refine my favorite idea. For each iteration, I took inspiration from previously created
                        icons on flaticon.com, and I wasn't so much focused on getting a better icon as I was on geting a variety of options to chose from in the next step in the process.
                    </p>
                    <div className="columns-1 md:columns-2">
                        <img src="/iterations/sombrero_helmet_0.png" className="pl-4 pr-4 md:pr-0 pb-4"></img>
                        <img src="/iterations/sombrero_helmet_1.png" className="pl-4 pr-4 md:pr-0 pb-4"></img>
                        <img src="/iterations/sombrero_helmet_2.png" className="pl-4 pr-4 md:pr-0 pb-4"></img>
                        <img src="/iterations/sombrero_helmet_3.png" className="pr-4 pl-4 md:pl-0 pb-4"></img>
                        <img src="/iterations/sombrero_helmet_4.png" className="pr-4 pl-4 md:pl-0 pb-4"></img>
                        <img src="/iterations/sombrero_helmet_5.png" className="pr-4 pl-4 md:pl-0 pb-4"></img>
                    </div>
                    <p className="text-[1rem] pb-4 px-4 text-white">
                        My favorite iteration turned out to be a cross between my original idea, and the one most similar to it (the same idea, but with a bit more curvature).
                        I liked this combination the most because the sombrero looked the most like a sombrero and the helmet looked the most like a helmet.
                        I cleaned this combination of ideas into a vector drawing using Adobe Illustrator.
                    </p>
                    <p className="text-[1rem] pb-4 px-4 text-white">
                        I also added type to balance the logomark and fit the vibe of both the restaraunt and the historical figure.
                        I chose the bold version of the font "simply rounded" from DaFont because its rounded nature fits the warm vibe of a mexican restaraunt 
                        as well as the calm, humble nature of Neil Armstrong, and its bold weight is properly balanced with the logo itself.
                    </p>
                    <p className="text-[1rem] pb-4 px-4 text-white">
                        However, I added my own twist to the font by making some of the ends of the letters of the restaunt name curve to a sharp point. 
                        I did this so that in addition to representing the calm, humble, and warm vibe as described above, I was simultaniously representing the 
                        tension surounding the cold war, as well as the spicyness associated with mexican food.
                    </p>
                    <div className="columns-1">
                        <img src="/iterations/logo_with_type_peer_critique.png" alt="my finilized version that I took to peer critique" className="px-4 py-4"/>
                    </div>
                    <p className="text-[1rem] pb-2 px-4 text-white">
                        Upon presenting my work to peer critique, I was given one main piece of advice, and two ways to accomplish the solution
                    </p>
                    <ul className="list-disc pl-8 text-white">
                        <li>I was told that the top of the sombrero was too pointy to accurately depict the space helmet since space helmets are very rounded</li>
                        <li>to fix it, it was suggested that I should make my sombrero slightly shorter, and slightly widen the top.</li>
                        <li>Since sombreros are pointy, it was recognized that this modification would make the sombrero look slightly less like a sombrero, 
                            so my peers recommmended that I add relevant color to both parts to make them stand out</li>
                    </ul>
                    <hr className="my-4 text-white mx-4"></hr>
                    <h2 className="text-[2rem] text-white px-4">Finalization</h2>
                    <p className="text-[1rem] py-2 px-4 text-white">
                        I am confident that this final version of my logo is great for a number of reasons. My design clearly represents 
                        partial positive form ambiguity with the helmet clearly representing Niel Armstrong, and the sombrero clearly representing a Mexican restaraunt. 
                        Both parts clearly represent what they intend to without disrupting the clarity of the other part. I didn't like several of my original thumbnails as much 
                        because both the object representing Neil Armstrong and the object representing a Mexican restaurant did so in a much more broad way and it wasn't as obvious
                            what the parts were supposed to represent. The sombrero/helmet was the most clear out of all the thumbnails and iterations.
                            I received quality feedback during the peer critique that I implemented to enhance my design (I made the top of the sombrero shorter to make
                            the space helmet more clearly represent a space helmet, and I added color to make each part stand out as what it was).  
                    </p>
                    <p className="text-[1rem] py-2 px-4 text-white">
                        I chose a font “Simply Rounded” from DaFont with a modification to represent both Niel Armstrong's personality and his historical time period,
                            in addition to the nature of Mexican restaurants, as well as their food. The rounded nature corresponds to the friendly, warm nature of Mexican restaurants
                            as well as Armstrong's calm, humble personality. The points I added to the font represent the tension during the cold war, as well as the spicy nature of the food.
                            I chose a bold weight and positioned the name of the restaurant (Armstrongs Enchiladas) below the logo to ensure proper balance.
                    </p>
                    <div className="columns-1">
                        <img src="/iterations/ArmstrongsEnchiladas.png" alt="final logo paired with type"  className="px-4 py-4"/>
                    </div>
                </div>
                <div className="flex w-full flex-row justify-between">
                    <Link href="/Portfolio/media/UAYPromo" className="pl-15 sm:pl-20 text-lg">&#10094; Previous Project</Link>
                    <Link href="/Portfolio/media/TypographicPoster" className="pr-15 sm:pr-20 text-lg">Next Project &#10095;</Link>
                </div>
            </div>
        </>
    )
}