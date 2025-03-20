import 'bootstrap/dist/css/bootstrap.min.css'
import { Analytics } from "@vercel/analytics/react"
import { useTranslation } from '../i18n'
import '../styles/globals.css'
import Experience from '../../components/experience/Experience'
import Portfolio from '../../components/portfolio/Portfolio'
import Skills from '../../components/skills/Skills'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'

export default async function HomePage ({ params: {lng} }) {
  const {t} = await useTranslation(lng)
  return (
    <main>
      <Analytics/>
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} lng={lng} />
      <Experience t={t} />
      <Portfolio t={t} />
    </main>
  )
}
