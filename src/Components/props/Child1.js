function Child1({onDataFromChild}){
    const sendDataToparent = () =>{
       const data = 'Hello from child';
       onDataFromChild(data);
    }
    return(
        <>
        <button onClick={()=>sendDataToparent}>Send Data</button>
        </>
    )
}

export default Child1;