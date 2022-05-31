import db from '../../libs/db'

export default async function handle(req,res) {
    if(req.method !== "GET") return res.status(405).end()

    const data = await db('crud');

    res.status(200);
    res.json({
        message: 'get data succesfully',
        data
    })
} 