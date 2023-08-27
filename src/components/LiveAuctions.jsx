import SingleAuction from "./SingleAuction";

export default function LiveAuctions({ Images }) {
  function renderAuctions() {
    let Components = [];
    for (let i = 0; i < Images.length; i++) {
      Components.push(<SingleAuction Images={Images} curIndex={i} key={i} />);
    }
    return Components;
  }
  return (
    <section className="text-gray-600 my-3 body-font">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap w-full ml-6 mb-5">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
              Live Auction
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
        </div>
        <div className="flex flex-wrap m-3">{renderAuctions()}</div>
      </div>
    </section>
  );
}
