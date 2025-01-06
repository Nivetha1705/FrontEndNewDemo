import Egg from './Egg'
function Hen({name}){
    return(
      // <Useref />
      <div>
        <h1>Hen: {name}</h1>
        <Egg name={name}/>
      </div>
    )
   }
   export default Hen;
