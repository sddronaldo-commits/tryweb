import Card from '@/components/Card';

export default function TeachersSpace() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Page Title */}
            <h1
                className="text-3xl sm:text-4xl lg:text-[53px] lg:leading-[1.2] text-[#834400] font-bold text-center mb-10 sm:mb-14"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Teacher&apos;s Space
            </h1>

            {/* Row 1 - Class 9 Cards (Filled variant) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
                <Card
                    title="Chapter Reporting"
                    description="Chapter Reporting for Class 9. The form records chapter-wise teaching progress for each class, subject."
                    href="/chapter_completion"
                    variant="filled"
                />
                <Card
                    title="Student Registration"
                    description="Register Class 9 students by entering their personal details and school details."
                    href="/student_registration"
                    variant="filled"
                />
                <Card
                    title="Guest Lecture / Field Visit"
                    description="Captures details of student visits to industries, including, location, guest details."
                    href="/guestfield"
                    variant="filled"
                />
            </div>

            {/* Row 2 - Kaushal Bodh Cards (Outlined variant) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                <Card
                    title="Kaushal Bodh Reporting"
                    description="Collects basic school information and records the grades in which Kaushal Bodh is being implemented"
                    href="/kaushal-bodh-reporting"
                    variant="outlined"
                />
                <Card
                    title="Kaushal Bodh Student Registration"
                    description="Register Class 6-8 students by entering their personal details and school details."
                    href="/kaushal-bodh-student-registration"
                    variant="outlined"
                />
                <Card
                    title="Kaushal Bodh Guest/Field"
                    description="Captures details of student Class 6-8 visits to industries, including, location, guest details."
                    href="/kaushal-bodh-guestfield"
                    variant="outlined"
                />
            </div>
        </div>
    );
}
