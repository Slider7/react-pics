import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  /* 1-й вариант - используем промис для получения данных:
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 9op0aGMn4XR-RFxqpYFQGOHEVRGQIwhgZ97-SU_zems",
        },
      })
      .then((responce) => {
        console.log(responce.data.results);
      }); 
  } */

  //------- 2-й вариант - используем async await:
  onSearchSubmit = async (term) => {
    const responce = await unsplash.get("search/photos", {
      params: { query: term },
    });
    this.setState({ images: responce.data.results });

    /* ------------------ 3-й вариант через fetch: 
    const responce = await fetch(
      `https://api.unsplash.com/search/photos?query=${term}`,
      {
        headers: { Authorization: "Client-ID 9op0aGMn4XR-RFxqpYFQGOHEVRGQIwhgZ97-SU_zems" }
      }
    );
    let data = await responce.json();  console.log(data.results); */
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
