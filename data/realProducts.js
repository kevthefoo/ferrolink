// Real product data based on actual product images
export const productsData = {
  // HAMMERS Category
  hammers: {
    "f-10": {
      id: "f-10",
      name: "F-10 Professional Claw Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Heavy-duty claw hammer with fiberglass handle for professional construction work",
      description:
        "The F-10 Professional Claw Hammer is engineered for demanding construction and carpentry applications. Features a precision-forged steel head with anti-vibration technology and an ergonomic fiberglass handle that provides superior grip and shock absorption.",
      specifications: {
        "Head Weight": "16 oz (453g)",
        "Overall Length": "13 inches (33cm)",
        "Handle Material": "Fiberglass with rubber grip",
        "Head Material": "Drop-forged steel",
        "Face Diameter": "1 inch (25mm)",
        "Claw Design": "Curved nail puller",
        Weight: "1.2 lbs (0.54kg)",
        Finish: "Black oxide coating",
      },
      features: [
        "Anti-vibration fiberglass handle reduces fatigue",
        "Precision-balanced for optimal swing control",
        "Magnetic nail starter for one-handed operation",
        "Curved claw design for efficient nail pulling",
        "Slip-resistant rubber grip",
        "Drop-forged steel construction for durability",
      ],
      applications: [
        "General construction and framing",
        "Cabinet making and finish carpentry",
        "Home repairs and maintenance",
        "Professional contracting work",
        "DIY projects and craftsmanship",
      ],
      images360: ["/assets/products/Hammer/F-10.jpg"],
      mainImage: "/assets/products/Hammer/F-10.jpg",
      relatedProducts: ["f-11", "f-28", "f-32"],
    },
    "f-11": {
      id: "f-11",
      name: "F-11 Ball Peen Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Precision ball peen hammer for metalworking and riveting applications",
      description:
        "The F-11 Ball Peen Hammer is specifically designed for metalworking, riveting, and shaping operations. The hardened steel ball end provides excellent control for forming and rounding operations, while the flat striking face delivers precise impact force.",
      specifications: {
        "Head Weight": "12 oz (340g)",
        "Overall Length": "11 inches (28cm)",
        "Handle Material": "Hickory wood",
        "Head Material": "Heat-treated alloy steel",
        "Ball Diameter": "0.75 inches (19mm)",
        "Face Diameter": "0.9 inches (23mm)",
        Weight: "0.9 lbs (0.41kg)",
        Hardness: "50-55 HRC",
      },
      features: [
        "Heat-treated alloy steel head for maximum durability",
        "Traditional hickory handle for superior shock absorption",
        "Precision-machined ball end for accurate metalworking",
        "Balanced weight distribution for controlled strikes",
        "Lacquered finish for weather resistance",
        "Professional-grade construction",
      ],
      applications: [
        "Metal fabrication and shaping",
        "Riveting and peening operations",
        "Automotive body work",
        "Jewelry making and fine metalwork",
        "General blacksmithing",
      ],
      images360: ["/assets/products/Hammer/F-11.jpg"],
      mainImage: "/assets/products/Hammer/F-11.jpg",
      relatedProducts: ["f-10", "f-28", "w-015"],
    },
    "f-28": {
      id: "f-28",
      name: "F-28 Heavy-Duty Sledgehammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Professional sledgehammer for demolition and heavy construction work",
      description:
        "The F-28 Heavy-Duty Sledgehammer is built for the most demanding demolition and construction tasks. With its massive forged steel head and shock-absorbing handle, this tool delivers maximum impact force while minimizing user fatigue.",
      specifications: {
        "Head Weight": "8 lbs (3.6kg)",
        "Overall Length": "36 inches (91cm)",
        "Handle Material": "Fiberglass with overstrike protection",
        "Head Material": "Drop-forged carbon steel",
        "Face Diameter": "3 inches (76mm)",
        "Handle Diameter": "1.5 inches (38mm)",
        Weight: "9.2 lbs (4.2kg)",
        Grip: "Non-slip textured surface",
      },
      features: [
        "8-pound forged steel head for maximum impact",
        "36-inch fiberglass handle for superior leverage",
        "Overstrike protection prevents handle damage",
        "Shock-absorbing construction reduces vibration",
        "Weather-resistant grip coating",
        "Precision-balanced for efficient swings",
      ],
      applications: [
        "Demolition and wrecking operations",
        "Driving stakes and posts",
        "Breaking concrete and masonry",
        "Heavy construction work",
        "Landscaping and fence installation",
      ],
      images360: ["/assets/products/Hammer/F-28.jpg"],
      mainImage: "/assets/products/Hammer/F-28.jpg",
      relatedProducts: ["f-32", "f-34", "w-300"],
    },
    "f-100": {
      id: "f-100",
      name: "F-100 Precision Finishing Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Lightweight finishing hammer for delicate carpentry and cabinet work",
      description:
        "The F-100 Precision Finishing Hammer is designed for fine carpentry and finishing work where control and precision are paramount. Its lightweight design and balanced feel make it ideal for detailed work and delicate operations.",
      specifications: {
        "Head Weight": "7 oz (198g)",
        "Overall Length": "10 inches (25cm)",
        "Handle Material": "Premium hickory",
        "Head Material": "Forged steel with polished finish",
        "Face Diameter": "0.75 inches (19mm)",
        "Claw Design": "Straight puller",
        Weight: "0.6 lbs (0.27kg)",
        Finish: "Mirror polish",
      },
      features: [
        "Lightweight 7-ounce head for precision control",
        "Premium hickory handle for excellent feel",
        "Mirror-polished finish prevents marking",
        "Straight claw design for tight spaces",
        "Perfect balance for detailed work",
        "Professional finishing tool",
      ],
      applications: [
        "Fine carpentry and cabinet making",
        "Trim work and molding installation",
        "Furniture assembly and repair",
        "Delicate framing operations",
        "Precision craftsmanship",
      ],
      images360: ["/assets/products/Hammer/F-100.jpg"],
      mainImage: "/assets/products/Hammer/F-100.jpg",
      relatedProducts: ["f-10", "f-11", "w-014"],
    },
    "w-261": {
      id: "w-261",
      name: "W-261 Ergonomic Framing Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Advanced ergonomic framing hammer with vibration dampening technology",
      description:
        "The W-261 Ergonomic Framing Hammer represents the pinnacle of modern hammer design, incorporating advanced materials and ergonomic features to reduce fatigue and increase productivity during extended use.",
      specifications: {
        "Head Weight": "20 oz (567g)",
        "Overall Length": "15 inches (38cm)",
        "Handle Material": "Carbon fiber composite",
        "Head Material": "Titanium-steel alloy",
        "Face Design": "Milled face with magnetic starter",
        Grip: "Multi-density rubber",
        Weight: "1.4 lbs (0.64kg)",
        "Vibration Reduction": "90% dampening",
      },
      features: [
        "Carbon fiber handle with 90% vibration reduction",
        "Titanium-steel alloy head for strength and lightness",
        "Magnetic nail starter for one-handed operation",
        "Ergonomic grip reduces hand fatigue",
        "Milled face prevents slipping",
        "Professional contractor grade",
      ],
      applications: [
        "Heavy framing and construction",
        "All-day professional use",
        "Timber frame construction",
        "Commercial building projects",
        "High-volume carpentry work",
      ],
      images360: ["/assets/products/Hammer/W-261.jpg"],
      mainImage: "/assets/products/Hammer/W-261.jpg",
      relatedProducts: ["w-263", "w-300", "f-28"],
    },
    "f-32": {
      id: "f-32",
      name: "F-32 Framing Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Professional framing hammer with milled face and magnetic nail starter",
      description:
        "The F-32 Framing Hammer is specifically designed for heavy-duty framing work. Features a milled face to prevent slipping and a magnetic nail starter for one-handed operation.",
      specifications: {
        "Head Weight": "20 oz (567g)",
        "Overall Length": "16 inches (41cm)",
        "Handle Material": "Hickory wood with steel reinforcement",
        "Head Material": "Forged steel",
        "Face Design": "Milled face with magnetic starter",
        "Claw Design": "Straight rip claw",
        Weight: "1.8 lbs (0.82kg)",
        Finish: "Anti-rust coating",
      },
      features: [
        "20-ounce head perfect for framing work",
        "Milled face prevents nail slipping",
        "Magnetic nail starter for convenience",
        "Straight rip claw for board splitting",
        "Steel-reinforced handle connection",
        "Professional contractor grade",
      ],
      applications: [
        "House framing and construction",
        "Heavy carpentry work",
        "Deck and fence construction",
        "Commercial building projects",
        "Structural woodworking",
      ],
      images360: ["/assets/products/Hammer/F-32.jpg"],
      mainImage: "/assets/products/Hammer/F-32.jpg",
      relatedProducts: ["f-28", "f-34", "w-261"],
    },
    "f-34": {
      id: "f-34",
      name: "F-34 Finishing Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Lightweight finishing hammer for precision carpentry and trim work",
      description:
        "The F-34 Finishing Hammer is designed for precision work where control and accuracy are essential. Perfect for finish carpentry, cabinet work, and delicate assembly operations.",
      specifications: {
        "Head Weight": "8 oz (227g)",
        "Overall Length": "10.5 inches (27cm)",
        "Handle Material": "Premium hickory",
        "Head Material": "Forged steel with smooth finish",
        "Face Design": "Smooth polished face",
        "Claw Design": "Fine curved claw",
        Weight: "0.7 lbs (0.32kg)",
        Finish: "Polished steel",
      },
      features: [
        "Lightweight 8-ounce head for precise control",
        "Smooth polished face prevents marking",
        "Fine curved claw for delicate work",
        "Premium hickory handle for comfort",
        "Balanced design reduces fatigue",
        "Professional finishing quality",
      ],
      applications: [
        "Cabinet making and millwork",
        "Trim and molding installation",
        "Fine furniture assembly",
        "Picture framing work",
        "Delicate repair operations",
      ],
      images360: ["/assets/products/Hammer/F-34.jpg"],
      mainImage: "/assets/products/Hammer/F-34.jpg",
      relatedProducts: ["f-10", "f-100", "w-014"],
    },
    "f-38": {
      id: "f-38",
      name: "F-38 Cross Peen Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Cross peen hammer for metalworking and blacksmith applications",
      description:
        "The F-38 Cross Peen Hammer features a wedge-shaped peen perpendicular to the handle, making it ideal for drawing out metal, creating grooves, and general blacksmith work.",
      specifications: {
        "Head Weight": "2 lbs (907g)",
        "Overall Length": "14 inches (36cm)",
        "Handle Material": "Ash wood",
        "Head Material": "Carbon steel",
        "Peen Design": "Cross peen wedge",
        "Face Diameter": "1.5 inches (38mm)",
        Weight: "2.5 lbs (1.13kg)",
        Hardness: "45-50 HRC",
      },
      features: [
        "Cross peen design for metal shaping",
        "2-pound head for substantial striking force",
        "Traditional ash wood handle",
        "Balanced for accurate blows",
        "Heat-treated striking surfaces",
        "Blacksmith quality construction",
      ],
      applications: [
        "Blacksmithing and forging",
        "Metal shaping operations",
        "Drawing out thin sections",
        "Creating grooves and channels",
        "Traditional metalworking",
      ],
      images360: ["/assets/products/Hammer/F-38.jpg"],
      mainImage: "/assets/products/Hammer/F-38.jpg",
      relatedProducts: ["f-43", "f-11", "s-219"],
    },
    "w-014": {
      id: "w-014",
      name: "W-014 Precision Tack Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Lightweight tack hammer for upholstery and fine assembly work",
      description:
        "The W-014 Precision Tack Hammer is designed for delicate work requiring precise strikes. Perfect for upholstery, picture framing, and small assembly tasks where control is paramount.",
      specifications: {
        "Head Weight": "4 oz (113g)",
        "Overall Length": "8.5 inches (22cm)",
        "Handle Material": "Hardwood with smooth finish",
        "Head Material": "Polished steel",
        "Face Diameter": "0.5 inches (13mm)",
        "Claw Design": "Magnetic tack puller",
        Weight: "0.4 lbs (0.18kg)",
        Finish: "Mirror polish",
      },
      features: [
        "Ultra-lightweight 4-ounce head for precision",
        "Magnetic tack puller for easy removal",
        "Mirror-polished face prevents marking",
        "Compact 8.5-inch length for tight spaces",
        "Smooth hardwood handle for comfort",
        "Professional upholstery quality",
      ],
      applications: [
        "Upholstery and furniture work",
        "Picture frame assembly",
        "Small craft projects",
        "Jewelry making and repairs",
        "Precision assembly work",
      ],
      images360: ["/assets/products/Hammer/W-014.jpg"],
      mainImage: "/assets/products/Hammer/W-014.jpg",
      relatedProducts: ["f-34", "f-100", "w-015"],
    },
    "w-015": {
      id: "w-015",
      name: "W-015 Dead Blow Hammer",
      category: "hammers",
      categoryName: "Hammers",
      shortDescription:
        "Dead blow hammer with shot-filled head for non-marring strikes",
      description:
        "The W-015 Dead Blow Hammer features a shot-filled head that eliminates bounce and provides maximum energy transfer. The soft face prevents marring of finished surfaces.",
      specifications: {
        "Head Weight": "2 lbs (907g)",
        "Overall Length": "12 inches (30cm)",
        "Handle Material": "Fiberglass with rubber grip",
        "Head Material": "Polyurethane with steel shot",
        "Face Material": "Non-marring polyurethane",
        Fill: "Steel shot for dead blow action",
        Weight: "2.5 lbs (1.13kg)",
        Color: "Safety orange",
      },
      features: [
        "Shot-filled head eliminates bounce and rebound",
        "Non-marring polyurethane faces protect surfaces",
        "Fiberglass handle resists breaking",
        "Safety orange color for high visibility",
        "Comfortable rubber grip reduces slipping",
        "Professional assembly and maintenance grade",
      ],
      applications: [
        "Automotive assembly and repair",
        "Machinery alignment and positioning",
        "Assembly line work",
        "Sheet metal forming",
        "Non-destructive striking operations",
      ],
      images360: ["/assets/products/Hammer/W-015.jpg"],
      mainImage: "/assets/products/Hammer/W-015.jpg",
      relatedProducts: ["w-017", "w-261", "f-11"],
    },
  },
  // AXES Category
  axes: {
    "f-26": {
      id: "f-26",
      name: "F-26 Professional Felling Axe",
      category: "axes",
      categoryName: "Axes",
      shortDescription:
        "Heavy-duty felling axe for professional forestry and tree cutting",
      description:
        "The F-26 Professional Felling Axe is engineered for serious forestry work and tree cutting operations. Its precision-ground edge and balanced design deliver maximum cutting efficiency while the ergonomic handle reduces fatigue during extended use.",
      specifications: {
        "Head Weight": "3.5 lbs (1.6kg)",
        "Overall Length": "36 inches (91cm)",
        "Handle Material": "American hickory",
        "Blade Material": "High-carbon steel",
        "Edge Length": "4.5 inches (11cm)",
        "Bevel Angle": "25-30 degrees",
        Weight: "4.2 lbs (1.9kg)",
        Hardness: "56-60 HRC",
      },
      features: [
        "High-carbon steel blade holds razor-sharp edge",
        "36-inch hickory handle provides excellent leverage",
        "Precision-ground convex edge for efficient cutting",
        "Hand-forged construction for maximum durability",
        "Traditional eye design prevents head separation",
        "Professional forestry grade",
      ],
      applications: [
        "Tree felling and forestry operations",
        "Firewood cutting and splitting",
        "Land clearing and brush removal",
        "Professional logging work",
        "Outdoor survival applications",
      ],
      images360: ["/assets/products/Axe/F-26.jpg"],
      mainImage: "/assets/products/Axe/F-26.jpg",
      relatedProducts: ["f-27", "f-31", "s-240"],
    },
    "f-27": {
      id: "f-27",
      name: "F-27 Splitting Maul",
      category: "axes",
      categoryName: "Axes",
      shortDescription:
        "Heavy splitting maul designed for efficient log splitting and firewood preparation",
      description:
        "The F-27 Splitting Maul combines the cutting power of an axe with the driving force of a sledgehammer. Perfect for splitting large logs and preparing firewood, this tool features a weighted head design that maximizes splitting force.",
      specifications: {
        "Head Weight": "6 lbs (2.7kg)",
        "Overall Length": "36 inches (91cm)",
        "Handle Material": "Fiberglass with rubber overmold",
        "Blade Material": "Forged steel with splitting wedge",
        "Edge Geometry": "Convex splitting profile",
        "Cheek Thickness": "2 inches (51mm)",
        Weight: "7.1 lbs (3.2kg)",
        Grip: "Anti-slip texture",
      },
      features: [
        "6-pound weighted head for maximum splitting force",
        "Wedge-shaped profile parts wood efficiently",
        "Fiberglass handle resists breaking and splintering",
        "Rubber overmold provides secure grip",
        "Shock-absorbing construction reduces vibration",
        "All-weather performance capability",
      ],
      applications: [
        "Firewood splitting and preparation",
        "Large log processing",
        "Camping and outdoor activities",
        "Home heating wood preparation",
        "Commercial firewood operations",
      ],
      images360: ["/assets/products/Axe/F-27.jpg"],
      mainImage: "/assets/products/Axe/F-27.jpg",
      relatedProducts: ["f-26", "f-76", "w-t20"],
    },
    "s-240": {
      id: "s-240",
      name: "S-240 Tactical Hatchet",
      category: "axes",
      categoryName: "Axes",
      shortDescription:
        "Compact tactical hatchet for camping, bushcraft, and emergency preparedness",
      description:
        "The S-240 Tactical Hatchet is a versatile compact axe designed for outdoor enthusiasts, campers, and emergency preparedness. Its lightweight design and multiple tool features make it an essential piece of gear for any outdoor adventure.",
      specifications: {
        "Head Weight": "1.5 lbs (0.68kg)",
        "Overall Length": "14 inches (36cm)",
        "Handle Material": "G10 composite with lanyard hole",
        "Blade Material": "1055 carbon steel",
        "Edge Length": "3.25 inches (8.3cm)",
        "Blade Thickness": "0.25 inches (6.4mm)",
        Weight: "2.1 lbs (0.95kg)",
        Coating: "Black oxide finish",
      },
      features: [
        "Compact 14-inch overall length for portability",
        "G10 composite handle is waterproof and durable",
        "1055 carbon steel blade holds excellent edge",
        "Integrated lanyard hole for security",
        "Black oxide coating prevents corrosion",
        "Multi-purpose outdoor tool design",
      ],
      applications: [
        "Camping and backpacking",
        "Bushcraft and survival situations",
        "Emergency preparedness kits",
        "Small firewood processing",
        "Outdoor adventure activities",
      ],
      images360: ["/assets/products/Axe/S-240.jpg"],
      mainImage: "/assets/products/Axe/S-240.jpg",
      relatedProducts: ["s-247", "s-248", "s-249f"],
    },
  },
  // GARDENING TOOLS Category
  "gardening-tools": {
    "cr-6005": {
      id: "cr-6005",
      name: "CR-6005 Professional Pruning Shears",
      category: "gardening-tools",
      categoryName: "Gardening Tools",
      shortDescription:
        "Premium bypass pruning shears for professional landscaping and garden maintenance",
      description:
        "The CR-6005 Professional Pruning Shears feature precision-forged blades and ergonomic design for clean, healthy cuts on live wood. Perfect for professional landscapers and serious gardeners who demand reliability and performance.",
      specifications: {
        "Blade Length": "2 inches (51mm)",
        "Overall Length": "8 inches (20cm)",
        "Cutting Capacity": "Up to 1 inch diameter",
        "Blade Material": "Japanese SK-5 carbon steel",
        "Handle Material": "Aluminum with rubber grips",
        "Action Type": "Bypass cutting",
        Weight: "7.5 oz (213g)",
        Coating: "Teflon non-stick",
      },
      features: [
        "Japanese SK-5 carbon steel blades stay sharp longer",
        "Teflon coating prevents sap and debris buildup",
        "Ergonomic aluminum handles reduce hand fatigue",
        "Bypass design makes clean cuts without crushing",
        "Adjustable blade tension for optimal performance",
        "Professional landscaping grade",
      ],
      applications: [
        "Rose and shrub pruning",
        "Fruit tree maintenance",
        "Flower garden deadheading",
        "Small branch trimming",
        "Professional landscaping work",
      ],
      images360: ["/assets/products/Gardening Tool/CR-6005.jpg"],
      mainImage: "/assets/products/Gardening Tool/CR-6005.jpg",
      relatedProducts: ["cr-6006", "cs-01", "s-301"],
    },
    "cs-01": {
      id: "cs-01",
      name: "CS-01 Heavy-Duty Garden Spade",
      category: "gardening-tools",
      categoryName: "Gardening Tools",
      shortDescription:
        "Professional-grade garden spade for digging, edging, and soil preparation",
      description:
        "The CS-01 Heavy-Duty Garden Spade is built for serious gardening and landscaping work. Its forged steel blade and reinforced construction handle the toughest soil conditions while the ergonomic design reduces strain during extended use.",
      specifications: {
        "Blade Size": "7 x 11 inches (18 x 28cm)",
        "Overall Length": "48 inches (122cm)",
        "Handle Material": "Ash wood with steel reinforcement",
        "Blade Material": "Forged carbon steel",
        "Blade Thickness": "3mm",
        "Socket Type": "Solid socket construction",
        Weight: "4.2 lbs (1.9kg)",
        Edge: "Sharpened and tempered",
      },
      features: [
        "Forged carbon steel blade cuts through tough soil",
        "Solid socket construction prevents breaking",
        "48-inch ash handle provides excellent leverage",
        "Sharpened edge for easy soil penetration",
        "Steel reinforced neck for heavy-duty use",
        "Professional landscaping quality",
      ],
      applications: [
        "Garden bed preparation and digging",
        "Tree and shrub planting",
        "Edging and trenching work",
        "Soil turning and cultivation",
        "Professional landscaping projects",
      ],
      images360: ["/assets/products/Gardening Tool/CS-01.jpg"],
      mainImage: "/assets/products/Gardening Tool/CS-01.jpg",
      relatedProducts: ["cs-02", "cs-03", "fr04"],
    },
    "csw-24": {
      id: "csw-24",
      name: "CSW-24 Precision Weeding Tool",
      category: "gardening-tools",
      categoryName: "Gardening Tools",
      shortDescription:
        "Specialized weeding tool for precise weed removal and garden maintenance",
      description:
        "The CSW-24 Precision Weeding Tool is designed for accurate weed removal without disturbing surrounding plants. Its sharp, angled blade and comfortable grip make quick work of even the most stubborn weeds.",
      specifications: {
        "Blade Length": "4 inches (10cm)",
        "Overall Length": "12 inches (30cm)",
        "Handle Material": "Hardwood with leather wrap",
        "Blade Material": "Stainless steel",
        "Blade Angle": "45 degrees",
        "Tip Design": "Pointed for precision",
        Weight: "0.8 lbs (0.36kg)",
        Finish: "Polished stainless",
      },
      features: [
        "45-degree angled blade for optimal weeding angle",
        "Stainless steel construction resists corrosion",
        "Leather-wrapped handle provides comfortable grip",
        "Pointed tip reaches into tight spaces",
        "Lightweight design reduces hand fatigue",
        "Professional gardening tool quality",
      ],
      applications: [
        "Precision weed removal in flower beds",
        "Vegetable garden maintenance",
        "Rock garden and alpine plant care",
        "Greenhouse and container gardening",
        "Detail landscape maintenance",
      ],
      images360: ["/assets/products/Gardening Tool/CSW-24.jpg"],
      mainImage: "/assets/products/Gardening Tool/CSW-24.jpg",
      relatedProducts: ["csw-26", "el-10f", "s-303"],
    },
  },
  // HANDLES Category
  handles: {
    "s-284": {
      id: "s-284",
      name: "S-284 Hickory Axe Handle",
      category: "handles",
      categoryName: "Tool Handles",
      shortDescription:
        "Premium hickory replacement handle for axes and hatchets",
      description:
        "The S-284 Hickory Axe Handle is crafted from select American hickory wood, known for its strength, flexibility, and shock-absorbing properties. Perfect for replacing worn handles or upgrading existing tools.",
      specifications: {
        Length: "36 inches (91cm)",
        Material: "American hickory wood",
        "Eye Size": "Standard axe eye fit",
        "Grain Orientation": "Straight grain construction",
        Finish: "Clear lacquer protection",
        Weight: "1.5 lbs (0.68kg)",
        Diameter: "1.25 inches at grip",
        Taper: "Professional axe taper",
      },
      features: [
        "Select American hickory for maximum strength",
        "Straight grain construction prevents splitting",
        "Professional taper fits standard axe eyes",
        "Clear lacquer finish protects against weather",
        "Shock-absorbing properties reduce vibration",
        "Traditional craftsman quality",
      ],
      applications: [
        "Axe handle replacement and restoration",
        "Custom tool building projects",
        "Traditional woodworking applications",
        "Blacksmith and forge work",
        "Antique tool restoration",
      ],
      images360: ["/assets/products/Handle/S-284.jpg"],
      mainImage: "/assets/products/Handle/S-284.jpg",
      relatedProducts: ["s-285", "s-286", "s-289"],
    },
    "s-285": {
      id: "s-285",
      name: "S-285 Hammer Handle - 16oz",
      category: "handles",
      categoryName: "Tool Handles",
      shortDescription:
        "Replacement hickory handle designed for 16oz claw and ball peen hammers",
      description:
        "The S-285 Hammer Handle is precision-crafted for 16oz hammers, offering the perfect balance of strength and flexibility. Made from carefully selected hickory wood with proper grain orientation for maximum durability.",
      specifications: {
        Length: "13 inches (33cm)",
        Material: "Select hickory wood",
        "Eye Size": "16oz hammer eye",
        "Grip Diameter": "1.125 inches (2.9cm)",
        "Neck Diameter": "0.875 inches (2.2cm)",
        Weight: "0.4 lbs (0.18kg)",
        Finish: "Natural oil finish",
        Grade: "Premium select grade",
      },
      features: [
        "Precision-sized for 16oz hammer heads",
        "Select hickory with optimal grain orientation",
        "Natural oil finish enhances grip",
        "Properly tapered neck prevents breaking",
        "Shock-absorbing wood construction",
        "Professional replacement quality",
      ],
      applications: [
        "Claw hammer handle replacement",
        "Ball peen hammer restoration",
        "Custom hammer building",
        "Tool restoration projects",
        "Professional carpentry tools",
      ],
      images360: ["/assets/products/Handle/S-285.jpg"],
      mainImage: "/assets/products/Handle/S-285.jpg",
      relatedProducts: ["s-284", "s-291", "s-286"],
    },
  },
  // OTHER TOOLS Category
  "other-tools": {
    "d-210": {
      id: "d-210",
      name: "D-210 Precision Measuring Caliper",
      category: "other-tools",
      categoryName: "Other Tools",
      shortDescription:
        "High-precision digital caliper for accurate measurement in machining and fabrication",
      description:
        "The D-210 Precision Measuring Caliper provides exceptional accuracy for professional machining, fabrication, and quality control applications. Features both metric and imperial measurements with digital readout.",
      specifications: {
        "Measuring Range": "0-6 inches / 0-150mm",
        Resolution: "0.0005 inches / 0.01mm",
        Accuracy: "±0.001 inches / ±0.02mm",
        Display: "Digital LCD with auto-off",
        Material: "Hardened stainless steel",
        "Jaw Type": "Precision ground surfaces",
        Power: "CR2032 battery included",
        Certification: "ISO 9001 compliant",
      },
      features: [
        'Ultra-precise 0.0005" resolution',
        "Hardened stainless steel construction",
        "Digital LCD display with metric/imperial toggle",
        "Precision ground measuring surfaces",
        "Data output port for recording measurements",
        "Professional machinist grade accuracy",
      ],
      applications: [
        "Precision machining and fabrication",
        "Quality control and inspection",
        "Scientific and laboratory measurements",
        "Automotive and aerospace applications",
        "Professional engineering work",
      ],
      images360: ["/assets/products/Other Tool/D-210.jpg"],
      mainImage: "/assets/products/Other Tool/D-210.jpg",
      relatedProducts: ["d-310", "r-24"],
    },
    "d-310": {
      id: "d-310",
      name: "D-310 Digital Micrometer Set",
      category: "other-tools",
      categoryName: "Other Tools",
      shortDescription:
        "Professional micrometer set for ultra-precise measurements in manufacturing",
      description:
        "The D-310 Digital Micrometer Set provides the ultimate in measurement precision for professional manufacturing and quality control. This comprehensive set covers the most common measurement ranges with exceptional accuracy.",
      specifications: {
        "Set Includes": '0-1", 1-2", 2-3" micrometers',
        Resolution: "0.00005 inches / 0.001mm",
        Accuracy: "±0.0001 inches / ±0.002mm",
        Display: "Digital LCD with SPC output",
        Material: "Hardened steel frame",
        "Anvil/Spindle": "Carbide measuring faces",
        Calibration: "Includes standards",
        Case: "Fitted wooden presentation box",
      },
      features: [
        'Ultra-high resolution 0.00005" accuracy',
        "Carbide measuring faces for durability",
        "SPC data output capability",
        "Temperature compensation feature",
        "Ratchet thimble for consistent pressure",
        "Professional metrology grade precision",
      ],
      applications: [
        "Precision manufacturing and machining",
        "Aerospace and automotive quality control",
        "Laboratory and scientific measurements",
        "Tool and die making",
        "Research and development",
      ],
      images360: ["/assets/products/Other Tool/D-310.jpg"],
      mainImage: "/assets/products/Other Tool/D-310.jpg",
      relatedProducts: ["d-210", "r-24"],
    },
    "r-24": {
      id: "r-24",
      name: "R-24 Professional Pipe Wrench Set",
      category: "other-tools",
      categoryName: "Other Tools",
      shortDescription:
        "Heavy-duty pipe wrench set for plumbing and industrial applications",
      description:
        "The R-24 Professional Pipe Wrench Set includes multiple sizes of heavy-duty pipe wrenches designed for plumbing, pipeline, and industrial applications. Built to withstand extreme torque and demanding work environments.",
      specifications: {
        "Set Includes": '10", 14", 18" pipe wrenches',
        Material: "Drop-forged steel construction",
        "Jaw Capacity": '1/8" to 2" pipe sizes',
        Teeth: "Hardened steel serrated jaws",
        Handle: "I-beam design for strength",
        Finish: "Black oxide coating",
        Weight: "8.5 lbs complete set",
        Compliance: "ANSI specifications",
      },
      features: [
        "Drop-forged steel construction for maximum strength",
        "I-beam handle design prevents bending",
        "Hardened serrated jaws grip securely",
        "Self-cleaning threads prevent jamming",
        "Black oxide finish resists corrosion",
        "Professional plumbing grade quality",
      ],
      applications: [
        "Plumbing installation and repair",
        "Industrial pipeline work",
        "Oil and gas industry applications",
        "Municipal water systems",
        "Heavy industrial maintenance",
      ],
      images360: ["/assets/products/Other Tool/R-24.jpg"],
      mainImage: "/assets/products/Other Tool/R-24.jpg",
      relatedProducts: ["d-210", "d-310"],
    },
  },
};
// Category definitions matching the image structure
export const categories = {
  hammers: {
    id: "hammers",
    name: "Hammers",
    description:
      "Professional hammers for construction, metalworking, and specialized applications",
    emoji: "🔨",
    color: "from-red-500 to-red-700",
  },
  axes: {
    id: "axes",
    name: "Axes",
    description:
      "Heavy-duty axes for forestry, construction, and outdoor applications",
    emoji: "🪓",
    color: "from-green-500 to-green-700",
  },
  "gardening-tools": {
    id: "gardening-tools",
    name: "Garden Gear",
    description:
      "Professional gardening and landscaping tools for all outdoor projects",
    emoji: "🌱",
    color: "from-emerald-500 to-emerald-700",
  },
  handles: {
    id: "handles",
    name: "Handles",
    description:
      "Premium replacement handles and components for tool restoration",
    emoji: "🪚",
    color: "from-amber-500 to-amber-700",
  },
  "other-tools": {
    id: "other-tools",
    name: "Other Tools",
    description: "Specialized precision tools and measuring instruments",
    emoji: "🔧",
    color: "from-blue-500 to-blue-700",
  },
};
// Helper function to get all products from a category
export function getProductsByCategory(categoryId) {
  return productsData[categoryId] || {};
}
// Helper function to get a specific product
export function getProductById(categoryId, productId) {
  const categoryProducts = productsData[categoryId];
  return categoryProducts ? categoryProducts[productId] : null;
}
// Helper function to search products
export function searchProducts(query) {
  const results = [];
  const searchLower = query.toLowerCase();
  Object.keys(productsData).forEach((categoryId) => {
    Object.keys(productsData[categoryId]).forEach((productId) => {
      const product = productsData[categoryId][productId];
      if (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.shortDescription.toLowerCase().includes(searchLower)
      ) {
        results.push(product);
      }
    });
  });
  return results;
}
// Featured products for main products page (our most famous tools)
export const featuredProducts = [
  { category: "hammers", id: "w-261" }, // Ergonomic Framing Hammer - Top seller
  { category: "axes", id: "f-26" }, // Professional Felling Axe - Flagship product
  { category: "hammers", id: "f-28" }, // Heavy-Duty Sledgehammer - Popular choice
  { category: "gardening-tools", id: "cr-6005" }, // Professional Pruning Shears - Award winner
  { category: "axes", id: "s-240" }, // Tactical Hatchet - Customer favorite
  { category: "hammers", id: "f-11" }, // Ball Peen Hammer - Classic tool
  { category: "gardening-tools", id: "cs-01" }, // Heavy-Duty Garden Spade - Professional choice
  { category: "other-tools", id: "d-210" }, // Precision Caliper - High-tech tool
];
// Get featured products with full details
export function getFeaturedProducts() {
  return featuredProducts
    .map(({ category, id }) => {
      return getProductById(category, id);
    })
    .filter((product) => product !== null);
}
// Get all products as flat array
export function getAllProducts() {
  const allProducts = [];
  Object.keys(productsData).forEach((categoryId) => {
    Object.keys(productsData[categoryId]).forEach((productId) => {
      allProducts.push(productsData[categoryId][productId]);
    });
  });
  return allProducts;
}
