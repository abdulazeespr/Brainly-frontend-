import axios from 'axios'
import Crossicon from '../icons/Crossicon'
import { Button } from './ui/Button'
import  InputField  from './ui/InputField'
import { useRef } from 'react'
const CreateContextModel = ({open,onClose}:{open:boolean,onClose:()=>void}) => {

const titleRef = useRef<HTMLInputElement>(null)
const linkRef = useRef<HTMLInputElement>(null)
const typeRef = useRef<HTMLSelectElement>(null)

const addContext = async() => {
  const title = titleRef.current?.value
  const link = linkRef.current?.value
  const type = typeRef.current?.value
  const token = localStorage.getItem("token")


  if(title && link && type){
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/content`,{title,link,type},{headers:{Authorization:token}})
    if(response.status === 200){
      onClose()
      alert("Context added successfully")
    }else{
      alert("Context added failed")
    }
  }
}






  return (
    <div>
      {open && 
        <div className='w-screen h-screen fixed top-0 left-0 bg-slate-900 bg-opacity-60 flex justify-center items-center'>
          <div className='bg-white rounded-md p-4 text-cyan-500 w-96 '>
              <div>
                   <div className='flex justify-end cursor-pointer' onClick={onClose}>
                 <Crossicon />


                    </div>
                 <div>
                  <InputField ref={titleRef} placeholder='Enter Title Name' />
                  <InputField ref={linkRef} placeholder='Link' />
                  <div>
                  <select 
                    ref={typeRef} 



                    className="w-full py-2 px-2 border-2 border-cyan-500 rounded-md m-2 focus:outline-none focus:border-cyan-500"
                  >
                    
                    <option value="youtube">YouTube</option>
                    <option value="twitter">Twitter</option>

                  </select>
                  </div>
                  </div>
                  <div className='flex justify-center'>
                  <Button variants="primary" text="Submit"  onClick={()=>{addContext()}}/>
                  </div>



              </div>

          </div> 
        </div>





      }
    </div>
  )
}






export default CreateContextModel