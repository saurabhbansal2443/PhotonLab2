const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const fileInput = document.getElementById("inputFile");
const brightnessBtn = document.getElementById("brightness");
const contrastBtn = document.getElementById("contrast");
const saturationBtn = document.getElementById("saturation");
const blurBtn = document.getElementById("blur");
const grayScaleBtn = document.getElementById("grayScale");
const sepiaBtn = document.getElementById("sepia");
const resetBtn = document.getElementById("reset");
const downloadBtn = document.getElementById("downloadBtn");

let image = new Image();

fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
});

image.onload = () => {
  console.log(ctx);
  canvas.height = image.height;
  canvas.width = image.width;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};
