import Link from "next/link";
import BuildingBox from "../components/buildings";
import CoinButton from "../components/CoinButton";



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

                <div className="flex flex-row space-x-10 spa">
                    <CoinButton increment={1} />
                </div>  

                <div className="flex flex-row space-x-10 spa">
                    <BuildingBox name="Super Upgrade" cost={10} increment={1} amountPurchased={0} />
                    <BuildingBox name="Ultra Upgrade" cost={100} increment={10} amountPurchased={0} />
                    <BuildingBox name="Mega Upgrade" cost={1000} increment={100} amountPurchased={0} />
                    <BuildingBox name="Giga Upgrade" cost={10000} increment={1000} amountPurchased={0} />
                    <BuildingBox name="Tera Upgrade" cost={100000} increment={10000} amountPurchased={0} />
                    <BuildingBox name="Peta Upgrade" cost={1000000} increment={100000} amountPurchased={0} />
                    <BuildingBox name="Exa Upgrade" cost={10000000} increment={1000000} amountPurchased={0} />
                    <BuildingBox name="Zetta Upgrade" cost={100000000} increment={10000000} amountPurchased={0} />
                    <BuildingBox name="Yotta Upgrade" cost={1000000000} increment={100000000} amountPurchased={0} />
                    <BuildingBox name="Xona Upgrade" cost={10000000000} increment={1000000000} amountPurchased={0} />
                    <BuildingBox name="Weka Upgrade" cost={100000000000} increment={10000000000} amountPurchased={0} />
                    <BuildingBox name="Vunda Upgrade" cost={1000000000000} increment={100000000000} amountPurchased={0} />
                    <BuildingBox name="Uda Upgrade" cost={10000000000000} increment={1000000000000} amountPurchased={0} />
                    <BuildingBox name="Treda Upgrade" cost={100000000000000} increment={10000000000000} amountPurchased={0} />
                    <BuildingBox name="Sorta Upgrade" cost={1000000000000000} increment={100000000000000} amountPurchased={0} />
                    <BuildingBox name="Rinta Upgrade" cost={10000000000000000} increment={1000000000000000} amountPurchased={0} />
                    <BuildingBox name="Quexa Upgrade" cost={100000000000000000} increment={10000000000000000} amountPurchased={0} />



                </div>

            </div>

        </>
    )
}
