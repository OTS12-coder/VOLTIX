/* ==========================================================================

   VOLTIX — Frontend Products Data

   Add, remove, or edit products here. Do NOT edit the card component.

   ========================================================================== */

const FRONTEND_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'components', name: 'Components' },
  { id: 'pages', name: 'Business' },
  { id: 'sections', name: 'Sections' },
  { id: 'landing-pages', name: 'Landing Pages' },
  { id: 'dashboards', name: 'Dashboards' },
  { id: 'e-commerce', name: 'E-commerce' },
  { id: 'other', name: 'Other' }
];

const FRONTEND_PRODUCTS = [

  /* ========== COMPONENTS ========== */

  {
    id: 'order-button-01',
    category: 'components',
    title: 'Animated Order Button',
    description: 'An interactive order button with a smooth delivery van animation, dynamic hover glow, road effect, and animated success popup.',
    images: [
      'assets/images/order-btn/2.png',
      'assets/images/order-btn/3.png',
      'assets/images/order-btn/1.png'
    ],
    video: 'assets/videos/order-btn.mp4'
  },

  {
    id: 'footer-01',
    category: 'components',
    title: 'Modern Tech Footer',
    description: 'A dark-themed modern footer featuring brand identity, social links, navigation categories, newsletter subscription form, copyright bar, and payment options.',
    images: [
      'assets/images/Footer/1.png'
    ],
    video: 'assets/videos/Footer.mp4'
  },
  {
  id: 'animated-hero-01',
  category: 'components',
  title: 'Modern Animated Hero',
  description: 'A modern animated hero section with smooth transitions, immersive visuals, elegant navigation, interactive elements, and a polished call-to-action experience.',
  images: [
    'assets/images/BMW/1.png',
        'assets/images/BMW/2.png'
  ],
  video: 'assets/videos/BMW Landing Page.mp4'
},



  /* ========== BUSINESS ========== */

  {
    id: 'flexit-01',
    category: 'pages',
    title: 'Fitness & Gym Business',
    description: 'A modern fitness business website for workouts, fitness tracking, progress monitoring, and maintaining a healthy lifestyle.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/flexit.png',
            video: 'assets/videos/FlexIt.mp4'

  },

  {
    id: 'glowskin-01',
    category: 'pages',
    title: 'Beauty & Skincare Business',
    description: 'A modern skincare business website featuring beauty products, product browsing, and a smooth customer shopping experience.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/glowskin.png',
                video: 'assets/videos/GlowSkin.mp4'

  },

  {
    id: 'craftedgems-01',
    category: 'pages',
    title: 'Luxury Jewelry Business',
    description: 'A luxury jewelry business website designed to showcase premium jewelry collections with elegant visuals, smooth animations, and a refined user experience.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/craftedgems.png',
                video: 'assets/videos/CraftedGems.mp4'

  },

  {
    id: 'smartnest-01',
    category: 'pages',
    title: 'Smart Home Business',
    description: 'A modern smart home business website showcasing connected devices, home automation features, and energy consumption monitoring.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/smartnest.png',
                video: 'assets/videos/SmartNest.mp4'

  },
  {
  id: 'luxury-real-estate-01',
  category: 'pages',
  title: 'Luxury Real Estate Website',
  description: 'A luxury real estate website with smooth animations, elegant transitions, immersive property showcases, refined typography, and a premium visual theme.',
  images: [
    'assets/images/realstate.png',
  ],
  video: 'assets/videos/Lumière.mp4'
},
{
  id: 'cinematic-automotive-01',
  category: 'pages',
  title: 'Cinematic Car Showcase',
  description: 'A cinematic car showcase experience for BMW featuring immersive animations, dramatic transitions, performance storytelling, electric innovation, and interactive model showcases with a premium visual theme.',
  images: [
    'assets/images/BMWW/1.png',
    'assets/images/BMWW/2.png',
    'assets/images/BMWW/4.png',

  ],
  video: 'assets/videos/BMW.mp4'
},
{
  id: 'modern-car-dealership-01',
  category: 'pages',
  title: 'Modern Car Dealership',
  description: 'A modern Egyptian car dealership website featuring a premium automotive design, vehicle showcases, smooth animations, detailed car sections, and a polished showroom experience.',
  images: [
    'assets/images/El-Ziney/1.png',
    'assets/images/El-Ziney/2.png',
  ],
  video: 'assets/videos/ziney.mp4'
},

  /* ========== LANDING PAGES ========== */

  {
    id: 'brewmaster-01',
    category: 'landing-pages',
    title: 'Coffee Shop Website',
    description: 'A modern coffee shop website featuring an interactive menu and an online ordering experience designed for a smooth customer journey.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/coffee.png',
                video: 'assets/videos/BrewMaster.mp4'

  },

  {
    id: 'proteinfuel-01',
    category: 'landing-pages',
    title: 'Sports Nutrition Website',
    description: 'A modern sports nutrition website offering fitness supplements, nutritional products, and useful fitness-related content.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/proteinfue;.png',
                video: 'assets/videos/PROTEINFUEL.mp4'

  },


  /* ========== E-COMMERCE ========== */

  {
    id: 'laptophub-01',
    category: 'e-commerce',
    title: 'Technology Store Website',
    description: 'A modern laptop marketplace where users can browse, filter, and compare different laptop products with a clean and responsive shopping experience.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/laptophub.png',
                video: 'assets/videos/LaptopHub.mp4'

  },

  {
    id: 'hoodies-brand-01',
    category: 'e-commerce',
    title: 'Fashion & Hoodies Website',
    description: 'A modern fashion e-commerce website specializing in hoodies, allowing users to explore products and choose different sizes and colors.',
    image: 'assets/images/NEVV.png',
                video: 'assets/videos/NEVV.mp4'

  },

  {
    id: 'soundpulse-01',
    category: 'e-commerce',
    title: 'Audio Equipment Website',
    description: 'A modern audio equipment store featuring headphones, speakers, and other audio products with detailed product specifications.',
    image: 'https://portfolio-alpha-sevennn.vercel.app/Assets/Images/SoundPulse.png',
                video: 'assets/videos/SoundPulse.mp4'

  },
  {
  id: 'boreal-01',
  category: 'travel',
  title: 'Mountain Travel & Adventure Website',
  description: 'A luxury travel website focused on mountain adventures, premium trips, destinations, and unforgettable outdoor experiences with elegant visuals, smooth animations, and a responsive design.',
  image: 'assets/images/Boreal.png',
              video: 'assets/videos/Boreal.mp4'

},

];