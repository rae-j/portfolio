import { ComponentPropsWithoutRef, useEffect, useState } from "react"
import Image from "next/image"

interface IProjectItem {
  index: number
  title: string
  description?: string
  href?: string
  src: string
  tags: string[]
  className?: string
}

const ProjectItem = ({
  index,
  title,
  description,
  href,
  src,
  tags,
  className
}: IProjectItem) => {
  return (
    <div className={`${className}`}>
      <a
        className="group"
        href={href}
        target="_blank"
      >
        <div className="relative mb-12 h-[580px] w-full overflow-hidden transition-all duration-300 group-hover:scale-[0.95]">
          <Image
            src={src}
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
        <p className="uppercase">{tags.join(" • ")}</p>
      </div>

      <div className="title mt-8 ">
        <a
          className="text-[38px] transition-all duration-300 hover:opacity-30"
          target="_blank"
          href={href}
        >
          {title}
        </a>
      </div>
      {/* <div className="description mt-4">{p.description}</div> */}
    </div>
  )
}

export default ProjectItem
