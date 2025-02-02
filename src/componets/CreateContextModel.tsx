import React, { useState } from 'react'
import Crossicon from '../icons/Crossicon'

const CreateContextModel = ({open}:{open:boolean}) => {

const [modelOpen,setModelOpen] = useState(false)

  return (
    <div>
      {open && 
        <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60 flex justify-center items-center'>
          <div className='bg-white rounded-md p-4 text-cyan-500'>
              <div className='flex justify-end'>
                <Crossicon />
              </div>
          </div> 
        </div>

      }
    </div>
  )
}

export default CreateContextModel