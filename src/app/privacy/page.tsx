import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TrackSecure",
  description: "Learn how TrackSecure protects your privacy and handles your personal data with the highest security standards.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is our priority. Learn how we protect your data.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Data We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Location Information</h3>
                <p className="text-gray-700">
                  We collect real-time location data from devices you choose to track. This includes GPS coordinates, 
                  timestamps, and approximate addresses. Location data is only collected with explicit user consent 
                  and can be disabled at any time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Device Information</h3>
                <p className="text-gray-700">
                  We collect basic device information including device type, operating system, battery level, 
                  and connectivity status to provide accurate tracking services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Account Information</h3>
                <p className="text-gray-700">
                  We collect information you provide when creating an account, including name, email address, 
                  and payment information for subscription services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Service Provision</h3>
                <p className="text-gray-700">
                  Your location and device data is used solely to provide tracking services, send notifications, 
                  and generate location history reports as requested by you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Security and Safety</h3>
                <p className="text-gray-700">
                  We use your data to provide safety features such as geofencing alerts, emergency notifications, 
                  and SOS functionality.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Service Improvement</h3>
                <p className="text-gray-700">
                  Aggregated, anonymized data may be used to improve our services, fix bugs, and develop new features.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Encryption</h3>
                <p className="text-gray-700">
                  All location data is encrypted both in transit and at rest using industry-standard AES-256 encryption.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Access Controls</h3>
                <p className="text-gray-700">
                  Access to your data is strictly limited to authorized personnel who need it to provide support 
                  or maintain our services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Retention</h3>
                <p className="text-gray-700">
                  Location history is retained for the duration specified in your account settings (up to 1 year). 
                  You can delete your data at any time.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Data Access</h3>
                <p className="text-gray-700">
                  You have the right to access, download, and review all data we have collected about you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Deletion</h3>
                <p className="text-gray-700">
                  You can delete your account and all associated data at any time. Data deletion is permanent 
                  and cannot be undone.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Consent Withdrawal</h3>
                <p className="text-gray-700">
                  You can withdraw consent for location tracking at any time by disabling tracking in your 
                  device settings or account preferences.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700"><span className="font-semibold">Email:</span> privacy@tracksecure.com</p>
                <p className="text-gray-700"><span className="font-semibold">Address:</span> 123 Privacy Street, Secure City, SC 12345</p>
                <p className="text-gray-700"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}