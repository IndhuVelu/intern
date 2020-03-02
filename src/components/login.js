import React, { Component } from 'react'
import './login.css'
// import eye from '../music_player/public/show_hide_password.png'
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            password:'',
            hidden: true,
        }
    }

    componentDidMount() {
        if (this.props.password) {
          this.setState({ password: this.props.password });
        }
      }
    handleName=(e)=> {
        console.log(e.target.value);
     
        this.setState({ username: e.target.value});
    }
   
    handlePass=(e)=> {
        console.log(e.target.value);
    
        this.setState({ password: e.target.value});
    }
    toggleShow=(e)=> {
        e.preventDefault();
        this.setState((prevState) => {
            return {hidden: !prevState.hidden};
        });
//         this.setState({ hidden: !this.state.hidden });
    }
    handlelogin=(e)=> {
        
        

        console.log(this.state.username,this.state.password,this.state.email);
        e.preventDefault();

        if((this.state.username ==="" || null ||undefined) ||(this.state.password ===" " || null)){
            alert("Enter the neccessary details");
            return
        }
       

        fetch('http://localhost:3050/login',{
            method:"POST",
            body:JSON.stringify({
              name:this.state.username,
              password:this.state.password,
              
            }),
            headers:{'Content-Type':'application/json'},
          })
          .then(res=>res.json())
          .then(data => {
            if (data){
                localStorage.setItem('token',JSON.stringify(data))
                // localStorage.setItem('show',1)
                this.props.history.push('/Train')
                // window.location.reload();
            }
            else{
                alert('invalid credentials')
            }
        })
         
          e.preventDefault();
        
      }
    
    render() {
        
        return (
            // (localStorage.getItem('token')) ? <Redirect  to ="/Album"/>:
            <div className="body">
                 <div className="form_main">
                <form>
                    <div className="login_form">
                        <center>
                            
                           <div> <label className="login">LogIn</label>  </div> 
                            <div> <input id="name" type="text" placeholder="Enter Full Name" onChange={e => this.handleName(e) } /> </div> 
                            <div> <input id="password"  placeholder="Enter Password" type={this.state.hidden ? "password" : "text"} onChange={e => this.handlePass(e) } />
                                    <input className="hi" type="image" src="show_hide_password.png"  onClick={this.toggleShow} />
                                    
                             </div> 
                            <div> <button id="btn2"  onClick={e => this.handlelogin(e)}>LogIn</button>                            </div>
                           <div className="forget"> <a href="/password_reset">Forget Password?</a> </div>
 
                            <div className="log">Don't have a account ? <a href="/">Signup </a></div>
                        </center>
                    </div>
                </form>
                </div>
                </div>
        )
    }
}

export default Login
