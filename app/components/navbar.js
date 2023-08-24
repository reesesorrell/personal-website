export default function NavBar () {

    const scrollToHome = () => {
        document.getElementById("home-screen").scrollIntoView();
    }

    const scrollToAbout = () => {
        document.getElementById("about-screen").scrollIntoView();
    }

    const scrollToProjects = () => {
        document.getElementById("projects-screen").scrollIntoView();
    }

    const scrollToContact = () => {
        document.getElementById("contact-screen").scrollIntoView();
    }

    return (
        <div  className='nav-bar z-10 absolute top-0 h-32 w-screen flex items-center justify-around'>
            <div className="text-white font-serif tracking-wide cursor-pointer" onClick={scrollToHome}>Home</div>
            <div className="text-white font-serif tracking-wide cursor-pointer" onClick={scrollToAbout}>About</div>
            <div className="text-white font-serif tracking-wide cursor-pointer" onClick={scrollToProjects}>Projects</div>
            <div className="text-white font-serif tracking-wide cursor-pointer" onClick={scrollToContact}>Contact</div>
        </div>
    )
}