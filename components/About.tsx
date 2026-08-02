export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white pt-12 pb-20"
    >
      <div className="mx-auto max-w-[1500px] px-8">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            ABOUT SKYOCEAN
          </p>

          <h2 className="text-5xl font-extrabold text-blue-950 md:text-6xl">
            Pure Water. Pure Life.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Delivering quality packaged drinking water with purity,
            safety and trust in every drop.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">

          {/* Left - Image */}
          <div className="relative overflow-hidden rounded-3xl border-4 border-sky-500 shadow-xl">

            {/* Mobile Image */}
            <img
              src="/Aboutusmobile.png"
              alt="SKYOCEAN Pure Water"
              className="block md:hidden h-auto w-full rounded-3xl shadow-2xl"
            />

            {/* Desktop Image */}
            <img
              src="/Aboutus.png"
              alt="SKYOCEAN Pure Water"
              className="hidden md:block h-[560px] w-full object-cover rounded-3xl shadow-2xl transition duration-500 hover:scale-[1.02]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />

            {/* Bottom Text */}
            <div className="absolute bottom-6 left-6">
              <p className="text-2xl font-bold text-white">
                SKYOCEAN
              </p>

              <p className="mt-1 text-sm text-blue-100">
                Pure Water. Pure Life.
              </p>
            </div>

          </div>

          {/* Right - Content */}
          <div>

            <h3 className="text-4xl font-bold text-blue-950">
              Quality You Can Trust
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              At SKYOCEAN, we are committed to providing pure, safe, 
              and high-quality drinking water. Every bottle undergoes 
              rigorous purification and quality checks to ensure hygiene and freshness.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We maintain strict standards at every stage of production to deliver water you can trust. 
              Our goal is to promote healthy hydration with every sip.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">

              <div>
                <h4 className="text-3xl font-bold text-sky-600">100%</h4>
                <p className="text-gray-600">Purity</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-sky-600">ISO</h4>
                <p className="text-gray-600">Quality Standards</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-sky-600">24×7</h4>
                <p className="text-gray-600">Reliable Supply</p>
              </div>

            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-sky-50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-2xl">💧</div>

                <h4 className="mt-3 font-bold text-blue-950">
                  Pure & Safe
                </h4>

                <p className="mt-1 text-sm text-gray-600">
                  Quality-focused purification.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-2xl">🛡️</div>

                <h4 className="mt-3 font-bold text-blue-950">
                  Quality Tested
                </h4>

                <p className="mt-1 text-sm text-gray-600">
                  Consistent quality standards.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-2xl">🌿</div>

                <h4 className="mt-3 font-bold text-blue-950">
                  Naturally Refreshing
                </h4>

                <p className="mt-1 text-sm text-gray-600">
                  Fresh and refreshing hydration.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-2xl">🚚</div>

                <h4 className="mt-3 font-bold text-blue-950">
                  Reliable Supply
                </h4>

                <p className="mt-1 text-sm text-gray-600">
                  From our plant to your hands.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}