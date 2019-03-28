import React, { Component } from 'react';
import trulio from '../apis/trulio';


class App extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        this.getData()
    }
 
    getData = async() => {
        const response = await trulio.get()
        this.setState({ data: response.data })
        console.log(this.state.data)
    }

    render(){
        return(
            <div className="container">
                <table className="table">
                    <thead>
                        <th scope="col">PriKey</th>
                        <th scope="col">Column 2</th>
                        <th scope="col">Column 3</th>
                        <th scope="col">Column 4</th>
                        </thead>
                
                <tbody>
                    {this.state.data.map(cell => {
                    return (
                        <>
                        <tr>
                            <td>{cell.PriKey.S}</td>
                            <td>{cell.Column2.S}</td>
                            <td>{cell.Column3.S}</td>
                            <td>{cell.Column4.S}</td>
                        </tr>
                        </>
                    )    
                     })}
                </tbody>
                </table>
            </div>
        )
    }
};

export default App;