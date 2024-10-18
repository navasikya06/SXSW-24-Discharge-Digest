import { NextResponse } from "next/server";


export async function POST(req: Request, res: Response) {
    try {
        const {} = await req.json();
        const response = await fetch('https://hooks.zapier.com/hooks/catch/2382506/21g220p/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Doctor:  "James",
                Surgery: "snaj",
                Addtional: "fds",
                Notes: "fds",
                Video_Link: "fds",
                Access_Code: "sdfs",
                Unique_Identifier: "Sdfs"
            })

        });

        if (response.ok) {
            const data = await response.json();

            console.log(data);

            return NextResponse.json(data)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
}