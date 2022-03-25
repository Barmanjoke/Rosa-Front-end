import * as React from 'react';
import { login } from './rq';

class LogIn extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    login(event.target.email.value, event.target.password.value).then(u => {
      this.props.change_state('individual', u)
    })
  }

  render() {
    const title = "We've missed you!"
    const email_label = "Please type your email here:";
    const password_label = "Please type your password here:";

    return (
      <form id="log_in" onSubmit={this.handleSubmit}>
        <h6> {title} </h6>
        <div className="form-group text-left float-left">
          <label htmlFor="email"> {email_label} </label>
          <input 
            type="email" 
            id="email"
            className="form-control"
            placeholder="foo@bar.com" 
            onChange={this.props.handle_email_change} 
            value={this.props.email}
          />
        </div>
        <br/>
        <div className="form-group text-left float-left">
        <label htmlFor="password"> {password_label}  </label>
        <input 
          type="password" 
          id="password"
          className="form-control" 
          onChange={this.props.handle_password_change} 
          value={this.props.password}
        />
        </div>
        <button className="form-control btn btn-primary"> Send </button>
      </form>
    );
  }
}

export default LogIn;