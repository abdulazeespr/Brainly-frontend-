import  { forwardRef } from 'react'

interface InputFieldProps {
  placeholder: string
  type?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ placeholder, type = "text", className = "", onChange }, ref) => {
    return (
      <div>
        <input 
          type={type} 
          className={`border-2 border-cyan-500 rounded-md p-2 m-2 w-full ${className}`} 
          ref={ref} 
          placeholder={placeholder} 
          onChange={onChange}
        />
      </div>
    )
  }
)

export default InputField