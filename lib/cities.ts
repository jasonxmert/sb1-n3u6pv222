// Extended database of major cities worldwide
export const cityData = {
  // Asia
  "beijing": { country: "CN", name: "Beijing", codes: ["100000", "100001", "100002", "100003"] },
  "shanghai": { country: "CN", name: "Shanghai", codes: ["200000", "200001", "200002"] },
  "guangzhou": { country: "CN", name: "Guangzhou", codes: ["510000", "510001"] },
  "shenzhen": { country: "CN", name: "Shenzhen", codes: ["518000", "518001"] },
  "tokyo": { country: "JP", name: "Tokyo", codes: ["100-0001", "100-0002", "100-0003"] },
  "osaka": { country: "JP", name: "Osaka", codes: ["530-0001", "530-0002"] },
  "seoul": { country: "KR", name: "Seoul", codes: ["01000", "02000"] },
  "singapore": { country: "SG", name: "Singapore", codes: ["048617", "048618"] },
  "mumbai": { country: "IN", name: "Mumbai", codes: ["400001", "400002"] },
  "delhi": { country: "IN", name: "Delhi", codes: ["110001", "110002"] },
  "bangkok": { country: "TH", name: "Bangkok", codes: ["10100", "10110"] },
  
  // Europe
  "london": { country: "GB", name: "London", codes: ["E1", "EC1", "N1", "NW1", "SE1"] },
  "manchester": { country: "GB", name: "Manchester", codes: ["M1", "M2", "M3"] },
  "paris": { country: "FR", name: "Paris", codes: ["75001", "75002", "75003"] },
  "berlin": { country: "DE", name: "Berlin", codes: ["10115", "10117"] },
  "munich": { country: "DE", name: "Munich", codes: ["80331", "80333"] },
  "rome": { country: "IT", name: "Rome", codes: ["00100", "00118"] },
  "milan": { country: "IT", name: "Milan", codes: ["20019", "20121"] },
  "madrid": { country: "ES", name: "Madrid", codes: ["28001", "28002"] },
  "barcelona": { country: "ES", name: "Barcelona", codes: ["08001", "08002"] },
  "amsterdam": { country: "NL", name: "Amsterdam", codes: ["1011", "1012"] },
  "moscow": { country: "RU", name: "Moscow", codes: ["101000", "102000"] },
  
  // North America
  "new york": { country: "US", name: "New York", codes: ["10001", "10002", "10003"] },
  "los angeles": { country: "US", name: "Los Angeles", codes: ["90001", "90002"] },
  "chicago": { country: "US", name: "Chicago", codes: ["60601", "60602"] },
  "toronto": { country: "CA", name: "Toronto", codes: ["M5A", "M5B", "M5C"] },
  "vancouver": { country: "CA", name: "Vancouver", codes: ["V5K", "V5L"] },
  "mexico city": { country: "MX", name: "Mexico City", codes: ["01000", "01010"] },
  
  // South America
  "sao paulo": { country: "BR", name: "São Paulo", codes: ["01000-000", "01001-000"] },
  "rio de janeiro": { country: "BR", name: "Rio de Janeiro", codes: ["20000-000", "20001-000"] },
  "buenos aires": { country: "AR", name: "Buenos Aires", codes: ["C1001", "C1002"] },
  "lima": { country: "PE", name: "Lima", codes: ["15001", "15002"] },
  
  // Africa
  "cairo": { country: "EG", name: "Cairo", codes: ["11511", "11512"] },
  "johannesburg": { country: "ZA", name: "Johannesburg", codes: ["2000", "2001"] },
  "lagos": { country: "NG", name: "Lagos", codes: ["100001", "100002"] },
  "nairobi": { country: "KE", name: "Nairobi", codes: ["00100", "00200"] },
  
  // Oceania
  "sydney": { country: "AU", name: "Sydney", codes: ["2000", "2001"] },
  "melbourne": { country: "AU", name: "Melbourne", codes: ["3000", "3001"] },
  "brisbane": { country: "AU", name: "Brisbane", codes: ["4000", "4001"] },
  "auckland": { country: "NZ", name: "Auckland", codes: ["0600", "0610"] },
  
  // Middle East
  "dubai": { country: "AE", name: "Dubai", codes: ["00000"] },
  "abu dhabi": { country: "AE", name: "Abu Dhabi", codes: ["00000"] },
  "riyadh": { country: "SA", name: "Riyadh", codes: ["11564", "11565"] },
  "tel aviv": { country: "IL", name: "Tel Aviv", codes: ["61000", "61001"] },
  
  // Additional major cities
  "hong kong": { country: "HK", name: "Hong Kong", codes: ["999077"] },
  "taipei": { country: "TW", name: "Taipei", codes: ["100", "101"] },
  "kuala lumpur": { country: "MY", name: "Kuala Lumpur", codes: ["50000", "50050"] },
  "jakarta": { country: "ID", name: "Jakarta", codes: ["10110", "10120"] },
  "manila": { country: "PH", name: "Manila", codes: ["0900", "1000"] },
  "hanoi": { country: "VN", name: "Hanoi", codes: ["100000", "100001"] },
  "istanbul": { country: "TR", name: "Istanbul", codes: ["34010", "34020"] },
  "vienna": { country: "AT", name: "Vienna", codes: ["1010", "1020"] },
  "prague": { country: "CZ", name: "Prague", codes: ["100 00", "110 00"] },
  "warsaw": { country: "PL", name: "Warsaw", codes: ["00-001", "00-002"] },
  "stockholm": { country: "SE", name: "Stockholm", codes: ["100 05", "100 06"] },
  "oslo": { country: "NO", name: "Oslo", codes: ["0001", "0010"] },
  "helsinki": { country: "FI", name: "Helsinki", codes: ["00100", "00120"] },
  "copenhagen": { country: "DK", name: "Copenhagen", codes: ["1050", "1051"] },
  "brussels": { country: "BE", name: "Brussels", codes: ["1000", "1020"] },
  "lisbon": { country: "PT", name: "Lisbon", codes: ["1000-001", "1000-002"] },
  "athens": { country: "GR", name: "Athens", codes: ["104 31", "104 32"] },
  "bucharest": { country: "RO", name: "Bucharest", codes: ["010001", "010002"] },
  "dublin": { country: "IE", name: "Dublin", codes: ["D01", "D02"] },
  "montreal": { country: "CA", name: "Montreal", codes: ["H2X", "H2Y"] },
  "calgary": { country: "CA", name: "Calgary", codes: ["T2P", "T2R"] },
  "edmonton": { country: "CA", name: "Edmonton", codes: ["T5J", "T5K"] },
  "ottawa": { country: "CA", name: "Ottawa", codes: ["K1P", "K1R"] },
  "quebec city": { country: "CA", name: "Quebec City", codes: ["G1R", "G1S"] },
  "san francisco": { country: "US", name: "San Francisco", codes: ["94102", "94103"] },
  "seattle": { country: "US", name: "Seattle", codes: ["98101", "98102"] },
  "boston": { country: "US", name: "Boston", codes: ["02108", "02109"] },
  "washington": { country: "US", name: "Washington DC", codes: ["20001", "20002"] },
  "miami": { country: "US", name: "Miami", codes: ["33101", "33102"] },
  "houston": { country: "US", name: "Houston", codes: ["77001", "77002"] },
  "dallas": { country: "US", name: "Dallas", codes: ["75201", "75202"] },
  "phoenix": { country: "US", name: "Phoenix", codes: ["85001", "85002"] },
  "las vegas": { country: "US", name: "Las Vegas", codes: ["89101", "89102"] },
  "denver": { country: "US", name: "Denver", codes: ["80201", "80202"] }
};