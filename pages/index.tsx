import ImageParallax from "@components/molecules/ImageParallax"
import AboutMe from "@components/organisms/AboutMe"
import Introduction from "@components/organisms/Introduction"
import LatestProjects from "@components/organisms/LatestProjects"
import Services from "@components/organisms/Services"
import TextMarquee from "@components/organisms/TextMarquee"
import ToolsList from "@components/organisms/ToolsList"
import { Layout } from "@components/templates"
import { IProject, PROJECT_LIST } from "@constants/ProjectList"
import { SERVICE_LIST } from "@constants/Services"
import { TOOL_LIST } from "@constants/ToolList"
import { RevealWrapper } from "next-reveal"
import { ReactElement, useEffect, useState } from "react"

function Home() {
  const [projectList, setProjectList] = useState<IProject[]>([])
  const origin: string = "bottom"
  const delay: number = 700
  const duration: number = 800
  const distance: string = "300px"

  useEffect(() => {
    if (PROJECT_LIST) {
      setProjectList(PROJECT_LIST.slice(0, 6))
    }
  }, [])

  return (
    <article
      aria-label="Portfolio"
      className="h-full w-full"
    >
      <Introduction />

      <ImageParallax src="/assets/images/etc/image-3.jpeg" />

      <RevealWrapper
        origin={origin}
        delay={delay}
        duration={duration}
        distance={distance}
      >
        <AboutMe className="pt-20" />
      </RevealWrapper>

      <RevealWrapper
        origin={origin}
        delay={delay}
        duration={duration}
        distance={distance}
      >
        <ToolsList tools={TOOL_LIST} />
      </RevealWrapper>

      <RevealWrapper
        origin={origin}
        delay={delay}
        duration={duration}
        distance={distance}
      >
        <Services services={SERVICE_LIST} />
      </RevealWrapper>

      <RevealWrapper
        origin={origin}
        delay={delay}
        duration={duration}
        distance={distance}
      >
        <LatestProjects
          projects={projectList}
          viewMore
        />
      </RevealWrapper>

      <RevealWrapper delay={300}>
        <TextMarquee message="Let's get started" />
      </RevealWrapper>
    </article>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
