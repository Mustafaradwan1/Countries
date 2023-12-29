import { SearchTs } from "../Types/InputTs"

const SearchPage = ({setSearch}:SearchTs) => {
  return <>
  <div className="row justify-content-between my-5 shadow p-3">
    <div className="col col-lg-4 col-md-4 col-sm-5 col-12">
        <input  onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search by name" className="py-2 mb-4 w-100 form-control px-4 rounded-pill" /> 
    </div>
    <div className="col col-lg-4 col-md-4 col-sm-5 col-12">
    <select  onChange={(e)=> setSearch(e.target.value)} className="form-select w-100">
        <option value='chose your option' disabled selected>chose your option</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
    </select>
    </div>
  </div>
  </>
}

export default SearchPage