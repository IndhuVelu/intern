import React, { Component } from 'react'

class Resetpass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newpass:'',
             confrimpass:'',
             Email_id:'',
             msg:'',
             alertmsg:'',
             errors: {
              
                password: "",
                confrimpassword:'',
               
              }
        }
    }
    componentDidMount() {
        if (this.props.password) {
          this.setState({ password: this.props.password });
        }
      }
    toggleShow=(e)=> {
        e.preventDefault();
        this.setState((prevState) => {
            return {hidden: !prevState.hidden};
        });
//         this.setState({ hidden: !this.state.hidden });
    }
    toggleShow1=(e)=> {
        e.preventDefault();
        this.setState((prevState) => {
            return {hidden: !prevState.hidden};
        });
//         this.setState({ hidden: !this.state.hidden });
    }
    handleChangeNewPass=(e)=> {
        this.setState({ newpass: e.target.value});  
    }
    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          
          case "password":
            errors.password =
              value.length < 8 ? "Password must be 8 characters long!" : "";
            break;
            case "confrimpassword":
                errors.confrimpassword =
                (value.length < this.state.password.length) ? "Passwords don't match" :"";
                break;
          default:
            break;
        }
    this.setState((prevState) => {
            return {errors, [name]: !prevState. value};
        });
//         this.setState({ errors, [name]: value });
      };
    
    handleChangeConfrimPass=(e)=> {
        this.setState({ confrimpass: e.target.value});  
    }
    handleChangePass=(e)=> {
        // this.setState({ Email_id: this.props.match.params.id });  

        e.preventDefault();
        if(this.state.newpass === this.state.confrimpass){
            fetch('http://localhost:3050/ResetEmail',{
            method:"POST",
            body:JSON.stringify({
                newpass:this.state.password,
                confrimpass:this.state.confrimpassword,
                Email_id:this.props.match.params.id
            }),
            headers:{'Content-Type':'application/json'}
          })
          .then(res=> res.json())
          .then(data=>
            {
                this.setState({alertmsg : "Password Updated"})
     
            })
             
        }
        else{
            this.setState({alertmsg : "Password dont match"})
        }
       
        
    }

    render() {
        // console.log(this.props);
        console.log(this.props.match.params.id);
        const { errors } = this.state;
        return (
            <div>
                <div className="form_main2">
                <form>
                <div className="reset_form1">
                        <center>
                           <div> <label className="reset">Reset Password</label>  </div> 
                            <div> <input  type={this.state.hidden ? "password" : "text"}    name="password" placeholder="Enter New Password"  onChange={e => this.handleChange(e) } /> 
                            <input className="hi" type="image" src="https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-10-512.png"  onClick={this.toggleShow} /> <br></br>
                            {errors.password.length > 0 && (
                                    <span className="error">{errors.password}</span>
                                )}
                             </div> 
                            <div> <input  type={this.state.hidden ? "password" : "text"}  name="confrimpassword" placeholder="Confrim Password "  onChange={e => this.handleChange(e) } /> 
                            <input className="hi" type="image" src="https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-10-512.png"  onClick={this.toggleShow1} /><br></br>
                            {errors.password.length > 0 && (
                                 <span className="error">{errors.confrimpassword}</span>
                        )}
                            </div> 
                            <div> <button id="btn3"  onClick={e => this.handleChangePass(e)}>Change Password</button> </div>
                            <div className="alertmsg_text">{this.state.alertmsg}</div>
                        </center>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Resetpass
