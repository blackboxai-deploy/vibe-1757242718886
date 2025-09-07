import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      title: "Real-Time Location Tracking",
      description: "Monitor device locations with pinpoint accuracy using advanced GPS technology and real-time updates.",
      icon: "🎯",
    },
    {
      title: "Multi-Device Management",
      description: "Track and manage multiple devices from a single dashboard with individual privacy controls.",
      icon: "📱",
    },
    {
      title: "Geofencing Alerts",
      description: "Set up custom boundaries and receive instant notifications when devices enter or leave specific areas.",
      icon: "🗺️",
    },
    {
      title: "Location History",
      description: "Access detailed location history with timeline view and route mapping for comprehensive tracking.",
      icon: "📊",
    },
    {
      title: "Family Safety Features",
      description: "Ensure family member safety with SOS alerts, emergency contacts, and panic button functionality.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Enterprise Security",
      description: "Advanced security features for business use including data encryption and compliance reporting.",
      icon: "🔒",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Perfect for small families",
      features: [
        "Track up to 3 devices",
        "Real-time location updates",
        "7-day location history",
        "Basic geofencing",
        "Email notifications",
      ],
      popular: false,
    },
    {
      name: "Family",
      price: "$19.99",
      period: "/month",
      description: "Ideal for larger families",
      features: [
        "Track up to 8 devices",
        "Real-time location updates",
        "30-day location history",
        "Advanced geofencing",
        "SMS & push notifications",
        "SOS alerts",
        "Route history",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "/month",
      description: "For businesses and organizations",
      features: [
        "Unlimited devices",
        "Real-time location updates",
        "Unlimited history",
        "Custom geofencing",
        "Priority support",
        "API access",
        "Compliance reporting",
        "Advanced analytics",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "TrackSecure gives me peace of mind knowing where my teenagers are. The geofencing alerts are incredibly helpful when they arrive at school or friends' houses.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43fab433-4489-478f-9f24-a8e835ea0486.png",
    },
    {
      name: "Mike Chen",
      role: "Fleet Manager",
      content: "Managing our delivery fleet has never been easier. The real-time tracking and route history help us optimize routes and ensure driver safety.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73db9b03-81a1-4084-a85c-37851cdb1c51.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      content: "The enterprise features are perfect for our small business. We can track company devices and ensure they're being used appropriately.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6269e884-46f3-4231-a652-a0d81e9aa162.png",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Advanced Phone Tracking Technology
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Secure Phone Tracking
              <br />
              <span className="text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional-grade phone tracking solution for families and businesses. 
              Monitor device locations, ensure safety, and maintain security with our 
              advanced real-time tracking platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  View Demo Dashboard
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff37207e-b557-40e0-bd0a-9b56fa2f270c.png"
                alt="TrackSecure Dashboard Interface showing real-time phone tracking"
                className="rounded-2xl shadow-2xl border border-gray-200"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              ⚡ Powerful Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Complete Device Tracking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tracking solution with advanced features designed for both personal and business use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              📋 Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Easy Steps
            </h2>
            <p className="text-xl text-gray-600">
              Start tracking devices in minutes with our streamlined setup process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Account</h3>
              <p className="text-gray-600">
                Sign up for your TrackSecure account and choose the plan that fits your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Add Devices</h3>
              <p className="text-gray-600">
                Register the phones you want to track with our simple device setup process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Tracking</h3>
              <p className="text-gray-600">
                Monitor device locations in real-time through your personalized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              💰 Flexible Pricing
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with no hidden fees. Scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-600 mr-3">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/auth/register">
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              ⭐ Customer Success
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Families and Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about their TrackSecure experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} testimonial photo`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex mt-4 text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Devices?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of families and businesses who trust TrackSecure for their device tracking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}