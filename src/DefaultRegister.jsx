import * as React from 'react';
class DefaultRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="register">
        <h6> New here? You are... </h6>
        <nav className="text-white">
            <div className="row">
              <button 
                className="btn btn-outline-light btn-lg text-left btn-block m-1"
                onClick={() => this.props.onChange("register_individual") }
              > 
                An Individual
              </button>
            </div>

            <div className="row">
              <button className="btn btn-outline-light btn-lg text-left btn-block m-1"> 
                An Anonymous Individual
              </button>
            </div>

            <div className="row">
              <button className="btn btn-outline-light btn-lg text-center btn-block m-1">
                A Partner
              </button>
            </div>

            <div className="row">
              <button className="btn btn-outline-light btn-lg text-right btn-block m-1">
                A Business
              </button>
            </div>
        </nav>
      </div>
    );
  }
}

export default DefaultRegister;