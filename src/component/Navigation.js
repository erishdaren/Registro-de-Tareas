import React,{Component} from 'react';
import {tareas} from '../tareas.json';

export default class Navigation extends Component {

                state = {
                        tareas 
                    }
render() {
                const task = this.state.tareas.map((tareas)  => {
                                return (
                                 <div className="col-md-4">
                                    <div className="card mt-4">
                                       <div className="card-header">
                                           <h3>{tareas.tarea}</h3>
                                           <span className = "badge badge-pill badge-danger ml-2">
                                               Prioridad:  {tareas.prioridad}
                                           </span>
                                       </div>
                                       <div className="card-body">
                                           <p>Descripcion: <mark>{tareas.descripcion} </mark></p> 
                                           <p>Responsable:<mark>{tareas.responsable} </mark> </p>       
                                       </div>
                                    </div>
                                 </div>                                
                                )
                            })
    return (
                    <div className="App">
                        <nav className ="navbar navbar-dark bg-dark">    
                            <a href="http://localhost:3000/" className = "text-white" > Tareas
                            <span className = "badge badge-pill badge-light ml-2">
                               {this.state.tareas.length} {/*<-- longitud del arreglo*/}
                            </span>
                             </a>
                        </nav>                   
                                
                           <div className="container">
                                <div className="row mt-4">
                                {task}
                                </div>
                           </div>

                    </div>
            );
    } 
} 