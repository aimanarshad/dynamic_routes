import countries from "../data/data";
import Link from "next/link";
export default function Country (){
    
    
    return(
        <div>
           <ul>
            {countries.map((country) => (
                <li key={countries.indexOf(country)}>
                    <Link href={`/country/${country.name.toUpperCase()}`}>{country.name}</Link>
                </li>
            ))}
           </ul>
        </div>
    )
}