import React, { Component } from 'react';

export default class PersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'may nizar',
        bio: 'full stack js developer',
        imgSrc:
          'https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/67365204_2253246424725236_2412126888395800576_n.jpg?stp=c4.11.1072.1072a_dst-jpg_s240x240&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sGgj9GAd_RMAX_vXDx1&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBUYzwXijS0afuYKoFwz2eH3qU2ArxHuFE9_1RbMzbFKA&oe=64D3A7E6',
        profession: 'gomycode student',
      },
      intervalId: null,
      elapsedTime: 0,
    };

    this.startTimer();
  }

  componentWillUnmount() {
    this.resetTimer();
  }

  startTimer() {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  resetTimer() {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
      elapsedTime: 0,
    });
  }

  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} sec`;
  };

  render() {
    const { person, elapsedTime } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{person.fullName}</h1>
        <img alt="img" src={person.imgSrc} />
        <p>{person.bio}</p>
        <p>{person.profession}</p>
        <p>Elapsed Time: {this.formatTime(elapsedTime)}</p>
      </div>
    );
  }
}