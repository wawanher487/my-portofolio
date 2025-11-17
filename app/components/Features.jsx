import { HiShieldCheck, HiLightningBolt, HiBadgeCheck } from "react-icons/hi";

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Mengapa Memilih Saya?
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Saya memberikan layanan profesional dengan fokus pada kualitas,
          kecepatan, dan kepuasan klien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <HiShieldCheck className="text-blue-600 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Profesional
            </h3>
            <p className="text-gray-600">
              Website modern, cepat, aman, dan dibangun dengan standar terbaik.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <HiLightningBolt className="text-orange-500 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Berpengalaman
            </h3>
            <p className="text-gray-600">
              Berpengalaman dari proyek personal, UMKM, hingga skala perusahaan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <HiBadgeCheck className="text-green-600 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Harga Bersahabat
            </h3>
            <p className="text-gray-600">
              Harga fleksibel sesuai kebutuhan tanpa mengurangi kualitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
