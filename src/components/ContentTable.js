import React, { Component } from 'react';
import trulio from '../apis/trulio';

class ContentTable extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        this.getData()
    }
 
    getData = async() => {
        const response = await trulio.get()
        this.setState({ data: response.data })
    }

    head = () => {
        return this.state.data.map((key, index) => {
            let obj = Object.keys(key)
            if(index === 0)
            return (    
                    <tr key={index}>
                        <th>
                            {obj[1]}
                        </th>
                        <th>
                            {obj[3]}
                        </th>
                        <th>
                            {obj[2]}
                        </th>
                        <th>
                            {obj[0]}
                        </th>
                    </tr>               
            )
        })
    }

    row = () => {
        return this.state.data.map((key, index) => {
            return (
                <tr key={index} >
                    <td>{key.PriKey.S}</td>
                    <td>{key.Column2.S}</td>
                    <td>{key.Column3.S}</td>
                    <td>{key.Column4.S}</td>
                </tr>
            )}
        )
    }
  
    render(){
        return(
            <table className="table">
                <thead>
                    {this.head()}
                </thead>
                <tbody>   
                    {this.row()}
                </tbody>
            </table>
        )
    }
}

export default ContentTable;