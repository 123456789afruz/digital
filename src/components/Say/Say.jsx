import React from "react";
import "./Say.scss";
import Card_say from "../Card_say/Card_say";



const Say = () => {
  return (
    <>
      <section className="say">
        <div className="container">
          <div className="say__title">
            <h4>TESTIMONIALS</h4>
            <h1>Read What Other Have To Say</h1>
          </div>

          <div className="say__cards">
            <Card_say img="/say-img1.png" name="Andrew Rathore" info="Lorem Ipsum Dolor Dit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel. "/>
            <Card_say img="/say-img2.png" name="Vera Duncan" info="Lorem Ipsum Dolor Dit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel. "/>
            <Card_say img="/say-img3.png" name="Mark Smith" info="Lorem Ipsum Dolor Dit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel. "/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Say;
