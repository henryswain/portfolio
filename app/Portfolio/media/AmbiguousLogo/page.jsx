
export default function page() {
    return (
        <>
            <div className="bg-gradient-ambiguous-logo sm:bg-gradient-ambiguous-logo-sm md:bg-gradient-ambiguous-logo-md">
                <div className=" grid grid-cols-12">
                    <h1 className="text-[3rem] py-8 col-start-3 col-span-7">
                       Ambiguous Logo
                    </h1>
                    <p className="pb-4 col-start-3 col-span-7">
                         For my first project in my graphic desigin class, I have been tasked with designing a logo for a restaurant based on a historical figure.
                        I have been instructed to design this logo using creative visual ambiguity with two balanced forms while maintaining an appropriate feel.
                    </p>
                    <p className="pb-4 col-start-3 col-span-7">
                        In the beginning, I select my restaurant type and historical figure (mexican restaurant and Neil Armstrong respectively). 
                        I then began my research on my selections to find related iconic images, facts, and nouns that may be useful when designing my logo.
                        When brainstorming nouns, I created mind maps using Miro boards.
                    </p>
                    <h2 className="text-[2rem] pb-4 col-start-3 col-span-7">
                        Iconic images of Neil Armstrong:
                    </h2>
                    {/* icon neil armstrong images */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Neil_Armstrong_pose.jpg" alt="Neil Armstrong portrait" className="mb-2 col-start-3 col-span-8"/>
                    <img src="https://cdn.britannica.com/92/118692-050-194A0468/Neil-Armstrong-Apollo-11-Michael-Collins-Edwin.jpg" alt="Neil Armstrong portrait with his crew" className="mb-2 col-start-3 col-span-8"/>
                    <img src="https://hodinkee.imgix.net/uploads/article/hero_image/778/_24_28KGrHqF_2C_21lsE9JRmSbyyBPo91_217Zc_21_7E_7E60_57.JPG?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=2400" alt="Neil Armstrong portrait on moon" className="mb-2 col-start-3 col-span-8"/>
                    <h2 className="text-[2rem] pb-4 col-start-3 col-span-7">
                        Facts about Neil Armstrong:
                    </h2>
                    {/* facts about niel armstrong */}
                    <ul className="pb-4 pl-8 list-disc col-start-3 col-span-7">
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
                    <h2 className="text-[2rem] pb-4 col-start-3 col-span-7">
                        Images of Mexican Foods:
                    </h2>
                    {/* images of mexican foods */}
                    <img src="https://images.unsplash.com/photo-1569692062823-f1196218f0a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFqaXRhc3xlbnwwfHwwfHx8MA%3D%3D" alt="fajita" className="pb-1 pr-1 col-start-3 col-span-4"/>
                    <img src="https://images.unsplash.com/photo-1632739186171-b2a442047bcd?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="margarita" className="pb-1 pl-1 col-start-7 col-span-4" />
                    <img src="https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="quesidilla" className="py-1 pr-1 col-start-3 col-span-4"/>
                    <img src="https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNwYW5pc2glMjByaWNlfGVufDB8fDB8fHww" alt="spanish rice" className="py-1 pl-1 col-start-7 col-span-4"/>
                    <img src="https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="refried beans" className="py-1 pr-1 col-start-3 col-span-4"/>
                    <img src="https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D" alt="taco" className="py-1 pl-1 col-start-7 col-span-4"/>
                    <img src="https://images.unsplash.com/photo-1684353763409-9567253bd218?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hY2hvc3xlbnwwfHwwfHx8MA%3D%3D" alt="nachos" className="py-1 pr-1 col-start-3 col-span-4" />
                    <img src="https://plus.unsplash.com/premium_photo-1673018249121-b7618b433466?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5jaGlsYWRhfGVufDB8fDB8fHww" alt="enchilada" className="py-1 pl-1 col-start-7 col-span-4"/>
                    <img src="https://images.unsplash.com/photo-1585238342107-49a3cdace47f?q=80&w=934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burrito" className="pb-2 pt-1 pr-1 col-start-3 col-span-4"/>
                    <img src="https://images.unsplash.com/photo-1611942766601-12d3aedc6c2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpcHMlMjBhbmQlMjBzYWxzYXxlbnwwfHwwfHx8MA%3D%3D" alt="chips and salsa" className="pb-2 pl-1 col-start-7 col-span-4" />
                    <h2 className="text-[2rem] pb-4 col-start-3 col-span-6">
                        Mind maps:
                    </h2>
                    {/* mind maps from miro linked on iframe */}
                    <iframe 
                        height="432" 
                        src="https://miro.com/app/live-embed/uXjVJIveGH8=/?embedMode=view_only_without_ui&moveToViewport=-675,-309,1345,704&embedId=1421076456" 
                        allow="fullscreen; clipboard-read; clipboard-write" 
                        allowFullScreen
                        className="pb-4 w-full col-start-3 col-span-8"
                    />
                    <iframe 
                        height="432" 
                        src="https://miro.com/app/live-embed/uXjVJJl_KBY=/?embedMode=view_only_without_ui&moveToViewport=-717,-439,1907,884&embedId=692410027419" 
                        allow="fullscreen; clipboard-read; clipboard-write" 
                        allowFullScreen
                        className="pb-4 w-full col-start-3 col-span-8"
                    />
                </div>
            </div>
        </>
    )
}