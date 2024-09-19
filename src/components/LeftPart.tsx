import logo from "../assets/logo.png"
import backgroundImage from "../assets/background.jpg"
const LeftPart = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}
      className=' bg-no-repeat bg-cover bg-center h-full relative '>
      <div className=' bg-black  bg-opacity-40 text-3xl p-1 h-[9rem] absolute top-[15rem] w-full flex  justify-center '>
        <img src={logo} className="mr-4" />
        <div className="font-norse text-white text-8xl  flex flex-col justify-center">Odin</div>
      </div>

      <div className="text-lg text-white absolute bottom-2 flex justify-center w-full ">Photo by <a className="flex ml-1 gap-1"> <ul className="underline"> Halie weast</ul> on <ul className="underline">Unsplash</ul></a></div>
    </div>

  )
}

export default LeftPart
