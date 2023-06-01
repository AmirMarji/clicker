import Link from "next/link";


export default function Home() {
  return (
    <>

      <div className="text-5xl font-bold bg-slate-950 m-auto w-auto h-auto space-y-20">
        <div>
          <h1 className="m-auto w-auto h-auto">Clicker Game</h1>
        </div>
        <div>
          <p className="m-auto w-auto h-auto">A simple clicker game about clicking the coins and stuff...</p>
        </div>
        <div>
          <Link href="/../game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full cursor-pointer m-auto w-auto h-auto">Start the game!</Link>
        </div>
      </div>

    </>
  )
}
