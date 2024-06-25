type InputProps = {
  type: string
  name: string
}

export default function Input({ type, name }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className="w-full p-2 border-green-600 border-2 rounded-md outline-none"
    />
  )
}
