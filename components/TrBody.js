function TrBody({title, price, deleteDat, update}) {
  return (
    <tr className="border-2">
      <th>{title}</th>
      <th>${price}</th>
      <th className="py-2">{deleteDat}</th>
      <th>{update}</th>
    </tr>
  );
}

export default TrBody;
