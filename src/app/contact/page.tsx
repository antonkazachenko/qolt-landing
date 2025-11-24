import Link from "next/link"
import { Instagram, MessageSquare, Send } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 p-4 relative overflow-hidden">
      {/* Background blur circles for enhanced glassmorphic effect - darker and more subtle */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-black/40 border border-gray-800/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative z-10">
        {/* Inner glass highlight - more subtle */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-2xl font-bold text-center text-gray-100">Connect With Us</h1>

          <div className="w-full space-y-4">
            <Link
              href="https://instagram.com/qolt.tech"
              target="_blank"
              className="flex items-center justify-between w-full p-4 rounded-xl backdrop-blur-lg bg-black/50 border border-gray-800/40 shadow-lg transition-all duration-300 
              hover:bg-black/30 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-[1.02] group"
            >
              <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                Instagram
              </span>
              <Instagram className="h-5 w-5 text-pink-500 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] transition-all duration-300" />
            </Link>

            <Link
              href="https://discord.gg/deP6m4quNf"
              target="_blank"
              className="flex items-center justify-between w-full p-4 rounded-xl backdrop-blur-lg bg-black/50 border border-gray-800/40 shadow-lg transition-all duration-300 
              hover:bg-black/30 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-[1.02] group"
            >
              <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                Discord
              </span>
              <MessageSquare className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-300" />
            </Link>

            <Link
              href="https://form.typeform.com/to/SgS8Tabl"
              className="flex items-center justify-between w-full p-4 rounded-xl backdrop-blur-lg bg-black/50 border border-gray-800/40 shadow-lg transition-all duration-300 
              hover:bg-black/30 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-[1.02] group"
            >
              <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                Feedback Form
              </span>
              <Send className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-300" />
            </Link>
          </div>

          <p className="text-sm text-center text-gray-500 mt-8">© {new Date().getFullYear()} • Qolt Technology Inc. • All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}
