import React from 'react'

const CountryFullDetail = ({item, color, onClose}) => {
    if (!item) return null; // Safety check
    
    return (
        <div className={`${color ? "bg-gray-900" : "bg-gray-50"} fixed inset-0 overflow-y-auto z-50`}>
            <div className="container mx-auto py-12 px-4">
                <button 
                    className={`${color ? "bg-gray-800 text-white" : "bg-white text-black"} flex items-center gap-4 py-2 px-6 shadow-md rounded mb-8 hover:shadow-lg transition-shadow`} 
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/>
                    </svg>
                    <p>Back</p>
                </button>
                
                {/* Main content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-16">
                    {/* Flag */}
                    <div>
                        <img 
                            src={item.flags?.svg || item.flags?.png} 
                            alt={item.name?.common} 
                            className="w-full shadow-2xl"
                        />
                    </div>
                    
                    {/* Details */}
                    <div className={`${color ? "text-white" : "text-black"}`}>
                        <h1 className="text-4xl font-bold mb-8">{item.name?.common}</h1>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-12">
                            <div className="space-y-3">
                                <p className="text-sm">
                                    <span className="font-semibold">Native Name: </span> 
                                    {item.name?.nativeName ? Object.values(item.name.nativeName)[0]?.common : 'N/A'}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Population: </span> 
                                    {item.population?.toLocaleString()}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Region: </span> 
                                    {item.region}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Sub Region: </span> 
                                    {item.subregion || 'N/A'}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Capital: </span> 
                                    {item.capital?.[0] || 'N/A'}
                                </p>
                            </div>
                            
                            <div className="space-y-3">
                                <p className="text-sm">
                                    <span className="font-semibold">Top Level Domain: </span> 
                                    {item.tld?.[0] || 'N/A'}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Currencies: </span> 
                                    {item.currencies ? Object.values(item.currencies).map(c => c.name).join(', ') : 'N/A'}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Languages: </span> 
                                    {item.languages ? Object.values(item.languages).join(', ') : 'N/A'}
                                </p>
                            </div>
                        </div>
                        
                        {/* Border Countries */}
                        {item.borders && item.borders.length > 0 && (
                            <div className="mt-8">
                                <h2 className="font-semibold mb-4">Border Countries:</h2>
                                <div className="flex gap-3 flex-wrap">
                                    {item.borders.map((border, index) => (
                                        <button 
                                            key={index}
                                            className={`${color ? "bg-gray-800" : "bg-white"} px-6 py-2 shadow-md text-sm`}
                                        >
                                            {border}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryFullDetail