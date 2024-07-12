import { Project } from "./Project"

interface ProjectProps {

}

const ProjectContainer: React.FC<ProjectProps> = () => {

    return (
        <div className='portfolio__container row col-10 col-lg-10'>
            <Project
                imagePath='/img/ppc.png' 
                projectId='ppc' 
                projectName='PPC' 
                technologies='Django, Django REST Framework, React, Next, Bootstrap, PostgreSQL' 
                demoUrl='https://podiumpickemchallenge.com' 
            />
            <Project 
                imagePath='/img/cocinasalud.png' 
                projectId='cocinasalud' 
                projectName='CocinaSalud' 
                technologies='HTML, CSS, Bootstrap, Django, JavaScript, MySQL' 
                demoUrl='https://cocinasalud.net' 
                repoUrl='https://github.com/MatiPendino/cocina-salud' 
            />
            <Project 
                imagePath='/img/bespoke.png' 
                projectId='bespoke' 
                projectName='BeSpoke' 
                technologies='WordPress' 
                demoUrl='https://arquitecturabespoke.ar' 
            />
            <Project 
                imagePath='/img/cmaccesorios.png' 
                projectId='cmaccesorios' 
                projectName='CMAccesorios' 
                technologies='WordPress' 
                demoUrl='https://cmaccesorios.com/' 
            />
            <Project 
                imagePath='/img/votar-fms.png' 
                projectId='fms' 
                projectName='Votar FMS' 
                technologies='Java, Android Studio, Firebase' 
                demoUrl='https://play.google.com/store/apps/details?id=com.eddd.votarfms&hl=es_419' 
                repoUrl='https://github.com/MatiPendino/VotarFMS' 
            />
        </div>
    )
}

export default ProjectContainer