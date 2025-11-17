export default function About() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* FOTO PROFIL */}
        <div className="flex justify-center relative">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-300 rounded-full blur-3xl opacity-25"></div>

          <img
            src="/wawan hermawan.png"
            alt="Foto Wawan Hermawan"
            className="
            relative z-10 
            w-80 h-[40rem]      
            md:w-100 md:h-[48rem]
            rounded-2xl object-cover 
            shadow-xl 
            border-2 border-white
            "
          />
        </div>

        {/* DESKRIPSI */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Tentang Saya
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Saya adalah seorang Web Developer dan Software Engineer yang fokus
            pada pengembangan aplikasi web modern, microservices, dan integrasi
            IoT Camera. Berpengalaman dalam membangun sistem absensi berbasis
            AI, pengembangan API, serta manajemen data berskala besar untuk
            analisis berbasis kecerdasan buatan.
          </p>

          {/* SKILLS UTAMA */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Skills Utama
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {["JavaScript", "Node.js", "NestJS", "React.js"].map((skill) => (
              <div
                key={skill}
                className="p-3 rounded-xl shadow bg-white font-medium text-center"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* TOOLS */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Tools & Teknologi
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
            {["MongoDB", "MySQL", "Docker", "Git"].map((tool) => (
              <div
                key={tool}
                className="p-3 rounded-xl shadow bg-white text-center text-sm md:text-base whitespace-nowrap"
              >
                {tool}
              </div>
            ))}
          </div>

          {/* PENGALAMAN */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Pengalaman Singkat
          </h3>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
            <li>Asisten Praktikum Jaringan Komputer & Pemrograman Mobile</li>
            <li>Membangun Sistem Absensi AI + IoT Camera</li>
            <li>Pengembangan API untuk Analisis Jalan Berbasis AI</li>
            <li>Proyek perusahaan & UMKM di bidang sistem digital</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
