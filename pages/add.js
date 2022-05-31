import Router from 'next/router';
import React from 'react'
import { useState } from 'react'

export default function add() {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();

    function cTitle(e){
        setTitle(e.target.value)
    }
    
    function cPrice(e){
        setPrice(e.target.value)
    }

    const dataAdd = {title, price}

    async function addData(){
        const add = await fetch('http://localhost:3000/api/add', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataAdd)
        })

        Router.push('/')
    }

  return (
    <div>
        <h1 className="text-center text-4xl py-8">ADD</h1>
      <div className="md:w-4/12 mx-auto">
          <input type="text" placeholder="Title" className="border-2 w-full py-2 my-2 border-black rounded-lg px-4 text-lg" onChange={(e) => cTitle(e)}></input>
          <input type="text" placeholder="Price" className="border-2 w-full py-2 my-2 border-black rounded-lg px-4 text-lg" onChange={(e) => cPrice(e)}></input>
          <p className="text-white py-2 px-6 border rounded text-center bg-blue-600 cursor-pointer" onClick={() => addData()}>Add</p>
        </div>
    </div>
  )
}

