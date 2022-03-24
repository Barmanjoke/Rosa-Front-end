import * as React from 'react';
import DefaultRegister from './DefaultRegister';
import RegisterIndividual from './RegisterIndividual';
//import RegisterAnonymous from './RegisterAnonymous';
import RegisterPartner from './RegisterPartner';
import RegisterBusiness from './RegisterBusiness';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_uid: "default",
    };
  }

  change_current_uid = (current_uid) => { console.log("cu_uid", current_uid); this.setState({current_uid});};

  render() {
    let pages = [
      {uid: "default", display: <DefaultRegister onChange={this.change_current_uid}/>},
      {uid: "register_individual", display: <RegisterIndividual />},
      {uid: "register_partner", display: <RegisterPartner />},
      {uid: "register_business", display: <RegisterBusiness />},
    ];
    const display = pages.filter((entry) => entry.uid === this.state.current_uid)[0].display;
    return (
      <div id="register">
        {display}
      </div>
    );
  }
}

export default Register;