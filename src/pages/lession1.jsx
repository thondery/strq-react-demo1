import React, {
  Component
} from 'react';

class Lession1 extends Component {

  constructor (props) {
    super(props);
    this.state = {
      id: 'es2015'
    };
  }

  componentDidMount () {
    console.log('componentDidMount: 加载后通过componentDidMount方法执行setTimeout，1.5秒后改变state');
    this.timer = setTimeout(function () {
      this.setState({
        id: 'es2016'
      });
    }.bind(this), 1500);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate: 当视图发生改变后调用了componentDidUpdate');
    console.log('this.state.id从' + prevState.id + '改为' + this.state.id);
  }

  //componentWillReceiveProps () {

  //}

  /*shouldComponentUpdate (nextState) {
    console.log(nextState);
    return nextState.title !== this.props.title;
  }*/

  render () {
    return (
      <div>
        <h1>Lession1</h1>
        <p>this.state.id = {this.state.id};</p>
      </div>
    );
  }
}

export default Lession1;
