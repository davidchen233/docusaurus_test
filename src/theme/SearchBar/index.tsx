import React from "react";

import SearchBarOS from "@site/src/components/SearchBar/OS";
import SearchBarComponent from "@site/src/components/SearchBar/component";

const version: string = 'component'; //SearchBar版本設定


const SearchBar = () => {
  switch(version) {
    case "source":
      return <SearchBarOS />
    case "component":
      return <SearchBarComponent />
    default:
      return <div style={{color:"red"}}>Search does not have this version</div>
  }
}

export default SearchBar;