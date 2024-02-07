import Child1 from './Child1';
function Parent(){
    const handleChildData = (data)=>{
        console.log("Data From Child", data);
    }
    return(
        <>
        <Child1 onDataFromChild={handleChildData}/>
        </>
    )
}

export default Parent;