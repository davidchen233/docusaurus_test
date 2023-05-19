import React from "react";

import { DocSearch } from "@docsearch/react";

import './styles.css';

const SearchBarV3 = () => {
  return (
    <DocSearch
      appId="8ZEJUY8QUY"
      apiKey="27774d33ab2ee31af8adf90bf9d731bc"
      indexName="LION_docusarus_test"
    />
  )
}

export default SearchBarV3;