import { useEffect, useState } from "react"
import Image from 'next/image'

export default function HomeScreen () {
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRendered(true);
        }, 200)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div  className='relative background h-screen w-screen flex items-center justify-center' id="home-screen">
            <Image src="/scroll-down-white.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="absolute bottom-10 arrows" />
            <Image src="/scroll-down-white.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="absolute bottom-14 arrows" />
            <div className={`${rendered ? 'name-active' : 'name-inactive'}  first-name text-white text-8xl font-serif`}>Reese Sorrell</div>
        </div>
    )
}