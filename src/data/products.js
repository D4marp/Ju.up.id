const products = [
  {
    _id: { $oid: "507f1f77bcf86cd799439011" },
    judul: "Blush Berry",
    manfaat: "High Vit. C & Antioxidant",
    kalori: "105 kkal",
    deskripsi: "Manis dan asam yang harmonis—sensasi juicy yang nggak bakal kamu lupakan sekali coba!",
    gambar: [
      "/images/PRODUCT/BLUSH BERRY.png",
      "/images/HOME/Highlight.png"
    ],
    kemasan: [
      {
        volume: "250ml",
        gambar: "/images/PRODUCT/BLUSH BERRY.png",
        harga: 33000
      },
      {
        volume: "500ml",
        gambar: "/images/PRODUCT/BLUSH BERRY.png",
        harga: 65000
      }
    ],
    statusPopuler: true,
    statusBaru: false,
    kategori: "cold-pressed-juice"
  },
  {
    _id: { $oid: "507f1f77bcf86cd799439012" },
    judul: "Tangy Joy",
    manfaat: "High Vit. C & Diatery Fiber",
    kalori: "102 kkal",
    deskripsi: "Ledakan rasa segar yang bikin melek! Cocok untuk kamu yang butuh suntikan semangat dalam satu tegukan.",
    gambar: [
      "/images/PRODUCT/TANGY JOY.png",
      "/images/HOME/high.png"
    ],
    kemasan: [
      {
        volume: "250ml",
        gambar: "/images/PRODUCT/TANGY JOY.png",
        harga: 32000
      },
      {
        volume: "500ml",
        gambar: "/images/PRODUCT/TANGY JOY.png",
        harga: 60000
      }
    ],
    statusPopuler: false,
    statusBaru: true,
    kategori: "cold-pressed-juice"
  },
  {
    _id: { $oid: "507f1f77bcf86cd799439013" },
    judul: "Tropic Charm",
    manfaat: "Natural Immune Booster",
    kalori: "150 kkal",
    deskripsi: "Rasa tropis yang hadir dengan ringan dan lembut namun tak bikin mudah lapar akan cocok menemani aktivitas harianmu",
    gambar: [
      "/images/PRODUCT/TROPIC CHARM.png",
      "/images/HOME/Highlight.png"
    ],
    kemasan: [
      {
        volume: "250ml",
        gambar: "/images/PRODUCT/TROPIC CHARM.png",
        harga: 28000
      },
      {
        volume: "500ml",
        gambar: "/images/PRODUCT/TROPIC CHARM.png",
        harga: 70000
      }
    ],
    statusPopuler: true,
    statusBaru: false,
    kategori: "cold-pressed-juice"
  },
  {
    _id: { $oid: "507f1f77bcf86cd799439014" },
    judul: "Tropical Twist",
    manfaat: "High Vit.C & Calium",
    kalori: "116 kkal",
    deskripsi: "Segarnya lembut tapi nagih! Rasa tropis yang siap nemenin hari santaimu jadi lebih ceria.",
    gambar: [
      "/images/PRODUCT/TROPICAL TWIST.png",
      "/images/HOME/high.png"
    ],
    kemasan: [
      {
        volume: "250ml",
        gambar: "/images/PRODUCT/TROPICAL TWIST.png",
        harga: 33000
      },
      {
        volume: "500ml",
        gambar: "/images/PRODUCT/TROPICAL TWIST.png",
        harga: 75000
      }
    ],
    statusPopuler: false,
    statusBaru: true,
    kategori: "cold-pressed-juice"
  }
];

export default products;