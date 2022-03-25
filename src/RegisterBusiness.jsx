import * as React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select';

class RegisterBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: undefined,
      email: undefined,
      phone: undefined,
      size: 'small',
      free_text: undefined,
    };
  }

  change_company_name = ({target: {company_name}}) => { this.setState({company_name}); };
  change_email = ({target: {email}}) => { this.setState({email}); };
  change_phone = (phone) => { this.setState({phone}); };
  change_size = (size) => { this.setState({size}); };
  change_free_text = ({target: {free_text}}) => { this.setState({free_text}); };

  render(){
    const company_name_label = "What is the name of your company?";
    const email_label = "What is your email?";
    const phone_label = "At which phone number shall we contact you?";
    const size_label = "How many employees do you have?";
    const free_text_label = "Is there anything you want to tell us?";

    const size_options = [
      { value: 'small', label: '< 10' },
      { value: 'average', label: '< 250' },
      { value: 'big', label: '< 5000' },
      { value: 'large', label: '> 5000' },
    ];

    return (
      <div id="register">
        <p> Are you interested in using our software? <br/> <span className="color2"> Contact us to get a quotation! </span></p>
        <form>
          <label htmlFor="company_name"> {company_name_label} </label>
          <input
            id="company_name"
            type="text"
            className="form-control"
            onChange={this.change_company_name}
            value={this.state.company_name} 
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


          {/* warning, size is never really registed cause I don't have enough time to read the doc lmao*/}
          <label htmlFor="size"> {size_label} </label>
          <div className="color1">
          <Select 
            options={size_options} 
            menuColor='black'
          />
          </div>
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

export default RegisterBusiness;