import ExperienceContainer from "./ExperienceContainer"

interface ExperienceProps {
    t: (key: string) => string
}

const Experience: React.FC<ExperienceProps> = ({t}) => {

    return (
        <section className='experience' id='experience'>
            <h3 className='text-center mb-4'>{t('experience')}</h3>
            <ExperienceContainer t={t} />
        </section>
    )
}

export default Experience