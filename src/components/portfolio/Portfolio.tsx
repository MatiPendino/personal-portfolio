import ProjectContainer from "./ProjectContainer"

interface PortfolioProps {
    t: (key: string) => string
}

const Portfolio: React.FC<PortfolioProps> = ({t}) => {

    return (
        <section className='portfolio pb-4' id='portfolio'>
            <h3 className='text-center'>{t('some-projects')}</h3>

            <ProjectContainer />
            
        </section>
    )
}

export default Portfolio