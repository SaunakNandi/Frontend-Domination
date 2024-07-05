import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import './App.css'
function App() {
  const data = ['John', 'Jane', 'Joe', 'Jill', 'Jake'];

  const getSearchResults = async (searchTerm) => {
    console.log('Making API request');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data.filter((res) => res.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const [searchResults, setSearchResults] = useState([]);

  // if useCallback is not used then -> 
  // debouncedRequest is created anew on every render. Therefore, the debounce logic does not work correctly because each new function does not have the internal state of the previous one.
  // Using useCallback ensures that the debouncedRequest function is memoized and only recreated when its dependencies change (in this case, there are no dependencies, so it is created only once).
  const debouncedRequest = useCallback(
    
    debounce(async (searchTerm) => {
      const results = await getSearchResults(searchTerm);
      setSearchResults(results);
    }, 500),
    []
  );

  return (
    <>
      <input type="text" onChange={(e)=>debouncedRequest(e.target.value)} />
      <div className="flex flex-col">
        Results:
        {searchResults.map((res, i) => (
          <div key={i}>{res}</div>
        ))}
      </div>
    </>
  );
}

export default App;
