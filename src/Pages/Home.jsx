import LiveAuctions from "../components/LiveAuctions";
import ListYourAuction from "../components/ListYourAuction";
import { useState } from "react";
import NavBar from "../components/NavBar";
const LiveAuctionsInitial = [
  { image: "/car1.png", category: "Cars", minBid: "10,000$" },
  { image: "/car2.png", category: "Cars", minBid: "13,567$" },
  { image: "/fashion1.png", category: "Fashion", minBid: "79$" },
  { image: "/fashion2.png", category: "Fashion", minBid: "368$" },
  { image: "/laptop1.png", category: "Laptos", minBid: "340$" },
  { image: "/laptop2.png", category: "Laptos", minBid: "235$" },
  { image: "/smartphone1.png", category: "Smartphones", minBid: "657$" },
  { image: "/smartphone2.png", category: "Smartphones", minBid: "678$" },
];
const YourAuctionsInitial = [
  { image: "/laptop2.png", category: "Laptos", minBid: "235$" },
  { image: "/car2.png", category: "Cars", minBid: "13,567$" },
  { image: "/fashion1.png", category: "Fashion", minBid: "79$" },
];
export default function Home({ setShowHome }) {
  const [YourAuctions, setYourAuctions] = useState(YourAuctionsInitial);

  const LiveAuction = [...LiveAuctionsInitial, ...YourAuctions];
  // Create an object to store unique items
  const uniqueItemsObject = LiveAuction.reduce((acc, item) => {
    const key = JSON.stringify(item);
    if (!acc[key]) {
      acc[key] = item;
    }
    return acc;
  }, {});

  // Convert the object back to an array
  const CombineLiveAuction = Object.values(uniqueItemsObject);

  return (
    <div>
      <NavBar setShowHome={setShowHome} />
      <LiveAuctions Images={CombineLiveAuction} />
      <ListYourAuction
        Images={YourAuctions}
        setYourAuctions={setYourAuctions}
      />
    </div>
  );
}
