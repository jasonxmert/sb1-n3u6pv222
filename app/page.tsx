"use client";

import { useState } from "react";
import { Search, MapPin, Globe2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import SearchResults from "@/components/search-results";
import LocationDialog from "@/components/location-dialog";
import PostcodeAutocomplete from "@/components/postcode-autocomplete";
import CountryPostcodeSearch from "@/components/country-postcode-search";
import LocationAutocomplete from "@/components/location-autocomplete";
import Header from "@/components/header";
import Footer from "@/components/footer";
import InteractiveGlobe from "@/components/interactive-globe";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("postcode");
  const { toast } = useToast();

  const handleSearchResult = (result) => {
    setResults(result);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
              Search By Postcode
            </h1>
            <p className="text-lg md:text-xl font-medium text-muted-foreground">
              Search Postcodes Worldwide
            </p>
          </div>

          <Card className="transform scale-110 mb-20">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-3xl text-center">Postcode Search Options</CardTitle>
              <CardDescription className="text-lg text-center">
                Find postcodes using different search methods
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
                  <TabsTrigger 
                    value="postcode" 
                    className="flex items-center gap-2 py-3 px-4 text-base rounded-lg data-[state=active]:bg-primary/10"
                  >
                    <MapPin className="h-5 w-5" />
                    By Postcode
                  </TabsTrigger>
                  <TabsTrigger 
                    value="country" 
                    className="flex items-center gap-2 py-3 px-4 text-base rounded-lg data-[state=active]:bg-primary/10"
                  >
                    <Globe2 className="h-5 w-5" />
                    By Country
                  </TabsTrigger>
                  <TabsTrigger 
                    value="location" 
                    className="flex items-center gap-2 py-3 px-4 text-base rounded-lg data-[state=active]:bg-primary/10"
                  >
                    <Search className="h-5 w-5" />
                    By Location
                  </TabsTrigger>
                </TabsList>

                <div className="px-4">
                  <TabsContent value="postcode">
                    <div className="space-y-4">
                      <PostcodeAutocomplete onSelect={handleSearchResult} />
                    </div>
                  </TabsContent>

                  <TabsContent value="country">
                    <div className="space-y-4">
                      <CountryPostcodeSearch onSelect={handleSearchResult} />
                    </div>
                  </TabsContent>

                  <TabsContent value="location">
                    <div className="space-y-4">
                      <LocationAutocomplete onSelect={handleSearchResult} />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          {results && <SearchResults results={results} />}
          <LocationDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            location={results}
          />

          <InteractiveGlobe searchResults={results} />
        </div>
      </main>
      <Footer />
    </div>
  );
}