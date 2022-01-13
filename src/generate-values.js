const spacing = {};
for (let i = 0; i < 2560; ) {
  if (i >= 200 && i < 2560) i += 8;
  if (i >= 20 && i < 200) i += 4;
  if (i < 20) i += 2;

  spacing[i] = `${i}px`;
}

const borderRadius = {};
const borderWidth = {};
for (let i = 2; i <= 40; i += 2) {
  borderRadius[i] = `${i}px`;
  borderWidth[i] = `${i}px`;
}

const zIndex = {};
for (let i = 0; i <= 100; i += 10) {
  zIndex[i] = i;
}

module.exports = { spacing, borderRadius, borderWidth, zIndex };
