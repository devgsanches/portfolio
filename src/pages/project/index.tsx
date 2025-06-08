'use client'

import projectOne from '@/assets/project.svg'
import ProjectCard from '@/components/projectCard'
import { useState } from 'react'

export default function ProjectPage() {
  const [projects] = useState([
    {
      img: projectOne,
      title: 'Travelgram',
      description:
        'Rede social onde as pessoas mostram os registros de suas viagens pelo mundo',
    },
    {
      img: projectOne,
      title: 'Devgram',
      description:
        'Rede social onde as pessoas mostram os registros de suas viagens pelo mundo',
    },
    {
      img: projectOne,
      title: 'Telegram',
      description:
        'Rede social onde as pessoas mostram os registros de suas viagens pelo mundo',
    },
  ])
  return (
    <>
      <section className="flex flex-col items-center bg-[#16181D] h-full">
        <span className="text-[#8012f9] font-[Inconsolata] mt-6">
          Meu trabalho
        </span>
        <h2 className="text-[#E2E4E9] font-[Asap] font-bold mb-6">
          Veja os projetos em destaque
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              img={project.img}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  )
}
