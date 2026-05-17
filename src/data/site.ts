export type Course = {
  slug: string;
  title: string;
  category: "Foundation" | "Recitation" | "Memorization" | "Islamic Studies" | "Language";
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
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/teachers/male", label: "Teachers" },
  { href: "/fee-plans", label: "Fee Plans" },
  { href: "/materials", label: "Materials" },
  { href: "/registration", label: "Register" },
  { href: "/contact", label: "Contact" }
];

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    category: "Foundation",
    image: "/images/cards/card1.webp",
    shortDescription: "A beginner-friendly path for Arabic letters, sounds, and correct Quran reading foundations.",
    description: "Build a confident base in Arabic letter recognition, pronunciation, joining rules, and early Quran reading with patient one-on-one support.",
    duration: "8-12 weeks",
    schedule: "Flexible 30-minute live lessons",
    objectives: ["Recognize Arabic letters", "Understand joining rules", "Practice makharij", "Read short Quranic words"],
    outcomes: ["Strong reading foundation", "Improved pronunciation", "Confidence for Quran Reading"],
    fees: { USA: "$45/month", UK: "£39/month", Europe: "€42/month", Australia: "A$69/month", UAE: "Dhs 165/month" }
  },
  {
    slug: "quran-reading",
    title: "Quran Reading",
    category: "Recitation",
    image: "/images/cards/card2.webp",
    shortDescription: "Guided Quran reading lessons focused on fluency, accuracy, and daily recitation habits.",
    description: "Learn to read the Quran with fluency through guided recitation, correction, and structured home practice.",
    duration: "3-6 months",
    schedule: "2-5 classes per week",
    objectives: ["Improve fluency", "Correct common reading mistakes", "Develop daily recitation rhythm", "Read with teacher feedback"],
    outcomes: ["More accurate recitation", "Regular Quran routine", "Better reading confidence"],
    fees: { USA: "$55/month", UK: "£45/month", Europe: "€52/month", Australia: "A$79/month", UAE: "Dhs 199/month" }
  },
  {
    slug: "tajweed",
    title: "Tajweed Course",
    category: "Recitation",
    image: "/images/cards/card3.webp",
    shortDescription: "Learn the rules of Tajweed with practical correction and live recitation assessment.",
    description: "A focused Tajweed course covering articulation points, characteristics of letters, noon sakinah, meem sakinah, madd, and waqf rules.",
    duration: "4-8 months",
    schedule: "3 live sessions per week",
    objectives: ["Study core Tajweed rules", "Apply rules in recitation", "Receive live correction", "Practice lesson-by-lesson revision"],
    outcomes: ["Rule-based recitation", "Cleaner makharij", "Preparation for advanced recitation"],
    fees: { USA: "$65/month", UK: "£55/month", Europe: "€62/month", Australia: "A$95/month", UAE: "Dhs 240/month" }
  },
  {
    slug: "hifz",
    title: "Hifz Program",
    category: "Memorization",
    image: "/images/cards/card4.webp",
    shortDescription: "Structured Quran memorization with revision planning, teacher tracking, and parent updates.",
    description: "Memorize the Quran through a realistic plan that balances new lesson, recent revision, and old revision with teacher accountability.",
    duration: "Personalized plan",
    schedule: "4-6 classes per week",
    objectives: ["Create memorization goals", "Strengthen revision habits", "Track daily progress", "Improve retention"],
    outcomes: ["Consistent memorization", "Reliable revision cycle", "Long-term retention"],
    fees: { USA: "$85/month", UK: "£69/month", Europe: "€79/month", Australia: "A$125/month", UAE: "Dhs 315/month" }
  },
  {
    slug: "islamic-studies",
    title: "Islamic Studies",
    category: "Islamic Studies",
    image: "/images/cards/card5.webp",
    shortDescription: "Age-appropriate lessons in duas, Seerah, manners, worship, and Islamic values.",
    description: "A balanced Islamic Studies program for children and families covering practical worship, character, stories of prophets, and daily duas.",
    duration: "12 weeks per level",
    schedule: "Weekly or biweekly lessons",
    objectives: ["Learn daily duas", "Understand Islamic manners", "Study Seerah basics", "Connect knowledge with daily life"],
    outcomes: ["Stronger Islamic identity", "Practical worship knowledge", "Positive character building"],
    fees: { USA: "$40/month", UK: "£35/month", Europe: "€39/month", Australia: "A$59/month", UAE: "Dhs 150/month" }
  },
  {
    slug: "arabic-language",
    title: "Arabic Language",
    category: "Language",
    image: "/images/cards/card6.webp",
    shortDescription: "Arabic reading, vocabulary, and grammar foundations for Quran learners.",
    description: "Learn Arabic language essentials that support Quran reading and understanding, including vocabulary, sentence patterns, and grammar basics.",
    duration: "6 months",
    schedule: "2-3 classes per week",
    objectives: ["Build vocabulary", "Understand simple grammar", "Read Arabic passages", "Connect Arabic with Quranic phrases"],
    outcomes: ["Improved comprehension", "Stronger Arabic literacy", "Readiness for deeper Quran study"],
    fees: { USA: "$60/month", UK: "£49/month", Europe: "€56/month", Australia: "A$89/month", UAE: "Dhs 220/month" }
  }
];

