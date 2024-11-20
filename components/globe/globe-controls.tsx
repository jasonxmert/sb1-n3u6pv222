"use client";

import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Move3d, RotateCcw } from "lucide-react";

interface GlobeControlsProps {
  tilt: number;
  rotation: number;
  onTiltChange: (value: number) => void;
  onRotationChange: (value: number) => void;
}

export default function GlobeControls({
  tilt,
  rotation,
  onTiltChange,
  onRotationChange,
}: GlobeControlsProps) {
  return (
    <div className="absolute top-4 left-4">
      <Card className="w-48">
        <CardContent className="p-3 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Move3d className="h-3 w-3" />
              Tilt
            </div>
            <Slider
              value={[tilt]}
              onValueChange={([value]) => onTiltChange(value)}
              min={0}
              max={90}
              step={1}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Compass className="h-3 w-3" />
              Rotation
            </div>
            <Slider
              value={[rotation]}
              onValueChange={([value]) => onRotationChange(value)}
              min={0}
              max={360}
              step={1}
              className="w-full"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full h-7 text-xs"
            onClick={() => {
              onTiltChange(0);
              onRotationChange(0);
            }}
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset View
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}