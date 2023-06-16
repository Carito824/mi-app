// seccion 28 videos 184 -185//
import { Component } from "react";

class Input extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  } 

  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

class App extends Component {
  state = {
    nombre: "",
    apellido: "",
  }

  constructor(props) {
    super(props);
    this.updateNombre = this.updateNombre.bind(this);
  }

  updateNombre = (value) => {
    this.updateValues('nombre', value);
  }

  updateValues = (prop, value) => { 
    this.setState({ [prop]: value });
  }

  render() {
    return (
      <p>
        Nombre Completo: {`${this.state.nombre} ${this.state.apellido}`}
        <Input
          value={this.state.nombre}
          onChange={this.updateNombre}  
        /> 
        <Input
          value={this.state.apellido}
          onChange={(value) => this.updateValues("apellido", value)}           
        /> 
        
      </p>
    );
  }
}

export default App;









/* ejercicio videos Seccion 28 176 al 183 
import { Component } from "react"

class Button extends Component {
  state = {}
  constructor(props) {
    super(props)
    console.log('constructor', props);
    }

    componentDidMount() {
      console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('componente did update', prevProps,prevState)
    }

    componentWillUnmount() {
      console.log('desmontando componente', this.props, this.state);
    }
  render() {
    console.log('Ejecutando Metodo render de Button');
    return(
      <button onClinck={() => this.setState({prop: 1 })}>
        Enviar
      </button>
    )

  }
}
class App extends Component {
  state = {
    valor: 3
  }
  render() {
    console.log(this.state);
    return (
      <div>
       <p> Hola Mundo</p>
       {this.state.valor === 3 
       ? <Button chanchito='feliz' />
        : null }
       <button 
       className={`${this.state.valor}`}
       onClick={() => this.setState({valor: 2}) }>
        Enviar en App
       </button>
      </div>
    )
  }
}


export default App*/