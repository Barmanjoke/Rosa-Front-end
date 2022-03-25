import * as React from 'react';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class RegisterPartner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      org_name: undefined,
      email: undefined,
      website: undefined,
      phone: undefined,
      free_text: "",
    }
  }

  change_org_name = ({target: {org_name}}) => { this.setState({org_name}); };
  change_email = ({target: {email}}) => { this.setState({email}); };
  change_phone = (phone) => { this.setState({phone}); };
  change_website = ({target: {website}}) => { this.setState({website}); };
  change_free_text = ({target: {free_text}}) => { this.setState({free_text}); };

  render() {
    const org_name_label = "What is the name of your organization?";
    const email_label = "What is your email?";
    const phone_label = "At which phone number shall we contact you?";
    const website_label = "What is your website?";
    const free_text_label = "Is there anything you want to tell us?";

    return (
      <div id="register_partner">
        <form>
          <label htmlFor="org_name"> {org_name_label} </label>
          <input
            id="org_name"
            type="text"
            className="form-control"
            onChange={this.change_org_name}
            value={this.state.org_name} 
          />

          <br/>

          <label htmlFor="email"> {email_label} </label>
          <input
            id="email"
            type="text"
            className="form-control"
            onChange={this.change_email}
            value={this.state.email} 
          />

          <br/>
          
          <label htmlFor="phone"> {phone_label} </label>
          <PhoneInput
            placeholder={phone_label}
            value={this.state.phone}
            onChange={this.change_phone}/>

          <br/>

          <label htmlFor="website"> {website_label} </label>
          <input
            type="url"
            className="form-control"
            onChange={this.change_website}
            value={this.state.website} 
            placeholder="www.rosaparks.app"
          />

          <br/>

          <label htmlFor="free_text"> {free_text_label} </label>
          <textarea 
            className="form-control"
            onChange={this.change_free_text}
            value={this.state.free_text}
          > </textarea>

          <button className="form-control btn btn-warning"> Send </button>
        </form>
      </div>
    );
  }
}

export default RegisterPartner;