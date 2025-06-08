'use client'

import webIcon from '@/assets/icons/Devices.svg'
import dbIcon from '@/assets/icons/HardDrives.svg'
import devOpsIcon from '@/assets/icons/Infinity.svg'
import ServiceCard from '@/components/serviceCard'
import { useState } from 'react'

export default function ServicePage() {
  const [services] = useState([
    {
      icon: webIcon,
      title: 'Websites e Aplicativos',
      description: 'Desenvolvimento de interfaces',
    },
    {
      icon: dbIcon,
      title: 'API e banco de dados',
      description: 'Criação de serviços do sistema',
    },
    {
      icon: devOpsIcon,
      title: 'DevOps',
      description: 'Gestão e infraestrutura da aplicação',
    },
    ,
  ])
  return (
    <>
      <section className="flex flex-col items-center bg-[#0D0E11] h-full pb-8">
        <span className="text-[#1E90FF] font-[Inconsolata] mt-12">
          Meus serviços
        </span>
        <h2 className="text-[#E2E4E9] font-[Asap] font-bold">
          Como posso ajudar o seu negócio
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          {services.map(service => (
            <ServiceCard
              key={service?.title}
              src={service?.icon!}
              title={service?.title!}
              description={service?.description!}
            />
          ))}
        </div>
      </section>
    </>
  )
}
