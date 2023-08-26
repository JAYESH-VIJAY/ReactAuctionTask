// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Image Upload Example</title>
// </head>
// <body>
//   <input type="file" id="imageInput">
//   <div id="imagePreview"></div>
//   <button id="saveButton">Save Image</button>

//   <script>
//     const imageInput = document.getElementById('imageInput');
//     const imagePreview = document.getElementById('imagePreview');
//     const saveButton = document.getElementById('saveButton');

//     let imageData = '';

//     imageInput.addEventListener('change', (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           imageData = e.target.result;
//           imagePreview.innerHTML = `<img src="${imageData}" alt="Preview">`;
//         };
//         reader.readAsDataURL(file);
//       }
//     });

//     saveButton.addEventListener('click', () => {
//       if (imageData) {
//         const img = new Image();
//         img.src = imageData;
//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d');
//         canvas.width = img.width;
//         canvas.height = img.height;
//         context.drawImage(img, 0, 0);
//         const dataURL = canvas.toDataURL('image/png');

//         const a = document.createElement('a');
//         a.href = dataURL;
//         a.download = 'saved-image.png';
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//       }
//     });
//   </script>
// </body>
// </html>
