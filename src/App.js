  import logo from './logo.svg';
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
  import { Component } from 'react';
  import axios from 'axios';

  const url = "https://panaderia.informaticapp.com/proveedores";

  class App extends Component{
    state = {
      data:[]
    }

    peticionGet=()=>{
      axios.get(url,{
        headers: {
          'Authorization': 'Basic YTJhYTA3YWRmaGRmcmV4ZmhnZGZoZGZlcnR0Z2ViYkNQeXhzT3F1LlFMbVdFNFhiaVVlbjZpUEVtSU4uOm8yYW8wN29kZmhkZnJleGZoZ2RmaGRmZXJ0dGdlUzQ0ZkFhejRMUWFUdFdRNVdnakc1c1g4ZE5vYk5GaQ=='
        }
      }).then(response=>{
        console.log(response.data);
        this.setState({ data: response.data });
      }).catch(error=>{
        console.log(error);
      });
    }

    componentDidMount(){
      this.peticionGet();
    }

    render() {
      return (
      <div className="App">
        <br /><br /><br />
        <button className="btn btn-success">Agregar Empresa</button>
        <br /><br />
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Razon Social</th>
              <th>RUC</th>
              <th>Nombre Encargado</th>
              <th>Apellido Encargado</th>
              <th>Telefono</th>
              <th>Dirección</th>
              <th>Empresa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
  }

  export default App;
