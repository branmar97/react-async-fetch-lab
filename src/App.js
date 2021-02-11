import React, { Component } from 'react';

class App extends Component {
    state = { 
        peopleInSpace: []
     }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }

    render() { 
        return ( 
            <div>
                <ul className='people-list'>
                    {this.state.peopleInSpace.map(person => (
                        <li>
                            <h3>{person.name}</h3>
                            <p><b>Craft</b></p>
                            <p><i>{person.craft}</i></p>
                        </li>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default App;