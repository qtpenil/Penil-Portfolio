const projects = [
  {
    number: "01",
    domain: "Healthcare",
    domainIcon: (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 2v3M8 11v3M2 8h3M11 8h3" /><circle cx="8" cy="8" r="3" />
      </svg>
    ),
    title: "Report Analysis Platform",
    subtitle: "AHA",
    description:
      "A production-grade medical report intelligence system that extracts, processes, and analyzes health data using OCR — delivering severity-based insights to patients and clinicians.",
    features: [
      "Built OCR-based system Python (Tesseract) to extract data from medical reports",
      "Kafka-based async processing for high-throughput report ingestion",
      "Processed reports using Tesseract OCR",
      "Generated health insights using rule-based logic",
      "Developed backend APIs using Spring Boot"
    ],
    tags: ["Java", "Spring Boot", "Microservice","Kafka", "Redis", "Postgres", "Tesseract OCR","AWS"],
    confidential: "Company Project · Code Confidential",
    accent: {
      badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      subtitle: "text-blue-400",  
      dot: "bg-blue-500",
      dotWrap: "bg-blue-500/10 border border-blue-500/20",
      hover: "hover:border-blue-500/30 hover:shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(59,130,246,0.22)]",
      bar: "bg-blue-500",
      blob: "bg-blue-500",
      tagHover: "group-hover:border-blue-500/25 group-hover:text-slate-400",
    },
  },
  {
    number: "02",
    domain: "Finance",
    domainIcon: (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="12" height="9" rx="1.5" /><path d="M2 7h12M5 4V3M11 4V3" />
      </svg>
    ),
    title: "Loan Management",
    subtitle: "System",
    description:
      "A robust backend module handling the complete loan lifecycle — from application submission and eligibility checks through approval workflows and repayment tracking.",
    features: [
      "Built backend system for loan application and tracking",
      "Implemented loan eligibility and approval logic",
      "RESTful APIs for end-to-end loan application and status tracking",
      "Secured APIs using Spring Security",
      "Optimized DB queries and indexing for high-performance reporting",
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "Postgres","Spring Mail", "REST APIs", "RabbitMQ","Github"],
    confidential: "Self Project · Code on Github",
    accent: {
      badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      subtitle: "text-emerald-400",
      dot: "bg-emerald-500",
      dotWrap: "bg-emerald-500/10 border border-emerald-500/20",
      hover: "hover:border-emerald-500/30 hover:shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(16,185,129,0.22)]",
      bar: "bg-emerald-500",
      blob: "bg-emerald-500",
      tagHover: "group-hover:border-emerald-500/25 group-hover:text-slate-400",
    },
  },
];

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="7" width="10" height="8" rx="1.5" /><path d="M5 7V5a3 3 0 016 0v2" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-[#0a0b0f] text-white px-6 py-24" >
      <div className="max-w-3xl mx-auto">

      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex items-center gap-4 mb-6 max-w-xs mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/60" />
          <span className="font-mono text-xs tracking-[3px] uppercase text-blue-400 whitespace-nowrap">
            // what i've built
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/60" />
        </div>

        <h2 className="text-5xl font-bold leading-none tracking-tight">
          <span className="text-slate-100">Featured </span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1.5px #3b82f6" }}
          >
            Projects
          </span>
        </h2>
      </div>

        {/* Cards — vertical stack */}
        <div className="flex flex-col gap-7">
          {projects.map((p) => (
            <div
              key={p.number}
              className={`group relative bg-[#111218] border border-[#1e2030] rounded-2xl overflow-hidden
                transition-all duration-300 hover:-translate-y-1 ${p.accent.hover}`}
            >
              {/* Left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl ${p.accent.bar}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Glow blob */}
              <div
                className={`absolute -top-20 -right-20 w-72 h-72 rounded-full ${p.accent.blob}
                  opacity-0 group-hover:opacity-[0.06] blur-3xl transition-opacity duration-500 pointer-events-none`}
              />

              {/* Top row — badge + number */}
              <div className="flex items-start justify-between px-9 pt-7">
                <span className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-widest
                  uppercase px-3 py-1.5 rounded-lg ${p.accent.badge}`}>
                  {p.domainIcon}
                  {p.domain}
                </span>
                <span className="font-mono text-5xl font-bold text-white/[0.04] select-none leading-none">
                  {p.number}
                </span>
              </div>

              {/* Body — 2 col: left info, right features */}
              <div className="grid md:grid-cols-2 gap-8 px-9 pt-5 pb-8">

                {/* Left */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 leading-snug">
                    {p.title}
                  </h3>
                  <p className={`text-2xl font-bold leading-snug mb-4 ${p.accent.subtitle}`}>
                    {p.subtitle}
                  </p>
                  <p className="text-slate-500 text-[13.5px] leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-[11px] px-2.5 py-1 rounded-md
                          bg-[#1a1d27] border border-[#2a2d3e] text-slate-600
                          transition-all duration-200 ${p.accent.tagHover}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — features */}
                <div>
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-slate-700 mb-4">
                    Key highlights
                  </p>
                  <ul className="flex flex-col gap-3">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13.5px] text-slate-400 leading-relaxed">
                        <span className={`flex items-center justify-center w-5 h-5 rounded-md flex-shrink-0 mt-0.5 ${p.accent.dotWrap}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${p.accent.dot}`} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#1a1d27] px-9 py-3.5 flex items-center gap-2 text-slate-700">
                <LockIcon />
                <span className="font-mono text-[11px]">{p.confidential}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
