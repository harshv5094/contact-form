import { useState } from 'react'
import Label from './Label'

type RadioProps = {
  name: string
  displayName: string
}

export default function RadioBox({ name, displayName }: RadioProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div
      className={`p-2 border-2 border-cus-green-600 hover:bg-cus-green-200 rounded-md ${isChecked ? 'bg-cus-green-200' : ''}`}
    >
      <input
        type="radio"
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />

      <Label name={name} css="ml-2">
        {displayName}
      </Label>
    </div>
  )
}
