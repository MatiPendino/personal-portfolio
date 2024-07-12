import Link from "next/link"

interface ExperienceProps {
    companyName: string
    companyId: string
    isActive?: boolean
}

const ExperienceTab: React.FC<ExperienceProps> = ({companyName, companyId, isActive=false}) => {

    return (
        <li className='col-6 col-lg-12 nav-item mb-4'>
            <Link 
                className={`nav-link experience-tab ${isActive ? 'active' : ''}`}
                id={`${companyId}-tab`} 
                data-bs-toggle='tab' 
                href={`#${companyId}`} 
                role='tab' 
                aria-controls={companyId}  
                aria-selected='true'
            >
                {companyName}
            </Link>
        </li>
    )
} 

export default ExperienceTab