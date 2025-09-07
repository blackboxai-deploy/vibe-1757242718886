"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeviceCard } from "@/components/dashboard/device-card";
import { LocationMap } from "@/components/dashboard/location-map";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for demonstration
const mockDevices = [
  {
    id: "1",
    name: "Sarah's iPhone",
    type: "iPhone" as const,
    owner: "Sarah Johnson",
    status: "online" as const,
    lastSeen: "2 minutes ago",
    location: "Downtown Mall, NY",
    batteryLevel: 87,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f299ab3-27fa-479c-bdff-f5b1eaedcd3c.png",
  },
  {
    id: "2",
    name: "Mike's Android",
    type: "Android" as const,
    owner: "Mike Johnson",
    status: "low-battery" as const,
    lastSeen: "5 minutes ago",
    location: "Central High School, NY",
    batteryLevel: 15,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ec1cfd9-510a-4133-bd12-8e5bc5594d21.png",
  },
  {
    id: "3",
    name: "Work iPad",
    type: "Tablet" as const,
    owner: "Company Device",
    status: "offline" as const,
    lastSeen: "1 hour ago",
    location: "Office Building, NY",
    batteryLevel: 45,
  },
];

const mockLocationDevices = [
  {
    id: "1",
    name: "Sarah's iPhone",
    latitude: 40.7580,
    longitude: -73.9855,
    status: "online" as const,
    lastUpdate: "2 min ago",
    address: "Downtown Mall, NY",
  },
  {
    id: "2",
    name: "Mike's Android",
    latitude: 40.7614,
    longitude: -73.9776,
    status: "low-battery" as const,
    lastUpdate: "5 min ago",
    address: "Central High School, NY",
  },
  {
    id: "3",
    name: "Work iPad",
    latitude: 40.7505,
    longitude: -73.9934,
    status: "offline" as const,
    lastUpdate: "1 hour ago",
    address: "Office Building, NY",
  },
];

export default function DashboardPage() {
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [activeTab, setActiveTab] = useState("overview");

  const handleViewLocation = (deviceId: string) => {
    setSelectedDevice(deviceId);
    setActiveTab("map");
  };

  const handleEditDevice = (deviceId: string) => {
    console.log("Edit device:", deviceId);
    // In a real app, this would open a device settings modal
  };

  const handleRemoveDevice = (deviceId: string) => {
    console.log("Remove device:", deviceId);
    // In a real app, this would show a confirmation dialog
  };

  const handleDeviceSelect = (deviceId: string) => {
    setSelectedDevice(deviceId);
  };

  const handleCenterMap = (deviceId: string) => {
    console.log("Center map on device:", deviceId);
    // In a real app, this would center the map on the device location
  };

  const onlineDevices = mockDevices.filter(d => d.status === "online").length;
  const totalDevices = mockDevices.length;
  const lowBatteryDevices = mockDevices.filter(d => d.status === "low-battery").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Monitor and manage all your tracked devices</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button className="bg-blue-600 hover:bg-blue-700">
                + Add New Device
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
              <div className="text-2xl">📱</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalDevices}</div>
              <p className="text-xs text-muted-foreground">
                Active tracking devices
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Online Now</CardTitle>
              <div className="text-2xl">🟢</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{onlineDevices}</div>
              <p className="text-xs text-muted-foreground">
                Currently connected
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Battery</CardTitle>
              <div className="text-2xl">🪫</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{lowBatteryDevices}</div>
              <p className="text-xs text-muted-foreground">
                Need charging soon
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Status</CardTitle>
              <div className="text-2xl">🔒</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Secure</div>
              <p className="text-xs text-muted-foreground">
                All devices protected
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Device Overview</TabsTrigger>
            <TabsTrigger value="map">Live Map</TabsTrigger>
            <TabsTrigger value="alerts">Alerts & History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Devices</CardTitle>
                  <CardDescription>
                    Manage and monitor all connected devices from this central dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockDevices.map((device) => (
                      <DeviceCard
                        key={device.id}
                        device={device}
                        onViewLocation={handleViewLocation}
                        onEditDevice={handleEditDevice}
                        onRemoveDevice={handleRemoveDevice}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest location updates and device events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">Sarah's iPhone - Location Updated</p>
                        <p className="text-sm text-gray-600">Downtown Mall, NY • 2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">Mike's Android - Low Battery Alert</p>
                        <p className="text-sm text-gray-600">Battery at 15% • Central High School, NY • 5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">Work iPad - Geofence Alert</p>
                        <p className="text-sm text-gray-600">Left office area • Office Building, NY • 1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-6">
            <LocationMap
              devices={mockLocationDevices}
              selectedDevice={selectedDevice}
              onDeviceSelect={handleDeviceSelect}
              onCenterMap={handleCenterMap}
            />
          </TabsContent>

          <TabsContent value="alerts" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Alerts</CardTitle>
                  <CardDescription>
                    Current notifications and warnings for your devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">⚠️</div>
                        <div>
                          <p className="font-medium">Low Battery Warning</p>
                          <p className="text-sm text-gray-600">Mike's Android is at 15% battery</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        Active
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-blue-200 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📍</div>
                        <div>
                          <p className="font-medium">Geofence Alert</p>
                          <p className="text-sm text-gray-600">Work iPad left designated work area</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        Resolved
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Location History</CardTitle>
                  <CardDescription>
                    Recent location tracking history for all devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {([
                      { time: "2:30 PM", device: "Sarah's iPhone", location: "Downtown Mall, NY", type: "location" },
                      { time: "2:25 PM", device: "Mike's Android", location: "Central High School, NY", type: "battery" },
                      { time: "1:45 PM", device: "Work iPad", location: "Office Building, NY", type: "geofence" },
                      { time: "12:30 PM", device: "Sarah's iPhone", location: "Home, NY", type: "location" },
                      { time: "11:15 AM", device: "Mike's Android", location: "Central High School, NY", type: "location" },
                    ] as const).map((entry, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm text-gray-500 font-mono">{entry.time}</div>
                          <div>
                            <p className="font-medium text-sm">{entry.device}</p>
                            <p className="text-xs text-gray-600">{entry.location}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {entry.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}