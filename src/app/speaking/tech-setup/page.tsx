import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Setup & Requirements — Dan Gentry | Third Power Life",
  description: "A/V requirements, stage setup, and technical specifications for booking Dan Gentry as a keynote speaker.",
};

export default function TechSetup() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            For Event Coordinators
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Technical Setup &amp; Requirements
          </h1>
          <p className="text-light/60 text-lg max-w-2xl mx-auto">
            Everything your A/V team needs to set Dan up for a seamless presentation.
            Dan is flexible and can adapt to most setups — this is the ideal configuration.
          </p>
        </div>
      </section>

      {/* Requirements Grid */}
      <section className="bg-gradient-to-b from-navy to-midnight/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Audio */}
            <div className="glass rounded-2xl p-8">
              <div className="text-2xl mb-4">🎙️</div>
              <h2 className="text-xl font-heading font-bold text-white mb-4">Audio</h2>
              <ul className="space-y-3 text-light/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Preferred:</strong> Lavalier (lapel) wireless microphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Also works great:</strong> Over-ear headset mic (Countryman-style)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Handheld:</strong> Works fine — Dan adapts to whatever you have available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span>Sound check: 15-20 minutes before session</span>
                </li>
              </ul>
            </div>

            {/* Visual / Slides */}
            <div className="glass rounded-2xl p-8">
              <div className="text-2xl mb-4">🖥️</div>
              <h2 className="text-xl font-heading font-bold text-white mb-4">Visual &amp; Slides</h2>
              <ul className="space-y-3 text-light/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Format:</strong> 16:9 widescreen presentation (Keynote/PowerPoint)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Connection:</strong> HDMI preferred, USB-C adapter available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Confidence monitor:</strong> Strongly preferred (presenter notes + next slide)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span>Dan brings his own wireless clicker — happy to use yours if preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span>Slides will be provided 48-72 hours before the event</span>
                </li>
              </ul>
            </div>

            {/* Stage Setup */}
            <div className="glass rounded-2xl p-8">
              <div className="text-2xl mb-4">🎭</div>
              <h2 className="text-xl font-heading font-bold text-white mb-4">Stage Setup</h2>
              <ul className="space-y-3 text-light/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Style:</strong> Open stage with room to move (no podium/lectern)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Lighting:</strong> Front wash with stage lighting that covers full movement area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span>Small table or stool nearby for water is appreciated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span>Timer visible to speaker (countdown clock) if available</span>
                </li>
              </ul>
            </div>

            {/* Recording & Virtual */}
            <div className="glass rounded-2xl p-8">
              <div className="text-2xl mb-4">📹</div>
              <h2 className="text-xl font-heading font-bold text-white mb-4">Recording &amp; Virtual</h2>
              <ul className="space-y-3 text-light/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Recording:</strong> Dan grants recording rights for internal use. Commercial distribution by separate agreement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Livestream:</strong> Fine — please provide camera/stream details in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Virtual events:</strong> Dan presents from a professional studio setup with ring light, quality audio, and branded background</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span>Preferred platforms: Zoom, Teams, Webex, StreamYard</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Travel */}
          <div className="glass rounded-2xl p-8 mt-8">
            <div className="text-2xl mb-4">✈️</div>
            <h2 className="text-xl font-heading font-bold text-white mb-4">Travel &amp; Logistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-light/70 text-sm">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Based in:</strong> Ocala, Florida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Travel:</strong> Nationwide + international</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Airports:</strong> MCO (Orlando, preferred), TPA (Tampa), or GNV (Gainesville)</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Arrival:</strong> Prefers to arrive the evening before the event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span><strong className="text-white">Hotel:</strong> Standard room near the event venue is appreciated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric mt-0.5">✓</span>
                  <span>Ground transport or parking arrangements helpful</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center mt-12">
            <p className="text-light/50 mb-4">Questions about setup? Need to coordinate with Dan&apos;s team?</p>
            <a
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
