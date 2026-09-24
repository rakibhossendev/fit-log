export default function CardSkeleton() {
    return (

        <div className="card shadow-md bg-[#15171D] border-[#222630] border-2 rounded-2xl overflow-hidden animate-pulse">
            <figure className="overflow-hidden">
                <div className="h-60 w-full bg-[#222630]" />
            </figure>

            <div className="card-body">
                <div className="flex gap-3 flex-wrap">
                    <div className="h-6 w-20 rounded-2xl bg-[#222630]" />
                    <div className="h-6 w-24 rounded-2xl bg-[#222630]" />
                    <div className="h-6 w-16 rounded-2xl bg-[#222630]" />
                </div>

                <div className="h-8 w-3/4 rounded bg-[#222630] mt-2" />
                <div className="h-4 w-1/3 rounded bg-[#222630]" />
                <hr className="text-[#20242E]" />

                <div className="flex gap-4 mt-3">
                    <div className="h-5 w-20 rounded bg-[#222630]" />
                    <div className="h-5 w-16 rounded bg-[#222630]" />
                    <div className="h-5 w-12 rounded bg-[#222630]" />
                </div>
            </div>
        </div>
    )
}
