
import logo from './logo.svg';
//import './App.css';
import './main.css'
const estilo2 = {
  boxShadow: '0 5px 3px rgba( 0,0,0,0.5)'
}
const estilo = ({bg = '#222'}) => ({
  backgroudColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin:  '10px 15px',
 
})


const Li = ({ children }) => {
  
  return (
    <li  className='clase-li'> {children}</li>
  )
}

const App = () =>  {
  const valor = 'triste'
  return (
        <ul className="clase-css"> 
          <Li estado="feliz"> valor de li</Li>
        </ul>
      );
}

export default App;

//import Button from './Button'

//const arr = [
  //"chanchito feliz",
  //"chanchito triste",
  //"chanchito Emocionado",
//]
/*const App = () => {

  

  const miVariable = false

  if(miVariable) {
    return <p>Mi variable dio true!</p>
  }
  return ( 
      <div>
      <h1 onClick={(e)  => console.log('click' , e )}>Hola Mundo</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
        <Button onClick={() => console.log('clickleado')} >Enviar</Button>
      </div>
  )
}

export default App*/
