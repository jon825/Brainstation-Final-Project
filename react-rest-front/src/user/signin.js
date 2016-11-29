const axios = require('axios'); 
import React, {Component} from 'react';

class SignIn extends Component {
  constructor(){
    super();
    this.state = {email:null,
                  password:null,
                  warning:'no-warning'};

    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }

  formSubmit(e){
    let self = this;
    e.preventDefault();
    axios
      .post('http://localhost:3005/api/users/login',this.state)
      .then((res) => {
        console.log(res);
        if(res.status === 200){
          localStorage.authToken = res.data.token;
          location.href = '/';
        }
        /*
          TASK 2: If the login request is successful, store the authToken from the server in localStorage
            Once token is stored, redirect user to the main
            If the login request was unsuccessful, do not redirect user and show a warning message.
        */
      })
      .catch((err)=>{
          self.setState({
            warning:'error'
          })
      })
  }

  txtFieldChange(e){
    if(e.target.name === "email"){this.state.email = e.target.value}
    else if(e.target.name === "password"){this.state.password = e.target.value}

    this.setState({
      email:this.state.email,
      password:this.state.password
    });
  }

  render() {

    return (
      <div id="auth">
        <h3>SignIn Form</h3>
        <p className={"alert alert-danger "+ this.state.warning}>Incorrect email or password</p>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input 
              onChange={this.txtFieldChange}
              className="form-control"
              type="text" 
              placeholder="email" 
              name="email" />
          </div>
          <div className="form-group">
            <input 
              onChange={this.txtFieldChange}
              className="form-control"
              type="password" 
              placeholder="Password" 
              name="password" />
          </div>
          <div className="form-group">
            <button onClick = {this.formSubmit} className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;