export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Mengapa Memilih Saya?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-xl">
            <h3 className="font-bold mb-2">Profesional</h3>
            <p className="text-gray-600">Website modern, cepat, dan aman.</p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="font-bold mb-2">Berpengalaman</h3>
            <p className="text-gray-600">Proyek UMKM hingga perusahaan.</p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="font-bold mb-2">Harga Bersahabat</h3>
            <p className="text-gray-600">Sesuai kebutuhan, bukan dipaksakan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
