import { Project } from "./Project"

interface ProjectProps {

}

const ProjectContainer: React.FC<ProjectProps> = () => {

    return (
        <div className='portfolio__container row col-10 col-lg-10'>
            <Project 
                imagePath='/img/cocinasalud.png' 
                projectId='cocinasalud' 
                projectName='CocinaSalud' 
                technologies='HTML, CSS, Bootstrap, Django, JavaScript, MySQL' 
                demoUrl='https://cocinasalud.net' 
                repoUrl='https://github.com/MatiPendino/cocina-salud' 
            />
            <Project
                imagePath='/img/image-reminder.png'
                projectId='image-reminder'
                projectName='Photo Reminder Alarm'
                technologies='Django, Django REST Framework, React Native, PostgreSQL'
                demoUrl='https://play.google.com/store/apps/details?id=com.matipendino2001.imagereminder'
                repoUrl='https://github.com/MatiPendino/image-reminder-backend'
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
        </div>
    )
}

export default ProjectContainer