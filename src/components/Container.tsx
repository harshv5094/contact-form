import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-[20rem] md:w-[40rem] h-[36rem]  rounded-lg px-8 py-5">
      {children}
    </div>
  )
}
