// Plant catalog: 3 categories, 6 unique plants each (18 total).
// price is a number (rand value used for cart math); priceLabel is display string.
const plantsData = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, colors: { pot: "#b5543a", leaf: "#2f5d3a", leaf2: "#4f8a5c" }, description: "Hardy and nearly indestructible, filters indoor air day and night." },
      { id: 2, name: "Peace Lily", price: 18, colors: { pot: "#8f5a3a", leaf: "#2b6b3f", leaf2: "#4c9463" }, description: "Glossy leaves and elegant white blooms that thrive in low light." },
      { id: 3, name: "Spider Plant", price: 12, colors: { pot: "#c17a4a", leaf: "#3a7a45", leaf2: "#6bab6f" }, description: "Fast-growing and pet-friendly, great for hanging baskets." },
      { id: 4, name: "Areca Palm", price: 25, colors: { pot: "#a4623c", leaf: "#2e6b3d", leaf2: "#59935e" }, description: "A lush, feathery palm that brings a tropical feel indoors." },
      { id: 5, name: "Rubber Plant", price: 22, colors: { pot: "#9a5535", leaf: "#1f4d2c", leaf2: "#3d7a4a" }, description: "Bold, glossy leaves that make a striking statement piece." },
      { id: 6, name: "Boston Fern", price: 14, colors: { pot: "#b06a3f", leaf: "#3c7a42", leaf2: "#68a86b" }, description: "Feathery fronds that love humidity and indirect light." },
    ],
  },
  {
    category: "Succulents & Cacti",
    plants: [
      { id: 7, name: "Echeveria", price: 10, colors: { pot: "#c8804f", leaf: "#4a8a5b", leaf2: "#7fb98a" }, description: "Rosette-shaped succulent perfect for sunny windowsills." },
      { id: 8, name: "Barrel Cactus", price: 16, colors: { pot: "#b56d40", leaf: "#3f8046", leaf2: "#66a86b" }, description: "A low-maintenance desert classic with striking ribbed form." },
      { id: 9, name: "Jade Plant", price: 13, colors: { pot: "#a6603b", leaf: "#33693c", leaf2: "#5c9663" }, description: "Thought to bring good fortune; thrives on neglect." },
      { id: 10, name: "Aloe Vera", price: 15, colors: { pot: "#9e5a37", leaf: "#3c7d47", leaf2: "#69a76f" }, description: "Soothing gel-filled leaves, useful and beautiful." },
      { id: 11, name: "Zebra Haworthia", price: 11, colors: { pot: "#b56a3e", leaf: "#2f6438", leaf2: "#548a5a" }, description: "Compact striped succulent, ideal for small spaces." },
      { id: 12, name: "Golden Barrel", price: 20, colors: { pot: "#c47a48", leaf: "#478a4f", leaf2: "#78b47d" }, description: "A sculptural, spherical cactus with golden spines." },
    ],
  },
  {
    category: "Flowering Plants",
    plants: [
      { id: 13, name: "African Violet", price: 14, colors: { pot: "#a85e3a", leaf: "#2c6a3a", leaf2: "#4f9358" }, description: "Compact and colorful, blooms nearly year-round indoors." },
      { id: 14, name: "Orchid", price: 28, colors: { pot: "#8c5535", leaf: "#265c31", leaf2: "#498a55" }, description: "Elegant, long-lasting blooms for a touch of luxury." },
      { id: 15, name: "Hibiscus", price: 19, colors: { pot: "#b1663d", leaf: "#347240", leaf2: "#5c9c63" }, description: "Big, vibrant flowers that bring a tropical splash of color." },
      { id: 16, name: "Begonia", price: 13, colors: { pot: "#9d5a38", leaf: "#2f6b39", leaf2: "#579560" }, description: "Colorful foliage paired with delicate blooms." },
      { id: 17, name: "Anthurium", price: 24, colors: { pot: "#a45f3b", leaf: "#255c32", leaf2: "#4a8c54" }, description: "Glossy heart-shaped blooms that last for weeks." },
      { id: 18, name: "Geranium", price: 12, colors: { pot: "#b06643", leaf: "#376f3f", leaf2: "#5f9a66" }, description: "Cheerful clusters of flowers, easy to grow and maintain." },
    ],
  },
];

export default plantsData;
