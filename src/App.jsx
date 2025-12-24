import  { useState, useEffect } from "react"
import Countries from "./Components/Countries";
import CountryFullDetail from "./Components/CountryFullDetail";
import NavBar from "./Components/Nav-bar";
import SearchInput from "./Components/Search-input";

const App = () => {
const [search, setSearch] = useState("");
const [countries, setCountries] = useState([]);
const [region, setRegion] = useState("");
const [page] = useState(1);
const [flagPerPage] = useState(9);
const [color, setColor] = useState(false);
const [selectedCountry, setSelectedCountry] = useState(null);




const fetchCountriesData = async () => {

        try {
            const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
            const data = await res.json();
            
            setCountries(data);
            
            
            // setError(null);
        } catch (error) {
            // setError('Failed to fetch countries');
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchCountriesData();
    },[]);

    // const lastPostPerPage = page * flagPerPage;
    // const firstPostPerPage = lastPostPerPage - flagPerPage;
    // const currentItems = countries.slice(firstPostPerPage, lastPostPerPage);
    // const totalPages = Math.ceil(countries.length / flagPerPage);

    const totalPage = Math.ceil(countries.length / flagPerPage);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    }

    // Filter countries by search term and selected region 
    const filteredBySearch = countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
        const matchesRegion = country.region.toLowerCase().includes(region.toLowerCase());
        return matchesSearch && matchesRegion;
    })

    // Paginate the filtered results
    const paginated = filteredBySearch.slice((page - 1) * flagPerPage, page * flagPerPage);

    const handleColorChange = () => {
        setColor(true);
        
    }

   const handleCountryClick = async (country) => {
    try {
        // Fetch complete country details using the specific country name
        const res = await fetch(`https://restcountries.com/v3.1/name/${country.name.common}?fullText=true`);
        const data = await res.json();
        setSelectedCountry(data[0]); // API returns an array, so take the first item
    } catch (error) {
        console.log('Error fetching country details:', error);
        // Fallback to the limited data you already have
        setSelectedCountry(country);
    }
}

    

  return (
    <div className={` ${color ? "bg-gray-900" : " bg-gray-50"}`}>
        {/* header section */}
       <NavBar color={color} handleColorChange={handleColorChange} />
        {/* search section */}
       <SearchInput color={color} search={search} handleSearch={handleSearch} region={region} handleRegionChange={handleRegionChange} />
        {/* flags and details */}
        {filteredBySearch.length === 0 ? (
          <div className="container mx-auto text-center text-gray-600 my-8">
            No countries match your search or selected region.
          </div>
        ) : (
          <div className="container grid grid-cols-1 px-3 md:grid-cols-3 gap-12 mx-auto">
            {paginated.map((country, index) => (
                <Countries key={index} country={country} color={color} onCountryClick={handleCountryClick} />
            ))}
          </div>
        )}

        {selectedCountry && (
          <CountryFullDetail item={selectedCountry} id={selectedCountry.id} color={color} onClose={ () => setSelectedCountry(null)} />
        )}
             {/* <CountryFullDetail item={item} id={item.id} />
        ))} */}
       
       
        
    </div>
  )
}

export default App
