import Stomach from './stomach'
function Halfboil({name}){
    return(
      // <Useref />
      <div>
        <h1>Omelette</h1>
        <Stomach name={name}/>
      </div>
    )
   }
   export default Halfboil;