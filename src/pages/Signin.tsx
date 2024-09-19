import LeftPart from '../components/LeftPart'
import RighPart from '../components/RightPart'

const SignIn = () => {
  return (
    <div className='grid grid-cols-12 h-dvh'>

      <div className='col-span-4'>
        <LeftPart></LeftPart>
      </div>
      <div className='col-span-8 h-dvh bg-gray-100'>
        <RighPart></RighPart>
      </div>

    </div>
  )
}

export default SignIn
