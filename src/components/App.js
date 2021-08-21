import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  relativeList = [
    {
      keyId: "relativeListItem1", name: "nidhi"
    },
    {
      keyId: "relativeListItem2", name: "sucharitha"
    },
    {
      keyId: "relativeListItem3", name: "bhavitha"
    }
  ]
  render() {

      return(
          <div id="main">
            <ol key="relativeList">
              {this.relativeList.map((e)=>
                <li key={e.keyId}>{e.name}</li>
                )}
            </ol>
          </div>
      )
  }
}

export default App;