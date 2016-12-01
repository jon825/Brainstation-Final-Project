import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {email:null,
                  password:null,
                  age:null,
                  warning:""};

    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }

  formSubmit(e){
    e.preventDefault();
    console.log(this.state)
    if(this.state.age < 19){
      self.setState({
        warning:'error'
      })
    } else{
    axios
      .post('/api/users/encrypt',this.state)
      .then( (res) =>{
        
        console.log(res);
        location.href = '/index';

      })
    }
  }

  txtFieldChange(e){
    if(e.target.name === "email"){
        this.state.email = e.target.value;
    }
    else if(e.target.name === "password"){
        this.state.password = e.target.value;
    }
    else if(e.target.name === "age"){
        this.state.age = e.target.value;
        
    }
    this.setState({
      email:this.state.email,
      password:this.state.password,
      age:this.state.age
    });
  }

  render() {
    return (

      
      <div id="auth">
        <h3>Sign Up Form</h3>
        <p className={"alert alert-danger "+ this.state.warning}>Age Restricted Content</p>
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
            <input 
              onChange={this.txtFieldChange}
              className="form-control"
              type="number" 
              placeholder="age" 
              name="age" />
          </div>          
          <div className="form-group">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <div>
          <Link to = "/user/signin"> Sign In </Link>
        </div>
      </div>
      
    );
  }
}

export default SignUp