export const teachers = {
  male: [
    { name: "Qari Abdullah Rahman", qualification: "Ijazah in Hafs", experience: "9 years", languages: "English, Arabic, Urdu", specialization: "Tajweed and Hifz", image: "/images/teachers/mufti-1.webp" },
    { name: "Mufti Hamid Usman", qualification: "Dars-e-Nizami", experience: "12 years", languages: "English, Arabic", specialization: "Islamic Studies", image: "/images/teachers/mufti-2.webp" },
    { name: "Sheikh Yusuf Karim", qualification: "MA Islamic Studies", experience: "7 years", languages: "English, Urdu", specialization: "Quran Reading", image: "/images/teachers/mufti-3.webp" }
  ],
  female: [
    { name: "Ustadha Maryam Noor", qualification: "Quran and Tajweed Diploma", experience: "8 years", languages: "English, Urdu", specialization: "Kids Quran Reading", image: "/images/teachers/qaria-1.webp" },
    { name: "Ustadha Aisha Farooq", qualification: "Arabic Language Diploma", experience: "6 years", languages: "English, Arabic", specialization: "Arabic and Noorani Qaida", image: "/images/teachers/qaria-2.webp" },
    { name: "Ustadha Hiba Salman", qualification: "Hifz Certification", experience: "10 years", languages: "English, Urdu, Hindi", specialization: "Female Hifz Mentoring", image: "/images/teachers/qaria-3.webp" }
  ]
};

export const materials: Material[] = [
  { slug: "tajweed-guide", title: "Tajweed Quick Guide", description: "A concise reference for common Tajweed rules with practice checkpoints.", level: "Beginner to Intermediate", downloadLabel: "Open Tajweed Guide" },
  { slug: "quran-basics", title: "Quran Reading Basics", description: "Foundational reading notes for students beginning Quranic Arabic.", level: "Beginner", downloadLabel: "Open Reading Notes" },
  { slug: "daily-duas", title: "Daily Duas Collection", description: "Everyday duas for children and families with transliteration support.", level: "All levels", downloadLabel: "Open Dua Collection" }
];

export const pricing = {
  USA: { currency: "$", contact: "+1 800 123 4567", rows: [["5 Lessons/Week", "20 Lessons", "$85", "$69"], ["4 Lessons/Week", "16 Lessons", "$72", "$58"], ["3 Lessons/Week", "12 Lessons", "$58", "$47"], ["2 Lessons/Week", "08 Lessons", "$42", "$34"]] },
  UK: { currency: "£", contact: "+44 20 1234 4567", rows: [["5 Lessons/Week", "20 Lessons", "£69", "£55"], ["4 Lessons/Week", "16 Lessons", "£59", "£47"], ["3 Lessons/Week", "12 Lessons", "£48", "£39"], ["2 Lessons/Week", "08 Lessons", "£35", "£29"]] },
  Europe: { currency: "€", contact: "+33 1 23 45 67 89", rows: [["5 Lessons/Week", "20 Lessons", "€79", "€64"], ["4 Lessons/Week", "16 Lessons", "€66", "€54"], ["3 Lessons/Week", "12 Lessons", "€52", "€43"], ["2 Lessons/Week", "08 Lessons", "€39", "€32"]] },
  Australia: { currency: "A$", contact: "+61 2 1234 4567", rows: [["5 Lessons/Week", "20 Lessons", "A$125", "A$99"], ["4 Lessons/Week", "16 Lessons", "A$105", "A$84"], ["3 Lessons/Week", "12 Lessons", "A$82", "A$66"], ["2 Lessons/Week", "08 Lessons", "A$62", "A$50"]] },
  UAE: { currency: "Dhs", contact: "+971 50 123 4567", rows: [["5 Lessons/Week", "20 Lessons", "Dhs 315", "Dhs 255"], ["4 Lessons/Week", "16 Lessons", "Dhs 265", "Dhs 215"], ["3 Lessons/Week", "12 Lessons", "Dhs 215", "Dhs 175"], ["2 Lessons/Week", "08 Lessons", "Dhs 155", "Dhs 125"]] }
};

export const faqs = [
  { question: "How do I enroll in Quran Academy?", answer: "Choose a course, submit the registration form, and our coordinator will contact you to arrange a free trial class." },
  { question: "Are female teachers available?", answer: "Yes. Female teachers are available for girls, women, and younger children based on preference and availability." },
  { question: "What are the class timings?", answer: "Timings are flexible. We schedule one-on-one lessons around the student timezone and teacher availability." },
  { question: "Which countries are supported?", answer: "We support students in the USA, UK, Europe, Australia, UAE, and other regions through online live classes." }
];
