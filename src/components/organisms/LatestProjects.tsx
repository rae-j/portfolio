import SectionTitle from "@components/atoms/SectionTitle"
import { IProject } from "@constants/ProjectList"
import Image from "next/image"
import Link from "next/link"

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
  projects: IProject[]
  viewMore?: boolean
  className?: string
}

const LatestProjects = ({ projects, viewMore, className, ...props }: IProp) => {
  return (
    <div
      className={`container py-24 ${className}`}
      {...props}
    >
      <SectionTitle
        title="Latest Projects"
        link="/projects"
      />

      <div className="project-list">
        <div className="grid grid-cols-1 gap-[90px] md:grid-cols-2">
          {projects?.map((p, index) => (
            <div
              key={index}
              className="even:mt-0 md:even:mt-32"
            >
              <a
                className="group"
                href={p.href}
                target="_blank"
              >
                <div className="relative mb-12 h-[580px] w-full overflow-hidden transition-all duration-300 group-hover:scale-[0.95]">
                  <Image
                    src={p.src}
                    alt="thumbnail"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-300 group-hover:scale-[1.1]"
                  />
                </div>

                <p className="border-border-primary relative mt-4 border-b-[1px] pb-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[0] after:bg-black after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
                  {index < 10 && "0"}
                  {index + 1}
                </p>
              </a>

              <div className="tags mt-8">
                <p className="uppercase">{p.tags.join(" • ")}</p>
              </div>

              <div className="title mt-8 ">
                <a
                  className="text-[38px] transition-all duration-300 hover:opacity-30"
                  target="_blank"
                  href={p.href}
                >
                  {p.title}
                </a>
              </div>
              {/* <div className="description mt-4">{p.description}</div> */}
            </div>
          ))}
        </div>
      </div>

      {viewMore && (
        <div className="mt-16 flex w-full items-center justify-center">
          <Link
            href="/portfolio"
            className="border-border-primary relative mt-1 border-b-[1px] pb-0.5 font-inter-medium text-lg uppercase tracking-wide opacity-30 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[0] after:bg-black after:transition-all after:duration-300 after:content-[''] hover:opacity-100 hover:after:w-full"
          >
            View More
          </Link>
        </div>
      )}
    </div>
  )
}

export default LatestProjects
