import Image from "next/image"
import Link from "next/link"

interface IProp {
  title: string
  link?: string
  className?: string
}

const SectionTitle = ({ title, link, className }: IProp) => {
  return (
    <div
      className={`mb-20 flex flex-col items-start justify-between sm:flex-row sm:items-center ${className}`}
    >
      <h2 className="font-inter-medium text-4xl">{title}</h2>
      {link && (
        <Link
          href={link}
          className="group mt-2 sm:mt-0"
        >
          <div className="flex items-center justify-center gap-x-5">
            <p className="border-border-primary relative mt-1 border-b-[1px] pb-0.5 text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[0] after:bg-black after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
              View All Projects
            </p>
            <div className="arrow-icon-circle hidden h-[40px] w-[40px] rotate-45 rounded-[50%] bg-neutral-200 transition-all duration-300 group-hover:scale-[1.1] sm:block">
              <div className="arrow-wrapper flex h-full items-center justify-center">
                <Image
                  src="/assets/icons/arrow-up.png"
                  alt="arrow"
                  height={22}
                  width={22}
                  className="arrow-up"
                />
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}

export default SectionTitle
