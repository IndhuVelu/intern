import React, { Component } from 'react'
import './Header.css'
import { Redirect ,withRouter} from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             authdata:{'user':{'name':''}}
        }
    }
    componentDidMount = async()=>{
        if(localStorage.getItem('token'))

       {await fetch('http://localhost:3050/head',{
            method:'post',
            body:JSON.stringify({
             token:JSON.parse( localStorage.getItem('token')).token,
            }), headers:{'Content-Type':'application/json'},
          })
          .then(res=> res.json())
          .then(data=>this.setState({
              authdata:data
          }))
          .catch(()=>{
            console.log('error')
            this.props.history.push("/home")
        })}        
    }
   
    handlelogout=(e)=> {
          localStorage.removeItem('token');
     
          window.location.reload();
        
      
        
    }
    render() {
        // console.log(JSON.parse(localStorage.getItem('token')).token);
        return (
            (!localStorage.getItem('token')) ? <Redirect  to ="/home"/>:
            <div>
                <div className="full">
                  <div className="head"> <h3> Train Booking </h3></div>
                  <div className="user">{this.state.authdata.user.name}
                   <div className="logbtn"> <a  className="whitelink" onClick={e => this.handlelogout(e)}> Logout </a> </div> </div>
                   
                </div>
               
               
            </div>
        )
    }
}

export default withRouter(Header)