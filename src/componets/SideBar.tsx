
import { Logo } from '../icons/Logo'
import SideItem from './SideItem'
import { Xicon } from '../icons/Xicon'
import { Youtubeicons }from '../icons/Youtubeicons'

const SideBar = () => {
  return (
    <div className='h-screen w-72 bg-white border-r-2 border-slate-300   top-0 left-0 pl-3 '>

        <div className='flex items-center  gap-4 pb-4 text-blue-400'>
          <Logo />
          <span className=' text-2xl font-bold'>Brainly</span>
        </div>

        <div className='text-slate-900 font-mono'>
     <SideItem text="Twitter" Icon={<Xicon />} />
      <SideItem text="Youtube" Icon={<Youtubeicons />} />
      </div>
    </div>
  )




}

export default SideBar