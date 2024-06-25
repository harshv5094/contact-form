import React from 'react'

type LabelProps = {
  children: React.ReactNode
  name: string
  css?: string
}

export default function Label({ children, name, css }: LabelProps) {
  return (
    <label htmlFor={name} className={`text-black ${css}`}>
      {children}
    </label>
  )
}
