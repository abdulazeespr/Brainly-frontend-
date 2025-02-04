
import axios from 'axios'
import { Button } from '../componets/ui/Button'
import InputField from '../componets/ui/InputField'
import { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {


  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isLoading,setIsLoading] = useState(false)

    const signIn = async() => {
      const username = usernameRef.current?.value
      const password = passwordRef.current?.value
    if(username && password){
      setIsLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signin`,{username,password})
      if(response.status === 200){


        const token = response.data.token
        localStorage.setItem("token",token)
        navigate("/dashboard")
      }else{
        alert("Signin failed") 
        setIsLoading(false)
      }
    }
    
  }
    
  

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-cyan-500">Sign In</h1>
        </div>

        <div className="space-y-4">
          <InputField 
            ref={usernameRef}
            placeholder="Enter Username"
          />
          <InputField
            ref={passwordRef}
            placeholder="Enter Password" 
          />
          <div className="mt-6">
            <Button
              text="Sign In"
              variants="primary"
              onClick={() => {signIn()}}
              loading={isLoading}
              width={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn