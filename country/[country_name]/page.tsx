
import countries from "@/app/data/data";
import Link from "next/link";

export default function CountryName({params}:{params:{country_name:string}}) {

   

    function findCountry(country_url:string){
        // console.log(country_url)
        // console.log(countries.find(country => country.name))
        return countries.find(country => country.name.toUpperCase() === country_url.toUpperCase())
    }

    let result = findCountry(params.country_name);
        
    return(
        <div className="bg-pink-300">
            <h1 className="text-5xl font-bold  text-blue-900">Go To <Link href={'/country'}>Home</Link></h1>
            <br />
            {
                result ? (
                    <>
                    <h1 className="text-3xl text-red-500">Country Name: {result.name}</h1>
                    <h2 className="text-3xl text-red-500">Country Capital: {result.capital} </h2>
                    <h3 className="text-3xl text-red-500">Country Population: {result.population} </h3> 
                    <h3 className="text-3xl text-red-500">Popular Food:{result.PopularFood} </h3> 
                     </>
                ) : (
                    <h1>country not found</h1>
                )
            }
           
                      
        </div>
    )
}