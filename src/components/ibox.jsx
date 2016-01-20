import React, {
  Component
} from 'react';

class IBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: 'iBox'
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps: ' + nextProps.name);
    this.setState({
      name: nextProps.name
    });
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  render () {
    return (
      <div>
        <h3>this.props = {this.state.name};</h3>
      </div>
    );
  }

}

IBox.defaultProps = {
  name: 'iBox'
};

export default IBox;
