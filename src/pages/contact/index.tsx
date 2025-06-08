'use client'

import secondBg from '@/assets/second-bg.svg'
import { useState } from 'react'
import linkedin from '@/assets/networkIcons/LinkedinLogo.svg'
import instagram from '@/assets/networkIcons/InstagramLogo.png'
import github from '@/assets/networkIcons/GithubLogo.png'
import email from '@/assets/networkIcons/EnvelopeSimple.png'
import Social from '@/components/social'

export default function ContactPage() {
  const [networks] = useState([
    {
      icon: linkedin,
      name: 'Linkedin',
    },
    {
      icon: instagram,
      name: 'Instagram',
    },
    {
      icon: github,
      name: 'GitHub',
    },
    {
      icon: email,
      name: 'E-mail',
    },
  ])

  return (
    <section
      className="h-full bg-cover bg-no-repeat flex flex-col items-center pb-10"
      style={{ backgroundImage: `url(${secondBg.src})` }}
    >
      <span className="text-[#8012f9] font-[Inconsolata] mt-12">Contato </span>
      <h2 className="text-[#E2E4E9] font-[Asap] font-bold">
        Gostou do meu trabalho?
      </h2>
      <p className="font-[Maven_Pro] text-[#C0C4CE] text-center mb-6">
        Entre em contato ou acompanhe as minhas redes sociais!
      </p>
      <div className="flex flex-col gap-4">
        {networks.map(network => (
          <Social
            key={network.name}
            icon={network.icon}
            socialNetwork={network.name!}
          />
        ))}
      </div>
    </section>
  )
}
