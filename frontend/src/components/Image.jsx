import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";

class Image extends React.Component {
  click() {
    console.log(getConfig());
  }

  render() {
    const config = {
      autoRotate: -2
    };
    return (
      <div>
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="https://pannellum.org/images/alma.jpg"
          config={config}
        />
        <ReactPannellum
          id="2"
          sceneId="secondScene"
          imageSource="https://grozny-inform.ru/LoadedImages/2022/07/05/photo1652346266_-5-.jpeg"
          config={config}
        />
        <div onClick={this.click}>Click Above</div>
      </div>
    );
  }
}
export default Image;