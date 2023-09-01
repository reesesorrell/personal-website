import NavBar from "./navbar"

export default function() {
    return(
        <div className="py-24 flex flex-col items-center">
            <div className="h-full flex flex-col items-start justify-between top-0 w-96 ml-52">
            <div className="top-section h-2/3 flex flex-col justify-between">
                <div className="info-section flex flex-col">
                    <div className="text-5xl white-color pb-3 font-bold">Reese Sorrell</div>
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
        </div>
    )
}