"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TextInput({ onSubmit }: { onSubmit: (t: string) => void }) {
  const [value, setValue] = useState("")
  return (
    <div className="glass-panel p-4">
      <textarea className="w-full bg-transparent outline-none resize-none min-h-[120px]" placeholder="Prefer typing? Describe an interesting AI problem you've solved." value={value} onChange={(e)=>setValue(e.target.value)} />
      <div className="mt-3"><Button variant="primary" size="sm" onClick={()=> onSubmit(value)}>Submit</Button></div>
    </div>
  )
}


