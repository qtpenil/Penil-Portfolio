import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
    <div id="contact" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-20 text-center">

      <h2 className="text-4xl font-bold">
        📬 Contact Me
      </h2>

      <p className="text-gray-400 mt-3">
        Let’s connect and build something great 🚀
      </p>

      <div className="mt-12 flex justify-center items-center gap-8">

        {/* Email */}
        <a 
          href="mailto:penilhirapara0808@gmail.com"
          className="group relative p-5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
        >
          <FaEnvelope className="text-2xl text-blue-400 group-hover:text-white transition" />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/hirapara-penil-98a8a0237/"
          target="_blank"
          className="group relative p-5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.7)]"
        >
          <FaLinkedin className="text-2xl text-blue-500 group-hover:text-white transition" />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/qtpenil"
          target="_blank"
          className="group relative p-5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          <FaGithub className="text-2xl text-white group-hover:text-gray-300 transition" />
        </a>

      </div>

    </div>
    </section>
  );
}