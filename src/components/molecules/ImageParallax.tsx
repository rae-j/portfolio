import { motion } from "framer-motion"
import { ComponentPropsWithoutRef, useEffect, useState } from "react"
import { Parallax } from "react-parallax"

interface IParallax extends ComponentPropsWithoutRef<"div"> {
  src: string
}

const ImageParallax = ({ src, children, ...prop }: IParallax) => {
  const [isReveal, setIsReveal] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setIsReveal(true)
    }, 1500)
  }, [])
  return (
    <div
      className="relative overflow-hidden px-4"
      {...prop}
    >
      {isReveal && (
        <motion.div
          animate={{
            height: [750, 0]
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 z-[1] h-full w-full bg-background-white"
        ></motion.div>
      )}
      <div>
        <Parallax
          bgImage={src}
          strength={500}
        >
          <div style={{ height: 550 }}>{children}</div>
        </Parallax>
      </div>
    </div>
  )
}

export default ImageParallax
