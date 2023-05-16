import SectionTitle from "@components/atoms/SectionTitle"
import { IService } from "@constants/Services"
interface IProp extends React.HTMLAttributes<HTMLDivElement> {
  services: IService[]
}

const Services = ({ services, ...props }: IProp) => {
  //
  return (
    <div
      className="container py-24"
      {...props}
    >
      <SectionTitle title="Services" />

      <div className="services w-full">
        <div className="">
          {services?.map((s, index) => (
            <div
              key={index}
              className="group relative border-b-[1px] border-border-light py-10 after:absolute after:bottom-0 after:h-[1px] after:w-[0] after:bg-black after:transition-all  after:duration-300 after:content-[''] hover:after:w-full"
            >
              <div className="absolute bottom-[-50px] left-[60%] z-[1] h-max w-full max-w-[250px] translate-x-[-5rem] translate-y-24 rounded-lg border border-black bg-white p-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ">
                <span className="mr-2 text-lg text-[#969797]">
                  {index < 10 && "0"}
                  {index + 1}
                </span>
                {s.description}
              </div>
              <div className="flex items-center justify-between px-0 transition-all duration-300 group-hover:px-4">
                <div className="flex items-baseline">
                  <span className="text-xl text-primary-03 opacity-50 group-hover:opacity-100">
                    {index < 10 && "0"}
                    {index + 1}
                  </span>
                  <span className="ml-3 text-3xl">{s.title}</span>
                </div>
                {/* <div>
                  <Image
                    src="/assets/icons/arrow-down-circle.svg"
                    alt="arrow-down"
                    width={24}
                    height={24}
                    className="invert-[.75] transition-all duration-300 group-hover:invert-0"
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
