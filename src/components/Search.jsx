import { useState } from "react";
function Search(props){
     const [search,setSearch] = useState("");
     const onSearchChange = (event) => {
          setSearch(event.target.value);
          props.onSearchChange(event.target.value);
     }
     return(
          <>
               <div>
                    Cari Artikel : <input onChange= {onSearchChange}></input>
               </div>
               <small>
                    Ditemukan 0 data dengan pencarian kata <b>{search}</b>
               </small>
          </>
     )
}
export default Search;