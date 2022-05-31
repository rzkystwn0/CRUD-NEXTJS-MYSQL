import Link from "next/link";
import  Router  from "next/router";
import { useState } from "react";
import Container from "../components/Container";
import TrBody from "../components/TrBody";

export default function Home(props) {
  const [data, setData] = useState(props.data);

  async function deleteData(id) {
    const del = await fetch("/api/delete/" + id, {
      method: "DELETE",
    });

    const dataFiltered = data.filter((dat) => {
      return dat.id !== id;
    });

    setData(dataFiltered);
  }

  function editData(id) {
    Router.push('/update/' + id)
  }

  

  return (
    <>
      <Container>
        <Link href="/add">
        <button className="py-2 px-4 bg-blue-600 w-full rounded text-white my-10">Add</button>
        </Link>
        <div className="md:w-12/12 flex justify-center">
          <table className="table-auto">
            <thead>
              <tr className="border-4">
                <th className="md:px-24 px-6 md:text-2xl py-6">Product</th>
                <th className="md:px-24 px-6 md:text-2xl">Price</th>
                <th className="md:px-24 px-6 md:text-2xl">Delete</th>
                <th className="md:px-24 px-6 md:text-2xl">Update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dat) => {
                return (
                  <TrBody
                    title={dat.title}
                    price={dat.price}
                    key={dat.id}
                    deleteDat={
                      <button className="py-2 px-4 bg-red-600 rounded text-white" onClick={() => deleteData(dat.id)}>
                        Delete
                      </button>
                    }
                    update={<button className="py-2 px-4 bg-blue-600 rounded text-white"
                    onClick={() => editData(dat.id)}
                    >update</button>}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api");

  const dataReq = await res.json();

  return {
    props: dataReq,
  };
}
