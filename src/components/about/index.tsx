'use client'

import { useState } from 'react'
import Stack from '../stack'
import arrow from '@/assets/icons/arrow.svg'
import js from '@/assets/icons/JavaScript.svg'
import git from '@/assets/icons/git.png'
import bootstrap from '@/assets/icons/bootstrap.png'
import tailwind from '@/assets/icons/tailwind-css.png'
import react from '@/assets/icons/react.png'
import next from '@/assets/icons/nextjs.png'
import ts from '@/assets/icons/ts.png'
import node from '@/assets/icons/nodejs.svg'
import express from '@/assets/icons/express-js.png'
import sql from '@/assets/icons/sql.png'
import postgres from '@/assets/icons/postgre.png'
import prisma from '@/assets/icons/prisma.png'
import Image from 'next/image'

export default function About() {
  const [stacks] = useState([
    {
      logo: git,
      color: '#FF5733',
      text: 'Git',
    },
    {
      logo: js,
      color: '#FFD700',
      text: 'JavaScript',
    },
    {
      logo: ts,
      color: '#1E90FF',
      text: 'TypeScript',
    },
    {
      logo: bootstrap,
      color: '#8012f9',
      text: 'Bootstrap',
    },
    {
      logo: tailwind,
      color: '#00B7EB',
      text: 'TailwindCSS',
    },
    {
      logo: react,
      color: '#00C4CC',
      text: 'React',
    },
    {
      logo: next,
      color: '#000000',
      text: 'NextJS',
    },
    {
      logo: node,
      color: '#3CB371',
      text: 'NodeJS',
    },
    {
      logo: express,
      color: '#6B7280',
      text: 'ExpressJS',
    },
    {
      logo: sql,
      color: '#1d59b4',
      text: 'SQL',
    },
    {
      logo: postgres,
      color: '#ffffff',
      text: 'PostgreSQL',
    },

    {
      logo: prisma,
      color: '#4c51bf',
      text: 'Prisma ORM',
    },
  ])

  return (
    <div className="flex flex-col mt-10 items-center">
      <span className="text-lg px-2 font-semibold font-[Inconsolata] text-white">
        Olá! Meu nome é{' '}
        <span className="text-[#b28bfa] font-bold w-full h-full bg-white/5 backdrop-blur-md shadow-md p-1.5 rounded-lg">
          Guilherme Sanches
        </span>{' '}
        e sou
      </span>
      <h1 className="mt-1 text-2xl font-bold font-[Asap]">
        Desenvolvedor Fullstack
      </h1>
      <div className="flex justify-center">
        <p className="text-center mt-5 text-[#878EA1] text-sm w-3/4 font-[Maven_Pro]">
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios
          complexos.
        </p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-3 w-10/12 mx-auto mt-6 place-items-center">
        {stacks.map(stack => (
          <Stack
            key={stack.color}
            logo={stack.logo}
            color={stack.color}
            text={stack.text}
          />
        ))}
      </div>

      <Image src={arrow} alt="Arrow icon" className="py-10 cursor-pointer" />
    </div>
  )
}
