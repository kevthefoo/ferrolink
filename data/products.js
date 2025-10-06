// Mock product data - In production, this would come from a database or CMS

export const productsData = {
    "cnc-tools": {
        "carbide-end-mill-4flute": {
            id: "carbide-end-mill-4flute",
            name: "4-Flute Carbide End Mill",
            category: "cnc-tools",
            categoryName: "CNC Tools",
            price: "$89.99",
            shortDescription:
                "High-precision 4-flute carbide end mill for aluminum and steel machining",
            description:
                "Our premium 4-flute carbide end mill is engineered for high-performance machining of aluminum, steel, and other metals. The advanced carbide composition and precision ground geometry deliver exceptional surface finish and extended tool life.",
            specifications: {
                Diameter: "1/2 inch (12.7mm)",
                "Overall Length": "3 inches (76.2mm)",
                "Cutting Length": "1.25 inches (31.8mm)",
                "Shank Diameter": "1/2 inch (12.7mm)",
                Material: "Micro-grain tungsten carbide",
                Coating: "TiAlN (Titanium Aluminum Nitride)",
                Flutes: "4",
                "Helix Angle": "30°",
                "End Type": "Square",
                "Shank Type": "Straight",
            },
            features: [
                "Micro-grain carbide substrate for superior hardness",
                "TiAlN coating for enhanced wear resistance",
                "Optimized 4-flute design for smooth finish",
                "Sharp cutting edges for reduced cutting forces",
                'Precision ground to ±0.0002" tolerance',
            ],
            applications: [
                "Aluminum alloys (2000, 6000, 7000 series)",
                "Steel (mild to medium hardness)",
                "Stainless steel (up to 35 HRC)",
                "Cast iron",
                "Titanium alloys (with proper parameters)",
            ],
            technicalData: {
                "Recommended Speed (RPM)":
                    "3000-8000 (aluminum), 1500-4000 (steel)",
                "Feed Rate": "0.002-0.008 IPT per flute",
                "Axial Depth": "Up to 0.5 x diameter",
                "Radial Depth": "Up to full diameter (slotting)",
                Coolant: "Flood coolant recommended",
            },
            images360: [
                "/api/placeholder/400/400?text=End+Mill+View+1",
                "/api/placeholder/400/400?text=End+Mill+View+2",
                "/api/placeholder/400/400?text=End+Mill+View+3",
                "/api/placeholder/400/400?text=End+Mill+View+4",
                "/api/placeholder/400/400?text=End+Mill+View+5",
                "/api/placeholder/400/400?text=End+Mill+View+6",
                "/api/placeholder/400/400?text=End+Mill+View+7",
                "/api/placeholder/400/400?text=End+Mill+View+8",
                "/api/placeholder/400/400?text=End+Mill+View+9",
                "/api/placeholder/400/400?text=End+Mill+View+10",
                "/api/placeholder/400/400?text=End+Mill+View+11",
                "/api/placeholder/400/400?text=End+Mill+View+12",
            ],
            relatedProducts: ["hss-drill-bit-set", "collet-chuck-er32"],
        },
        "hss-drill-bit-set": {
            id: "hss-drill-bit-set",
            name: "HSS Drill Bit Set (1-13mm)",
            category: "cnc-tools",
            categoryName: "CNC Tools",
            price: "$149.99",
            shortDescription:
                "Professional 25-piece high-speed steel drill bit set with titanium coating",
            description:
                "This comprehensive drill bit set features premium high-speed steel construction with titanium nitride coating for extended tool life. Each bit is precision ground with 135° split-point geometry for accurate starts and reduced walking.",
            specifications: {
                Material: "M2 High-Speed Steel (HSS)",
                Coating: "Titanium Nitride (TiN)",
                "Size Range": "1.0mm to 13.0mm (0.5mm increments)",
                Quantity: "25 pieces",
                "Point Angle": "135°",
                "Point Type": "Split point",
                "Shank Type": "Straight",
                Tolerance: "h8",
            },
            features: [
                "M2 HSS for superior hardness and heat resistance",
                "TiN coating reduces friction and wear",
                "135° split-point prevents walking",
                "Precision ground flutes for smooth chip evacuation",
                "Includes organized metal storage case",
            ],
            applications: [
                "Steel drilling up to 45 HRC",
                "Aluminum and aluminum alloys",
                "Cast iron and ductile iron",
                "Copper and brass",
                "Plastic and composite materials",
            ],
            technicalData: {
                Hardness: "64-66 HRC",
                "Surface Roughness": "Ra 0.4 μm",
                Runout: "< 0.02mm",
                "Operating Temperature": "Up to 600°C",
                "Recommended Speed": "Variable based on material and diameter",
            },
            images360: [
                "/api/placeholder/400/400?text=Drill+Set+View+1",
                "/api/placeholder/400/400?text=Drill+Set+View+2",
                "/api/placeholder/400/400?text=Drill+Set+View+3",
                "/api/placeholder/400/400?text=Drill+Set+View+4",
                "/api/placeholder/400/400?text=Drill+Set+View+5",
                "/api/placeholder/400/400?text=Drill+Set+View+6",
                "/api/placeholder/400/400?text=Drill+Set+View+7",
                "/api/placeholder/400/400?text=Drill+Set+View+8",
            ],
            relatedProducts: ["carbide-end-mill-4flute", "collet-chuck-er32"],
        },
    },
    hammers: {
        "professional-claw-hammer": {
            id: "professional-claw-hammer",
            name: "Professional Claw Hammer 16oz",
            category: "hammers",
            categoryName: "Hammers",
            price: "$79.99",
            shortDescription:
                "Premium forged steel claw hammer with anti-vibration handle",
            description:
                "Our professional claw hammer combines traditional craftsmanship with modern engineering. The head is drop-forged from high-carbon steel and heat-treated for optimal hardness. The ergonomic fiberglass handle reduces vibration and fatigue.",
            specifications: {
                "Head Weight": "16 oz (454g)",
                "Overall Length": "13 inches (330mm)",
                "Handle Material": "Fiberglass with TPR grip",
                "Head Material": "Drop-forged high-carbon steel",
                "Face Diameter": "1.25 inches (32mm)",
                "Handle Diameter": "1.25 inches (32mm)",
                Finish: "Polished striking face, black oxide body",
                "Claw Type": "Curved",
                "Balance Point": "6.5 inches from handle end",
            },
            features: [
                "Drop-forged high-carbon steel head",
                "Heat-treated for 50-55 HRC hardness",
                "Anti-vibration fiberglass handle",
                "Ergonomic TPR grip reduces slippage",
                "Precision-balanced for optimal control",
                "Magnetic nail starter in handle end",
            ],
            applications: [
                "General carpentry and framing",
                "Finish work and trim installation",
                "Demolition and renovation",
                "Furniture making",
                "Home improvement projects",
            ],
            technicalData: {
                "Head Hardness": "50-55 HRC (striking face), 35-40 HRC (body)",
                "Handle Strength": "50,000 PSI tensile strength",
                "Vibration Reduction": "Up to 70% vs. wooden handles",
                "Temperature Range": "-40°F to 120°F operating range",
                Warranty: "Lifetime against manufacturing defects",
            },
            images360: [
                "/api/placeholder/400/400?text=Hammer+View+1",
                "/api/placeholder/400/400?text=Hammer+View+2",
                "/api/placeholder/400/400?text=Hammer+View+3",
                "/api/placeholder/400/400?text=Hammer+View+4",
                "/api/placeholder/400/400?text=Hammer+View+5",
                "/api/placeholder/400/400?text=Hammer+View+6",
                "/api/placeholder/400/400?text=Hammer+View+7",
                "/api/placeholder/400/400?text=Hammer+View+8",
                "/api/placeholder/400/400?text=Hammer+View+9",
                "/api/placeholder/400/400?text=Hammer+View+10",
            ],
            relatedProducts: [
                "ball-peen-hammer-24oz",
                "demolition-sledgehammer",
            ],
        },
        "ball-peen-hammer-24oz": {
            id: "ball-peen-hammer-24oz",
            name: "Ball Peen Hammer 24oz",
            category: "hammers",
            categoryName: "Hammers",
            price: "$69.99",
            shortDescription:
                "Heavy-duty ball peen hammer for metalworking and riveting",
            description:
                "Designed for metalworking professionals, this ball peen hammer features a hardened steel head with precisely shaped striking surfaces. The hickory handle provides excellent shock absorption and traditional feel preferred by craftsmen.",
            specifications: {
                "Head Weight": "24 oz (680g)",
                "Overall Length": "14 inches (355mm)",
                "Handle Material": "Premium American hickory",
                "Head Material": "Drop-forged carbon steel",
                "Face Diameter": "1.5 inches (38mm)",
                "Ball Diameter": "1.0 inch (25mm)",
                "Handle Diameter": "1.375 inches (35mm)",
                Finish: "Polished faces, black oxide body",
                "Eye Type": "Adze (tapered)",
            },
            features: [
                "Drop-forged carbon steel construction",
                "Differential heat treatment",
                "Premium American hickory handle",
                "Hand-fitted and wedged assembly",
                "Polished striking surfaces",
                "Traditional metalworker design",
            ],
            applications: [
                "Sheet metal forming and shaping",
                "Riveting operations",
                "Center punching",
                "Blacksmith work",
                "Automotive body work",
                "Jewelry making",
            ],
            technicalData: {
                "Face Hardness": "55-60 HRC",
                "Ball Hardness": "50-55 HRC",
                "Handle Grain": "Straight grain, seasoned 2+ years",
                "Impact Resistance": "Exceeds ANSI B107.1 standards",
                "Balance Point": "7 inches from handle end",
            },
            images360: [
                "/api/placeholder/400/400?text=Ball+Peen+View+1",
                "/api/placeholder/400/400?text=Ball+Peen+View+2",
                "/api/placeholder/400/400?text=Ball+Peen+View+3",
                "/api/placeholder/400/400?text=Ball+Peen+View+4",
                "/api/placeholder/400/400?text=Ball+Peen+View+5",
                "/api/placeholder/400/400?text=Ball+Peen+View+6",
                "/api/placeholder/400/400?text=Ball+Peen+View+7",
                "/api/placeholder/400/400?text=Ball+Peen+View+8",
            ],
            relatedProducts: [
                "professional-claw-hammer",
                "demolition-sledgehammer",
            ],
        },
    },
    axes: {
        "felling-axe-36inch": {
            id: "felling-axe-36inch",
            name: 'Professional Felling Axe 36"',
            category: "axes",
            categoryName: "Axes",
            price: "$189.99",
            shortDescription:
                "Heavy-duty felling axe with 4lb head and premium hickory handle",
            description:
                "Built for serious forestry work, this felling axe features a precisely shaped 4-pound head designed for efficient tree cutting. The 36-inch American hickory handle provides optimal leverage and power transfer.",
            specifications: {
                "Head Weight": "4 lbs (1.8kg)",
                "Overall Length": "36 inches (914mm)",
                "Handle Material": "Premium American hickory",
                "Head Material": "Drop-forged high-carbon steel",
                "Edge Length": "5 inches (127mm)",
                "Edge Angle": "25-28 degrees",
                "Handle Diameter": "1.5 inches (38mm) at grip",
                Finish: "Hand-polished edge, black oxide body",
                "Eye Type": "Traditional oval eye",
            },
            features: [
                "4-pound drop-forged steel head",
                "Hand-forged and heat-treated blade",
                "36-inch premium hickory handle",
                "Traditional oval eye design",
                "Hand-sharpened convex edge",
                "Leather edge guard included",
            ],
            applications: [
                'Tree felling (diameter up to 24")',
                "Limbing and bucking",
                "Splitting kindling",
                "Land clearing",
                "Forestry operations",
                "Bushcraft and camping",
            ],
            technicalData: {
                "Edge Hardness": "55-60 HRC",
                "Body Hardness": "40-45 HRC",
                "Handle Grain": "Straight grain American hickory",
                "Balance Point": "8 inches from handle end",
                "Cutting Angle": "Convex grind for superior penetration",
            },
            images360: [
                "/api/placeholder/400/400?text=Felling+Axe+View+1",
                "/api/placeholder/400/400?text=Felling+Axe+View+2",
                "/api/placeholder/400/400?text=Felling+Axe+View+3",
                "/api/placeholder/400/400?text=Felling+Axe+View+4",
                "/api/placeholder/400/400?text=Felling+Axe+View+5",
                "/api/placeholder/400/400?text=Felling+Axe+View+6",
                "/api/placeholder/400/400?text=Felling+Axe+View+7",
                "/api/placeholder/400/400?text=Felling+Axe+View+8",
                "/api/placeholder/400/400?text=Felling+Axe+View+9",
                "/api/placeholder/400/400?text=Felling+Axe+View+10",
                "/api/placeholder/400/400?text=Felling+Axe+View+11",
                "/api/placeholder/400/400?text=Felling+Axe+View+12",
            ],
            relatedProducts: ["splitting-maul-8lb", "camp-hatchet"],
        },
    },
    "garden-tools": {
        "professional-spade": {
            id: "professional-spade",
            name: "Professional Digging Spade",
            category: "garden-tools",
            categoryName: "Garden Tools",
            price: "$129.99",
            shortDescription:
                "Heavy-duty digging spade with heat-treated steel blade and fiberglass handle",
            description:
                "This professional-grade digging spade is built for commercial landscaping and serious gardening. The heat-treated steel blade cuts through tough soil and roots with ease, while the fiberglass handle provides strength without the weight.",
            specifications: {
                "Blade Length": "11.5 inches (292mm)",
                "Blade Width": "7.5 inches (190mm)",
                "Overall Length": "48 inches (1219mm)",
                "Handle Material": "Fiberglass with TPR grip",
                "Blade Material": "High-carbon steel, heat-treated",
                "Blade Thickness": "3mm (12 gauge)",
                "Handle Diameter": "1.25 inches (32mm)",
                Weight: "4.2 lbs (1.9kg)",
                Finish: "Powder-coated blade, ergonomic grip",
            },
            features: [
                "Heat-treated high-carbon steel blade",
                "Reinforced fiberglass handle core",
                "Ergonomic TPR grip reduces hand fatigue",
                "Sharp pointed tip for penetration",
                "Powder-coated finish resists rust",
                "Professional landscaper approved",
            ],
            applications: [
                "Digging planting holes",
                "Edging flower beds",
                "Transplanting shrubs and trees",
                "Breaking up compacted soil",
                "Trenching for irrigation",
                "General landscaping work",
            ],
            technicalData: {
                "Blade Hardness": "48-52 HRC",
                "Handle Strength": "Exceeds 50,000 PSI",
                "Penetration Force": "40% less effort vs. standard spades",
                "Soil Capacity": "2.5 lbs per scoop",
                "Working Life": "5+ years professional use",
            },
            images360: [
                "/api/placeholder/400/400?text=Spade+View+1",
                "/api/placeholder/400/400?text=Spade+View+2",
                "/api/placeholder/400/400?text=Spade+View+3",
                "/api/placeholder/400/400?text=Spade+View+4",
                "/api/placeholder/400/400?text=Spade+View+5",
                "/api/placeholder/400/400?text=Spade+View+6",
                "/api/placeholder/400/400?text=Spade+View+7",
                "/api/placeholder/400/400?text=Spade+View+8",
            ],
            relatedProducts: ["pruning-shears-pro", "garden-hoe-stirrup"],
        },
    },
};

// Helper function to get product by ID
export function getProductById(productId) {
    for (const categoryProducts of Object.values(productsData)) {
        if (categoryProducts[productId]) {
            return categoryProducts[productId];
        }
    }
    return null;
}

// Helper function to get all products in a category
export function getProductsByCategory(category) {
    return productsData[category] || {};
}

// Helper function to get all products
export function getAllProducts() {
    const allProducts = [];
    for (const categoryProducts of Object.values(productsData)) {
        allProducts.push(...Object.values(categoryProducts));
    }
    return allProducts;
}

// Helper function to get related products
export function getRelatedProducts(productIds) {
    return productIds.map((id) => getProductById(id)).filter(Boolean);
}
