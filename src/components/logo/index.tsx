import picture from '@/assets/picture.jpg'
import codeIcon from '@/assets/icons/Code.svg'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="rounded-[50rem] w-[8rem] h-[8rem] border-2 border-[#8012f9] mt-12 flex items-center justify-center">
      <div
        className="relative rounded-[50rem] w-[7.2rem] h-[7.2rem] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${picture.src})`,
        }}
      >
        <Image
          src={codeIcon}
          alt="Profile photo"
          className="absolute top-22 bottom-0 right-0"
        />
      </div>
    </div>
  )
}
