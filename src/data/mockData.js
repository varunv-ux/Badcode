export const feedItems = [
  {
    id: 1,
    type: 'organic',
    source: 'Gamerant',
    sourceAvatar: 'https://i.pravatar.cc/150?img=13',
    timestamp: '4h',
    title: 'In Legends Z-A, buffs and debuffs will work differently than in most Pokémon games',
    image: 'https://picsum.photos/seed/pokemon1/750/500'
  },
  {
    id: 2,
    type: 'summary',
    sources: [
      { name: 'NBC', avatar: 'https://i.pravatar.cc/150?img=21' },
      { name: 'ESPN', avatar: 'https://i.pravatar.cc/150?img=22' },
      { name: 'Fox', avatar: 'https://i.pravatar.cc/150?img=23' }
    ],
    sourceCount: 9,
    topicTitle: 'KPop singers perform Golden',
    description: 'The three singers for the fictional K-pop group HUNTR/X, EJAE, Audrey Nuna, and Rei Ami, made their full live debut performance of the... See more',
    title: 'EJAE, Audrey Nuna and Rei Ami from KPop Demon Hunters: Golden | The Tonight Show',
    videoUrl: 'https://picsum.photos/seed/kpop1/750/422',
    timestamp: '1d',
    platform: 'YouTube',
    platformSource: 'The Tonight Show'
  },
  {
    id: 3,
    type: 'ad',
    sponsor: 'Sony',
    sponsorLogo: 'https://i.pravatar.cc/150?img=26',
    rating: '4.8',
    reviewCount: '8642',
    description: 'Get lost in color like never before with the world first Micro RGB TV. See an astonishing spectrum of hyper-real hues.',
    image: 'https://picsum.photos/seed/sony1/750/750',
    reviews: [
      {
        author: 'Leah S.',
        source: 'bestbuy.com',
        rating: 5,
        timeAgo: '3 days ago',
        text: 'Dolby Vision gaming at 120Hz looks unreal on our PS5. The TV switches to game mode instantly and input lag is basically gone.'
      },
      {
        author: 'Carlos M.',
        source: 'sony.com',
        rating: 4.5,
        timeAgo: '4 days ago',
        text: 'Acoustic Surface Audio+ makes dialog crystal clear without a soundbar. The only thing I wish it had was another HDMI 2.1 port.'
      },
      {
        author: 'Prisha K.',
        source: 'amazon.com',
        rating: 5,
        timeAgo: '1 week ago',
        text: 'Colors are stunning even with the blinds open in our living room. Google TV setup was painless and synced all of our smart home routines.'
      },
      {
        author: 'Jon B.',
        source: 'bestbuy.com',
        rating: 4,
        timeAgo: '1 week ago',
        text: 'Mini LED backlighting is crazy bright. Motion smoothing needed a tweak out of the box, but once adjusted it has become our main movie screen.'
      },
      {
        author: 'Alexandra T.',
        source: 'sony.com',
        rating: 5,
        timeAgo: '2 weeks ago',
        text: 'We wall mounted it in the family room and the narrow bezels disappear. Works seamlessly with our Bravia Theatre system over eARC.'
      },
      {
        author: 'Maxwell R.',
        source: 'amazon.com',
        rating: 4.5,
        timeAgo: '2 weeks ago',
        text: 'Movie nights look like a cinema thanks to the XR Backlight Master Drive. Shipping box was huge, but setup was simple even for two people.'
      }
    ],
    aiSummary: {
      insights: [
        {
          title: 'Micro RGB makes HDR pop',
          description: 'Sony\'s Micro RGB pixel design produces deeper greens and reds, so blockbuster films keep their contrast even with the living-room lights on.',
          source: 'TechRadar'
        },
        {
          title: 'Acoustic Surface keeps voices crisp',
          description: 'Screen-shaking actuators turn the entire panel into a speaker, anchoring dialog to the action without needing a separate soundbar.',
          source: 'Digital Trends'
        }
      ],
      reviews: [
        {
          title: 'Creator-friendly colour accuracy',
          description: 'The Bravia 9 calibrated quickly and held reference-grade colour for my HDR edits.',
          source: 'Sara Dietschy',
          platform: 'YouTube'
        },
        {
          title: 'Gaming ready out of the box',
          description: '120Hz Dolby Vision support and automatic game mode make PS5 sessions buttery smooth.',
          source: 'SpawnPoint',
          platform: 'Twitch'
        }
      ],
      aiQuestions: [
        'Does the Bravia 9 support Dolby Atmos passthrough to my receiver?',
        'How bright does the TV get in a sunlit room compared with OLED models?',
        'Can I use the TV stand without wall-mounting even though it has rear-firing ports?'
      ]
    }
  },
  {
    id: 4,
    type: 'twitter',
    source: 'Leslie Nadine',
    sourceAvatar: 'https://i.pravatar.cc/150?img=34',
    timestamp: '1d',
    content: 'Bow details from the Dior Spring-Summer 2026 show by Jonathan Anderson #DiorSS26',
    image: 'https://picsum.photos/seed/dior1/750/750',
    platform: 'X'
  },
  {
    id: 5,
    type: 'youtube',
    orientation: 'vertical',
    source: 'NBCSBoston',
    sourceAvatar: 'https://i.pravatar.cc/150?img=36',
    timestamp: '1d',
    description: 'Jayson Tatum talks feeling like a basketball player again after encouraging workout',
    videoUrl: 'https://picsum.photos/seed/tatum1/750/1000',
    platform: 'YouTube',
    videoDuration: '00:00'
  },
  {
    id: 6,
    type: 'youtube',
    orientation: 'horizontal',
    source: 'Krys Kyu',
    sourceAvatar: 'https://i.pravatar.cc/150?img=37',
    timestamp: '1d',
    description: 'Cafe hopping in nyc aesthetic cafes, viral matcha, cozy home decor',
    videoUrl: 'https://picsum.photos/seed/cafe1/750/422',
    platform: 'YouTube',
    videoDuration: '00:00'
  },
  {
    id: 7,
    type: 'organic',
    source: 'Elle',
    sourceAvatar: 'https://i.pravatar.cc/150?img=9',
    timestamp: '4h',
    title: 'The Summer I Turned Pretty Is Ending. Will the Insane Fan Reactions End With It?',
    image: 'https://picsum.photos/seed/summer1/750/422'
  },
  {
    id: 8,
    type: 'summary',
    sources: [
      { name: 'Vogue', avatar: 'https://i.pravatar.cc/150?img=2' },
      { name: 'WWD', avatar: 'https://i.pravatar.cc/150?img=3' },
      { name: 'Miu Miu', avatar: 'https://i.pravatar.cc/150?img=4' }
    ],
    sourceCount: 9,
    topicTitle: 'Coco Gauff celebration',
    description: 'Coco Gauff celebrated her curated Miu Miu collection in New York, which blends classic pieces like tailored jackets and ribbed tanks... See more',
    title: 'Coco Gauff Partners with Miu Miu on collab',
    image: 'https://picsum.photos/seed/coco1/750/500',
    timestamp: '1d',
    platform: 'Wallpaper'
  },
  {
    id: 9,
    type: 'organic-small',
    source: 'The New York Times',
    sourceAvatar: 'https://i.pravatar.cc/150?img=11',
    timestamp: '4h',
    title: 'Jimmy Kimmel Show to Return to ABC on Tuesday Night',
    thumbnail: 'https://picsum.photos/seed/kimmel1/200/200'
  }
]
