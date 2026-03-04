export default function IframePage({ title, src }: { title: string; src: string }) {
    return (
        <div className="flex flex-col h-[calc(100vh-64px)] sm:h-[calc(100vh-72px)] w-full">
            <iframe
                src={src}
                title={title}
                className="flex-1 w-full border-none shadow-inner bg-white"
                allow="camera; microphone; geolocation"
                loading="lazy"
            />
        </div>
    );
}
