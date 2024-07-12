import Image from "next/image"

interface AboutProps {
    t: (key: string) => string
}

const About: React.FC<AboutProps> = ({t}) => {

    return (
        <section className='about aos-animate' data-aos='zoom-in' data-aos-duration='500' id='about'>
            <div className='row about__container'>
                <div className='col-12 col-lg-6 my-auto'>
                    <div className='about__container-image' id='image-about-container'>
                    <Image 
                        src='/img/profile-picture.png' 
                        width={600}
                        height={600}
                        id='image-about' 
                        style={{height: 'fit-content'}}
                        alt='About image' 
                    />
                    </div>
                </div>

                <div className='about__container-text col-12 col-lg-6'>
                    <h2 className='mb-3'>{t('about-me')}</h2>
                    <p>{t('about-me-p1')}</p>
                    <p>{t('about-me-p2')}</p>
                    <p>{t('about-me-p3')}</p>
                </div>
            </div>
        </section>
    )
}

export default About