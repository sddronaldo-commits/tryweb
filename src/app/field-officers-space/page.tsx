import Card from '@/components/Card';

export default function FieldOfficersSpace() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Page Title */}
            <h1
                className="text-3xl sm:text-4xl lg:text-[53px] lg:leading-[1.2] text-[#834400] font-bold text-center mb-10 sm:mb-14"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Field Officer&apos;s Space
            </h1>

            {/* Cards - single row of 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                <Card
                    title="School Registration"
                    description="The form collects school, staff, facility, and safety details for program setup."
                    href="/school-registration"
                    variant="filled"
                />
                <Card
                    title="Teacher Registration"
                    description="The form collects teacher details, including personal, educational, and teaching information."
                    href="/teacher-registration"
                    variant="filled"
                />
                <Card
                    title="Classroom Observation"
                    description="This is a checklist for observing a class, focusing on the teacher's methods and how students are learning."
                    href="/classroom_observation"
                    variant="filled"
                />
            </div>
        </div>
    );
}
