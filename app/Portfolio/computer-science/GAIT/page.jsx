import NavBar from "@/app/components/NavBar"
import Link from "next/link"
import ProjectContent from "@/app/components/ProjectContent"
export default function page() {
    const title = "Interior Design AI Assistant"
    const linkText = "Interior Design AI Assistant"
    const link = "https://henryswain.github.io/interior-design-ai-assistant/"
    const projectType = "computer-science"
    const date = "December 2025"
    const description = (
            <div className="text-white text-sm mt-2">
                <p className="mb-4">
                    For ECE:5995 - Generative AI Tools (GAIT), I explored various Generative AI tools, experimenting with text, image, and music generation. Throughout this course, I created several smaller CLI projects that utilized a python backend. For the final project, I was the lead/main developer in a team of 4. Since the project requirements included an indepth project report and a video demonstration of the web app, my group members contributed heavily towards those aspects. One of my group members had basic experience with Express in NodeJS, so we worked together on the backend. I built a web app that combined multiple AI sources, including integrating several third party GenAI APIs.
                </p>
                <p className="mb-4">
                    I built the Interior Design AI Assistant as a simple three-page web app that uses multiple generative AI tools to analyze a user’s room and create a redesigned version of the space. I worked to ensure the web app was straightforward and accessable for users without design experience or technical knowledge. Users simply upload a photo, pick a vibe or style, and wait a few minutes for the system to build a realistic preview. The models work together to break down the room layout, understand the style the user wants, and generate a new version of the room based on those preferences. Everything updates automatically on the frontend so users can look through recommendations and switch between the before/after views without refreshing anything. Overall, the system is designed to take a complicated interior-design process and shrink it down into one quick, interactive workflow.
                </p>
                <div className="bg-white mb-4">
                    <img src="/gait/system-diagram.png" aria-label="diagram showing user flow">
                    </img>
                </div>
                <h3 className="text-teal-300 mb-2 text-2xl">Generative AI Tools used</h3>
                <strong className="mb-2 text-teal-300">LLM #1 - Claude via GitHub Copilot</strong>
                <p className="mb-2">
                    Claude, accessed through GitHub Copilot, was used throughout the development process to support the frontend logic, improve code readability, and help structure the app’s overall layout. It contributed heavily on the coding side by generating boilerplate functions, catching syntax issues, and speeding up repetitive parts of the workflow. It was also helpful for creating early drafts of the prompts we later refined. Although Claude does not directly interact with user inputs, it played an important role behind the scenes by making development faster and more organized.
                </p>
                <strong className="mb-2  text-teal-300">LLM #2 - OpenAI GPT Model</strong>
                <p className="mb-2">
                    The OpenAI GPT model serves as the core reasoning engine of the system and plays a central role in coordinating the design pipeline. After the uploaded room image is analyzed, the extracted room description is passed to GPT along with the user’s selected vibe, preferred colors, budget, and any additional notes. Using this combined input, the model performs high-level interpretation and decision-making rather than simple text generation. GPT generates a structured room analysis, interprets the chosen style in the context of the actual space, expands the color palette into a usable design direction, and produces detailed décor and furniture recommendations. These recommendations are generated directly in a structured HTML format, allowing the frontend to render the results without additional parsing or formatting steps. The generated HTML includes item names, placement suggestions, reasoning, and estimated price ranges. Before being displayed, the HTML output goes through a validation step where GPT checks for formatting issues or inconsistencies and returns a cleaned, display-ready version. This validated content powers the Description Page and serves as the foundation for the visualization step. In addition, the GPT model prepares detailed descriptive prompts that are forwarded to the image generation model, ensuring the redesigned room image aligns with both the physical constraints of the space and the user’s selected aesthetic. By acting as the system’s primary reasoning layer, GPT connects visual analysis, user intent, and final outputs into a single, cohesive design flow.
                </p>
                <strong className="mb-2 text-teal-300">ImageGen Model - Replicate</strong>
                <p className="mb-6">
                    The image generation model is responsible for creating the photorealistic redesigned version of the user’s room. It takes the original photo plus the user’s chosen style and color palette and produces a realistic “after” image while keeping the room’s layout, walls, windows, and proportions accurate. This model brings the biggest visual impact for the user, since it directly shows how the recommended style could look in their space. Replicate provides strong image-editing and image-to-image generation capabilities, making it well-suited for producing realistic room redesigns while preserving the original spatial layout.
                </p>
                
                
                <strong className="text-2xl text-teal-300">Challenges Encountered</strong>
                <p className="mt-2 mb-2">
                    One challenge involved keeping the GPT outputs consistent and predictable for frontend rendering. Since the design recommendations were returned as structured HTML, even small changes in prompt wording could affect formatting or section organization. This required careful prompt refinement and an additional validation step to ensure the generated HTML was clean, complete, and safe to display directly on the Description Page without breaking the layout.
                </p>
                <p className="mb-2">
                    Another challenge was testing individual components of the system in isolation. Because each stage of the pipeline depended on the output of the previous step, debugging a single issue often required running the entire workflow from image upload through final visualization. This significantly slowed iteration, as each step in the GAIT pipeline involved heavy computation and resulted in several minutes of wait time per test.
                </p>
                <p className="mb-6">
                    Debugging was further complicated by issues with backend logging. At one point, expected console.log outputs were not appearing, which made it difficult to identify the source of certain errors. This meant that after each attempted fix, we had to wait through a full pipeline run without clear feedback on whether the change was effective. The issue was eventually resolved by terminating all active Node.js instances and restarting the application, but identifying this solution required substantial trial and error and additional assistance from Claude via GitHub Copilot.
                </p>

                <strong className="text-2xl text-teal-300">Ethical Considerations</strong>
                <p className="mt-2 mb-2">
                    This project raises several ethical considerations related to the use of generative AI in creative decision-making. One important concern is accuracy and user trust. Because the redesigned images and décor recommendations are generated by AI, they are approximations rather than exact predictions. Lighting, scale, colors, and furniture proportions may differ in real life, and there is a risk that users could interpret the outputs as guaranteed results. To address this, the project treats all generated designs as inspiration and mockups rather than final design solutions, and emphasizes that real-world outcomes may vary.
                </p>
                <p className="mb-2">
                    Another ethical consideration is transparency. Users should understand that the recommendations and images are produced by AI models and not by professional interior designers. Presenting the tool as an assistant rather than an authority helps avoid misleading users into over-relying on the system for design decisions that may involve significant financial cost. This is especially important when suggesting décor items or style changes that could influence purchasing behavior.
                </p>
                <p className="mb-2">
                    There are also considerations related to bias and aesthetic norms. Generative models are trained on large datasets that may reflect dominant design trends or culturally specific styles. As a result, some styles, layouts, or cultural preferences may be underrepresented or interpreted inaccurately. While this project does not attempt to fully solve this issue, it allows users to input their own preferences, notes, and constraints to better align outputs with individual needs rather than enforcing a single “ideal” aesthetic.
                </p>
                <p className="mb-4">
                    Finally, privacy and data handling are important ethical factors. The system processes personal room photos, which may contain private living spaces and personal belongings. The project assumes that uploaded images are used only for generating design outputs and are not stored or reused beyond the scope of the session. Even in a prototype setting, acknowledging the sensitivity of personal images highlights the importance of responsible data handling in any future expansion of the application.
                </p>

            </div>
            )
    const screenshots = [
        {
            src: "/gait/instructions.png",
            width: 16,
            id: 1
        },
        {
            src: "/gait/text-input.png",
            width: 16,
            id: 2
        },
        {
            src: "/gait/photo-input.png",
            width: 16,
            id: 3
        },
        {
            src: "/gait/recomendations.png",
            width: 16,
            id: 4
        },
        {
            src: "/gait/visualization-before-top.png",
            width: 16,
            id: 5
        },
        {
            src: "/gait/visualization-before-bottom.png",
            width: 16,
            id: 6
        },
        {
            src: "/gait/visualization-after-top.png",
            width: 16,
            id: 7
        },
        {
            src: "/gait/visualization-after-bottom.png",
            width: 16,
            id: 8
        },
    ]
    console.log("link: ", link)
    return (
        <>
            <div className="flex gap-8 flex-col justify-between items-center bg-gradient pb-8">
                <NavBar/>
                <ProjectContent 
                    description={description} 
                    link={link} 
                    linkText={linkText} 
                    projectType={projectType} 
                    title={title} 
                    screenshots={screenshots} 
                    date={date} 
                />
                <Link href="/Portfolio/computer-science/CareerQuest" className="flex w-full justify-end pr-15 sm:pr-20 text-lg"> Next Project &#10095;</Link>           
            </div>
        </>
    )
}