import { useEffect, useState } from "react"
interface IIntro extends React.HTMLAttributes<HTMLDivElement> {
  // descriptions?: string
}

const Introduction = ({ ...props }: IIntro) => {
  const [isRevealOne, setIsRevealOne] = useState<boolean>(false)
  const [isRevealTwo, setIsRevealTwo] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setIsRevealOne(true)
    }, 500)
    setTimeout(() => {
      setIsRevealTwo(true)
    }, 2000)
  }, [])

  return (
    <div
      className="container py-48"
      {...props}
    >
      <div className="items-end justify-between xl:flex ">
        <div>
          {isRevealOne && (
            <div className="reveal-bottom-top font-inter-medium text-[90px] uppercase leading-none sm:text-[130px] lg:text-[160px]">
              <span>Web/dev</span>
            </div>
          )}
        </div>
        <div className="mt-6 pl-4 xl:ml-0 xl:mt-0 xl:max-w-[450px]">
          {isRevealTwo && (
            <div className="reveal-top-bottom text-[15px]">
              <p>
                Howdy! I&apos;m Rae, an experience web developer, here to bring
                your web ideas to life. Whether you need a website built from
                scratch, a CMS-powered, platform or an e-commerce masterpiece,
                I&apos;ve got you covered, complete with a cherry on top. Feel
                free to check out my work below. ↓
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Introduction
