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
import { Globe2 } from "lucide-react";

interface CountryAutocompleteProps {
  onSelect: (country: { code: string; name: string }) => void;
}

const countries = [
  { code: "AD", name: "Andorra" },
  { code: "AR", name: "Argentina" },
  { code: "AS", name: "American Samoa" },
  { code: "AT", name: "Austria" },
  { code: "AU", name: "Australia" },
  { code: "BD", name: "Bangladesh" },
  { code: "BE", name: "Belgium" },
  { code: "BG", name: "Bulgaria" },
  { code: "BR", name: "Brazil" },
  { code: "CA", name: "Canada" },
  { code: "CH", name: "Switzerland" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DE", name: "Germany" },
  { code: "DK", name: "Denmark" },
  { code: "DO", name: "Dominican Republic" },
  { code: "ES", name: "Spain" },
  { code: "FI", name: "Finland" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FR", name: "France" },
  { code: "GB", name: "United Kingdom" },
  { code: "GF", name: "French Guiana" },
  { code: "GG", name: "Guernsey" },
  { code: "GL", name: "Greenland" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GT", name: "Guatemala" },
  { code: "GU", name: "Guam" },
  { code: "GY", name: "Guyana" },
  { code: "HR", name: "Croatia" },
  { code: "HU", name: "Hungary" },
  { code: "IE", name: "Ireland" },
  { code: "IM", name: "Isle of Man" },
  { code: "IN", name: "India" },
  { code: "IS", name: "Iceland" },
  { code: "IT", name: "Italy" },
  { code: "JE", name: "Jersey" },
  { code: "JP", name: "Japan" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LK", name: "Sri Lanka" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MC", name: "Monaco" },
  { code: "MD", name: "Moldova" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MK", name: "North Macedonia" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MT", name: "Malta" },
  { code: "MX", name: "Mexico" },
  { code: "MY", name: "Malaysia" },
  { code: "NL", name: "Netherlands" },
  { code: "NO", name: "Norway" },
  { code: "NZ", name: "New Zealand" },
  { code: "PH", name: "Philippines" },
  { code: "PK", name: "Pakistan" },
  { code: "PL", name: "Poland" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "PR", name: "Puerto Rico" },
  { code: "PT", name: "Portugal" },
  { code: "RE", name: "Reunion" },
  { code: "RU", name: "Russia" },
  { code: "SE", name: "Sweden" },
  { code: "SG", name: "Singapore" },
  { code: "SI", name: "Slovenia" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SK", name: "Slovakia" },
  { code: "SM", name: "San Marino" },
  { code: "TH", name: "Thailand" },
  { code: "TR", name: "Turkey" },
  { code: "US", name: "United States" },
  { code: "VA", name: "Vatican City" },
  { code: "VI", name: "U.S. Virgin Islands" },
  { code: "YT", name: "Mayotte" },
  { code: "ZA", name: "South Africa" }
].sort((a, b) => a.name.localeCompare(b.name));

export default function CountryAutocomplete({ onSelect }: CountryAutocompleteProps) {
  const [value, setValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(value.toLowerCase()) ||
      country.code.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [value]);

  return (
    <div className="relative w-full">
      <Input
        placeholder="Enter Country here.."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
        onBlur={() => {
          // Delay hiding results to allow for item selection
          setTimeout(() => setShowResults(false), 200);
        }}
        className="w-full"
      />
      {showResults && (
        <div className="absolute top-full left-0 right-0 w-full mt-1 bg-popover text-popover-foreground shadow-md rounded-md border z-50">
          <Command>
            <CommandList className="max-h-[300px] overflow-auto">
              <CommandEmpty>No countries found.</CommandEmpty>
              <CommandGroup>
                {filteredCountries.map((country) => (
                  <CommandItem
                    key={country.code}
                    onSelect={() => {
                      onSelect(country);
                      setValue(country.name);
                      setShowResults(false);
                    }}
                    className="p-2 cursor-pointer hover:bg-accent"
                  >
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4" />
                      <span className="font-medium">{country.name}</span>
                      <span className="text-sm text-muted-foreground">({country.code})</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
}