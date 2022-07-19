import React, { useState } from 'react';
import { apiGet } from '../misc/config';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  
  
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result=>{
      setResults(result);
    })
  };
  const onKeyDownn = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDownn}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
