import Project from "./project";

export default function () {

    const projectInfo = {
        shop: {
            title: "Board Game E-Shop",
            description: "Responsive frontend for a mobile-friendly online shop web app that sells board games. Generates unique individual pages using React Router.",
            screenshot: "/boardgame-shop2.png",
            skills: ["React", "Javascript", "CSS", "HTML"],
            link: "https://reesesorrell.github.io/shopping-cart/"
        }
    }

    return (
        <div className="project-section">
            <Project title={projectInfo.shop.title} description={projectInfo.shop.description} screenshot={projectInfo.shop.screenshot} skills={projectInfo.shop.skills} link={projectInfo.shop.link}/>
            <Project title={projectInfo.shop.title} description={projectInfo.shop.description} screenshot={projectInfo.shop.screenshot} skills={projectInfo.shop.skills} link={projectInfo.shop.link}/>
        </div>
    )
}