"use client"
interface BuildingBoxProps {
  name: string;
  cost: number;
  increment: number;
  amountPurchased: number;

}

const BuildingBox: React.FC<BuildingBoxProps> = ({ name, cost, increment, amountPurchased, }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Cost: {cost}</p>
      <p>Amount Purchased: {amountPurchased}</p>
      <button>Buy</button>
    </div>
  );
};

export default BuildingBox;
