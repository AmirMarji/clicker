
interface BuildingBoxProps {
    name: string;
    cost: number;
    increment: number;
    amountPurchased: number;


}

const BuildingBox: React.FC<BuildingBoxProps> = ({ name, cost, increment, amountPurchased,  }) => {


    return (
        <div className="building-box border border-red-500">
            <h2 className="">{name}</h2>
            <p>Cost: {cost}</p>
            <p>Increment: {increment}</p>
            <p>Amount purchased: {amountPurchased}</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Buy
            </button>

        </div>
    );
};

export default BuildingBox;
