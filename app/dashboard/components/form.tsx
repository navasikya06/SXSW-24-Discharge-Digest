"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import react, { useState } from "react"


export default function Form() {
  const [option, setOption] = useState("")
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("");

  const router = useRouter();

  const [additional, setAdditional] = useState<null | string>(null);
  const [doctorName, setDoctorName] = useState<null | string>(null);
  const [notes, setNotes] = useState<null | string>(null);
  const [surgery, setSurgery] = useState<null | string>(null);


  const createVideo = async () => {
    router.push('/dashboard/success')
    // try {
    //     const res = await fetch('/api/buildship/spreadsheet', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             doctor: doctorName,
    //             surgery,
    //             additional: "",
    //             notes
    //         })
    //       });
    //       console.log(res);

    //       if (res.ok) {
    //         router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/dashboard/share?`);
    //       }
    // } catch (error)  {
    //     console.log(error)
    // }
  }

  return (
    <div className=" w-[500px]">
      <div className="border border-gray-300 rounded-lg p-6 space-y-6 bg-white shadow-sm">
        <div className="space-y-2">
          <Label htmlFor="select">Select a Surgery</Label>
          <Select onValueChange={(value)=>{
            if (value === "option1") { 
                setNotes("You've just had a hyserectomy. For the next 2 weeks, limit physical activity and be sure to follow our nutrition guide."); 
                setSurgery(value)} else {
                    setSurgery(value)
                }
          }}>
            <SelectTrigger id="select">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Hysterectomy</SelectItem>
              <SelectItem value="option2">Appendectomy</SelectItem>
              <SelectItem value="option3">Coronary Artery Bypass Grafting</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="input2">Doctor Name</Label>
          <Select onValueChange={setDoctorName}>
            <SelectTrigger id="select">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Dr. Michael Johnson</SelectItem>
              <SelectItem value="option2">Dr. Emily Carter</SelectItem>
              <SelectItem value="option3">Dr. Olivia Martinez</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
            <Label>Discharge Notes</Label>
            <Textarea value={notes ?? ''} onChange={(e)=>{setNotes(e.target.value)}}/>
        </div>

        <div className="space-y-2">
            <Label>Additional</Label>
            <Textarea value={additional ?? ''} onChange={(e)=>{setAdditional(e.target.value)}}/>
        </div>

        <Button onClick={createVideo} className="w-full">
          <h1 className=" font-semibold">Generate</h1>
        </Button>
      </div>
    </div>
  )
}