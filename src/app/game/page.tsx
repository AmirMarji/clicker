import Link from "next/link";

export default function Game() {
    return (
        <>
            <div className="text-5xl font-bold bg-slate-950 m-auto w-auto h-auto space-y-20">
                <div>
                    <h1 className="m-auto w-auto h-auto">This is the game page</h1>
                </div>
                <div>
                    <Link href="/../" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full cursor-pointer m-auto w-auto h-auto">Go back to home page</Link>
                </div>

            </div>

        </>
    )
}
