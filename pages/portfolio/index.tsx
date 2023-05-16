import LatestProjects from "@components/organisms/LatestProjects"
import { Layout } from "@components/templates"
import { PROJECT_LIST } from "@constants/ProjectList"
import { ReactElement } from "react"

export default function Projects() {
  return (
    <article
      aria-label="Projects"
      className="h-full w-full"
    >
      <LatestProjects
        projects={PROJECT_LIST}
        className="pt-0"
      />
    </article>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
