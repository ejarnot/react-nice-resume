import React, { Component } from "react";
//import Fade from "react-reveal";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const slides = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="portfolio-item item-wrap">
          <div style={{ textAlign: "center" }}>{projects.title}</div>
          <img alt={projects.title} src={projectImage} />
          <div>{projects.category}</div>
          <a href={projects.url}>Web Page</a><br/>
          <a href={projects.github}>GitHub Repository</a>
        </div>
      );
    });

    return (
      <section id="portfolio">
        
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projects</h1>
              <p>{slides}</p>
            </div>
          </div>
        
      </section>
    );
  }
}

export default Portfolio;
