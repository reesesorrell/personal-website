import Image from 'next/image'

export default function ({title, description, screenshot, skills, link}) {
    return (
        <a className="project grid grid-col-3 gap-4 mb-6 p-5" href={link} target="_blank">
            <Image src={screenshot}
                    width={140}
                    height={70}
                    alt="Picture of the author"
                    className="rounded border-2" />
            <div className='col-start-2 col-end-3'>
                <div className='white-color mb-3'>{title}</div>
                <div className='text-sm'>{description}</div>
                <div>
                    {skills.map((skill, i) => <div className="skill-bubble" key={i}>{skill}</div>)}
                </div>
            </div>
        </a>
    )
}