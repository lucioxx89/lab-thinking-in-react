import React from 'react';
import jsonData from './data.json';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div>
      <FilterableProductTable products={jsonData.data} />
    </div>
  );
}

export default App;
