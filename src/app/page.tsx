import Image from 'next/image'
import firstBg from '@/assets/first-bg.svg'

import Logo from '@/components/logo'
import About from '@/components/about'
import ProjectPage from '@/pages/project'
import ServicePage from '@/pages/service'
import ContactPage from '@/pages/contact'

export default function HomePage() {
  return (
    <>
      <section
        className="h-screen bg-cover bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${firstBg.src})` }}
      >
        <Logo />
        <About />
      </section>
      <ProjectPage />
      <ServicePage />
      <ContactPage />
    </>
  )
}
