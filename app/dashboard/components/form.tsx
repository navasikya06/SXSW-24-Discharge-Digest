"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import * as React from "react"


export default function Form() {
  const [option, setOption] = React.useState("")
  const [input1, setInput1] = React.useState("")
  const [input2, setInput2] = React.useState("")

  const handleGenerate = () => {
    console.log("Generated with:", { option, input1, input2 })
    // Add your generation logic here
  }

  return (
    <div className=" w-[500px]">
      <div className="border border-gray-300 rounded-lg p-6 space-y-6 bg-white shadow-sm">
        <div className="space-y-2">
          <Label htmlFor="select">Select a Surgery</Label>
          <Select onValueChange={setOption}>
            <SelectTrigger id="select">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="input1">Patient Name</Label>
          <Input
            id="input1"
            placeholder="Patient Name"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="input2">Doctor Name</Label>
          <Input
            id="input2"
            placeholder="Doctor Name"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>

        <Button onClick={handleGenerate} className="w-full">
          <h1 className=" font-semibold">Generate</h1>
        </Button>
      </div>
    </div>
  )
}