type StackProps = {
  logo: {
    src: string
  }
  color: string
  text?: string
}

export default function Stack({ logo, color, text }: StackProps) {
  return (
    <div
      className="flex items-center justify-center rounded-4xl w-[108px] h-[60px] cursor-pointer"
      style={{
        border: `2px solid ${color}`,
      }}
    >
      <div className="flex flex-col gap-1 items-center justify-center rounded-4xl w-full h-full backdrop-blur-md shadow-md">
        <img src={logo.src} alt="stack" className="w-5 h-5" />
        {text && <span className="text-sm text-center w-full">{text}</span>}
      </div>
    </div>
  )
}
