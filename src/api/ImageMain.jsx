// import ImageUpload from "./ImageUpload";

// export default function ImageMain() {
//   const handleImageUpload = async (imageFile) => {
//     try {
//       const formData = new FormData();
//       formData.append("image", imageFile);

//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Image uploaded successfully");
//       } else {
//         console.error("Image upload failed");
//       }
//     } catch (error) {
//       console.error("Error uploading image", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Image Upload</h1>
//       <ImageUpload handleImageUpload={handleImageUpload} />
//     </div>
//   );
// }
