import db from '../../libs/db'

export default async function handler(req, res) {
    if(req.method !== 'POST') return res.status(405).end();

    const { title, price } = req.body;

    const add = await db('crud').insert({
        title, price
    });

    console.log(add)

    const addData = await db('crud').where('id', add);

    res.status(200);
    res.json({
        message : 'add item succsesfully',
        data : addData
    })
}