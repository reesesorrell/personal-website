import ProjectSection from "./projectsection"

export default function() {
    return(
        <div className="right-side pr-32 pt-24">
            <div className="about-me grey-color mb-24">
                <div className="mb-6">
                    In 2021, I discovered my passion for the world of programming, coding, and technology as a whole. Every since then I haven't been able to stop learning, growing, and now pursuing my interests through college studies where I get to take cool classes like <em>Data Structures</em> and <em>Computer Organization</em>.
                </div>
                <div className="mb-6">
                    My main focus these days is succeeding in my classes while also doing <em>web development</em> and building cool sites like (hopefully) this one. I'm also in the process of <em>learning backend databases like MongoDB and SQL</em>.
                </div>
                <div className="mb-6">
                    When I’m not at the computer, I’m usually swimming laps, lifting weight, hanging out with my amazing girlfried, or rolling it down in <div className="tft inline"><em>Teamfight Tactics</em></div>.
                </div>
            </div> 
            <ProjectSection />
        </div>
    )
}