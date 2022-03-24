import * as React from 'react';
import DatePicker from 'react-date-picker'

class RegisterIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      birth_date: new Date(),
    }
  }

  change_first_name = ({target: {first_name}}) => { this.setState({first_name}); };
  change_last_name = ({target: {last_name}}) => { this.setState({last_name}); };
  change_email = ({target: {email}}) => { this.setState({email}); };
  change_birth_date = ({target: {birth_date}}) => { this.setState({birth_date}); };

  render() {
    const first_name_label = "What is your first name?";
    const last_name_label = "What is your last name?";
    const email_label = "What is your email?";
    const birth_date_label = "On which day are you born?";

    return (
      <div id="register_individual">
        <form>
          <label htmlFor="first_name"> {first_name_label} </label>
          <input
            id="first_name"
            type="text"
            className="form-control"
            onChange={this.change_first_name}
            value={this.state.first_name} 
          />

          <label htmlFor="last_name"> {last_name_label} </label>
          <input
            id="last_name"
            type="text"
            className="form-control"
            onChange={this.change_last_name}
            value={this.state.last_name} 
          />

          <label htmlFor="email"> {email_label} </label>
          <input
            id="email"
            type="text"
            className="form-control"
            onChange={this.change_email}
            value={this.state.email} 
          />

          <label htmlFor="birth_date"> {birth_date_label} </label>
          <DatePicker 
            className="form-control"
            onChange={this.change_birth_date}
            value={this.state.birth_date} 
          />

          <button className="form-control btn btn-warning"> Send </button>
        </form>
      </div>
    );
  }
}

export default RegisterIndividual;