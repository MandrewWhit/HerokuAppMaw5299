import React, { useState, useEffect } from 'react'



function Input() {
    const [data, setData] = useState('');
    var myinput;

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            setData(e.target.value);
            fetch('/members', {
                method:"POST",
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                },
                body:JSON.stringify({ body: e.target.value })
            }).then(response => {
                return response.json()
            })
            .then(json => {
                setData(json)
            })
        }
    }

    return (
        <div>
            <input value={myinput} onKeyDown={handleKeyDown}/>
            <p>{data}</p>
        </div>
    );
}


function App() {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div>
            <p>If you type "Andrew", Whitaker is returned. Any other name is undefined.</p>
            <Input/>

        </div>
    )
}

export default App