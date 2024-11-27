import { SkillCard } from "./SkillCard"

interface SkillsProps {
    t: (key: string) => string
    lng: string
}

const SkillsContainer: React.FC<SkillsProps> = ({t, lng}) => {

    return (
        <div className='row col-12 col-lg-9 skills__container'>
            <SkillCard languageName='Django' languageLevel={t('very-good')} languageIconPath='/img/logo-django.png' lng={lng} />
            <SkillCard languageName='Python' languageLevel={t('very-good')} languageIconPath='/img/logo-python.png' lng={lng} />
            <SkillCard languageName='Django REST' languageLevel={t('very-good')} languageIconPath='/img/logo-drf.png' lng={lng} />
            <SkillCard languageName='WordPress' languageLevel={t('good')} languageIconPath='/img/logo-wordpress.png' lng={lng} />
            <SkillCard languageName='Git / GitHub' languageLevel={t('good')} languageIconPath='/img/logo-github.png' lng={lng} />
            <SkillCard languageName='PostgreSQL' languageLevel={t('good')} languageIconPath='/img/logo-postgresql.png' lng={lng} />
            <SkillCard languageName='HTML5' languageLevel={t('good')} languageIconPath='/img/logo-html5.png' lng={lng} />
            <SkillCard languageName='Bootstrap' languageLevel={t('good')} languageIconPath='/img/logo-bootstrap.png' lng={lng} />
            <SkillCard languageName='Docker' languageLevel={t('intermediate')} languageIconPath='/img/logo-docker.png' lng={lng} />
            <SkillCard languageName='JavaScript' languageLevel={t('intermediate')} languageIconPath='/img/logo-js.png' lng={lng} /> 
            <SkillCard languageName='React / React Native' languageLevel={t('intermediate')} languageIconPath='/img/logo-react.png' lng={lng} /> 
            <SkillCard languageName='CSS3' languageLevel={t('intermediate')} languageIconPath='/img/logo-css.png' lng={lng} />
        </div>
    )
}

export default SkillsContainer