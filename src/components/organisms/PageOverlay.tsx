interface IProp {
  className?: string
}

const PageOverlay = ({ className }: IProp) => {
  return (
    <div
      className={`page-overlay fixed bottom-0 left-0 right-0 top-0 z-[100] m-auto h-full w-full bg-black/[0.5] backdrop-blur-lg ${className}`}
    >
      <div className="flex h-full w-full flex-col items-start justify-center pl-[5%] pr-[5%] text-white sm:pl-[10%] sm:pr-[10%]">
        <p className="mb-1.5 text-3xl text-[2em] leading-none">
          The mobile/tablet version is currently unavailable.
        </p>
        <p className="text-lg">
          Kindly utilise your PC for the complete experience :)
        </p>
      </div>
    </div>
  )
}

export default PageOverlay
