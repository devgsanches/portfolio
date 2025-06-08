import Image from 'next/image'
import arrowUp from '@/assets/icons/ArrowUpRight.svg'

type SocialProps = {
  icon: string
  socialNetwork: string
}

export default function Social({ icon, socialNetwork }: SocialProps) {
  return (
    <div className="w-[20rem] h-[4.25rem] bg-[#292C34] rounded-lg flex items-center justify-between px-5 cursor-pointer border border-transparent hover:border-[#3996db] transition-all duration-500 ease-in-out">
      <div className="flex gap-3">
        <Image src={icon} alt="network" />
        <span className="text-[#C0C4CE] font-medium font-[Maven_Pro]">
          {socialNetwork}
        </span>
      </div>
      <button>
        <Image src={arrowUp} alt="Arrow Icon" />
      </button>
    </div>
  )
}
