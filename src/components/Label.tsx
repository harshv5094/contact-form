import React from 'react'

type LabelProps = {
  children: React.ReactNode
  name: string
}

export default function Label({ children, name }: LabelProps) {
  return (
    <label htmlFor={name} className="text-cus-grey-500">
      {children}
    </label>
  )
}
