import React, { Component } from "react";
import Ad from "./Ad";

class AdPage extends Component {
  constructor() {
    super();
    this.state = {
      showAd: true, // 초기값: 광고 표시
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd, // 광고 표시 여부를 토글
    }));
  };

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 숨기기" : "광고 표시하기"}
        </button>
      </div>
    );
  }
}

export default AdPage;
