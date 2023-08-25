import NavBar from "./navbar"

export default function() {
    return(
        <div className="flex flex-col py-24 items-start justify-between sticky top-0 w-96 ml-24">
            <div className="top-section h-3/5 flex flex-col justify-between">
                <div className="info-section flex flex-col">
                    <div className="text-5xl white-color pb-3">Reese Sorrell</div>
                    <div className="text-l white-color pb-3">Software Engineering Student</div>
                    <div className="grey-color">I solve complex problems, work with other people, and communicate my ideas to achieve what others find impossible.</div>
                </div>
                <NavBar />
            </div>
            <div className="bottom-section w-5/6">
                <div className="w-3/5 socials-holder flex justify-between grey-color">
                    <div>GitHub</div>
                    <div>Insta</div>
                    <div>LinkedIn</div>
                </div>
            </div>
        </div>
    )
}