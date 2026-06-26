export const siteData = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://devi-pavan-wedding-invitation.vercel.app",
  coupleShort: "Devi & Pavan",
  coupleFull: {
    bride: "Devi",
    groom: "Pavan",
  },
  initials: "Devi ❤️ Pavan",
  seoTitle: "Devi ❤️ Pavan | Wedding Invitation",
  siteName: "Devi ❤️ Pavan - Wedding",
  seoDescription:
    "💍 Devi & Pavan are getting married! We warmly invite you to celebrate our wedding and bless us as we begin this beautiful journey together.",

  weddingDate: "2026-06-27T20:43:00+05:30",

  story: [
    {
      year: "First Meet",
      title: "A soft beginning",
      text: "A simple hello slowly turned into a bond full of trust, laughter, and late-night dreams.",
    },
    {
      year: "Engagement",
      title: "Promises made with joy",
      text: "Family, blessings, and a beautiful engagement brought the two hearts even closer.",
    },
    {
      year: "Forever",
      title: "The next chapter",
      text: "Now the journey opens into a wedding filled with love, rituals, and lifelong memories.",
    },
  ],

  gallery: [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
    "/gallery/7.webp",
    "/gallery/8.webp",
    "/gallery/9.webp",
    "/gallery/10.webp",
    "/gallery/11.webp",
    "/gallery/12.webp",
  ],

  events: [
    {
      key: "wedding",
      title: "Wedding Ceremony",
      date: "2026-06-27",
      time: "08:43 PM",
      venue: "At Gandhi Kshetram, Avanigadda",
      mapsQuery: "https://maps.app.goo.gl/AqauXEmuJ1svFqpo8?g_st=ac",
      description:
        "The sacred wedding ritual where the couple begins a blessed new life together.",
    },
    {
      key: "reception",
      title: "Reception",
      date: "2026-06-29",
      time: "10:00 AM",
      venue: "Kanaka Puttalamma Talli Devastanam, Pedakonduru, Guntur",
      mapsQuery: "https://maps.app.goo.gl/kvcsWYL9ojoe39e2A",
      description:
        "A morning of celebration, warm wishes, photographs, and happy hearts.",
    },
  ],

  traditions: [
    {
      key: "gouri-puja",
      title: "Gouri Puja",
      english:
        "Before the wedding, the bride offers prayers to Goddess Gouri, seeking blessings for a happy, harmonious, and prosperous married life.",
      telugu:
        "వధువు గౌరీ దేవిని ఆరాధించి, సుఖసంతోషాలతో నిండిన వైవాహిక జీవితానికి ఆశీర్వాదాలు కోరుతుంది.",
    },

    {
      key: "madhuparkalu",
      title: "Madhuparkalu",
      english:
        "The traditional wedding attire offered during the ceremony symbolizes purity, tradition, and the union of two families.",
      telugu:
        "మధుపర్కాలు వధూవరులకు అందించే సంప్రదాయ వస్త్రాలు, రెండు కుటుంబాల ఐక్యతను సూచిస్తాయి.",
    },

    {
      key: "kanyadanam",
      title: "Kanyadanam",
      english:
        "The bride's parents lovingly entrust their daughter to the groom, blessing the couple as they begin their new journey together.",
      telugu:
        "కన్యాదానంలో వధువు తల్లిదండ్రులు తమ కుమార్తెను వరుడికి అప్పగించి నూతన జీవితానికి ఆశీర్వదిస్తారు.",
    },

    {
      key: "jeelakarra-bellam",
      title: "Jeelakarra Bellam",
      english:
        "The bride and groom place cumin and jaggery paste on each other's heads, symbolizing that they will remain inseparable through life's sweetness and challenges.",
      telugu:
        "వధూవరులు ఒకరిపై ఒకరు జీలకర్ర బెల్లం ఉంచడం ద్వారా జీవితంలోని సుఖదుఃఖాలను కలిసి ఎదుర్కొంటామని సూచిస్తారు.",
    },

    {
      key: "mangalya-dharanam",
      title: "Mangalya Dharanam",
      english:
        "The groom ties the sacred mangalasutra around the bride's neck, marking the sacred bond of marriage and lifelong companionship.",
      telugu:
        "వరుడు వధువు మెడలో మంగళసూత్రాన్ని కట్టి పవిత్రమైన వైవాహిక బంధాన్ని స్థాపిస్తాడు.",
    },

    {
      key: "talambralu",
      title: "Talambralu",
      english:
        "The bride and groom shower each other with sacred rice, symbolizing prosperity, happiness, abundance, and playful companionship.",
      telugu:
        "వధూవరులు ఒకరిపై ఒకరు తలంబ్రాలు పోసుకుంటూ ఆనందం, ఐశ్వర్యం మరియు సౌభాగ్యాన్ని కోరుకుంటారు.",
    },

    {
      key: "saptapadi",
      title: "Saptapadi",
      english:
        "The couple takes seven sacred steps around the holy fire, making seven vows of love, trust, prosperity, and togetherness.",
      telugu:
        "వధూవరులు అగ్నిసాక్షిగా ఏడడుగులు వేసి ప్రేమ, నమ్మకం, సంపద, సహజీవనం వంటి ఏడు ప్రతిజ్ఞలు చేస్తారు.",
    },
  ],

  contact: {
    phone: "+91 98483 87918",
    venueNote:
      "Please check the maps link on the Events page for the exact venue location.",
  },
} as const;
