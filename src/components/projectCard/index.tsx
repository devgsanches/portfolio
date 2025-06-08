import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type ProjectCardProps = {
  img: string | StaticImport
  title?: string
  description?: string
}

export default function ProjectCard({
  img,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="w-[20.625rem] h-[17.5rem] bg-[#292C34] rounded-2xl flex flex-col items-center">
      <Image
        src={img}
        alt="Project"
        width={306}
        height={156}
        className="pt-3"
      />
      <div className="px-4 w-full pt-6">
        <p className="text-[#E2E4E9] font-[Asap] font-bold text-start">
          {title}
        </p>
        <span className="text-[#C0C4CE] font-[Maven_Pro] text-sm mt-2">
          Rede social onde as pessoas mostram os registros de suas viagens pelo
          mundo
        </span>
      </div>
    </div>
  )
}
