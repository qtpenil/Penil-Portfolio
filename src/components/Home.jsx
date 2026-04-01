import { Download } from "lucide-react";


export default function Home() {
  return (
    <section id="home" className="scroll-mt-24">
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Small intro */}
          <p className="text-green-400 tracking-[0.3em] uppercase mb-4">
            // Backend Developer
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Penil Hirapara
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Java Backend Developer with 1 year of experience building scalable 
            REST APIs and Passionate about distributed systems, Kafka, and performance optimization.
          </p>

          {/* Download Button */}
          <div className="mt-8">
            <a 
              href="/Penil_Hirapara_Resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl 
              bg-white/10 backdrop-blur-lg border border-white/20 
              hover:border-blue-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] 
              hover:scale-105 transition duration-300"
            >
              <Download size={20} />
              <span>Resume</span>
            </a>
          </div>

        </div>

        {/* RIGHT SIDE (PHOTO) */}
        <div className="flex justify-center">

          <div className="relative group">

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-green-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Image */}
            <img
              src="/profile.png"   // 👉 put your image in public folder
              alt="Penil"
              className="w-72 h-80 object-cover rounded-2xl border border-white/10 
              group-hover:scale-105 transition duration-300"
            />

          </div>

        </div>

      </div>

    </div>
    </section>
  );
}