// const res=await fetch(`https://jsonplaceholder.typicode.com/${entity}`)


import React, { useState, useEffect } from 'react';

const withFetchAndSearch = (WrappedComponent, url, filterKey) => {
  return () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    }, [url]);

    console.log(data)
    const filteredData = data && data.filter(item =>
      item[filterKey].toLowerCase().includes(term.toLowerCase())
    );

    return filteredData && (
      <>
        <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
          placeholder="Search..."
        />
        <WrappedComponent data={filteredData} />
      </>
    );
  };
};

export default withFetchAndSearch;