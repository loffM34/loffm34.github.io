import waveWatchSearch from "../images/waveWatchSearch.png";
import waveWatchLogo from "../images/waveWatchLogo.png";
import waveWatchForecast from "../images/waveWatchForecast.png";
import wavewatchAI from "../images/wavewatchAI.png";
import SampleWaveAIVideo from "../images/SampleWaveAIVideo.mp4";
import clubCompassHome from "../images/clubCompassHome.png";
import clubCompasReviews from "../images/clubCompassReview.png";
import clubCompasClubPage from "../images/clubCompassClubPage.png";
import moola1 from "../images/MoolaAnalyticScreen.png";
import moola2 from "../images/MoolaNewBotModal.png";
import moola3 from "../images/moolaHomePage.jpg";
import macroVision1 from "../images/macroVisionLunch.png";
import macroVision2 from "../images/macroVisionVision.png";
import macroVisionLogo from "../images/MacroVisionLogo.png";
import flareLogo from "../images/FlareLogo.jpg";
import flareAIImage from "../images/flareAIImage.png";
import flareExtension from "../images/flareExtension.png";
import flareScreenShot2 from "../images/flareScreenShot2.png";
import spartanGamesLogo from "../images/spartanGamesLogo.png";
import spartanGamesLeaderboard from "../images/SpartanGamesLeaderboard.png";
import spartanGamesSubmit from "../images/SpartanGamesSubmit.png";
import spartanGamesAdmin from "../images/spartanGamesAdmin.png";

