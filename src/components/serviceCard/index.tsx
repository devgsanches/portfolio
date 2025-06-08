import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type ServiceCardProps = {
  src: string | StaticImport
  title: string
  description: string
}

export default function ServiceCard({
  src,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="w-[19rem] h-[9.6875rem] border-2 border-[#16181D] rounded-2xl p-5">
      <Image src={src} alt="web" width={48} height={48} />
      <p className="mt-5 text-[#E2E4E9] font-[Asap] font-bold">{title}</p>
      <p className="mt-2 text-[#C0C4CE] text-sm">{description}</p>
    </div>
  )
}
