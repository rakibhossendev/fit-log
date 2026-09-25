import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center">

                <h1 className="text-7xl sm:text-8xl font-bold text-[#C2F800]">
                    404
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold mt-4">
                    Workout Not Found
                </h2>

                <Link
                    href="/"
                    className="inline-block mt-6 bg-[#C2F800] text-black font-bold px-5 py-3 rounded-2xl hover:opacity-90 transition"
                >
                    Back to Workouts
                </Link>

            </div>
        </main>
    );
}