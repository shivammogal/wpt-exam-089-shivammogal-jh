
import './App.css';

import { useState } from 'react';

import axios from 'axios';


function App() {

  return (

    <div className="container-fluid  m-0 p-0">

      <Header />

      <Contains />

    </div>

  );
}

function Header() {

  const [title, settitle] = useState("MyChatApp")
  const [id, setid] = useState("210940520089")
  const [name, setname] = useState("Shivam Mogal")

  return (
    <>
      <div className="container-fluid row bg-secondary m-0 p-0 align-items-center " style={{ height: "50px" }} >

        <div className='col'>

          <div>

            <span className='fw-bold text-light ' style={{}}>{title}</span>

            <span className='text-light' style={{ fontSize: "10px" }}> by {name},</span>

            <span className='text-light' style={{ fontSize: "10px" }}> id: {id}</span>

          </div>

        </div>

      </div>
    </>
  );
}


function Contains() {

  const [msg, setmsg] = useState("")

  const [list, setlist] = useState([])


  const getAllMsg = async () => {

    const url = `http://localhost:4000/message`

    const result = await axios.get(url)


    console.log("hello")

    setlist(result.data)
  }


  const send = async () => {




    if (msg === "") {

      alert("Cannot send Empty message ...")

      return;

    }

    const url = `http://localhost:4000/send`

    const data = {
      msg: msg
    }

    await axios.post(url, data)

    setlist([msg, ...list])

    setmsg("")
  }

  const msghandler = (event) => {

    setmsg(event.target.value)
  }

  return (
    <>
      <div className="container m-0 p-0 mt-3 mx-2 w-100">

        <div className='w-100'>


          <input className='me-2' style={{ width: "70vw", height: "50px" }} type="text" placeholder='Lets chat here...' value={msg} onChange={msghandler} />

          <input type="button" style={{ width: "20vw", height: "50px" }} value="SEND" onClick={send} />


        </div>

      </div>

      <div className="container mt-3">
        <div>

          <div>


            {
              list.map((item, index) => (
                <div className=' my-2  text-light ps-2 ' style={{ width: "92vw", backgroundColor: "lightgrey" }}>
                  {list}
                </div>

              ))}
            {/* 
                                <div className=' my-2  text-dark ps-2 ' style={{ width: "92vw", backgroundColor: "lightgrey" }}>
                                  Hii .. Shivam
                                </div>
                                <div className=' my-2  text-dark ps-2 text-end pe-2' style={{ width: "92vw", backgroundColor: "lightgrey" }}>
                                  Hello i'm virat
                                </div> */}

          </div>

        </div>

      </div>

    </>


  );
}








export default App;
