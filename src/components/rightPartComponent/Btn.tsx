type BtnProp = {
  content: string
}
const Button = ({ content }: BtnProp) => {
  return (
    <button type="button" className="focus:outline-none text-white bg-green-700 font hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-[5px] text-lg px-5 py-2.5 me-2 mb-2 w-[250px]">{content}</button>

  )
}

export default Button
