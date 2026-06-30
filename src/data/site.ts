export type Course = {
  slug: string;
  title: string;
  category:
    | "Foundation"
    | "Recitation"
    | "Memorization"
    | "Islamic Studies"
    | "Language";
  image: string;
  shortDescription: string;
  description: string;
  duration: string;
  schedule: string;
  objectives: string[];
  outcomes: string[];
  fees: Record<string, string>;
};

export type Material = {
  slug: string;
  title: string;
  description: string;
  level: string;
  downloadLabel: string;
  downloadLink?: string;
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/teachers/male", label: "Teachers" },
  { href: "/blog", label: "Blog" },
  { href: "/materials", label: "Materials" },
  { href: "/registration", label: "Register" },
  { href: "/contact", label: "Contact" },
];

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    title: "Noorani Qaida Course",
    category: "Foundation",
    image: "/images/cards/card1.webp",
    shortDescription:
      " Learn Arabic letters, pronunciation, and basic reading skills to build a strong Quran foundation.",
    description:
      "The Noorani Qaida Course is designed for beginners to build a strong foundation in Quran reading. Students learn Arabic letters, pronunciation, letter joining, and basic Tajweed rules through step-by-step guidance.",
    duration: "8-12 weeks",
    schedule: "Flexible 30-minute live lessons",
    objectives: [
      "Learn Arabic alphabets",
      "Understand letter pronunciation",
      "Practice joining letters",
      "Build basic reading skills",
    ],
    outcomes: [
      "Strong reading foundation",
      "	Improved pronunciation",
      "	Better fluency in Quran reading",
      "Ready for Quran reading course",
    ],
    fees: {
      USA: "$45/month",
      UK: "£39/month",
      Europe: "€42/month",
      Australia: "A$69/month",
      UAE: "Dhs 165/month",
    },
  },
  {
    slug: "tarjuma-tafseer",
    title: "Tarjuma & Tafseer Course",
    category: "Recitation",
    image: "/images/cards/card7.webp",
    shortDescription:
      " Understand the meanings, lessons, and wisdom of Quranic verses in depth.",
    description:
      "The Tafseer Course helps students understand the meanings, context, and wisdom of Quranic verses. It develops deeper Islamic knowledge and strengthens spiritual connection with the Quran.",
    duration: "6-12 months",
    schedule: "Flexible 45-minute live lessons",
    objectives: [
      "Understand Quran meanings",
      "Learn historical context",
      "Reflect on Quranic lessons",
      "Strengthen Islamic knowledge",
    ],
    outcomes: [
      "Better Quran understanding",
      "Stronger faith and connection",
      "Practical life guidance",
      "Improved Islamic awareness",
    ],
    fees: {
      USA: "$55/month",
      UK: "£47/month",
      Europe: "€52/month",
      Australia: "A$79/month",
      UAE: "Dhs 199/month",
    },
  },
  {
    slug: "quran-reading",
    title: "Quran Reading Course",
    category: "Recitation",
    image: "/images/cards/card2.webp",
    shortDescription:
      " Improve fluency and confidence in reading the Holy Quran with proper pronunciation.",
    description:
      "This course helps students read the Holy Quran fluently and accurately. It focuses on improving recitation skills, pronunciation, and confidence while reading Quranic verses.",
    duration: "3-6 months",
    schedule: "2-5 classes per week",
    objectives: [
      "Improve Quran reading fluency",
      "Correct pronunciation mistakes",
      "Practice daily recitation",
      "Increase reading confidence",
    ],
    outcomes: [
      "Smooth Quran recitation",
      "Fewer pronunciation errors",
      "Better reading speed",
      "Strong confidence in recitation",
    ],
    fees: {
      USA: "$55/month",
      UK: "£45/month",
      Europe: "€52/month",
      Australia: "A$79/month",
      UAE: "Dhs 199/month",
    },
  },
  {
    slug: "tajweed",
    title: "Tajweed Course",
    category: "Recitation",
    image: "/images/cards/card3.webp",
    shortDescription:
      "Master the rules of Tajweed to recite the Quran beautifully and correctly.",
    description:
      "The Tajweed Course teaches the essential rules of Quran recitation. Students learn proper articulation points, elongation rules, and pronunciation techniques to recite beautifully and correctly.",
    duration: "4-8 months",
    schedule: "3 live sessions per week",
    objectives: [
      "Learn Tajweed rules",
      "Understand Makharij",
      "Practice proper recitation",
      "Improve recitation quality",
    ],
    outcomes: [
      "Correct Quran recitation",
      "Better voice control",
      "Strong Tajweed understanding",
      "Beautiful and accurate recitation",
    ],
    fees: {
      USA: "$65/month",
      UK: "£55/month",
      Europe: "€62/month",
      Australia: "A$95/month",
      UAE: "Dhs 240/month",
    },
  },
  {
    slug: "hifz",
    title: "Hifz-ul-Quran Course",
    category: "Memorization",
    image: "/images/cards/card4.webp",
    shortDescription:
      "Memorize the Holy Quran with step-by-step guidance and regular revision.",
    description:
      "This course is for students who want to memorize the Holy Quran. With structured memorization plans, daily revision, and teacher supervision, students can memorize efficiently and retain lessons effectively.",
    duration: "Personalized plan",
    schedule: "4-6 classes per week",
    objectives: [
      "Memorize Quran systematically",
      "Strengthen daily revision",
      "Improve focus and consistency",
      "Build long-term retention",
    ],
    outcomes: [
      "Memorized Quran portions or full Quran",
      "Strong memory retention",
      "Better discipline and consistency",
      "Confidence in Hifz recitation",
    ],
    fees: {
      USA: "$85/month",
      UK: "£69/month",
      Europe: "€79/month",
      Australia: "A$125/month",
      UAE: "Dhs 315/month",
    },
  },
  {
    slug: "islamic-studies",
    title: "Islamic Studies Course",
    category: "Islamic Studies",
    image: "/images/cards/card5.webp",
    shortDescription:
      " Learn essential Islamic knowledge including duas, prayers, manners, and daily teachings.",
    description:
      "This course covers essential Islamic teachings including daily duas, prayers, manners, fiqh basics, and prophetic teachings to help students practice Islam in daily life.",
    duration: "12 weeks per level",
    schedule: "Weekly or biweekly lessons",
    objectives: [
      "Learn Islamic basics",
      "Understand daily duas",
      "Practice Sunnah manners",
      "Improve religious knowledge",
    ],
    outcomes: [
      "Better Islamic understanding",
      "Strong daily practice",
      "Improved manners and character",
      "Confidence in religious learning",
    ],
    fees: {
      USA: "$40/month",
      UK: "£35/month",
      Europe: "€39/month",
      Australia: "A$59/month",
      UAE: "Dhs 150/month",
    },
  },
  {
    slug: "arabic-language",
    title: "Arabic Language",
    category: "Language",
    image: "/images/cards/card6.webp",
    shortDescription:
      "Arabic reading, vocabulary, and grammar foundations for Quran learners.",
    description:
      "Learn Arabic language essentials that support Quran reading and understanding, including vocabulary, sentence patterns, and grammar basics.",
    duration: "6 months",
    schedule: "2-3 classes per week",
    objectives: [
      "Build vocabulary",
      "Understand simple grammar",
      "Read Arabic passages",
      "Connect Arabic with Quranic phrases",
    ],
    outcomes: [
      "Improved comprehension",
      "Stronger Arabic literacy",
      "Readiness for deeper Quran study",
    ],
    fees: {
      USA: "$60/month",
      UK: "£49/month",
      Europe: "€56/month",
      Australia: "A$89/month",
      UAE: "Dhs 220/month",
    },
  },
];

