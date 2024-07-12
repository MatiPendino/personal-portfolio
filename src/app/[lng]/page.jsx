import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useTranslation } from '../i18n'
import Image from 'next/image'
import Experience from '../../components/experience/Experience'
import Portfolio from '../../components/portfolio/Portfolio'
import Skills from '../../components/skills/Skills'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'

export default async function HomePage ({ params: {lng} }) {
  const {t} = await useTranslation(lng)
  return (
    <main>
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} lng={lng} />
      <Experience t={t} />
      <Portfolio t={t} />
    </main>
  )
}
