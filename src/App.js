import React, { useState } from 'react';
import './App.css'; // Import the CSS file

// Sample data with prices
const items = [
  { name: 'Apple', price: 19 },
  { name: 'Banana', price: 20},
  { name: 'Cherry', price: 20 },
  { name: 'Date', price: 50 },
  { name: 'Fig', price: 15},
  { name: 'Grapes', price: 26},
  { name: 'Kiwi', price: 18},
];

const App = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (searchQuery) => {
    setQuery(searchQuery);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.price.toString().includes(query)
  );

  return (
    <div className="app-container">
      <FilterSearch
        query={query}
        onSearchChange={handleSearchChange}
        filteredItems={filteredItems}
      />
    </div>
  );
};

// FilterSearch Component
const FilterSearch = ({ query, onSearchChange, filteredItems }) => (
  <div className="filter-search-container">
    <h1>Filter Search</h1>
    <SearchInput value={query} onChange={onSearchChange} />
    <ItemList items={filteredItems} />
  </div>
);

// SearchInput Component
const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search by name or price..."
  />
);

// ItemList Component
const ItemList = ({ items }) => (
  <ul>
    {items.length > 0 ? (
      items.map((item, index) => (
        <li key={index}>
          {item.name} - ${item.price.toFixed(2)}
        </li>
      ))
    ) : (
      <li className="no-items">No items found</li>
    )}
  </ul>
);

export default App;