export const teachers = {
  male: [
    {
      name: "Qari Abdullah Rahman",
      qualification: "Ijazah in Hafs",
      experience: "9 years",
      languages: "English, Arabic, Urdu",
      specialization: "Tajweed and Hifz",
      image: "/images/teachers/mufti-1.webp",
    },
    {
      name: "Mufti Hamid Usman",
      qualification: "Dars-e-Nizami",
      experience: "12 years",
      languages: "English, Arabic",
      specialization: "Islamic Studies",
      image: "/images/teachers/mufti-2.webp",
    },
    {
      name: "Sheikh Yusuf Karim",
      qualification: "MA Islamic Studies",
      experience: "7 years",
      languages: "English, Urdu",
      specialization: "Quran Reading",
      image: "/images/teachers/mufti-3.webp",
    },
  ],
  female: [
    {
      name: "Ustadha Maryam Noor",
      qualification: "Quran and Tajweed Diploma",
      experience: "8 years",
      languages: "English, Urdu",
      specialization: "Kids Quran Reading",
      image: "/images/teachers/qaria-1.webp",
    },
    {
      name: "Ustadha Aisha Farooq",
      qualification: "Arabic Language Diploma",
      experience: "6 years",
      languages: "English, Arabic",
      specialization: "Arabic and Noorani Qaida",
      image: "/images/teachers/qaria-2.webp",
    },
    {
      name: "Ustadha Hiba Salman",
      qualification: "Hifz Certification",
      experience: "10 years",
      languages: "English, Urdu, Hindi",
      specialization: "Female Hifz Mentoring",
      image: "/images/teachers/qaria-3.webp",
    },
  ],
};

