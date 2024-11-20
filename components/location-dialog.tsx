"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Building2, Globe2, MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  location: any;
}

export default function LocationDialog({ isOpen, onClose, location }: LocationDialogProps) {
  if (!location) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[525px] location-dialog p-0 shadow-xl">
        <DialogHeader className="location-dialog-header">
          <DialogTitle className="location-dialog-title flex items-center gap-2">
            <MapIcon className="h-5 w-5 location-dialog-icon" />
            Location Details
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 p-6">
          <div className="location-dialog-panel rounded-lg p-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0 location-dialog-icon" />
              <div>
                <h3 className="location-dialog-highlight text-lg">
                  {location.places[0]["place name"]}
                </h3>
                <p className="text-sm mt-1">
                  {location.places[0].state} {location.places[0]["state abbreviation"]}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="location-dialog-panel rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 location-dialog-icon" />
                <span className="text-sm location-dialog-highlight">Postal Code</span>
              </div>
              <p className="text-sm pl-6">{location["post code"]}</p>
            </div>

            <div className="location-dialog-panel rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe2 className="h-4 w-4 location-dialog-icon" />
                <span className="text-sm location-dialog-highlight">Country</span>
              </div>
              <p className="text-sm pl-6">
                {location.country} ({location["country abbreviation"]})
              </p>
            </div>
          </div>

          <div className="location-dialog-panel rounded-lg p-4">
            <h4 className="location-dialog-highlight text-sm mb-3">Coordinates</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm opacity-90">Latitude</span>
                <p className="text-sm font-medium">{location.places[0].latitude}</p>
              </div>
              <div>
                <span className="text-sm opacity-90">Longitude</span>
                <p className="text-sm font-medium">{location.places[0].longitude}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4 border-t border-[hsl(var(--dialog-border))]">
          <Button 
            variant="secondary"
            onClick={onClose}
            className="bg-[hsl(var(--dialog-panel))] hover:bg-[hsl(var(--dialog-panel-hover))] text-[hsl(var(--dialog-text))] border-[hsl(var(--dialog-border))]"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}