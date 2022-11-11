import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  username: string,
  role: 'user' | 'admin'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    {
      id: 1,
      username: 'John Doe',
      role: 'user',
    }
  )
}
