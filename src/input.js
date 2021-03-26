import React from "react";
import { connect } from "react-redux";
class Input extends React.Component {
  render() {
    return (
      <div>
        <h1>This is inout</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
