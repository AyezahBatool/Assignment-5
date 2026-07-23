const PRODUCTS_DATA = [
  {
    id: "bean-01",
    name: "Yirgacheffe Bloom (Ethiopia)",
    category: "beans",
    price: 24.00,
    rating: 4.9,
    tag: "Single Origin",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop",
    description: "Heirloom Ethiopian beans roasted lightly to showcase vibrant floral jasmine, bergamot, and sweet peach notes.",
    details: {
      origin: "Yirgacheffe, Ethiopia",
      roastLevel: "Light Roast",
      process: "Sun-Dried Natural",
      altitude: "2,050m"
    }
  },
  {
    id: "bean-02",
    name: "Obsidian Geisha (Panama)",
    category: "beans",
    price: 48.00,
    rating: 5.0,
    tag: "Micro-Lot Reserve",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop",
    description: "Rare Panama Geisha micro-lot featuring supreme cup clarity with notes of wild honeysuckle, lemongrass, and white nectarine.",
    details: {
      origin: "Boquete, Panama",
      roastLevel: "Ultra-Light Roast",
      process: "Anaerobic Fermentation",
      altitude: "1,900m"
    }
  },
  {
    id: "bean-03",
    name: "Velvet Espresso Reserve",
    category: "beans",
    price: 22.00,
    rating: 4.8,
    tag: "House Signature",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000&auto=format&fit=crop",
    description: "Our signature espresso blend uniting Pink Bourbon and Guatemalan Huehuetenango for a silky caramel and dark chocolate body.",
    details: {
      origin: "Colombia & Guatemala",
      roastLevel: "Medium-Dark Roast",
      process: "Honey Processed",
      altitude: "1,650m"
    }
  },
  {
    id: "bean-04",
    name: "Sumatra Tiger Dark Roast",
    category: "beans",
    price: 21.00,
    rating: 4.7,
    tag: "Bold Roast",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
    description: "Deep, earthy Indonesian beans delivering heavy body, cedar wood aromatics, pipe tobacco undertones, and bittersweet cocoa finish.",
    details: {
      origin: "Gayo Highlands, Sumatra",
      roastLevel: "Dark Roast",
      process: "Wet-Hulled (Giling Basah)",
      altitude: "1,450m"
    }
  },
  {
    id: "bean-05",
    name: "Huila Pink Bourbon (Colombia)",
    category: "beans",
    price: 28.00,
    rating: 4.9,
    tag: "Rare Variety",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop",
    description: "Exotic natural pink bourbon variety brimming with red plum, papaya sweetness, and demerara sugar acidity.",
    details: {
      origin: "San Adolfo, Huila",
      roastLevel: "Light-Medium Roast",
      process: "Fermented Natural",
      altitude: "1,800m"
    }
  },
  {
    id: "bean-06",
    name: "Midnight Swiss Decaf (Peru)",
    category: "beans",
    price: 20.00,
    rating: 4.6,
    tag: "100% Chemical-Free",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop",
    description: "Swiss Water process decaf from Peru retaining full chocolate wafer and roasted hazelnut flavor without caffeine.",
    details: {
      origin: "Cajamarca, Peru",
      roastLevel: "Medium Roast",
      process: "Swiss Water Decaf",
      altitude: "1,550m"
    }
  },
  {
    id: "drink-01",
    name: "Smoked Vanilla Cardamom Latte",
    category: "drinks",
    price: 7.50,
    rating: 4.9,
    tag: "Chef's Craft",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop",
    description: "Double shot of Velvet Espresso infused with house-smoked Madagascar vanilla bean syrup and freshly cracked green cardamom.",
    details: {
      temperature: "Hot or Iced",
      milkOptions: "Oat, Whole, Almond",
      energy: "220 kcal"
    }
  },
  {
    id: "drink-02",
    name: "Draft Nitro Cold Brew",
    category: "drinks",
    price: 6.50,
    rating: 4.8,
    tag: "Draft Tap",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1000&auto=format&fit=crop",
    description: "Cascading nitrogen-infused cold brew prepared over 24 hours. Exceptionally creamy texture with naturally sweet cocoa finish.",
    details: {
      temperature: "Chilled on Tap",
      steepTime: "24 Hours",
      energy: "5 kcal"
    }
  },
  {
    id: "drink-03",
    name: "Kyoto Slow Drip Elixir",
    category: "drinks",
    price: 8.00,
    rating: 5.0,
    tag: "Artisanal",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop",
    description: "Extracted drop-by-drop over 12 hours through glass towers using Yirgacheffe beans. Served over hand-carved ice sphere.",
    details: {
      temperature: "Served over Ice",
      steepTime: "12 Hours Drop",
      energy: "0 kcal"
    }
  },
  {
    id: "drink-04",
    name: "Pistachio Cream Flat White",
    category: "drinks",
    price: 7.80,
    rating: 4.9,
    tag: "Seasonal Craft",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000&auto=format&fit=crop",
    description: "Ristretto espresso poured over velvety micro-foamed oat milk, topped with slow-whipped Sicilian pistachio sweet cream.",
    details: {
      temperature: "Hot Steamed",
      milkOptions: "Oat Milk Default",
      energy: "250 kcal"
    }
  },
  {
    id: "drink-05",
    name: "Amber Honey Oat Cortado",
    category: "drinks",
    price: 5.50,
    rating: 4.7,
    tag: "Classic 1:1",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop",
    description: "Equal parts intense Geisha espresso and steamed barista oat milk infused with raw local wildflower honey.",
    details: {
      temperature: "Hot 130°F",
      ratio: "1:1 Espresso to Milk",
      energy: "110 kcal"
    }
  },
  {
    id: "bake-01",
    name: "Cardamom Almond Croissant",
    category: "bakery",
    price: 6.00,
    rating: 4.9,
    tag: "Fresh Daily",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
    description: "Flaky 81-layer French butter croissant double-baked with almond frangipane paste and crushed green cardamom.",
    details: {
      dietary: "Vegetarian",
      allergens: "Nuts, Milk, Wheat"
    }
  },
  {
    id: "bake-02",
    name: "Dark Chocolate Salted Cookie",
    category: "bakery",
    price: 4.50,
    rating: 4.8,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop",
    description: "Fudgy Valrhona 70% dark chocolate cookie infused with espresso grounds and topped with flaky Maldon sea salt.",
    details: {
      dietary: "Vegetarian",
      allergens: "Milk, Wheat, Eggs"
    }
  },
  {
    id: "bake-03",
    name: "Pistachio Rose Financier",
    category: "bakery",
    price: 5.00,
    rating: 4.9,
    tag: "Gluten-Friendly",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    description: "Moist brown-butter almond cake coated with ground Sicilian pistachios and delicate organic rose blossom glaze.",
    details: {
      dietary: "Gluten-Friendly",
      allergens: "Nuts, Milk, Eggs"
    }
  },
  {
    id: "bake-04",
    name: "Matcha Yuzu Tart",
    category: "bakery",
    price: 7.00,
    rating: 4.8,
    tag: "Patisserie",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop",
    description: "Crisp sable pastry shell filled with tangy Japanese yuzu curd and topped with Uji ceremonial matcha ganache.",
    details: {
      dietary: "Vegetarian",
      allergens: "Milk, Wheat, Eggs"
    }
  },
  {
    id: "bake-05",
    name: "Smoked Cinnamon Morning Bun",
    category: "bakery",
    price: 5.50,
    rating: 4.7,
    tag: "Warm Baked",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1000&auto=format&fit=crop",
    description: "Caramelized brioche dough swirled with Saigon cinnamon, orange zest, and organic maple syrup glaze.",
    details: {
      dietary: "Vegetarian",
      allergens: "Milk, Wheat"
    }
  },
  {
    id: "gear-01",
    name: "Brushed Copper Pour-Over Kettle",
    category: "gear",
    price: 110.00,
    rating: 5.0,
    tag: "Precision Gear",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1000&auto=format&fit=crop",
    description: "Gooseneck temperature-controlled electric kettle with ergonomic walnut handle and 1.0L capacity for exact pour control.",
    details: {
      material: "Copper-Plated Steel",
      power: "1200W Heat Element",
      warranty: "2-Year Manufacturer"
    }
  },
  {
    id: "gear-02",
    name: "Precision Conical Burr Grinder",
    category: "gear",
    price: 240.00,
    rating: 4.9,
    tag: "Pro Equipment",
    image: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?q=80&w=1000&auto=format&fit=crop",
    description: "64mm titanium-coated flat burrs offering 40 stepless grind settings from super-fine espresso to coarse pour-over.",
    details: {
      burrs: "64mm Titanium Burrs",
      motor: "Low-RPM DC Quiet Engine",
      warranty: "3-Year Commercial"
    }
  },
  {
    id: "gear-03",
    name: "Borosilicate Glass Carafe Set",
    category: "gear",
    price: 45.00,
    rating: 4.8,
    tag: "Hand-Blown",
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95870?q=80&w=1000&auto=format&fit=crop",
    description: "Thermal resistant hand-blown glass server complete with dual-mesh stainless steel reusable filter dripper.",
    details: {
      capacity: "600 ml (2-4 Cups)",
      material: "Heat-Proof Borosilicate",
      cleaning: "Dishwasher Safe"
    }
  },
  {
    id: "gear-04",
    name: "Vacuum Insulated Ceramic Tumbler",
    category: "gear",
    price: 36.00,
    rating: 4.9,
    tag: "Thermal Lock",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop",
    description: "Double-wall vacuum tumbler lined with interior ceramic coating to preserve pure espresso aromatics without metallic taste.",
    details: {
      capacity: "12 oz (350 ml)",
      thermal: "12h Hot / 24h Cold",
      interior: "True-Flavor Ceramic"
    }
  }
];
