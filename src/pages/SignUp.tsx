import { useRef, useState } from 'react'
import InputField from '../componets/ui/InputField'
import { Button } from '../componets/ui/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { BiBrain } from 'react-icons/bi'
import { toast } from 'react-hot-toast'

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const signUp = async() => {
    const username = usernameRef?.current?.value
    const password = passwordRef?.current?.value
    
    if(!username || !password) {
      toast.error('Please fill in all fields')
      return
    }

    if(password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return
    }
    
    setIsLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/signup`,{username,password})
      if(response.status === 200){
        toast.success('Account created successfully!')
        navigate("/signin")

      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      } else if (error.response?.status === 409) {
        toast.error('Username already exists')
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen w-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-cyan-500 text-white flex-col justify-center items-center p-12">
        <div className="flex items-center gap-3 mb-8">
          <BiBrain className="w-12 h-12" />
          <h1 className="text-4xl font-bold">Brainly</h1>
        </div>
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Organize the Internet's Knowledge</h2>
          <p className="text-lg opacity-90">
            Join our platform to curate and organize content from across the web. Share your 
            collections of articles, videos, and social media posts in a meaningful way.
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
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-600 mt-2">Join our community today</p>
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
              text="Sign Up"
              variants="primary"
              onClick={() => signUp()}
              loading={isLoading}
              width={true}
              className="mt-6"
            />
          </div>

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{' '}
            <a href="/signin" className="text-cyan-500 hover:text-cyan-600 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp