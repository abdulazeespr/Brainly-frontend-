import axios from 'axios'
import { Button } from '../componets/ui/Button'
import InputField from '../componets/ui/InputField'
import { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { BiBrain } from 'react-icons/bi'
import { toast } from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const SignIn = () => {


  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isLoading,setIsLoading] = useState(false)

    const signIn = async() => {
      const username = usernameRef.current?.value
      const password = passwordRef.current?.value

      if(!username || !password) {
        toast.error('Please fill in all fields')
        return
      }
      
      setIsLoading(true)
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`,{username,password})
        if(response.status === 200){
          const token = response.data.token
          localStorage.setItem("token",token)
          toast.success('Successfully signed in!')
          navigate("/dashboard")
        }
      } catch (error: any) {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message)
        } else if (error.response?.status === 401) {
          toast.error('Invalid username or password')
        } else {
          toast.error('Something went wrong. Please try again.')
        }
      } finally {
        setIsLoading(false)
      }
    }
    
  

  return (
    <>
      <Toaster position="top-right" />
      <div className="h-screen w-screen flex">
        <div className="hidden lg:flex lg:w-1/2 bg-cyan-500 text-white flex-col justify-center items-center p-12">
          <div className="flex items-center gap-3 mb-8">
            <BiBrain className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Brainly</h1>
          </div>
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Your Digital Content Hub</h2>
            <p className="text-lg opacity-90">
              Brainly helps you organize and share the best content from around the web. 
              Create collections of articles, videos, tweets, and more to share with the world.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/10 rounded-lg">
                <h3 className="text-2xl font-bold">1M+</h3>
                <p className="text-sm">Curators</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <h3 className="text-2xl font-bold">5M+</h3>
                <p className="text-sm">Collections</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <h3 className="text-2xl font-bold">100M+</h3>
                <p className="text-sm">Shared Links</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-50">
          <div className="w-full max-w-md p-8 space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back!</h2>
              <p className="text-gray-600 mt-2">Please sign in to your account</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <InputField 
                  ref={usernameRef}
                  placeholder="Enter Username"
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <InputField
                  ref={passwordRef}
                  placeholder="Enter Password"
                  type="password"
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <Button
                text="Sign In"
                variants="primary"
                onClick={() => signIn()}
                loading={isLoading}
                width={true}
                className="mt-6"
              />
            </div>

            <p className="text-center text-gray-600 text-sm mt-6">
              Don't have an account?{' '}
              <a href="/signup" className="text-cyan-500 hover:text-cyan-600 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn