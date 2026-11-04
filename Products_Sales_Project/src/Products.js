
const Products = [
  {
    id: 1,
    name: "Sac à main élégant",
    category: "Sacs",
    price: 299,
    description: "Sac à main chic pour toutes les occasions.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    stock: 15
  },
  {
    id: 2,
    name: "Lunettes de soleil",
    category: "Lunettes",
    price: 149,
    description: "Lunettes modernes avec protection UV.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    stock: 20
  },
  {
    id: 3,
    name: "Montre classique",
    category: "Montres",
    price: 399,
    description: "Montre élégante avec design minimaliste.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    stock: 10
  },
  {
    id: 4,
    name: "Collier doré",
    category: "Bijoux",
    price: 99,
    description: "Collier raffiné et tendance.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    stock: 25
  },
  {
    id: 5,
    name: "Boucles d'oreilles",
    category: "Bijoux",
    price: 79,
    description: "Boucles d'oreilles modernes.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
    stock: 30
  },
  {
    id: 6,
    name: "Portefeuille en cuir",
    category: "Portefeuilles",
    price: 129,
    description: "Portefeuille pratique avec plusieurs compartiments.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    stock: 12
  },
  {
    id: 7,
    name: "Bracelet élégant",
    category: "Bijoux",
    price: 89,
    description: "Bracelet délicat pour un look sophistiqué.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0",
    stock: 18
  },
  {
    id: 8,
    name: "Casquette tendance",
    category: "Mode",
    price: 119,
    description: "Casquette confortable pour un style décontracté.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
    stock: 22
  },
  {
    id: 9,
    name: "Écharpe douce",
    category: "Mode",
    price: 159,
    description: "Écharpe douce et confortable.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
    stock: 14
  },
  {
    id: 10,
    name: "Sac à dos",
    category: "Sacs",
    price: 249,
    description: "Sac à dos pratique pour les sorties.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    stock: 16
  },
  {
    id: 11,
    name: "Bague argentée",
    category: "Bijoux",
    price: 69,
    description: "Bague moderne avec finition argentée.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    stock: 35
  },
  {
    id: 12,
    name: "Ceinture en cuir",
    category: "Mode",
    price: 139,
    description: "Ceinture élégante pour différents styles.",
    image: "https://images.unsplash.com/photo-1624222247344-550fb8a4c7f7",
    stock: 11
  },
  {
    id: 13,
    name: "Sac bandoulière",
    category: "Sacs",
    price: 219,
    description: "Petit sac pratique et élégant.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    stock: 17
  },
  {
    id: 14,
    name: "Montre connectée",
    category: "Montres",
    price: 599,
    description: "Montre connectée pour suivre vos activités.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    stock: 8
  },
  {
    id: 15,
    name: "Bracelet en perles",
    category: "Bijoux",
    price: 59,
    description: "Bracelet décoratif en perles.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
    stock: 28
  },
  {
    id: 16,
    name: "Chapeau de plage",
    category: "Mode",
    price: 99,
    description: "Chapeau idéal pour les journées ensoleillées.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    stock: 19
  },
  {
    id: 17,
    name: "Sac de voyage",
    category: "Sacs",
    price: 349,
    description: "Sac spacieux pour vos voyages.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    stock: 9
  },
  {
    id: 18,
    name: "Pendentif en forme de cœur",
    category: "Bijoux",
    price: 119,
    description: "Pendentif romantique et élégant.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    stock: 21
  },
  {
    id: 19,
    name: "Lunettes rondes",
    category: "Lunettes",
    price: 179,
    description: "Lunettes avec monture ronde et moderne.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4",
    stock: 13
  },
  {
    id: 20,
    name: "Pochette de soirée",
    category: "Sacs",
    price: 189,
    description: "Pochette élégante pour les soirées.",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
    stock: 10
  },
  {
    id: 21,
    name: "Foulard imprimé",
    category: "Mode",
    price: 89,
    description: "Foulard coloré pour compléter votre tenue.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d",
    stock: 24
  },
  {
    id: 22,
    name: "Boucles d'oreilles dorées",
    category: "Bijoux",
    price: 109,
    description: "Boucles d'oreilles dorées et raffinées.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59",
    stock: 18
  },
  {
    id: 23,
    name: "Porte-cartes",
    category: "Portefeuilles",
    price: 79,
    description: "Porte-cartes compact et pratique.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    stock: 20
  },
  {
    id: 24,
    name: "Montre dorée",
    category: "Montres",
    price: 449,
    description: "Montre élégante avec bracelet doré.",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
    stock: 7
  },
  {
    id: 25,
    name: "Sac fourre-tout",
    category: "Sacs",
    price: 169,
    description: "Sac spacieux pour une utilisation quotidienne.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    stock: 23
  },
  {
    id: 26,
    name: "Bague dorée",
    category: "Bijoux",
    price: 89,
    description: "Bague minimaliste avec finition dorée.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    stock: 26
  },
  {
    id: 27,
    name: "Porte-clés décoratif",
    category: "Accessoires",
    price: 39,
    description: "Porte-clés original pour vos clés.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    stock: 40
  },
  {
    id: 28,
    name: "Sac mini tendance",
    category: "Sacs",
    price: 199,
    description: "Mini sac moderne et élégant.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    stock: 12
  },
  {
    id: 29,
    name: "Bracelet en acier",
    category: "Bijoux",
    price: 129,
    description: "Bracelet résistant avec design moderne.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
    stock: 15
  },
  {
    id: 30,
    name: "Lunettes de mode",
    category: "Lunettes",
    price: 199,
    description: "Lunettes tendance pour un style unique.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    stock: 18
  }
];

export default Products;
