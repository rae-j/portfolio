import Link from "next/link"

interface IProp {
  path: string
}

const PagePath = ({ path }: IProp) => {
  return (
    <div className="container w-full pb-10 pt-24 text-base">
      <span className="">
        <Link href={"/"}>Home</Link>
      </span>
      <span className="px-1">/</span>
      <span className="font-inter-bold capitalize">{path}</span>
    </div>
  )
}

export default PagePath
