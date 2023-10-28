import React from 'react';
import "./App.css";
import Breakfast from './Components/Breakfast';
import Lunch from './Components/Lunch';
import Dinner from './Components/Dinner';

class Time_class extends React.Component {
  render() {
    class Time extends React.Component {
      constructor() {
        super();
        this.state = {
          currentTime: new Date().getSeconds(),
        };
      }

      componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({
            currentTime: new Date().getSeconds(),
          });
        }, 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      render() {
        let call;

        if (this.state.currentTime >= 5 && this.state.currentTime < 25) {
          call = <Breakfast />;
        } else if (this.state.currentTime >= 25 && this.state.currentTime < 45) {
          call = < Lunch/>;
        } else if (this.state.currentTime >= 45 && this.state.currentTime < 60) {
          call = <Dinner/>;
        }

        return (
          <>
            <h1></h1>
            <div className='main'>
            <h1>Project Explorer</h1>
            <hr/>
              <h1>{this.state.currentTime}</h1>
              <div>{call}</div>
            </div>
          </>
        );
      }
    }

    return (
      <div>
        <Time />
      </div>
    );
  }
}

export default Time_class;