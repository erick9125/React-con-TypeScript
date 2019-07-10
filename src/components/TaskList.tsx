import * as React from 'react';
import { Task } from './Task';

class TaskList extends React.Component<ITaskListPros,any> {

    render(): JSX.Element[] {
        return this.props.tasks.map((task: Task, i:number) => {
            return (
                <div className="col-md-4 mt-2" key={task.id}>
                    <div className="card card-body">
                    <h3>{task.titulo}</h3>
                    <p>{task.descripcion}</p>
                    <button className="btn btn-danger btn-block" onClick={() => this.props.deleteATask(task.id)}>Eliminar</button>
                    </div>
                </div>
            )
        })
    }

}

interface ITaskListPros {
    tasks: Task[];
    deleteATask: (id: number) => void;
}

export default TaskList;