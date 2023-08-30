import Project from "./project";

export default function () {

    const projectInfo = {
        shop: {
            title: "Board Game E-Shop",
            description: "Responsive frontend for a mock online shop that sells board games. Generates unique individual pages using React Router.",
            screenshot: "/boardgame-shop.png",
            skills: ["React", "Javascript", "CSS", "HTML"]
        }
    }

    return (
        <div className="project-section">
            <Project title={projectInfo.shop.title} description={projectInfo.shop.description} screenshot={projectInfo.shop.screenshot} skills={projectInfo.shop.skills}/>
        </div>
    )
}