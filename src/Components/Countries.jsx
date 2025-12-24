
const Countries = ({country, color, onCountryClick}) => {
  return (
    <div className={` ${color ? "bg-gray-800 text-white"  : "bg-white"} shadow-md rounded-b-lg rounded-t-lg `} onClick={() => onCountryClick(country)}>
                <img src={country.flags.svg} alt=""  className="rounded-t-lg w-full h-52 object-cover"/>
                <div className="p-6">
                    <h2 className="font-bold text-lg mb-2">{country.name.common}</h2>
                <p className={` ${color ? "text-white" : "text-gray-600"} text-sm `}><b>Population:</b> {country.population}</p>    
                <p className={` ${color ? "text-white" : "text-gray-600"} text-sm `}><b>Region:</b> {country.region}</p>    
                <p className={` ${color ? "text-white" : "text-gray-600"} text-sm `}><b>Capital:</b> {country.capital}</p>    
                </div>
            </div>
  )
}

export default Countries
