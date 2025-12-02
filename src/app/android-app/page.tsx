"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Code2,
  CheckCircle2,
  Rocket,
  ArrowLeft,
  Github,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const MILESTONES = [
  {
    title: "Project Setup & Architecture",
    icon: Code2,
    date: "Part 1",
    status: "Completed",
    description:
      "Created the Android project, set up modular architecture, navigation graph, and Git workflow.",
  },
  {
    title: "Core Screens Implemented",
    icon: Smartphone,
    date: "Part 2",
    status: "Completed",
    description:
      "Built login, onboarding, and main dashboard screens with placeholder data and navigation.",
  }
]

const DELIVERY_LINKS = {
  pitch: "https://docs.google.com/presentation/d/1g6cnLyJfqdjM8U0givZs8XFMSbSmiat6PKPPypKhJcI/edit?usp=sharing", // Original pitch link stub
  apk: "https://drive.google.com/file/d/12u7ffLworH0qTEeEYHr9BCwKnNsBEkps/view?usp=sharing", // APK link stub
  designSlide: "https://docs.google.com/presentation/d/1t-lY9bOj5L0sjpuWAIGrJb7BQsqDYxXjPPgU2rAq1B8/edit?usp=sharing", // Threaded design diagram single slide stub
  presentationVideo: "https://drive.google.com/file/d/1Sc9l2NsQxw0oNfkHtNqUWgz4SX-H2Vsl/view?usp=sharing", // Presentation video stub
  finalZip: "https://drive.google.com/file/d/1pwVPnG2pEPWvkGYZocao-FuoF-zBCF1q/view?usp=sharing", // Final project ZIP stub
}

export default function AndroidAppProgressPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background (same style as landing) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/30 border-b border-white/5 shadow-2xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Smartphone className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-50 -z-10" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Qolt Android
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-xl px-4 py-1">
              Internal Progress Demo
            </Badge>

            <div className="flex items-center space-x-2">
              <Link
                href="https://github.com/GooseMooz/Qolt-Android"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="border border-orange-500/50 text-orange-100 hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-50 backdrop-blur-xl bg-white/5 transition-all duration-300 flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  App GitHub
                </Button>
              </Link>
              <Link
                href="https://github.com/antonkazachenko/qolt-landing"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="border border-purple-500/50 text-purple-100 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-50 backdrop-blur-xl bg-white/5 transition-all duration-300 flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Website GitHub
                </Button>
              </Link>
            </div>

            <Link href="/">
              <Button
                variant="outline"
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-400 backdrop-blur-xl bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Landing
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-10">
          {/* Hero / Overview */}
          <section className="text-center space-y-6">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-xl px-4 py-2">
              Android App • Progress Overview
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Mobile App Development
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent relative">
                Current Status
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 blur-2xl opacity-20 -z-10" />
              </span>
            </h1>
          </section>

          {/* Milestones */}
          <section className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Milestones
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {MILESTONES.map((milestone) => {
                const Icon = milestone.icon
                const statusColor =
                  milestone.status === "Completed"
                    ? "from-emerald-500 to-emerald-600"
                    : milestone.status === "In Progress"
                      ? "from-orange-500 to-orange-600"
                      : "from-purple-500 to-purple-600"

                return (
                  <Card
                    key={milestone.title}
                    className="group relative backdrop-blur-xl bg-white/5 border-white/10 hover:border-orange-500/40 transition-all duration-500 shadow-2xl shadow-black/10 hover:shadow-orange-500/15"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative space-y-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-white">
                          {milestone.title}
                        </CardTitle>
                        <div
                          className={`relative w-10 h-10 bg-gradient-to-r ${statusColor} rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-40 -z-10" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{milestone.date}</span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wide">
                          {milestone.status === "Completed" && (
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          )}
                          {milestone.status}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative pt-0 pb-6">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Final Delivery */}
          <section className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Final Delivery & Links
              </h2>
              <Badge className="bg-emerald-500/15 text-emerald-200 border border-emerald-500/40">
                Final Step Done
              </Badge>
            </div>

            <Card className="relative backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-orange-500/5 rounded-2xl" />
              <CardContent className="relative p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-gray-200">
                    <h3 className="text-xl font-semibold text-white">Deliverable Links</h3>
                    <div className="space-y-3">
                      {[
                        { label: "Original pitch link", href: DELIVERY_LINKS.pitch },
                        { label: "App APK here", href: DELIVERY_LINKS.apk },
                        {
                          label: "Threaded design diagram (single-slide deck)",
                          href: DELIVERY_LINKS.designSlide,
                        },
                        { label: "Presentation video", href: DELIVERY_LINKS.presentationVideo },
                        { label: "Final project ZIP", href: DELIVERY_LINKS.finalZip },
                      ].map((item) => (
                        <Button
                          key={item.label}
                          asChild
                          className="w-full justify-between bg-white/10 hover:bg-white/20 text-white border border-emerald-400/40"
                        >
                          <Link href={item.href} target="_blank" rel="noreferrer" className="flex w-full items-center justify-between gap-2">
                            <span>{item.label}</span>
                            <ExternalLink className="w-4 h-4 text-emerald-300" />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-200">
                    <h3 className="text-xl font-semibold text-white">Team Effort Breakdown</h3>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400" />
                        <span>
                          <span className="font-semibold text-white">Timofey Zhuchkov:</span> NFC features and UI/UX polish.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400" />
                        <span>
                          <span className="font-semibold text-white">Mykhailo Isyp:</span> Presets tab and overall project organization.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400" />
                        <span>
                          <span className="font-semibold text-white">Anton Kazachenko &amp; Dyk Kyong Do:</span> Statistics tab and its widgets, project website.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400" />
                        <span>
                          <span className="font-semibold text-white">Franklin Au:</span> Onboarding and profile/settings screens.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
