function mixColors() {
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;

  // Convert hex to RGB
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Mix (average each RGB component)
  const mixedRgb = {
    r: Math.floor((rgb1.r + rgb2.r) / 2),
    g: Math.floor((rgb1.g + rgb2.g) / 2),
    b: Math.floor((rgb1.b + rgb2.b) / 2)
  };

  const mixedHex = rgbToHex(mixedRgb.r, mixedRgb.g, mixedRgb.b);

  // Show mixed color
  document.getElementById("mixedBox").style.backgroundColor = mixedHex;
  document.getElementById("hexCode").textContent = mixedHex;
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16)
  };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}
