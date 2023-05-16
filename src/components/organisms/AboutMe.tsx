interface IProp {
  description?: string
  className?: string
}

const AboutMe = ({ description, className }: IProp) => {
  return (
    <div className={`container h-[100vh] w-full ${className}`}>
      <div className="flex h-full flex-col flex-col-reverse items-center justify-between  lg:flex-row">
        <div className="mt-12 lg:mt-0 lg:max-w-[65%]">
          <div className="">
            <h4 className="mb-6 font-inter-light text-sm uppercase tracking-widest">
              Web Development
            </h4>
            <p className="font-inter-bold text-[68px] leading-[1.1]">
              Creating the perfect online presence.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-x-20 text-lg">
            <div>
              <h4 className="font-inter-medium text-[25px]">My Mission</h4>
              <p className="mt-3 text-[#494949]">
                From crafting captivating websites from scratch to leveraging
                popular CMS platforms like Wordpress, Concrete5, and Shopify for
                seamless E-commerce integration, I ensure your online presence
                is not only visually stunning but also strategically aligned
                with your business goals and target audience.
              </p>
            </div>
            <div>
              <h4 className="font-inter-medium text-[25px]">Work with me</h4>
              <p className="mt-3 text-[#494949]">
                Are you looking to elevate your online presence and create
                stunning digital experiences? Look no further!
                <br /> <br />
                While I&apos;m currently based in Sydney, distance is no
                barrier. Wherever you are, don&apos;t hesitate to get in touch.
                I&apos;m excited to work with you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-start lg:w-[30%] lg:justify-center">
          <div className="h-[300px] w-[300px] rounded-full bg-[url('/static/img/clone-2.jpeg')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
