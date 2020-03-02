import React, { Component } from 'react'
import './Password_reset.css'

class Password_reset extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             changemail:'',
             fetchedemail:''
        }
    }
   
    handleChangeEmail=(e)=> {
        this.setState({ changemail: e.target.value});
        
    }
    handleReset=(e)=> {
        e.preventDefault();
        fetch('http://localhost:3050/email',{
            method:"POST",
            body:JSON.stringify({
                changemail:this.state.changemail
            }),
            headers:{'Content-Type':'application/json'}
          })
          .then(res=> res.json())
          .then(data=>
            {
              this.setState({fetchedemail: "Email send" })
           
            })
             
    }
    render() {
       
        return (
            <div>
                <div className="body">
                <div className="form_main1">
                <form>
                <div className="reset_form">
                        <center>
                           <div> <label className="reset">Reset Password</label>  </div> 
                            <div> <input  type="email"   placeholder="Enter Email"  onChange={e => this.handleChangeEmail(e) } /> </div> 
                            <div> <button id="btn3"  onClick={e => this.handleReset(e)}>Reset</button> </div>
                            <div className="alertmsg_text">{this.state.fetchedemail}</div>
                        </center>
                    </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Password_reset
