import Button from "@mui/material/Button";
import styles from "./LiveAuctions.module.css";
const Images = [
  "/car1.png",
  "/car2.png",
  "/fashion1.png",
  "/fashion2.png",
  "/laptop1.png",
  "/laptop2.png",
  "/smartphone1.png",
  "/smartphone2.png",
];
export default function LiveAuctions() {
  // const [showPopup,setShowPopup] =useState(false)
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap m-3">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[3]}
              />
            </a>
            <div className="mt-4 flex flex-wrap gap-4 justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  fashion
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[0]}
              />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Cars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[7]}
              />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Smartphones
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[5]}
              />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  laptops
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[2]}
              />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  fashion
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[1]}
              />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Cars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[6]}
              />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Smartphones
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="liveauction"
                className="object-cover object-center w-full h-full block"
                src={Images[4]}
              />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  laptops
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
              <Button variant="contained" className={styles.bidBtn}>
                Place Bid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
