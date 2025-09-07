"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DeviceLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  status: "online" | "offline" | "low-battery";
  lastUpdate: string;
  address: string;
}

interface LocationMapProps {
  devices: DeviceLocation[];
  selectedDevice?: string;
  onDeviceSelect: (deviceId: string) => void;
  onCenterMap: (deviceId: string) => void;
}

export function LocationMap({ devices, selectedDevice, onDeviceSelect, onCenterMap }: LocationMapProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-gray-400";
      case "low-battery":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };



  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="h-96">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Live Location Map</span>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-green-600">
                {devices.filter(d => d.status === "online").length} Online
              </Badge>
              <Badge variant="outline" className="text-gray-600">
                {devices.filter(d => d.status === "offline").length} Offline
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-80 relative">
          {/* Mock Map Interface */}
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg relative overflow-hidden border border-gray-200">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6B7280" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Device Markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {devices.map((device, index) => (
                  <div
                    key={device.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
                      selectedDevice === device.id ? "scale-125 z-10" : "z-5"
                    }`}
                    style={{
                      left: `${50 + (index - devices.length/2) * 15}%`,
                      top: `${40 + (index % 2) * 20}%`,
                    }}
                    onClick={() => onDeviceSelect(device.id)}
                  >
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(device.status)} border-2 border-white shadow-lg`}>
                      <div className={`absolute inset-0 rounded-full ${getStatusColor(device.status)} animate-ping`} />
                    </div>
                    {selectedDevice === device.id && (
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200 min-w-40">
                        <div className="font-semibold text-sm">{device.name}</div>
                        <div className="text-xs text-gray-500">{device.address}</div>
                        <div className="text-xs text-gray-500">Updated {device.lastUpdate}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
                <span className="text-lg">+</span>
              </Button>
              <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
                <span className="text-lg">-</span>
              </Button>
            </div>

            {/* Map Type Toggle */}
            <div className="absolute bottom-4 left-4">
              <Button size="sm" variant="outline" className="bg-white">
                Satellite
              </Button>
            </div>

            {/* Center Map Button */}
            <div className="absolute bottom-4 right-4">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Center All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {devices.map((device) => (
          <Card 
            key={device.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedDevice === device.id 
                ? "border-blue-500 shadow-lg" 
                : "border-gray-200"
            }`}
            onClick={() => onDeviceSelect(device.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{device.name}</h3>
                <div className={`w-3 h-3 rounded-full ${getStatusColor(device.status)}`} />
              </div>
              <p className="text-sm text-gray-600 mb-2">{device.address}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Updated {device.lastUpdate}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCenterMap(device.id);
                  }}
                  className="h-6 px-2 text-xs"
                >
                  Center
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {devices.length === 0 && (
        <Card className="p-8 text-center">
          <div className="text-gray-500 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Devices Found</h3>
          <p className="text-gray-600 mb-4">Add your first device to start tracking locations</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Add Device
          </Button>
        </Card>
      )}
    </div>
  );
}