import React, { Component } from "react";
import './signup.css'
import { withRouter,   } from 'react-router-dom'

class Validate_signup extends Component {
  render() {
    return <Register />;
  }
}

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

var userpattern=new RegExp('[0-9]')


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      confrimpassword:'',
      cond:false,
      hidden: true,
      errors: {
        fullName: "",
        email: "",
        password: "",
        confrimpassword:'',
        hidden: true,
      }
    };
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
  toggleShow1=(e)=> {
    e.preventDefault();
      this.setState((prevState) => {
            return {hidden: !prevState.hidden};
        });
//     this.setState({ hidden: !this.state.hidden });
}

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
        ((value.includes(' ') )|| (userpattern.test(value))) ? "space and number is not allowed":"";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
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

//     this.setState({ errors, [name]: value });
      this.setState((prevState) => {
            return { errors, [name]: prevState.value};
        });
    
  };

  handleSubmit = event => {

    event.preventDefault();
    // if (validateForm(this.state.errors)) {
    //   console.info("Valid Form");
    // } else {
    //   console.error("Invalid Form");
    // }
    if((this.state.fullName ==="" ) || ( this.state.password ==="") ||(this.state.email ==="") ||(this.state.confrimpassword === "")){
        alert("please fill the details");
    }
    else{
      console.log(this.state)
        fetch('http://localhost:3050/signup',{
            method:"POST",
            body:JSON.stringify({
              name:this.state.fullName,
              email:this.state.email,
              password:this.state.password,
              
            }),
            // headers:{'Content-Type':'application/json'},
          })
          .then(res=> res.json())
          
          .then((res)=>{
          
            if(!res.status)
              alert('Username already Exist')
            else
              window.location.replace('/home')
          })
       
        this.setState({
            cond:true
        })
      
    }
   
   
            
       

         
  }

  render() {

    // if (this.state.cond) {
    //         return <Redirect push to="/home" />
    //        }
    

    const { errors } = this.state;
    return (
      <div className="body">
        <div className="form_main1">
          <form onSubmit={this.handleSubmit} noValidate>
              <div className="signup_form">
              <div><label className="sign">Sign Up</label> </div>
             <div className="fullName">
              
              <input type="text" name="fullName" onChange={this.handleChange} noValidate  placeholder="FullName"/><br/> <br/> 
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>

            <div className="email">
            
              <input type="email" name="email" onChange={this.handleChange} noValidate placeholder="Email" /> <br/>  <br/> 
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="password">
           
              <input  type={this.state.hidden ? "password" : "text"}  name="password"  onChange={this.handleChange} noValidate placeholder="Password" />
              <input className="hi" type="image" src="show_hide_password.png"  onClick={this.toggleShow1} /> <br/> <br/> 
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
               
            </div>
            <div className="password">
           
              <input   type={this.state.hidden ? "password" : "text"}  name="confrimpassword"  onChange={this.handleChange} noValidate placeholder=" ConfrimPassword" /> 
              <input className="hi" type="image" src="show_hide_password.png"  onClick={this.toggleShow1} /> <br/> <br/> 
              {errors.confrimpassword.length > 0 && (
                <span className="error">{errors.confrimpassword}</span>
              )}
              
            </div>
            <br/> 
            <div className="submit">
              <input type="submit" value="Create" className="btn1"/>
            </div>
            <div className="log">Already a Member ? <a href="/home">Login </a></div>
            </div>
            
          </form>
        </div>
     </div>
    );
  }
}

export default withRouter(Validate_signup);
