import React, { Component } from "react";
import tableau from "tableau-api";
class TestGraph extends Component {
  componentDidMount() {
    this.createViz();
  }

  createViz() {
    const url =
      "https://public.tableau.com/views/Covid_16102878011290/Sheet1?:language=en&:display_count=y&:origin=viz_share_link";
    const vizContainer = this.vizContainer;
    var options = {
      width: 800,
      height: 500,
      hideTabs: true,
      hideToolbar: true,
      // Continent: "Europe",
      // Confirmed: "10450284",
    };
    const viz = new window.tableau.Viz(vizContainer, url, options);
    window.setInterval(() => {
      viz.refreshDataAsync();
      // console.clear();
      // console.log("Graphs refreshed", Date.now());
    }, 10000);
  }

  render() {
    return (
      <div
        ref={(div) => {
          this.vizContainer = div;
        }}
      ></div>
    );
  }
}

export default TestGraph;
