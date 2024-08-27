import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import CommentSection from "./components/CommentSection";

const App = () => {
  return (
    <div>
      <div className="google-signin-button">
        <Button className="google-signin" variant="light">
          <span>
            <img
              className="google-image"
              src="https://s3-alpha-sig.figma.com/img/4317/a2f0/7e87d571f17ce11ba268df94387ab0f6?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iUpZSuCYjZm9~Dup1ZuSs-WwLfmmZLMhy02n2AZSDflF0ftntW7yjcVW3F3FrGlbvFok2Vb0TEsJ1nOgdC5Bbm1yhAUIjZBMSS7mNpMZr6yLiDRJyob9mact3lLlhmVIUQh46D2YJyWk7yeo8soHmVCvJe0GnHyd7kdQq1bU~IWwphXdfWhkY5vOLEUK0qFdOXpqehJL-WoARQgl1y3893WQ9HDaJA9x9mwmmczfYfcSkl40hicqOqZi14875XNoRWiEV1sq~V0xm8rPTu2nStRFxO~v7mvb7G6kLIRPYfgIELisR~j6P7U5hqnxC3Y3JLGBOiL9IC0hommuSvCtJA__"
              alt="Google"
            />
            <h1>Sign with the Google</h1>
          </span>
        </Button>{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="Comment-Section-Body">
        <CommentSection />
      </div>
    </div>
  );
};

export default App;
