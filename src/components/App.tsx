import * as React from 'react';

export class App extends React.Component<IProps,any> {
    
    constructor(props: IProps) {
        super(props)
        this.state = {
            tasks: []
        }
    }
    
    
    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav>
            </div>
        )
        
    }
}

interface IProps {
    title: string;
}

interface IState {
    tasks: [];
}