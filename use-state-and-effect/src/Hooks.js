import React, {useEffect, useState} from 'react';

function Hooks(){
    const[userName, setUserName] = useState('');
    const[data, setData] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userName}`)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log(error));
    },[userName])

    return <div>Hooks Example
        <br></br>
        <button onClick={() => setUserName('1')}>Windows</button>
        <button onClick={() => setUserName('2')}>IOS</button>
        <button onClick={() => alert(JSON.stringify(data))}>Alert button</button>

        <br></br>
        {userName}
        <br></br>
        {JSON.stringify(data)}
    </div>
}

export default Hooks;