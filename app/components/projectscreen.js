import ProjectHolder from "./projectholder"

export default function ProjectScreen () {
    return (
        <div  className='background h-screen-double w-screen grid grid-cols-3 grid-rows-6 items-center justify-items-center' id="projects-screen">
            <div className='col-span-3 text-white text-4xl font-serif'>Projects</div>
            <ProjectHolder picUrl={"/boardgame-shop.png"} 
                description={"A fully functioning online shopping front end designed in React, Javascript, HTML, and CSS. It uses local props to store a checkout cart."}
                url={"https://reesesorrell.github.io/shopping-cart/"} 
                code={"https://github.com/reesesorrell/shopping-cart"}
                inverted={false}/>
        </div>
    )
}