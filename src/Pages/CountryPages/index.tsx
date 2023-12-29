import { Link, useParams } from "react-router-dom"
import { SingleTs } from "../../Types/SingleCountry"
import { Api } from "../../Api"
import { useEffect, useState } from "react"

export const CountryPages = ()=>{
    const [IsLoding,setIsLoding] = useState(true)
    const {name,code} = useParams()
    const [Country,setCountry] = useState<SingleTs[]>([])
    const GetSingleBy = async (pram:string | undefined) => {
        setIsLoding(true)
        const data = name ?  await Api.getFullName(pram) : await Api.getCode(pram)
        setCountry(data)
        setIsLoding(false)
}


useEffect(()=>{
    if(name){
        GetSingleBy(name)
    }else if(code){
        GetSingleBy(code)
    }
},[name,code])
    return <>
    <div className="my-5">
    {IsLoding ? <div className="fw-bold fs-3">Loding . . . </div> :<div></div>}

       <Link to="/" ><button type="button" className="px-5 py-2 border-0 shadow">Back</button></Link> 
       {Country.map((ele,index)=>(
            <div key={index} className="row justify-content-center  mt-5">
                <div className="col col-lg-5 col-md-6 col-8 mb-5 ">
                    <img className="w-100" src={ele.flags.png} alt=""/>
                </div>
                <div className="col col-lg-7 col-md-6 px-5">
                    <div className="row">
                        <h2>{ele.name}</h2>
                        <div className="col fw-bold col-lg-6 col-md-12 col-sm-6 col-12">
                        <p>nativeName : <span className="fw-normal">{ele.name}</span></p>
                        <p>region : <span className="fw-normal">{ele.region}</span></p>
                        <p>capital : <span className="fw-normal">{ele.capital}</span></p>
                        <p>Top level domain : <span className="fw-normal">{ele.topLevelDomain}</span></p>
                        <p>currencies : <span className="fw-normal">{ele.currencies.map((item,index)=><span className="me-2" key={index}>{item.name}</span>)}</span></p>

                        </div>
                        <div className="col fw-bold col-lg-6 col-md-12 col-sm-6 col-12">
                            <p>population : <span className="fw-normal">{ele.population}</span></p>
                            <p>subregion : <span className="fw-normal">{ele.subregion}</span></p>
                            <p>languages : <span className="fw-normal">{ele.languages.map((item,index)=><span className="me-2" key={index}>{item.name}</span>)}</span></p>
                        </div>
                    </div>
                    <div className="borders mt-4"> 
                        <h3 className="mb-4">borders countries</h3>
                        <div className="d-flex flex-wrap gap-4">
                            {ele.borders ? 
                        ele.borders.map((item,index)=>(
                            <Link key={index} to={`/alpha/${item}`}>
                            <button   className="border-0 py-1 px-5 shadow">{item}</button>
                            </Link>
                        )) : <p>no borders here</p> }
                        </div>
                    </div>
                </div>
            </div>
       ))}
    </div>
        </>
    
} 