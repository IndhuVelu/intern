import React, { Component } from 'react'
import './Train_Book.css'
import { withRouter} from 'react-router-dom'

 class Container extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     handleBook=(e)=> {
         
     
        this.props.history.push('/Book', {
            id: this.props.id,
        
          })
    
    
    }
    render() {
        return (
            <div className="heading1">
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.departure}  <br/>
                    
                    {this.props.date}
                </div>
                <div>
                    {this.props.arrival}   <br/>
                    {this.props.date}
                </div>
                <div>
                    <button className="book"   onClick={e => this.handleBook(e)}>Book Now</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Container);
