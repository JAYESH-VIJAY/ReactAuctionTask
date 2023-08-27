  import ListSingleAuction from "./ListSingleAuction";
  import PlusComponent from "./PlusComponent";
  import { useState, useContext } from "react";
  import { RefContext } from "../App";
  export default function ListYourAuction({ Images, setYourAuctions }) {
    const { yourListingRef } = useContext(RefContext);

    const [offerBid, setOfferBid] = useState("");
    function renderAuctions() {
      let Components = [];
      for (let i = 0; i <= Images.length; i++) {
        if (i != Images.length) {
          Components.push(
            <ListSingleAuction Images={Images} curIndex={i} key={i} />
          );
        } else {
          Components.push(
            <PlusComponent
              setYourAuctions={setYourAuctions}
              Images={Images}
              offerBid={offerBid}
              setOfferBid={setOfferBid}
              key={i}
            />
          );
        }
      }
      return Components;
    }
    return (
      <section className="text-gray-600 body-font" ref={yourListingRef}>
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap w-full ml-6 mb-6">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="yourListing sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
                Your Listing
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap ">{renderAuctions()}</div>
        </div>
      </section>
    );
  }
