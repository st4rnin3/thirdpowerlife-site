import Image from "next/image";
import { notFound } from "next/navigation";

// Prospect data — add new entries here or eventually pull from CRM API
const prospects: Record<string, {
  name: string;
  greeting: string;
  videoUrl?: string;
  context?: string;
  ctaText: string;
  ctaUrl: string;
}> = {
  "katie-mdrt": {
    name: "Katie",
    greeting: "Thanks for connecting at MDRT — I loved our conversation about AI leadership.",
    context: "I put together some resources specifically for the MDRT audience. Here's what I think would resonate with your members.",
    ctaText: "Schedule the Proposal Review",
    ctaUrl: "https://www.thirdpowerlife.ai/schedule/introductory-call",
  },
  "demo": {
    name: "there",
    greeting: "Thanks for checking out this personalized landing page!",
    context: "This is an example of how Dan creates custom touchpoints for each prospect — personalized video, tailored resources, and a direct line to the next conversation.",
    ctaText: "Book an Intro Call",
    ctaUrl: "https://www.thirdpowerlife.ai/schedule/introductory-call",
  },
};

export function generateStaticParams() {
  return Object.keys(prospects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prospect = prospects[slug];
  if (!prospect) return { title: "Page Not Found" };
  return {
    title: `Hi ${prospect.name} — Dan Gentry | Third Power Life`,
    robots: "noindex, nofollow",
  };
}

export default async function ProspectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prospect = prospects[slug];
  if (!prospect) notFound();

  return (
    <>
      {/* Personalized Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/images/headshot.png" alt="Dan Gentry" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Hi {prospect.name} 👋
              </h1>
              <p className="text-gray-600 mt-1">{prospect.greeting}</p>
            </div>
          </div>

          {prospect.context && (
            <p className="text-lg text-gray-600 mb-8">{prospect.context}</p>
          )}

          {/* Video embed area */}
          {prospect.videoUrl ? (
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8 bg-gray-100">
              <iframe
                src={prospect.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mb-8">
              <p className="text-gray-400">Personalized video coming soon</p>
            </div>
          )}

          {/* Primary CTA */}
          <div className="text-center">
            <a
              href={prospect.ctaUrl}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              {prospect.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* Speaker Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">About Dan&apos;s Keynotes</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Humanity Amplified: Redefining Success in the Age of AI
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Dan&apos;s signature keynote challenges audiences to rethink what AI is actually for.
                Not speed — freedom. Not automation — amplification. Audiences leave with the
                Machine Work vs. Meaning Work framework and a personal action plan.
              </p>
              <p className="text-xs text-gray-500">45-60 min · Keynote · Best for leadership conferences & associations</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Machine Work vs. Meaning Work
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                An executive-track session that gives leaders a practical audit framework
                for their team&apos;s AI adoption. Real examples, real ROI.
              </p>
              <p className="text-xs text-gray-500">30-45 min · Executive track</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Commander Mode
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                A motivational closing keynote about designing an intentional AI-powered life
                instead of drifting through the hype cycle.
              </p>
              <p className="text-xs text-gray-500">30-45 min · Closing keynote</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What Others Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-gray-600 italic mb-3">&ldquo;Dan is a superb speaker and a caring coach. Authentic from the get-go.&rdquo;</p>
              <p className="font-semibold text-sm text-gray-900">— Mary S.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-gray-600 italic mb-3">&ldquo;His teachings would be valuable to any business board, from manager to CEO.&rdquo;</p>
              <p className="font-semibold text-sm text-gray-900">— Michael M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for the next step?</h2>
          <p className="text-blue-100 mb-8">
            Let&apos;s set up a quick call to discuss how Dan can serve your audience.
          </p>
          <a
            href={prospect.ctaUrl}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
          >
            {prospect.ctaText}
          </a>
        </div>
      </section>
    </>
  );
}
