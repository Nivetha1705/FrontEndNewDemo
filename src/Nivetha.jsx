function dog(props){
    return(
    <div>
        <h1>Dog name is {props.name}</h1>
        <h1>{props.name} is a good dog</h1>
        <h1>{props.name} loves to eat bones</h1>
    </div>    
    )
}
export default dog