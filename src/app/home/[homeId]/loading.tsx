export default function Loading() {
    return (

        <section className="mt-6 md:mt-10 animate-pulse">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-6 md:gap-8 px-4">
                <div className="mt-0 py-2 md:py-4">
                    <div className="h-75 md:h-125 w-full rounded-2xl bg-[#222630]" />
                </div>

                <div className="w-full">
                    <div className="h-10 md:h-12 lg:h-14 w-3/4 rounded bg-[#222630] py-2 my-2" />
                    <div className="space-y-2 py-2">
                        <div className="h-4 w-full rounded bg-[#222630]" />
                        <div className="h-4 w-11/12 rounded bg-[#222630]" />
                        <div className="h-4 w-2/3 rounded bg-[#222630]" />
                    </div>

                    <div className="flex gap-3 flex-wrap py-2">
                        <div className="h-6 w-20 rounded-2xl bg-[#222630]" />
                        <div className="h-6 w-24 rounded-2xl bg-[#222630]" />
                        <div className="h-6 w-16 rounded-2xl bg-[#222630]" />
                    </div>

                    <div className="grid grid-cols-2 bg-[#151922] p-3 md:p-4 rounded-2xl my-4 md:my-5 border-2 border-[#1E2330]">
                        <ul className="px-1 md:px-2">
                            <li className="h-5 bg-[#222630] rounded my-2" />
                            <li className="h-5 bg-[#222630] rounded my-2" />
                            <li className="h-5 bg-[#222630] rounded my-2" />
                            <li className="h-5 bg-[#222630] rounded my-2" />
                            <li className="h-5 bg-[#222630] rounded my-2" />
                            <li className="h-5 bg-[#222630] rounded my-2" />
                            <li className="h-5 bg-[#222630] rounded my-2" />
                        </ul>

                        <ul className="px-1 md:px-2">
                            <li className="h-5 bg-[#222630] rounded my-2 ml-auto w-24" />
                            <li className="h-5 bg-[#222630] rounded my-2 ml-auto w-20" />
                            <li className="h-5 bg-[#222630] rounded my-2 ml-auto w-12" />
                            <li className="h-5 bg-[#222630] rounded my-2 ml-auto w-12" />
                            <li className="h-5 bg-[#222630] rounded my-2 ml-auto w-20" />
                            <li className="h-5 bg-[#222630] rounded my-2 ml-auto w-24" />
                            <li className="h-5 bg-[#222630] rounded my-2 ml-auto w-12" />
                        </ul>
                    </div>

                    <div className="h-6 w-32 rounded bg-[#222630] py-2 my-3" />
                    <ul className="space-y-3">
                        <li className="h-4 w-full rounded bg-[#222630]" />
                        <li className="h-4 w-11/12 rounded bg-[#222630]" />
                        <li className="h-4 w-10/12 rounded bg-[#222630]" />
                        <li className="h-4 w-9/12 rounded bg-[#222630]" />
                    </ul>
                    <div className="h-12 w-48 rounded-xl bg-[#222630] mt-5" />

                </div>
            </div>
        </section>
    )
}