import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - TrackSecure",
  description: "Read our Terms of Service to understand your rights and responsibilities when using TrackSecure.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using TrackSecure.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                By accessing and using TrackSecure services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                TrackSecure provides device tracking and location monitoring services for personal and business use. 
                Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Real-time GPS location tracking</li>
                <li>Location history and reporting</li>
                <li>Geofencing and alerts</li>
                <li>Device management and monitoring</li>
                <li>Emergency notifications and SOS features</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Permitted Uses</h3>
                <p className="text-gray-700 mb-4">
                  You may use TrackSecure for legitimate purposes including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Tracking devices you own or have permission to track</li>
                  <li>Monitoring family members with their consent</li>
                  <li>Managing business devices and employee phones with proper authorization</li>
                  <li>Personal safety and security purposes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Prohibited Uses</h3>
                <p className="text-gray-700 mb-4">
                  You agree NOT to use TrackSecure for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Tracking individuals without their knowledge or consent</li>
                  <li>Stalking, harassment, or any illegal surveillance</li>
                  <li>Violating privacy rights of others</li>
                  <li>Any unlawful or malicious activities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy and Consent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">User Responsibility</h3>
                <p className="text-gray-700">
                  You are responsible for obtaining proper consent from all individuals whose devices you track. 
                  This includes informing them about the tracking and obtaining their explicit permission.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Legal Compliance</h3>
                <p className="text-gray-700">
                  You agree to comply with all applicable local, state, and federal laws regarding privacy, 
                  surveillance, and data protection.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment and Subscription</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Billing</h3>
                <p className="text-gray-700">
                  Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable 
                  except as required by law or as specified in our refund policy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Free Trial</h3>
                <p className="text-gray-700">
                  We offer a 14-day free trial for new users. Your subscription will automatically begin at the 
                  end of the trial period unless you cancel before the trial expires.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cancellation</h3>
                <p className="text-gray-700">
                  You may cancel your subscription at any time. Cancellation will take effect at the end of your 
                  current billing period.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                TrackSecure provides location tracking services on an &quot;as is&quot; basis. We make no warranties about 
                the accuracy, reliability, or availability of location data. We are not liable for any damages 
                resulting from the use or inability to use our services, including but not limited to location 
                inaccuracies, service interruptions, or data loss.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data and Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our collection, use, and protection of your personal data is governed by our Privacy Policy, 
                which is incorporated by reference into these Terms of Service. Please review our Privacy Policy 
                to understand our data practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modifications to Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We reserve the right to modify or discontinue our services at any time with reasonable notice. 
                We may also update these terms periodically. Continued use of our services after changes 
                constitutes acceptance of the modified terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <div className="text-gray-700"><span className="font-semibold">Email:</span> legal@tracksecure.com</div>
                <div className="text-gray-700"><span className="font-semibold">Address:</span> 123 Legal Street, Secure City, SC 12345</div>
                <div className="text-gray-700"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}