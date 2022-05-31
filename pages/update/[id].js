import Router from "next/router";
import { useState } from "react";
import Container from "../../components/Container";

export default function update(props) {
  const { data } = props;

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  function cTitle(e) {
    setTitle(e.target.value);
    console.log(e.target.value);
  }

  function cPrice(e) {
    setPrice(e.target.value);
  }

  const dataUp = {title, price}

  async function updateData(){
      const update = await fetch('/api/update/' + data.id, {
          method: "PUT",
          headers: {
              'Content-Type': "application/json"
          },
          body: JSON.stringify(dataUp)
      })


      const res = await update.json()

      Router.push('/')
  }


  return (
    <div>
      <Container>
        <h1 className="text-center text-4xl py-8">EDIT PRODUCT</h1>
        <div className="md:w-4/12 mx-auto">
          <input type="text" placeholder={data.title} className="border-2 w-full py-2 my-2 border-black rounded-lg px-4 text-lg" onChange={(e) => cTitle(e)}></input>
          <input type="text" placeholder={data.price} className="border-2 w-full py-2 my-2 border-black rounded-lg px-4 text-lg" onChange={(e) => cPrice(e)}></input>
          <p className="text-white py-2 px-6 border rounded text-center bg-blue-600 cursor-pointer" onClick={() => updateData()}>Edit</p>
        </div>
      </Container>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const res = await fetch("https://crud-nextjs-mysql.vercel.app/api/detail/" + id);

  const data = await res.json();

  return {
    props: data,
  };
}
