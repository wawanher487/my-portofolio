export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Hai, Saya <span className="text-blue-600">Wawan!</span> <br />
            Web Developer & Software Engineer
          </h1>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Saya membantu bisnis dan personal membangun website profesional,
            cepat, aman, dan modern. Fokus saya adalah menciptakan solusi
            digital yang benar-benar membantu operasional dan perkembangan
            bisnis Anda.
          </p>

          {/* Highlights */}
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-4 text-gray-800">
              Keunggulan Utama
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-xl">💡</span> Desain Modern & Clean
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">⚡</span> Performa Cepat &
                SEO-friendly
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🛡️</span> Support & Maintenance
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <a
            href="/about"
            className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow"
          >
            Kenali Saya Lebih Dalam
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 bg-blue-100 rounded-full blur-2xl opacity-40"></div>

            <img
              src="/wawan.png"
              alt="Profile"
              className="relative w-64 h-64 md:w-90 md:h-90 rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
