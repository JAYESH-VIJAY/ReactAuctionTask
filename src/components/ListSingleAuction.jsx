export default function ListSingleAuction({ Images, curIndex, offerBid }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="liveauction"
          className="object-cover object-center w-full h-full block"
          src={Images[curIndex].image}
        />
      </a>
      <div className="mt-4 flex flex-wrap gap-4 justify-between">
        <div>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {Images[curIndex].category}
          </h2>
          <p className="mt-1">
            Current Bid: {offerBid ? offerBid : Images[curIndex].minBid}
          </p>
        </div>
      </div>
    </div>
  );
}
