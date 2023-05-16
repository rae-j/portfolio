import { motion } from "framer-motion"

interface IProp {
  message?: string
}

const PageEntering = ({ message }: IProp) => {
  return (
    <motion.div
      animate={{
        opacity: [1, 1, 1, 1, 0]
      }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
      className="pointer-events-none fixed z-10 flex h-[100vh] w-full items-center justify-center bg-primary-02"
    >
      <motion.div
        animate={{
          opacity: [0, 1, 1, 0],
          y: [50, 0, 0, 0]
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        className="m-auto text-6xl text-primary-01"
      >
        {message}
      </motion.div>
    </motion.div>
  )
}

export default PageEntering
