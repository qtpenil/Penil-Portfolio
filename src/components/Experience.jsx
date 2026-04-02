export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">

    <div id="experience" className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20">

        {/* Title */}
        <div className="text-center mb-14">
        <div className="flex items-center gap-4 mb-6 max-w-xs mx-auto">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-500/60" />
            <span className="font-mono text-xs tracking-[3px] uppercase text-green-400 whitespace-nowrap">
            // My Journey
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-500/60" />
        </div>

        <h2 className="text-5xl font-bold leading-none tracking-tight">
            <span className="text-slate-100">Experience </span>
            <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1.5px #4ade80 " }}
            >
            Journey
            </span>
        </h2>
        </div>

        {/* Main Card */}
        <div className="
        mt-14 max-w-5xl mx-auto 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-3xl p-8 
        transition duration-300
        hover:border-green-500/40 
        hover:shadow-[0_0_50px_rgba(34,197,94,0.25)]
        hover:-translate-y-1
        ">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>
            <h3 className="text-3xl font-semibold">
              Java Backend Developer
            </h3>

            <p className="text-gray-400 mt-2">
              Qrious Tech Team LLP · Ahmedabad, Gujarat · Full-time
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="px-4 py-2 text-sm rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
              ● Currently Working
            </span>
          </div>

        </div>

        {/* Grid Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

            {/* Experience */}
            <div className="
            bg-white/5 backdrop-blur-lg 
            border border-white/10 
            rounded-2xl p-6 
            transition duration-300
            hover:border-green-500/40 
            hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]
            hover:-translate-y-1
            ">

            <p className="text-sm text-green-400 tracking-widest">
              EXPERIENCE
            </p>

            <h4 className="text-4xl font-bold mt-2">
              1 <span className="text-lg text-gray-400">year</span>
            </h4>

            <p className="text-gray-400 mt-2">
              Jan 2025 — Present
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["Java", "Spring Boot", "Spring Security","Kafka", "AWS", "Database","RabbitMQ","Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20 hover:bg-green-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

            {/* Key Work */}
            <div className="
            bg-white/5 backdrop-blur-lg 
            border border-white/10 
            rounded-2xl p-6 
            transition duration-300
            hover:border-green-500/40 
            hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]
            hover:-translate-y-1
            ">

            <p className="text-sm text-green-400 tracking-widest">
              KEY WORK
            </p>

<div className="mt-4 pl-2 border-green-500/30 space-y-3 text-gray-300">            

              <div className="flex items-start gap-3">
                <span className="text-green-400">●</span>
                <p>Developed and integrated REST APIs for handling high-volume data processing workflows</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400">●</span>
                <p>Implemented asynchronous processing using Kafka/RabbitMQ to improve system performance</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400">●</span>
                <p>Designed efficient database schemas and optimized queries for better performance</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400">●</span>
                <p>Secured applications using Spring Security (authentication & authorization)</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
    </section>
  );
}