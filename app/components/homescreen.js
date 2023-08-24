import { useEffect, useState } from "react"

export default function HomeScreen () {
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRendered(true);
        }, 200)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div  className='background h-screen w-screen flex items-center justify-center'>
            <div className={`${rendered ? 'name-active' : 'name-inactive'} tracking-wider first-name text-white text-8xl font-serif`}>Reese Sorrell</div>
        </div>
    )
}