interface ExperienceProps {
    experienceName: string
    experienceDate: string
    experienceItemsList: Array<string>
    companyId: string
    isActive?: boolean
}

const ExperienceCard: React.FC<ExperienceProps> = (
        {experienceName, experienceDate, experienceItemsList, companyId, isActive=false}
    ) => {

    return (
        <div 
            className={`tab-pane fade show experience-card ${isActive ? 'active' : ''}`} 
            id={companyId} 
            role='tabpanel' 
            aria-labelledby={`${companyId}-tab`}
        >
            <h4>{experienceName}</h4>
            <p>{experienceDate}</p>
            <ul>
                {experienceItemsList.map((experience, i) => (
                    <li key={i} className="mt-3">
                        {experience}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard