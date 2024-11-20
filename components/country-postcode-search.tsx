"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Globe2, MapPin, Building2 } from "lucide-react";
import { countries } from "@/lib/countries";

interface CountryPostcodeSearchProps {
  onSelect: (result: any) => void;
}

export default function CountryPostcodeSearch({ onSelect }: CountryPostcodeSearchProps) {
  const [countryValue, setCountryValue] = useState("");
  const [postcodeValue, setPostcodeValue] = useState("");
  const [showCountries, setShowCountries] = useState(false);
  const [showPostcodes, setShowPostcodes] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{ code: string; name: string; format?: string } | null>(null);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [postcodeResults, setPostcodeResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(countryValue.toLowerCase()) ||
      country.code.toLowerCase().includes(countryValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countryValue]);

  useEffect(() => {
    const searchPostcode = async () => {
      if (!selectedCountry || postcodeValue.length < 2) {
        setPostcodeResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.zippopotam.us/${selectedCountry.code.toLowerCase()}/${postcodeValue}`
        );
        if (response.ok) {
          const data = await response.json();
          setPostcodeResults([{
            ...data,
            country_code: selectedCountry.code
          }]);
        } else {
          setPostcodeResults([]);
        }
      } catch (error) {
        console.error("Error searching postcodes:", error);
        setPostcodeResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(searchPostcode, 300);
    return () => clearTimeout(debounce);
  }, [selectedCountry, postcodeValue]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          placeholder="Enter Country here.."
          value={countryValue}
          onChange={(e) => {
            setCountryValue(e.target.value);
            setShowCountries(true);
          }}
          onFocus={() => setShowCountries(true)}
          onBlur={() => {
            setTimeout(() => setShowCountries(false), 200);
          }}
        />
        {showCountries && (
          <div className="absolute top-full left-0 right-0 w-full mt-1 bg-popover text-popover-foreground shadow-md rounded-md border z-50">
            <Command>
              <CommandList className="max-h-[300px] overflow-auto">
                <CommandEmpty>No countries found.</CommandEmpty>
                <CommandGroup>
                  {filteredCountries.map((country) => (
                    <CommandItem
                      key={country.code}
                      onSelect={() => {
                        setSelectedCountry(country);
                        setCountryValue(country.name);
                        setShowCountries(false);
                      }}
                      className="p-2 cursor-pointer hover:bg-accent"
                    >
                      <div className="flex items-center gap-2">
                        <Globe2 className="h-4 w-4" />
                        <span className="font-medium">{country.name}</span>
                        <span className="text-sm text-muted-foreground">({country.code})</span>
                        {country.format && (
                          <span className="text-xs text-muted-foreground ml-auto">
                            Format: {country.format}
                          </span>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </div>

      {selectedCountry && (
        <div className="relative">
          <Input
            placeholder={selectedCountry.format 
              ? `Enter postcode (Format: ${selectedCountry.format})` 
              : "Enter postcode here.."}
            value={postcodeValue}
            onChange={(e) => {
              setPostcodeValue(e.target.value);
              setShowPostcodes(true);
            }}
            onFocus={() => setShowPostcodes(true)}
          />
          {showPostcodes && (postcodeValue.length > 0 || loading) && (
            <div className="absolute top-full left-0 right-0 w-full mt-1 bg-popover text-popover-foreground shadow-md rounded-md border z-50">
              <Command>
                <CommandList className="max-h-[300px] overflow-auto">
                  <CommandEmpty>
                    {loading ? (
                      <div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                        Searching postcodes...
                      </div>
                    ) : (
                      "No matching postcodes found."
                    )}
                  </CommandEmpty>
                  <CommandGroup>
                    {postcodeResults.map((result, index) => (
                      <CommandItem
                        key={`${result.country_code}-${result["post code"]}-${index}`}
                        onSelect={() => {
                          onSelect(result);
                          setPostcodeValue("");
                          setShowPostcodes(false);
                        }}
                        className="p-2"
                      >
                        <div className="flex items-start gap-2 w-full">
                          <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{result["post code"]}</span>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Building2 className="h-3 w-3" />
                              {result.places[0]["place name"]}
                              {result.places[0].state && `, ${result.places[0].state}`}
                            </div>
                          </div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          )}
        </div>
      )}
    </div>
  );
}