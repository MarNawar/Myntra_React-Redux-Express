import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterActions } from './filterSlice';

function FilterView() {
  const [selectedFilter, setSelectedFilter] = useState('clearFilter');

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const selectedValue = e.target.value;

    // Different logic based on the selected value in the dropdown
    switch (selectedValue) {
      case 'clearFilter':
        dispatch(filterActions.clearFilter())
        break;
      case 'lowToHigh':
        dispatch(filterActions.lowToHigh())
        break;
      case 'highToLow':
        dispatch(filterActions.highToLow())
        break;
      case '1':
        dispatch(filterActions.rating(1))
        break;
      case '2':
        dispatch(filterActions.rating(2))

        break;
      case '3':
        dispatch(filterActions.rating(3))

        break;
      case '4':
        dispatch(filterActions.rating(4))
        break;
    }

    setSelectedFilter(selectedValue);
  };
  return (
    <div>
      <select
        id="filterDropdown"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option value="clearFilter">Featured</option>
        <optgroup label="By Price">
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </optgroup>
        
        <optgroup label="By Ratings">
          <option value="1">1 & above</option>
          <option value="2">2 & above</option>
          <option value="3">3 & above</option>
          <option value="4">4 & above</option>
        </optgroup>
      </select>
    </div>
  )
}

export default FilterView