import ExperienceCard from "./ExperienceCard"
import ExperienceTab from "./ExperienceTab"

interface ExperienceProps {
    t: (key: string) => string
}

const ExperienceContainer: React.FC<ExperienceProps> = ({t}) => {

    return (
        <div className='experience__container justify-content-center'>
            <div className='col-12 col-lg-4 aos-animate' data-aos='fade-left' data-aos-duration='600' data-aos-delay='200'>
                <div className='experience-flex-responsive-invert'>
                <ul className='nav nav-pills' id='myTab' role='tablist'>
                    <ExperienceTab
                        companyName="Podium Pick´em Challenge"
                        companyId="ppc"
                        isActive={true}
                    />
                    <ExperienceTab
                        companyName="Freelance"
                        companyId="freelance"
                    />
                    <ExperienceTab
                        companyName="Muchticket"
                        companyId="muchticket"
                    />
                    <ExperienceTab
                        companyName="Litoral Celulares"
                        companyId="litoral"
                    />
                </ul>
                </div>
            </div>

            <div className='col-12 col-lg-7 aos-animate' data-aos='fade-right' data-aos-duration='800' data-aos-delay='200'>
                <div className='tab-content' id='myTabContent'>
                    <ExperienceCard 
                        experienceName={t('experience-ppc')}
                        experienceDate={t('experience-ppc-date')}
                        experienceItemsList={[
                            t('experience-ppc-i1'),
                            t('experience-ppc-i2'),
                            t('experience-ppc-i3')
                        ]}
                        companyId="ppc"
                        isActive={true}
                    />
                    <ExperienceCard 
                        experienceName={t('experience-freelance')}
                        experienceDate={t('experience-freelance-date')}
                        experienceItemsList={[
                            t('experience-freelance-i1'),
                            t('experience-freelance-i2'),
                            t('experience-freelance-i3'),
                            t('experience-freelance-i4')
                        ]}
                        companyId="freelance"
                    />
                    <ExperienceCard 
                        experienceName={t('experience-muchticket')}
                        experienceDate={t('experience-muchticket-date')}
                        experienceItemsList={[
                            t('experience-muchticket-i1'),
                            t('experience-muchticket-i2'),
                            t('experience-muchticket-i3'),
                        ]}
                        companyId="muchticket"
                    />
                    <ExperienceCard 
                        experienceName={t('experience-litoral')}
                        experienceDate={t('experience-litoral-date')}
                        experienceItemsList={[
                            t('experience-litoral-i1'),
                            t('experience-litoral-i2'),
                            t('experience-litoral-i3'),
                        ]}
                        companyId="litoral"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExperienceContainer