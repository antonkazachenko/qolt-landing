"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {
    Smartphone,
    Zap,
    Clock,
    Star,
    CheckCircle,
    TrendingUp,
    Radio,
    Sparkles,
    Brain,
    Calendar,
    BrickWall,
    Hourglass,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20"></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full"></div>
            </div>

          {/* Navigation */}
          <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/30 border-b border-white/5 shadow-2xl">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className="relative w-10 h-10 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <Radio className="w-6 h-6 text-white" />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-50 -z-10"></div>
                </div>
                <span
                  className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Qolt
      </span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 relative group"
                >
                  Features
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></div>
                </button>
                <button
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 relative group"
                >
                  How It Works
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></div>
                </button>

                {/* NEW: link to Android app progress page */}
                <Link
                  href="/android-app"
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 relative group"
                >
                  Android App Progress
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></div>
                </Link>

                <Button
                  variant="outline"
                  className="relative border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 backdrop-blur-xl bg-white/5 transition-all duration-300 shadow-lg shadow-orange-500/10"
                  onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 z-10">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="text-center">
                            <Badge
                                className="mb-8 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-xl shadow-lg shadow-orange-500/10 px-6 py-2">
                                <Sparkles className="w-4 h-4 mr-2"/>
                                Revolutionary NFC Technology
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                                    Break Free From
                                </span>
                                <br/>
                                <span
                                    className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent relative">
                  Digital Distractions
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 blur-2xl opacity-20 -z-10"></div>
                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                Transform your productivity with our smart NFC tags that instantly block distracting
                                apps on your phone.
                                <span
                                    className="text-orange-400 font-medium"> One tap to focus, one tap to freedom.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    size="lg"
                                    className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white hover:text-white px-10 py-6 text-xl font-semibold shadow-2xl shadow-orange-500/25 transition-all duration-300 group overflow-hidden"
                                    onClick={() => document.getElementById("cta")?.scrollIntoView({behavior: "smooth"})}
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative z-10 flex items-center text-white">
                    ORDERS OPEN SOON
                    <Clock className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"/>
                  </span>
                                </Button>
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="relative max-w-lg mx-auto">
                            <div
                                className="relative backdrop-blur-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 rounded-3xl"></div>
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur opacity-50"></div>
                                <Image
                                    src="/qolt-device.jpg"
                                    alt="Qolt NFC Device"
                                    width={500}
                                    height={400}
                                    className="relative w-full rounded-2xl shadow-2xl"
                                />
                                {/* Floating elements */}
                                <div
                                    className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                                <div
                                    className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative py-24 px-4 z-10">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Why Choose</span>
                            <span
                                className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                                Qolt?
              </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                            Experience the perfect blend of simplicity and powerful productivity features
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card
                            className="group relative backdrop-blur-xl bg-white/5 border-white/10 hover:border-orange-500/50 transition-all duration-500 shadow-2xl shadow-black/10 hover:shadow-orange-500/10">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="relative p-10 text-center">
                                <div
                                    className="relative w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-10 h-10 text-white"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur opacity-50 -z-10"></div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Instant Activation</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Choose your distractions, tap your phone to the NFC tag and watch distracting apps
                                    disappear instantly
                                </p>
                            </CardContent>
                        </Card>

                        <Card
                            className="group relative backdrop-blur-xl bg-white/5 border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-2xl shadow-black/10 hover:shadow-blue-500/10">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="relative p-10 text-center">
                                <div
                                    className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <BrickWall className="w-10 h-10 text-white"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur opacity-50 -z-10"></div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Physical Blocking</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Non-Digital barrier between you and your apps makes you focus on important things
                                    without relying on
                                    self-control
                                </p>
                            </CardContent>
                        </Card>

                        <Card
                            className="group relative backdrop-blur-xl bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-2xl shadow-black/10 hover:shadow-purple-500/10">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="relative p-10 text-center">
                                <div
                                    className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <Brain className="w-10 h-10 text-white"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl blur opacity-50 -z-10"></div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Addicting</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Advanced engagement system makes work addicting and motivates you to push yourself
                                    further
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="relative py-24 px-4 z-10">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How It</span>
                            <span
                                className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                                Works
              </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                            Get started in minutes with our simple 3-step process
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="text-center group">
                            <div
                                className="relative backdrop-blur-3xl bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-600/20 border border-orange-500/30 rounded-3xl p-12 mb-8 shadow-2xl shadow-orange-500/10 group-hover:shadow-orange-500/20 transition-all duration-500">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl"></div>
                                <div
                                    className="relative w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/25">
                                    <span className="text-3xl font-bold text-white">1</span>
                                </div>
                                <Smartphone
                                    className="w-16 h-16 text-orange-400 mx-auto group-hover:scale-110 transition-transform duration-300"/>
                                <div
                                    className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Download & Setup</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Download our app and configure which apps you want to block during focus time with our
                                intuitive
                                interface.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div
                                className="relative backdrop-blur-3xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-blue-600/20 border border-blue-500/30 rounded-3xl p-12 mb-8 shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-500">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl"></div>
                                <div
                                    className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                                    <span className="text-3xl font-bold text-white">2</span>
                                </div>
                                <Radio
                                    className="w-16 h-16 text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300"/>
                                <div
                                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Place Your Tag</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Stick the NFC tag on your desk, workspace, or anywhere you want to create an instant
                                focus zone.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div
                                className="relative backdrop-blur-3xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-purple-600/20 border border-purple-500/30 rounded-3xl p-12 mb-8 shadow-2xl shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-500">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"></div>
                                <div
                                    className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                                    <span className="text-3xl font-bold text-white">3</span>
                                </div>
                                <CheckCircle
                                    className="w-16 h-16 text-purple-400 mx-auto group-hover:scale-110 transition-transform duration-300"/>
                                <div
                                    className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Tap & Focus</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Tap your phone to the tag and enter deep focus mode. Tap again to restore access when
                                you&#39;re done.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-24 px-4 z-10">
                <div className="container mx-auto">
                    <div
                        className="relative backdrop-blur-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 rounded-3xl p-16 shadow-2xl">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur opacity-30"></div>
                        <div className="relative grid md:grid-cols-3 gap-12 text-center">
                            <div className="group">
                                <div className="flex items-center justify-center mb-6">
                                    <Calendar
                                        className="w-12 h-12 text-orange-400 mr-4 group-hover:scale-110 transition-transform duration-300"/>
                                    <span
                                        className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    120
                  </span>
                                </div>
                                <p className="text-gray-300 text-xl">Hours Reclaimed Monthly</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center justify-center mb-6">
                                    <TrendingUp
                                        className="w-12 h-12 text-blue-400 mr-4 group-hover:scale-110 transition-transform duration-300"/>
                                    <span
                                        className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    120%
                  </span>
                                </div>
                                <p className="text-gray-300 text-xl">Productivity Increase</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center justify-center mb-6">
                                    <Hourglass
                                        className="w-12 h-12 text-purple-400 mr-4 group-hover:scale-110 transition-transform duration-300"/>
                                    <span
                                        className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    70%
                  </span>
                                </div>
                                <p className="text-gray-300 text-xl">Screen Time Decrease</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative py-24 px-4 z-10">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Our Users
              </span>
                            <span
                                className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Say</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Chen",
                                role: "Software Developer",
                                content:
                                    "Qolt has completely transformed my work-from-home productivity. I can finally resist the urge to check social media during deep work sessions.",
                                rating: 5,
                            },
                            {
                                name: "Marcus Johnson",
                                role: "Student",
                                content:
                                    "As a college student, this has been a game-changer for my study sessions. My grades have improved significantly since I started using Qolt.",
                                rating: 5,
                            },
                            {
                                name: "Emily Rodriguez",
                                role: "Entrepreneur",
                                content:
                                    "Simple, effective, and exactly what I needed. The NFC technology makes it so easy to switch between focus and break modes.",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <Card
                                key={index}
                                className="group relative backdrop-blur-xl bg-white/5 border-white/10 hover:border-orange-500/30 transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-orange-500/10"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <CardContent className="relative p-8">
                                    <div className="flex mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-orange-400 fill-current"/>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">&#34;{testimonial.content}&#34;</p>
                                    <div>
                                        <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                                        <p className="text-gray-400">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="relative py-24 px-4 z-10">
                <div className="container mx-auto">
                    <div
                        className="relative backdrop-blur-3xl bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-600/20 border border-orange-500/30 rounded-3xl p-16 text-center shadow-2xl">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/5 rounded-3xl"></div>
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-3xl blur opacity-50"></div>
                        <div className="relative">
                            <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                  Ready to Reclaim Your
                </span>
                                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                                    {" "}
                                    Focus?
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                                Join those who have already transformed their productivity with Qolt.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <a href="https://qolt.ca/contact" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        className="bg-white text-black hover:bg-gray-100 py-4 px-8 text-lg font-semibold">
                                        Follow For Updates!
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative py-16 px-4 border-t border-white/10 z-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div
                                    className="relative w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                    <Radio className="w-6 h-6 text-white"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-50 -z-10"></div>
                                </div>
                                <span
                                    className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Qolt
                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">Solving procrastination once and for all.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        href="https://www.linkedin.com/company/qolt-tech-inc/posts/?feedView=all"
                                        className="hover:text-orange-400 transition-colors duration-300"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact"
                                          className="hover:text-orange-400 transition-colors duration-300">
                                        Connect
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Qolt Technology Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
