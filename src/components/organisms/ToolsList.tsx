import SectionTitle from "@components/atoms/SectionTitle"
import { ITool } from "@constants/ToolList"
import Image from "next/image"
import { useState } from "react"

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
  tools: ITool[]
}

const ToolsList = ({ tools, ...props }: IProp) => {
  const [isReveal, setIsReveal] = useState<boolean>(false)

  const handleClick = () => {
    setIsReveal(!isReveal)
  }

  return (
    <div
      className="container py-24"
      {...props}
    >
      <SectionTitle title="Things I've played with" />

      <div className="project-list relative pt-2 sm:pt-0">
        <button
          onClick={() => {
            handleClick()
          }}
          className="border-border-primary absolute left-0 top-[-70px] h-[24px] overflow-hidden border-b-[1px] pb-0.5 text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[0] after:bg-black after:transition-all after:duration-500 after:content-[''] hover:after:w-full sm:left-[unset] sm:right-0 sm:top-[-107px]"
        >
          <div
            className={`text-center transition-all duration-500 ${
              isReveal && "translate-y-[-20px]"
            }`}
          >
            <p>Reveal All?</p>
            <p>Hide All</p>
          </div>
        </button>

        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {tools?.map((t, index) => (
            <div
              key={index}
              className="group relative flex h-[130px] w-full items-center justify-center overflow-hidden rounded border"
            >
              <div
                className={`relative h-[70px] w-full max-w-[70px] transition-all duration-500 group-hover:translate-y-[-100px] ${
                  isReveal && "translate-y-[-100px]"
                }`}
              >
                <Image
                  src={t.src}
                  alt="thumbnail"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div
                className={`absolute h-full w-full bg-black transition-all duration-500 group-hover:bottom-0 ${
                  isReveal ? "bottom-0" : "bottom-[-129px]"
                }`}
              >
                <p
                  className={`flex h-full w-full items-center justify-center font-inter-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                    isReveal && "opacity-100"
                  }`}
                >
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToolsList
