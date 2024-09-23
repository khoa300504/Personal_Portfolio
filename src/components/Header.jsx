import HireButton from './HireButton'

function Header() {
  return (
    <header className="flex border-b items-center justify-center">
      {/* logo */}
      <div className="logo basis-1/4 my-3 mx-5 text-3xl text-black font-medium tracking-wider font-pacifico">
        KhoaNguyen.
      </div>
      {/* Intro-section */}
      <div className="intro-section basis-3/4 flex justify-between items-center border-l py-2">
        <div className="title ml-5 font-roboto text-xl uppercase font-medium opacity-85 tracking-wide">
          About Me
        </div>
        <div className="hire mr-10">
          <HireButton/>
        </div>
      </div>
    </header>
  )
}

export default Header