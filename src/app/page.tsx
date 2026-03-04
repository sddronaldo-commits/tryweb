import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="text-center mb-8">
        <h1
          className="text-3xl sm:text-4xl lg:text-[53px] lg:leading-[1.2] text-[#834400] font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Fostering School-Based Vocational Education in Maharashtra
        </h1>
        <h3
          className="text-lg sm:text-xl text-[#834400]/70 mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          in alignment with NEP 2020
        </h3>
        <hr className="border-gray-300 max-w-4xl mx-auto" />
      </section>

      {/* Button Cards */}
      <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16 mt-8 sm:mt-10">
        <Link
          href="/teachers-space"
          className="flex-1 text-center py-4 px-6 border-2 border-[#834400] text-[#834400] rounded-md text-lg font-medium transition-all duration-200 hover:bg-[#834400]/5 hover:shadow-md hover:scale-[1.01]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          👩‍🏫 Teacher
        </Link>
        <Link
          href="/field-officers-space"
          className="flex-1 text-center py-4 px-6 border-2 border-[#834400] text-[#834400] rounded-md text-lg font-medium transition-all duration-200 hover:bg-[#834400]/5 hover:shadow-md hover:scale-[1.01]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          👨‍🏫 Field Officer
        </Link>
      </section>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-5xl mx-auto">
        {/* Image placeholder */}
        <div className="w-full md:w-[45%] shrink-0">
          <div className="w-full aspect-[4/3] bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h2
            className="text-xl sm:text-2xl font-bold text-black mb-6"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            NEP–NCF Aligned Vocational Education Implementation
          </h2>
          <p
            className="text-base sm:text-lg text-black leading-relaxed"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            In line with NEP 2020 and the National Curriculum Framework, our school implements vocational education to support holistic development. The program emphasizes hands-on learning, practical skills, and real-world exposure, enabling students to link academic learning with career readiness and future opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}
