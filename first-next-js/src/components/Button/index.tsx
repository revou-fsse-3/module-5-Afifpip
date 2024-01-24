import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...props } : Props) => {

  return (
    <button {...props} className={`${props.className} btn-default overflow-hidden relative w-64 bg-stone-50 text-gray-900 py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-gradient-to-t hover:from-stone-100 before:to-stone-50 hover:-translate-y-[3px]`}>{label}</button>
  )

}

export default Button