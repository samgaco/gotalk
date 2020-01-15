import React from "react";
import { Link } from "react-router-dom";
import LanguageCard from "./LanguageCard";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: []
    };
  }

  componentDidMount() {
        const url_lang = "languages/index";
        fetch(url_lang)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ languages: response }))
          .catch(() => this.props.history.push("/"));
}



render(){

  const DisplayLanguages = this.state.languages.map((language)=> 
  <LanguageCard 
  language={language}
  />);

  return(
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
      <h1 className="useFont display-4">GoTalk!</h1>
        <h2 className="useFont display-4">Search Teachers:</h2>
        <p className="lead">
      Search by directly typing the languages you want to learn and rates.</p> 
        <hr className="my-4" />
        <Link
          to="/teachers"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Teachers
        </Link>
      </div>

      <div className='d-flex flex-row flex-wrap'>
{DisplayLanguages}
</div>
    </div>

  </div>

  )
}
};

export default Home;