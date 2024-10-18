import { NextResponse } from "next/server";


export async function POST(req: Request, res: Response) {
    try {
        const { doctor, surgery, additional, notes } = await req.json()
        const res = await fetch('https://kbyki3.buildship.run/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                doctor,
                surgery,
                additional,
                notes
            })
          });
          console.log(res);

          if (res.ok) {
            return NextResponse.redirect('/')
          }
    } catch (error)  {
        console.log(error)
        return NextResponse.json(error)
    
}
}