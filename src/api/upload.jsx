// import { VITE_PUBLIC_DIR } from "$vite/env"; // Import the public directory path

// export async function post(request) {
//   try {
//     const formData = await request.formData();
//     const imageFile = formData.get("image");

//     if (!imageFile) {
//       return { status: 400, body: "No image provided" };
//     }

//     const filePath = new URL(`/uploads/${imageFile.name}`, VITE_PUBLIC_DIR);
//     await Deno.writeTextFile(filePath, await imageFile.text());

//     return { status: 200, body: "Image uploaded successfully" };
//   } catch (error) {
//     return { status: 500, body: "Internal server error" };
//   }
// }
