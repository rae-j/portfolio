import SectionTitle from "@components/atoms/SectionTitle"
import ProjectItem from "@components/molecules/ProjectItem"
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
              <ProjectItem
                index={index}
                title={p.title}
                src={p.src}
                tags={p.tags}
              />
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
