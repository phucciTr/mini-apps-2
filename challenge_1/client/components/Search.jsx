import React, { useState } from 'react';


const Search = () => {
  const [search, setSearch] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    console.log('hi');
  };

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={(e) => submitSearch(e)} >
        <label>
          <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>

        <input type="submit" value="search"/>
      </form>
    </div>
  );
}


// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Search</h2>
//         <form>
//           <label>
//             <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

export default Search;