export const materials: Material[] = [
  {
    slug: "tajweed-guide",
    title: "Tajweed Quick Guide",
    description:
      "A concise reference for common Tajweed rules with practice checkpoints.",
    level: "Beginner to Intermediate",
    downloadLabel: "Open Tajweed Guide",
    downloadLink: "https://www.equranschool.com/tajweedrules.pdf",
  },
  {
    slug: "quran-basics",
    title: "Quran Reading Basics",
    description:
      "Foundational reading notes for students beginning Quranic Arabic.",
    level: "Beginner",
    downloadLabel: "Open Reading Notes",
    downloadLink:
      "https://download.understandquran.com/fileadmin/user_upload/extras/tajweed/Read_Quran.pdf",
  },
  {
    slug: "daily-duas",
    title: "Daily Duas Collection",
    description:
      "Everyday duas for children and families with transliteration support.",
    level: "All levels",
    downloadLabel: "Open Dua Collection",
    downloadLink:
      "https://www.duaandazkar.com/wp-content/uploads/Daily-Essential-Duas.pdf",
  },
];

export const pricing = {
  USA: {
    currency: "$",
    contact: "+1 800 123 4567",
    rows: [
      ["5 Lessons/Week", "20 Lessons", "$85", "$69"],
      ["4 Lessons/Week", "16 Lessons", "$72", "$58"],
      ["3 Lessons/Week", "12 Lessons", "$58", "$47"],
      ["2 Lessons/Week", "08 Lessons", "$42", "$34"],
    ],
  },
  UK: {
    currency: "£",
    contact: "+44 20 1234 4567",
    rows: [
      ["5 Lessons/Week", "20 Lessons", "£69", "£55"],
      ["4 Lessons/Week", "16 Lessons", "£59", "£47"],
      ["3 Lessons/Week", "12 Lessons", "£48", "£39"],
      ["2 Lessons/Week", "08 Lessons", "£35", "£29"],
    ],
  },
  Europe: {
    currency: "€",
    contact: "+33 1 23 45 67 89",
    rows: [
      ["5 Lessons/Week", "20 Lessons", "€79", "€64"],
      ["4 Lessons/Week", "16 Lessons", "€66", "€54"],
      ["3 Lessons/Week", "12 Lessons", "€52", "€43"],
      ["2 Lessons/Week", "08 Lessons", "€39", "€32"],
    ],
  },
  Australia: {
    currency: "A$",
    contact: "+61 2 1234 4567",
    rows: [
      ["5 Lessons/Week", "20 Lessons", "A$125", "A$99"],
      ["4 Lessons/Week", "16 Lessons", "A$105", "A$84"],
      ["3 Lessons/Week", "12 Lessons", "A$82", "A$66"],
      ["2 Lessons/Week", "08 Lessons", "A$62", "A$50"],
    ],
  },
  UAE: {
    currency: "Dhs",
    contact: "+971 50 123 4567",
    rows: [
      ["5 Lessons/Week", "20 Lessons", "Dhs 315", "Dhs 255"],
      ["4 Lessons/Week", "16 Lessons", "Dhs 265", "Dhs 215"],
      ["3 Lessons/Week", "12 Lessons", "Dhs 215", "Dhs 175"],
      ["2 Lessons/Week", "08 Lessons", "Dhs 155", "Dhs 125"],
    ],
  },
};

export const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer Noorani Qaida, Quran Reading, Tajweed, Hifz Program, Tarjuma & Tafseer, Islamic Studies, and Arabic Language courses for all age groups.",
  },
  {
    question: "Are your classes online or physical?",
    answer:
      "All our classes are conducted online through live one-to-one sessions, allowing students to learn from anywhere in the world.",
  },
  {
    question: "Do you provide female Quran teachers?",
    answer:
      "Yes, we have both male and female qualified tutors so students can choose according to their preference.",
  },
  {
    question: "What is the duration of each class?",
    answer:
      "Each class usually lasts between 30 to 60 minutes depending on the course and student level.",
  },
  {
    question: " Do you offer a free trial class?",
    answer:
      "Yes, we offer a free trial class so students can understand our teaching style before enrolling.",
  },
  {
    question: "What are the class timings?",
    answer:
      "We offer flexible timings so students can schedule classes according to their convenience.",
  },
  {
    question: "Is this suitable for children and adults?",
    answer:
      "Yes, our courses are designed for kids, beginners, and adults of all ages.",
  },
  {
    question: "What do I need for online classes?",
    answer:
      "You only need a smartphone, tablet, or computer with an internet connection.",
  },
];
