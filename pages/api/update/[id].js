import db from "../../../libs/db";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  const { id } = req.query;
  const { title, price } = req.body;

  const update = await db("crud").where({ id }).update({
    title,
    price,
  });

  const updateData = await db("crud").where({ id }).first();

  res.status(200);
  res.json({
    message: "update data succesflly",
    data: updateData,
  });
}
