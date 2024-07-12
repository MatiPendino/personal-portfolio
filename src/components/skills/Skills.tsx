import SkillsContainer from "./SkillsContainer"

interface SkillsProps {
    t: (key: string) => string
    lng: string
}

const Skills: React.FC<SkillsProps> = ({t, lng}) => {

    return (
        <section className='skills' id='skills'>
        <h3 className='text-center'>{t('skills')}</h3>

        <SkillsContainer t={t} lng={lng} />
      </section>
    )
}

export default Skills