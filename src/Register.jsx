import * as React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="register">
        <h6> New here? You are... </h6>
        <nav className="text-white">
            <button className="btn btn-outline-light btn-lg text-left btn-block m-1" onClick={() => this.props.change_state("individual")}> 
              An Individual
            </button>
            <button className="btn btn-outline-light btn-lg text-center btn-block m-1" onClick={() => this.props.change_state("partner")}>
              A Partner
            </button>
            <button className="btn btn-outline-light btn-lg text-right btn-block m-1" onClick={() => this.props.change_state("business")}>
              A Business
            </button>
        </nav>
      </div>
    );
  }
}

export default LogIn;