export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-10 shadow-xl rounded-3xl">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">
          Hai, Saya <span className="text-blue-600">Wawan!</span>
          <br />
          Web Developer & Software Engineer
        </h1>

        <p className="text-gray-600 mt-4">
          Saya membantu bisnis dan personal membangun website profesional,
          cepat, serta mengembangkan aplikasi berbasis web untuk mendukung
          kebutuhan operasional Anda.
        </p>

        <div className="mt-8">
          <h3 className="font-bold text-xl mb-3">Keunggulan Utama</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              💡 Desain Modern & Clean
            </li>
            <li className="flex items-center gap-3">
              ⚡ Performa Cepat & SEO-friendly
            </li>
            <li className="flex items-center gap-3">
              🛡️ Support & Maintenance
            </li>
          </ul>
        </div>

        <a
          href="#about"
          className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Kenali Saya Lebih Dalam
        </a>
      </div>

      <div className="flex justify-center">
        <img
          src="wawan.png"
          className="w-72 h-72 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
