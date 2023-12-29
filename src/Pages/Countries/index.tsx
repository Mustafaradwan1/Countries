import { useEffect, useState } from "react"
import { Api } from "../../Api"
import SearchPage from "../../Components/SearchPage"
import { CountriesTs } from "../../Types/Countries"
import { Link } from "react-router-dom"

export const Countries = ()=>{
    const [IsLoding,setIsLoding] = useState(true)
    const [Country,setCountry] = useState<CountriesTs[]>([])
    const [Search,setSearch] = useState('')
    async function GetAllData(){
        setIsLoding(true)
        const data = await Api.getAll() 
        setCountry(data)
        setIsLoding(false)
    }
    const filtercontry = Country.filter((ele)=> ele.name.includes(Search) ||  ele.region.includes(Search)  ) 
    useEffect(()=>{
        GetAllData()
    },[])
    return <>
    <SearchPage setSearch={setSearch} />
    <div className="row w-100 m-auto">
        {IsLoding ? <div className="fw-bold fs-3">Loding . . . </div> :<div></div>}
    {filtercontry.map((item,index)=>(
        <div key={index} className="col p-3 col-lg-3 col-md-4  col-sm-6 col-12">
                <Link to={`/Country/${item.name}`}>
                <div className="shadow">
                <div className="image " style={{height:"150px"}}>
                    <img className="w-100 h-100 " src={item.flags.png} alt=""/>
                </div>
                <div className="text p-3 fw-bold">
                    <p className="my-2">Name : <span className="fw-normal  text-primary">{item.name}</span></p>
                    <p className="my-2">Population : <span className="fw-normal text-primary">{item.population}</span></p>
                    <p className="my-2">Region : <span className="fw-normal text-primary">{item.region}</span></p>
                    <p className="my-2">Capital : <span className="fw-normal text-primary">{item.capital}</span></p>
                </div>
                </div>
            </Link>
            </div>
        ))}
   


    </div>
        </>
    
} 