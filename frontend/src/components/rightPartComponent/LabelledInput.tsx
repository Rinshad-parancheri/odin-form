import { ChangeEvent } from "react";

type LabelledInputProp = {
  label: string;
  placholder: string;
  type?: string;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  bothTrue?: string;
}
const LabelledInput = ({ label, placholder, type = 'text', onchange, bothTrue = '' }: LabelledInputProp) => {
  return (
    <div className=" lg:min-w-[20rem] mb-6 text-sm">
      <label className="text-lg tracking-[1.4px]">{label}</label>


      <input
        type={type}
        placeholder={placholder}
        onChange={onchange}
        className={`bg-black-50 w-full border border-gray-200'${bothTrue === 'valid' ? 'border-red-700' : ''} text-black text-xs rounded-[5px] p-2 block outline-black`}
      />

      <span className={`${bothTrue === 'valid' ? 'visible' : 'invisible'}`} >password doesn't match</span>
    </div >
  )
}

export default LabelledInput
