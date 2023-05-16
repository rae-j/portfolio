import Marquee from "react-fast-marquee"

interface IMarquee {
  message: string
}

const TextMarquee = ({ message }: IMarquee) => {
  return (
    <div className="relative">
      <Marquee
        className="my-20 font-inter-medium text-5xl uppercase"
        speed={150}
        pauseOnHover
      >
        {[...Array(3)].map((a: number, index) => (
          <p key={index}>
            <span className="mx-4">—</span>
            {message}
          </p>
        ))}
      </Marquee>
    </div>
  )
}

export default TextMarquee
