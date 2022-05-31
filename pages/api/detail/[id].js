import db from '../../../libs/db'

export default async function handler(req, res) {
    if(req.method !== 'GET') return res.status(405).end();

    const { id } = req.query;

    const data = await db('crud').where({ id }).first();

    if(!data) return res.status(404).end();

    res.status(200);
    res.json({
        message: 'detail data',
        data
    })
}