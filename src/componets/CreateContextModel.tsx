
import Crossicon from '../icons/Crossicon'
import { Button } from './ui/Button'

const CreateContextModel = ({open,onClose}:{open:boolean,onClose:()=>void}) => {



  return (
    <div>
      {open && 
        <div className='w-screen h-screen fixed top-0 left-0 bg-slate-900 bg-opacity-60 flex justify-center items-center'>
          <div className='bg-white rounded-md p-4 text-cyan-500'>
              <div>
                   <div className='flex justify-end cursor-pointer' onClick={onClose}>
                 <Crossicon />
                    </div>
                 <div>
                  <InputField onChange={()=>{}} placeholder='Enter Title Name' />
                  <InputField onChange={()=>{}} placeholder='Link' />
                  </div>
                  <div className='flex justify-center'>
                  <Button variants="primary" text="Submit" />
                  </div>
              </div>

          </div> 
        </div>





      }
    </div>
  )
}


function InputField({onChange,placeholder}:{onChange:()=>void,placeholder:string}){
  return(
    <div>
      <input type="text" className='border-2 border-cyan-500 rounded-md p-2 m-2' onChange={onChange} placeholder={placeholder} />
    </div>
  )
}




export default CreateContextModel