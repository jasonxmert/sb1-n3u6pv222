"use client";

interface GlobeLabelProps {
  name: string;
  postcode: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
}

export default function GlobeLabel({ name, postcode, state, country, lat, lng }: GlobeLabelProps) {
  return (
    <div className="fixed bg-background/95 backdrop-blur-sm p-2 rounded-lg shadow-lg text-xs whitespace-nowrap z-50" style={{ transform: 'translate(-50%, -100%)', marginTop: '-10px' }}>
      <div className="font-semibold">{name}</div>
      <div className="text-muted-foreground">
        {postcode} • {state}, {country}<br/>
        {lat.toFixed(4)}°, {lng.toFixed(4)}°
      </div>
    </div>
  );
}