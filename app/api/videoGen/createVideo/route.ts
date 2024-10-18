import type { NextApiRequest, NextApiResponse } from 'next';



export async function POST(req: Request, res: Response) {
    try {
        const response = await fetch('', {});
        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              'x-api-key': `${process.env.HEYGEN_API_KEY}`
            },
            body: JSON.stringify({
              test: true, caption: false, 
              dimension: {width: 1920, height: 1080},
              video_inputs: [{
                character: {
                  scale: 1,
                  avatar_id: ""
                }
              }],
            })
          };
        return 
    } catch (error) {
        console.log(error)
    }
}