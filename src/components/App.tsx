import * as React from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from './Task';

export class App extends React.Component<IProps,IState> {
    
    constructor(props: IProps) {
        super(props)
        this.state = {
            tasks: []
        }
        this.deleteATask = this.deleteATask.bind(this);
    }
    
    addANewTask(task: Task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
        console.log(this.state)
    }

    deleteATask(id: number) {
       const tasks: Task[] =  this.state.tasks.filter(
            (task: Task) => task.id !== id
        );
        this.setState({tasks});
    }
    
    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <TaskForm addANewTask={this.addANewTask.bind(this)}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <TaskList 
                                tasks={this.state.tasks}
                                deleteATask={this.deleteATask}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
        
    }
}

interface IProps {
    title: string;
}

interface IState {
    tasks: Task[];
}