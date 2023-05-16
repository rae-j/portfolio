import PagePath from "@components/atoms/PagePath"
import Footer from "@components/organisms/Footer"
import Header from "@components/organisms/Header"
import PageEntering from "@components/organisms/PageEntering"
import { RevealWrapper } from "next-reveal"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

type IProps = {
  className?: boolean
} & React.ComponentPropsWithoutRef<"div">

export interface INav {
  title: string
  link?: string
}

export default function Layout({
  children,
  className,
  ...props
}: React.PropsWithChildren<IProps>) {
  const router = useRouter()
  const [path, setPath] = useState<string>("")

  useEffect(() => {
    if (!router.isReady) return
    const data = router.pathname
    const dataString = data?.toString()
    setPath(dataString.slice(1))
  }, [router.isReady, router.pathname])

  return (
    <div
      className={`bg-background-white ${className}`}
      {...props}
    >
      <PageEntering />

      <RevealWrapper
        delay={1500}
        reset={false}
      >
        <Header />
      </RevealWrapper>

      {path.length > 1 && (
        <RevealWrapper delay={500}>
          <PagePath path={path} />
        </RevealWrapper>
      )}

      {path.length > 1 ? (
        <RevealWrapper delay={1000}>{children}</RevealWrapper>
      ) : (
        <div>{children}</div>
      )}

      <RevealWrapper delay={500}>
        <Footer />
      </RevealWrapper>
    </div>
  )
}
