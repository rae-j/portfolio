import Link from "next/link"
import styled from "styled-components"

const RunningText = styled.ul`
  margin-top: 0;
  padding-left: 37px;
  text-align: left;
  list-style: none;
  width: 100%;

  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation: change 10s infinite;
  li {
    line-height: 1.5;
    margin: 0;
    width: 100%;
  }

  @keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }
`

export interface INav {
  title: string
  link: string
}

const Header = () => {
  const NAV_COL_ONE: INav[] = [
    {
      title: "Portfolio",
      link: "/portfolio"
    },
    {
      title: "Email",
      link: "mailto:rae.jitpong@gmail.com"
    }
  ]

  const NAV_COL_TWO: INav[] = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rae-jitpong/"
    },
    {
      title: "Github",
      link: "https://github.com/rae-j"
    }
  ]

  const GREETINGS = [
    {
      title: "Hello!"
    },
    {
      title: "Bonjour!"
    },
    {
      title: "สวัสดี!"
    },
    {
      title: "こんにちは!"
    }
  ]

  function onClick() {
    window.location.href = "/"
  }

  return (
    <div className="menu container pt-5 uppercase">
      <div className="flex items-start justify-between text-xl">
        <Link
          href="/"
          className="font-inter-medium text-3xl"
          onClick={onClick}
        >
          Rae / J
        </Link>

        <div className="flex flex-col gap-y-[5px] text-sm">
          {NAV_COL_ONE.map((n, index) => (
            <div
              key={index}
              className="group flex translate-x-0 items-center overflow-hidden transition-all duration-300 hover:translate-x-[10px]"
            >
              <div className="nav-link-circle mr-[5px] h-1.5 w-1.5 rounded-[100%] bg-[#181818] opacity-0 transition-all duration-300  group-hover:opacity-100"></div>
              <Link href={n.link}>{n.title}</Link>
            </div>
          ))}
        </div>

        <div className="flex flex flex-col flex-col gap-y-[5px] text-sm text-sm">
          {NAV_COL_TWO.map((n, index) => (
            <div
              key={index}
              className="group flex translate-x-0 items-center overflow-hidden transition-all duration-300 hover:translate-x-[10px]"
            >
              <div className="nav-link-circle mr-[5px] h-1.5 w-1.5 rounded-[100%] bg-[#181818] opacity-0 transition-all duration-300  group-hover:opacity-100"></div>
              <a
                href={n.link}
                target="_blank"
              >
                {n.title}
              </a>
            </div>
          ))}
        </div>

        <div className="h-[24px] overflow-hidden">
          <Link
            href="mailto:rae.jitpong@gmail.com"
            className="font-inter-medium text-base opacity-[0.3] transition-all duration-500 hover:opacity-100"
          >
            <p className="float-left inline">Say</p>
            <RunningText>
              {GREETINGS.map((g, index) => (
                <li key={index}>{g.title}</li>
              ))}
            </RunningText>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
