import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    href: string;
    variant?: 'filled' | 'outlined';
}

export default function Card({ title, description, href, variant = 'filled' }: CardProps) {
    const isFilled = variant === 'filled';

    return (
        <div className="flex flex-col items-center text-center">
            <Link
                href={href}
                className={`w-full block rounded-md py-3 px-4 text-base font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${isFilled
                        ? 'bg-[#693600] text-[#f6f6f6] border border-[#693600] hover:bg-[#7a4000]'
                        : 'bg-white text-[#834400] border-2 border-[#834400] hover:bg-[#834400]/5'
                    }`}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
                {title}
            </Link>
            <p
                className="mt-4 text-black text-base leading-relaxed px-2"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
                {description}
            </p>
        </div>
    );
}
