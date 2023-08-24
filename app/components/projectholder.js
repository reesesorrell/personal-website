import Image from 'next/image'

export default function ProjectHolder({picUrl, description, url, code, inverted}) {
    return (
        <div className='text-white font-serif flex flex-col row-span-2 col-span-2 justify-self-center  w-3/5'>
            <Image src={picUrl}
                    width={500}
                    height={200}
                    alt="Picture of the author" />
            <div>{description}</div>
            <a href={url} target='_blank'>Check it out live here!</a>
            <a href={code} target='_blank'>Or view the code base here!</a>
        </div>
    )
}