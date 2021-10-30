import React from "react";
import Indonesia from "@svg-maps/indonesia";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import {lokasi} from './location_indo';
import Map from './Map';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
        // Create new map object
        // this.customIndo = {
        //     ...Indonesia,
        //     label: 'Custom map label',
        //     locations: Indonesia.locations.map((location) => {
        //         // Modify each location
        //         console.log(location)
        //     })
        // };
  }
 
  render() {
    return (
      // <SVGMap map={lokasi} />
      <Map/>
    );
  }
}

export default App;
