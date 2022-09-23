import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
  return (
    <footer className="bg-blue-500 py-6">
      <div className="  container mx-auto h-10 flex flex-col justify-center items-center">
        <span className="text-xl font-bold mx-3 text-white">Zakaria Aarab</span>
        <span className="text-xl font-bold mx-3 text-white">IMEDIA24</span>
      </div>
    </footer>
  )
}