import Image from 'next/image'

export default function ProjectHolder({picUrl, description, url, code, inverted}) {
    return (
        <div className='text-white font-serif flex flex-col'>
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