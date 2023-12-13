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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4 & above</option>
        </optgroup>
      </select>
    </div>
  )
}

export default FilterView






// function ItemList({ items }) {
//   const [selectedFilter, setSelectedFilter] = useState('all'); // State to manage the selected filter

//   const filteredItems = items.filter(item => {
//     if (selectedFilter === 'all') {
//       return true; // Show all items when 'All' is selected
//     } else {
//       return item.category === selectedFilter; // Filter items based on selected category
//     }
//   });

//   return (
//     <div>
//       <label htmlFor="filterDropdown">Filter by Category: </label>
//       <select
//         id="filterDropdown"
//         value={selectedFilter}
//         onChange={e => setSelectedFilter(e.target.value)}
//       >
//         <option value="all">All</option>
//         <option value="category1">Category 1</option>
//         <option value="category2">Category 2</option>
//         {/* Add more options for other categories */}
//       </select>

//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>
//             {/* Display your item details here */}
//             <p>{item.name}</p>
//             {/* Add more item details */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

