import Image from 'next/image'

export default function ({title, description, screenshot, skills}) {
    return (
        <div className="project grid grid-col-3 gap-4">
            <Image src={screenshot}
                    width={140}
                    height={70}
                    alt="Picture of the author"
                    className="" />
            <div className='col-start-2 col-end-3'>
                <div className='white-color mb-3'>{title}</div>
                <div className='text-sm'>{description}</div>
                <div>
                    {skills.map((skill, i) => <div className="skill-bubble" key={i}>{skill}</div>)}
                </div>
            </div>
        </div>
    )
}