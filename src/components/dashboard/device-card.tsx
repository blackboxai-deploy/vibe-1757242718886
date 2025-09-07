"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Device {
  id: string;
  name: string;
  type: "iPhone" | "Android" | "Tablet" | "Watch";
  owner: string;
  status: "online" | "offline" | "low-battery";
  lastSeen: string;
  location: string;
  batteryLevel: number;
  avatar?: string;
}

interface DeviceCardProps {
  device: Device;
  onViewLocation: (deviceId: string) => void;
  onEditDevice: (deviceId: string) => void;
  onRemoveDevice: (deviceId: string) => void;
}

export function DeviceCard({ device, onViewLocation, onEditDevice, onRemoveDevice }: DeviceCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-800 border-green-200";
      case "offline":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "low-battery":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "iPhone":
        return "📱";
      case "Android":
        return "📱";
      case "Tablet":
        return "💻";
      case "Watch":
        return "⌚";
      default:
        return "📱";
    }
  };

  const getBatteryIcon = (level: number) => {
    if (level >= 75) return "🔋";
    if (level >= 50) return "🔋";
    if (level >= 25) return "🪫";
    return "🪫";
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{getDeviceIcon(device.type)}</div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{device.name}</h3>
            <p className="text-sm text-gray-500">{device.type}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onViewLocation(device.id)}>
              View on Map
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEditDevice(device.id)}>
              Edit Device
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onRemoveDevice(device.id)}
              className="text-red-600"
            >
              Remove Device
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {device.avatar && (
              <img
                src={device.avatar}
                alt={`${device.owner} avatar`}
                className="w-6 h-6 rounded-full"
              />
            )}
            <span className="text-sm text-gray-700">{device.owner}</span>
          </div>
          <Badge className={`text-xs ${getStatusColor(device.status)}`}>
            {device.status === "low-battery" ? "Low Battery" : device.status}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Location:</span>
            <span className="text-gray-900 font-medium">{device.location}</span>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Last Seen:</span>
            <span className="text-gray-900">{device.lastSeen}</span>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Battery:</span>
            <div className="flex items-center space-x-1">
              <span className="text-lg">{getBatteryIcon(device.batteryLevel)}</span>
              <span className="text-gray-900 font-medium">{device.batteryLevel}%</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button
            size="sm"
            onClick={() => onViewLocation(device.id)}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            Track Location
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEditDevice(device.id)}
            className="flex-1"
          >
            Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}