// Import icons
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const allProjectsData = [
  {},

  {
    id: 1,
    ProjectHeader: {
      title: "Club Compass",
      publishDate: "Mar 2025 - Present",
      tags: "Campus / Web App",
    },
    ProjectImages: [
      { id: 1, title: "Club Compass Home Page", img: clubCompassHome },
      { id: 2, title: "Club Info and Reviews", img: clubCompasClubPage },
      { id: 3, title: "Student Dashboard View", img: clubCompasReviews },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Design a student-centered platform where users can browse, review, and discover clubs on campus to improve engagement and transparency.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "Node.js"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Club Compass is a review and discovery web app that lets students learn more about campus organizations, search for specific clubs/organizations, and leave feedback about their experiences with these different clubs.",
        },
        {
          id: 2,
          details:
            "The frontend was built with vanilla HTML, CSS, and JavaScript, while a simple Node.js backend handles form submissions, comment storage, and club directory updates. The app includes a searchable list, club pages with ratings and comments, and a clean UI for exploration.",
        },
        {
          id: 3,
          details:
            "The biggest challenge was collaborating with a team of people who had vastly different skill levels. Being able to properly distribute work and provide help to my teammates with debugging and testing was essential to this projects success. A technical challenge we faced was developing a scalable review and feedback system that encouraged honest participation without requiring full logins. Striking a balance between functionality and simplicity for college users also meant trimming features that added clutter rather than value.",
        },
        {
          id: 4,
          details:
            "This project was driven by real student feedback and built to foster deeper club involvement on campus. It was my first time developing a review-based system and taught me a lot about user trust, basic moderation systems, and responsive content layout.",
        },
      ],
      ProjectLinksHeading: "Project Links",
      ProjectLinks: [
        {
          id: 1,
          name: "GitHub",
          icon: <FiGithub />,
          url: "https://github.com/loffM34/Club-Compass",
        },
      ],
    },
  },

  {
    id: 2,
    ProjectHeader: {
      title: "Moola",
      publishDate: "Mar 2025 - Present",
      tags: "Finance / Frontend",
    },
    ProjectImages: [
      { id: 1, title: "Moola Dashboard", img: moola1 },
      { id: 2, title: "Moola Budget Chart", img: moola2 },
      { id: 3, title: "Moola Mobile View", img: moola3 },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a clean, modern budgeting and expense tracking app that empowers users to manage their personal finances with visual insights and an intuitive UI.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "MongoDB",
            "Node.js",
            "Express.js",
            "Bootstrap",
            "Alpaca API",
            "Python",
            "Pytorch",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Moola is a lightweight finance tracker designed to make personal budgeting simple and visually engaging. Users can track income and expenses, categorize transactions, and view monthly trends through interactive charts and graphs.",
        },
        {
          id: 2,
          details:
            "The app features authentication via MongoDB, secure real-time data storage, and responsive design powered by Bootstrap.",
        },
        {
          id: 3,
          details:
            "A major challenge was designing a UX flow that didn't overwhelm users while still allowing for features such as multiple trading bots, bot trading analytics and current stock data. Ensuring data consistency, especially with live updates and editing, also required careful MongoDB cluster planning.",
        },
        {
          id: 4,
          details:
            "Through Moola, I deepened my frontend experience while also learning how to work with financial logic, user-centric dashboards, real-time UI syncing, and training an AI model using backtesting. It taught me how to maintain proper programming etique on both frontend and backend focusing on maintaining data integrity.",
        },
      ],
      ProjectLinksHeading: "Project Links",
      ProjectLinks: [
        {
          id: 1,
          name: "GitHub",
          icon: <FiGithub />,
          url: "https://github.com/loffM34/Investment-AI-MOOLA-",
        },
      ],
    },
  },
  {
    id: 3,
    ProjectHeader: {
      title: "Marcovision",
      publishDate: "Mar 2025 - Present",
      tags: "AI / Full Stack",
    },
    ProjectImages: [
      { id: 1, title: "Marcovision Upload UI", img: macroVisionLogo },
      { id: 2, title: "Marcovision Nutrition Results", img: macroVision2 },
      { id: 3, title: "Marcovision User Dashboard", img: macroVision1 },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a nutrition analysis platform that allows users to upload food images and receive real-time nutritional information using a custom-trained image classifier and USDA food data.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "Next.js", "Supabase", "PyTorch", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Marcovision is a full-stack AI application that helps users understand what's on their plate—literally. By uploading an image of a meal, users receive a breakdown of calories, and macronutrients powered by a custom-trained image classification model and USDA's open food database.",
        },
        {
          id: 2,
          details:
            "The project combines React and Next.js on the frontend with Supabase for authentication and meal history tracking. Pytorch was used to build a lightweight model capable of identifying common foods from user-submitted photos, and all nutrition data is served dynamically via API requests.",
        },
        {
          id: 3,
          details:
            "A key challenge was getting consistent, accurate classification results from user-uploaded images, especially those taken in poor lighting or at odd angles. Bridging the gap between AI model predictions and usable food entries in the USDA database required fuzzy string matching and robust error handling.",
        },
        {
          id: 4,
          details:
            "This project pushed my full-stack development skills and introduced me to practical ML deployment considerations. From training and exporting a Pytorch model to architecting a user-friendly frontend with image preview, upload flow, and persistent logging, Marcovision taught me how to balance usability with technical complexity.",
        },
      ],
      ProjectLinksHeading: "Project Links",
      ProjectLinks: [
        {
          id: 1,
          name: "GitHub",
          icon: <FiGithub />,
          url: "https://github.com/mdox517/quackathon",
        },
      ],
    },
  },
  {
    id: 3,
    ProjectHeader: {
      title: "Wave Watch",
      publishDate: "Mar 2025 - Present",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Wave Watch Forecast",
        img: waveWatchForecast,
      },
      {
        id: 2,
        title: "Wave Watch AI",
        img: wavewatchAI,
      },
      {
        id: 3,
        title: "Sample Wave AI Video",
        img: SampleWaveAIVideo,
      },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Design and develop a visually engaging surf forecast web application that provides users with real-time wave data and surf conditions, inspired by Surfline.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.JS",
            "Typescript",
            "TailwindCSS",
            "PostgreSQL",
            "Supabase",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Wave Watch is a surf-focused web app built to help surfers quickly understand local wave conditions through a modern, responsive UI. Inspired by the usability of Surfline but redesigned with my own aesthetic direction, the application features forecast summaries, swell graphs, wind info, and tide times with dynamic styling and clean typography.",
        },
        {
          id: 2,
          details:
            "I used Next.JS and TailwindCSS for the frontend layout and responsiveness and PostgreSQL/Supabase backend to handle user authentication and storing surf data. The forecast data is parsed and displayed in a modular layout optimized for both desktop and mobile users.",
        },
        {
          id: 3,
          details:
            "One of the biggest challenges I faced was structuring and styling complex forecast data in a way that felt clean and digestible. Surf data can be dense and hard to read, so a lot of attention went into visual hierarchy, iconography, and responsive design decisions.",
        },
        {
          id: 4,
          details:
            "This project helped refine my frontend development skills, especially with regard to working with design systems, modular components, and real-world data formatting. It also gave me deeper insight into the needs of surfers from a UI/UX perspective, combining my personal interest in surfing with my development experience.",
        },
      ],
      ProjectLinksHeading: "Project Links",
      ProjectLinks: [],
    },
  },
  {
    id: 5,
    ProjectHeader: {
      title: "Flare",
      publishDate: "Mar 2026",
      tags: "AI / Chrome Extension",
    },
    ProjectImages: [
      { id: 1, title: "Flare Logo", img: flareLogo },
      { id: 2, title: "Flare AI Detection in Action", img: flareAIImage },
      { id: 3, title: "Flare Chrome Extension", img: flareExtension },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Build a Chrome extension that passively detects AI-generated text and images on any webpage, providing users with real-time scoring and visual indicators as they browse the web.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "TypeScript",
            "React",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "FastAPI",
            "PyTorch",
            "Docker",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Flare is a Chrome extension that runs directly in your browser, passively analyzing every page you visit and scoring text blocks and images for AI-generation probability. A small floating badge shows the overall score at a glance, while a side panel breaks down every detected block with individual scores, confidence tiers, and explanations. Flagged content can be automatically blurred until you choose to reveal it.",
        },
        {
          id: 2,
          details:
            "The architecture spans three layers: a Chrome Extension frontend built with React, TypeScript, and Vite; a Node.js Express gateway with LRU caching and rate limiting; and a Python FastAPI model service running a DistilBERT classifier fine-tuned on the HC3 dataset. The content script has dedicated extraction logic for platforms like Twitter, LinkedIn, Google Docs, Wikipedia, and Reddit.",
        },
        {
          id: 3,
          details:
            "A major challenge was building platform-specific content extractors that could handle SPAs, infinite scroll, and dynamic content loading. We implemented MutationObservers and debounced rescans to handle client-side routing changes. Another challenge was achieving reliable image analysis — images are compressed to 512px JPEG on the client side before being sent through the detection pipeline.",
        },
        {
          id: 4,
          details:
            "The project features an adapter pattern for swapping detection providers, temperature-calibrated confidence scores, optional LLM-generated explanations for flagged content, and a configurable threshold slider. CI/CD is handled through GitHub Actions with Docker deployment to Render.",
        },
      ],
      ProjectLinksHeading: "Project Links",
      ProjectLinks: [
        {
          id: 1,
          name: "GitHub",
          icon: <FiGithub />,
          url: "https://github.com/loffM34/quackhacks26",
        },
        {
          id: 2,
          name: "DevPost",
          icon: <FiExternalLink />,
          url: "https://devpost.com/software/flare-5wzyx8",
        },
      ],
    },
  },
  {
    id: 6,
    ProjectHeader: {
      title: "Spartan Games",
      publishDate: "2025 - Present",
      tags: "Full-Stack / Gamification",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Spartan Games Leaderboard",
        img: spartanGamesLeaderboard,
      },
      {
        id: 2,
        title: "Spartan Games Submit Activity",
        img: spartanGamesSubmit,
      },
      { id: 3, title: "Spartan Games Admin Dashboard", img: spartanGamesAdmin },
    ],
    ProjectInfo: {
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Design and develop a gamified competition tracking platform for inter-fraternity activities, featuring real-time leaderboards, activity submissions with proof, and comprehensive admin tools for managing weekly competition cycles.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js 14",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "Supabase",
            "Vercel",
            "Nodemailer",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Spartan Games is a web application designed to gamify fraternity activities. Members can log activities like running, lifting, and sports to earn points for themselves and their teams. The application features real-time leaderboards, weekly competition cycles, and comprehensive administrative tools for managing the entire season.",
        },
        {
          id: 2,
          details:
            "Built with Next.js 14's App Router and TypeScript, the frontend uses Tailwind CSS and shadcn/ui components for a polished, responsive interface. The backend is powered entirely by Supabase — PostgreSQL for data, Auth for secure login, Storage for submission proof images, and Realtime for instant leaderboard updates.",
        },
        {
          id: 3,
          details:
            "A key challenge was building a robust admin dashboard that allows administrators to review and approve or reject activity submissions, manage scoring rules and activity types, finalize weekly scores and reset competition cycles, and view historical data with exportable reports. Row Level Security policies in Supabase ensure only authorized admins can access these features.",
        },
        {
          id: 4,
          details:
            "The project also features automated cron jobs for weekly score finalization, email notifications via Nodemailer, and a team management system for organizing members into competing groups. Deployment is handled through Vercel for seamless CI/CD integration.",
        },
      ],
      ProjectLinksHeading: "Project Links",
      ProjectLinks: [
        {
          id: 1,
          name: "GitHub",
          icon: <FiGithub />,
          url: "https://github.com/Sigep-Spartan-Games/spartan-games",
        },
      ],
    },
  },
];
