import  { forwardRef } from 'react'

const InputField = forwardRef<HTMLInputElement, { placeholder: string }>((props, ref) => {
  return (
    <div>
      <input 
        type="text" 
        className='border-2 border-cyan-500 rounded-md p-2 m-2 w-full' 
        ref={ref} 
        placeholder={props.placeholder} 
      />
    </div>
  )
})

export default InputField