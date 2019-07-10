import * as React from 'react';
import { Task  } from './Task';

class TaskForm extends React.Component<MiTarea, any> {

    constructor(props: MiTarea) {
        super(props);
        this.state = {
           titulo: '',
           descripcion: ''
        };
    }

    getCurrentTimeStamp() {
        return new Date().getTime();
    }

    nuevaTarea(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const nuevaTarea: Task = {
            id: this.getCurrentTimeStamp(),
            titulo: this.state.titulo,
            descripcion: this.state.descripcion,
            completado: false
        };
        //this.props.addANewTask();
        console.log(nuevaTarea)
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        const {name,value} = e.target;
        this.setState({
            [name]: value
        });
       
    }

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={e => this.nuevaTarea(e)}>
                    <div className="form-group">
                        <input type="text" name="titulo" onChange={e => this.handleInputChange(e)} className="form-control" placeholder="Titulo" />
                    </div>
                    <div className="form-group">
                        <textarea name="descripcion" onChange={e => this.handleInputChange(e)} className="form-control" placeholder="Descripción"></textarea>
                    </div>
                    <div className="form-group">
                         <button type="submit" className="btn btn-success btn-block">Guardar</button>
                    </div>
                   
                </form>
            </div>
        )
    }
}

interface MiTarea {
    addANewTask: (task: Task) => void;
}

interface MiEstadoTarea {
    titulo: string;
    descripcion: string;
}

export default TaskForm;