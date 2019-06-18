import React,{Component} from 'react';

export default class formulario extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            tarea: '',
            responsable: '',
            descripcion: '',
            prioridad: 'low'

        };
        this.handleInput = this.handleInput.bind(this);
    }  
handleInput(e) {
    const {value, name} = e.target;
    this.setState({
        [name] : value
    })
    console.log(this.state);
}
    render() {        
        return (
            <div className="card">
        <form  className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Tarea"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Descripcion"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
        );
    }
}