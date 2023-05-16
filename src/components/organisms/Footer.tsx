import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

interface IFooter extends React.HTMLAttributes<HTMLDivElement> {}

const Footer = ({ ...props }: IFooter) => {
  function onClick() {
    window.location.href = "/"
  }

  return (
    <div
      className="footer bg-dark-grey text-white"
      {...props}
    >
      <div className="container-small px-8 xl:px-0">
        <div className="flex justify-between pb-[6.875rem] pt-[8.125rem]">
          <div className="col-1 ">
            <Link
              href="/"
              className="font-minion-pro text-3xl uppercase tracking-wider"
              onClick={onClick}
            >
              Rae
            </Link>
          </div>
          <div className="col-2 max-w-[25%]">
            <h4 className="inter-medium text-xl">Message me </h4>

            <div className="mt-4 text-primary-03">
              <p className="mt-2">
                <Link
                  href="mailto:rae.jitpong@gmail.com"
                  className="transition-all duration-300 hover:text-white"
                >
                  rae.jitpong@gmail.com
                </Link>
              </p>
            </div>
          </div>

          <div className="col-3">
            <h4 className="inter-medium text-xl">Socials</h4>

            <div className="mt-4 flex">
              <Link
                href="https://www.linkedin.com/in/rae-jitpong/"
                target="_blank"
                className="border-light flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full border opacity-50 transition-all duration-300 hover:scale-90 hover:opacity-100"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=""
                />
              </Link>
              <Link
                href="mailto:rae.jitpong@gmail.com"
                target="_blank"
                className="border-light mx-4 flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full border opacity-50 transition-all duration-300 hover:scale-90 hover:opacity-100"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </Link>
              <Link
                href="https://github.com/raedontbyte"
                target="_blank"
                className="border-light flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full border opacity-50 transition-all duration-300 hover:scale-90 hover:opacity-100"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </div>
        </div>
        <hr className="text-02 w-full opacity-10" />
        <div className="flex items-center justify-end py-10">
          <p className="text-[#666]">
            Made with ♡ by RAE. Originally from Bangkok. Now based in Sydney. 🌈
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
