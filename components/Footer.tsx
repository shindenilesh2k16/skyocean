export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Company */}
          <div>

            <h3 className="text-2xl font-bold">
              SKYOCEAN
            </h3>

            <p className="mt-2 text-sm tracking-widest text-sky-300">
              PURE WATER. PURE LIFE.
            </p>

            <p className="mt-5 max-w-sm leading-relaxed text-blue-100">
              Delivering quality packaged drinking water
              with purity, safety and trust in every drop.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <div className="mt-5 space-y-3">

              <a
                href="#"
                className="block text-blue-100 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#products"
                className="block text-blue-100 transition hover:text-white"
              >
                Products
              </a>

              <a
                href="#contact"
                className="block text-blue-100 transition hover:text-white"
              >
                Contact Us
              </a>

            </div>

          </div>


          {/* Address */}
          <div>

            <h4 className="text-lg font-semibold">
              Contact Information
            </h4>

            <div className="mt-5 space-y-4 text-blue-100">

              <p>
                <span className="font-semibold text-white">
                  Phone:
                </span>
                <br />
                +91 9922401104
              </p>

              <p>
                <span className="font-semibold text-white">
                  Email:
                </span>
                <br />
                sudhir.shinde@skyoceans.com
              </p>

              <p>
                <span className="font-semibold text-white">
                  Address:
                </span>
                <br />
                SKYOCEAN Packaged Drinking Water
                <br />
                Plot No.45, Aqua Industrial Park, Ghargaon
                Dharashiv - 413528
                
                <br />
                Maharashtra, India
              </p>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-sm text-blue-200">

          © {new Date().getFullYear()} SKYOCEAN.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}