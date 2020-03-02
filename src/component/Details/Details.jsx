import React, { Component } from 'react'
import './Details.css'
class Details extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const id = this.props.value.id;
        return (
            <div className="Details">
                {this.props.count}
                <div>
                <select className="gender" name="gender" value={this.props.value.gender} onChange={(e)=>this.props.DetailsChange(id,e)} required>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                </select>
                </div>
               <div> <input type="text" name="name"  value={this.props.value.name} placeholder="Enter Name" onChange={(e)=>this.props.DetailsChange(id,e)} required/> </div>
                <div> <input type="number" name="age"  value={this.props.value.age} placeholder="Age" min="05" max="100" onChange={(e)=>this.props.DetailsChange(id,e)} required/> </div>
            
            </div>
        )
    }
}

export default Details

