# React Auction Website on Firebase

This repository contains the code for a React-based auction website that is powered by Firebase. The website allows users to participate in auctions, place bids on items, and monitor ongoing auctions. Here's a brief overview and instructions for setting up and running the project.

## preview

[https://reactauctiontask.vercel.app/](https://reactauctiontask.vercel.app/)

## Screenshot

![image preview](https://firebasestorage.googleapis.com/v0/b/react-aution-project.appspot.com/o/signup.png?alt=media&token=ea302a4a-8005-4339-93d9-5818dbcc2d78)

![image preview](https://firebasestorage.googleapis.com/v0/b/react-aution-project.appspot.com/o/liveAuction.png?alt=media&token=bc8b3224-0df2-4e87-ab12-2ae57dcccff1)

![image preview](https://firebasestorage.googleapis.com/v0/b/react-aution-project.appspot.com/o/YourListing.png?alt=media&token=ca14d0d7-1805-4c74-82f1-e01c0628ae72)

## Features

- User Authentication: Users can create accounts, log in, and log out securely.
- Auction Listings: Display a list of ongoing auctions with essential details.
- Bidding: Users can place bids on items in real-time.
- Real-time Updates: The website updates in real-time to reflect the latest bids and auction statuses.
- Firebase Integration: Firebase is used for backend services, authentication, and real-time data updates.

## Installation and Setup

1. **Clone the Repository:** Clone this repository to your local machine.

   ```bash
   git clone https://github.com/JAYESH-VIJAY/ReactAuctionTask.git
   ```

2. **Install Dependencies:** Navigate to the project directory and install the necessary dependencies.

   ```bash
   cd ReactAuctionTask
   npm install
   ```

3. **Firebase Configuration:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) from the project settings.
   - Replace the placeholders in the `src/components/firebase.js` file with your Firebase configuration.

4. **Database Setup:**

   - Set up the Firebase Firestore database with the necessary collections and fields to store auction and user data.
   - Update the database rules to ensure proper security.

5. **Authentication:**

   - Enable the desired authentication methods (e.g., email/password, Google, etc.) in the Firebase Authentication settings.
   - Update the authentication configuration in the `src/firebaseConfig.js` file.

6. **Run the Application:** Start the development server to run the application locally.

   ```bash
   npm run dev
   ```

7. **Access the Application:** Open your browser and navigate to `http://localhost:5173` to access the auction website.

## Usage

- **User Registration:** Users can create accounts using the provided registration form.
- **User Login:** Registered users can log in to their accounts.
- **View Auctions:** Users can browse ongoing auctions and view item details.
- **Place Bids:** Logged-in users can place bids on items they're interested in.
- **Real-time Updates:** The website updates in real-time to reflect the latest bids and auction statuses.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out to the project author or maintainers for any questions or assistance.

**Author:** Jayesh Vijay

**Project Link:** [https://reactauctiontask.vercel.app/](https://reactauctiontask.vercel.app/)
