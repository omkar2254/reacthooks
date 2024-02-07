function Car(props){
    return <li>{props.brand}</li>
}

function List(){
    const cars = ["BMW", "Audi", "Mustang"]
    return(
        <>
        <h1>Cars in my Garage</h1>
        <ul>
            {cars.map((car)=> <Car brand={car}/>)}
        </ul>
        </>
    )
}

export default List();