import React from "react";

export const HERO_CONTENT = {
  headline: ["Reinvent", "how to manage", "Construction"],
  subheadline:
    "The ultimate web application for builders, construction companies, contractors, and developers to manage their entire business from one centralized platform.",
  primaryButton: "Start 14-day free trial",
  secondaryText: "*No credit card required",
};

export const PRODUCTIVITY_CONTENT = {
  title: "Let’s discover how to increase productivity",
  paragraph:
    "Replace manual registers, Excel sheets, and scattered WhatsApp communication with a single secure web application.",
  blocks: [
    {
      title: "Lead Management",
      desc: "Track leads seamlessly from initial contact to completed projects without losing any critical information.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/65f9ad135af2eac0be3e8dd3_Analytics.svg",
    },
    {
      title: "Site Management",
      desc: "Manage multiple construction sites simultaneously. Monitor manpower and materials with real-time updates.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/65f9ad131d23baf0cc055b8e_Operations.svg",
    },
    {
      title: "Control Purchases",
      desc: "Streamline purchases and supplier management to ensure materials are delivered on time and within budget.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/65f9ad13a3c38b76b6dbf071_Optimization.svg",
    },
  ],
};

export const USP_CONTENT = [
  {
    tag: "CENTRALIZED OPERATIONS",
    title: "Manage business from one platform",
    desc: "Replace manual registers and Excel sheets. Get all your construction management tools in a single, secure web application.",
    image:
      "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/660e47585112dbca98fdba0f_Group%2010007.webp",
    points: [
      "Manage multiple construction sites",
      "Centralized real-time dashboard",
      "Secure web-based access",
    ],
    reverse: false,
  },
  {
    tag: "FINANCIAL CONTROL",
    title: "Client billing and payments made easy",
    desc: "Keep your finances in check with integrated billing and payment management tailored for construction.",
    image:
      "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/660e47757b4123875376b7f9_Group%2010008.webp",
    points: [
      "Manage client billing",
      "Track payments securely",
      "Generate accountant-ready reports",
    ],
    reverse: true,
  },
  {
    tag: "RESOURCE MANAGEMENT",
    title: "Monitor manpower and materials effortlessly",
    desc: "Gain total control over purchases and supplier management, ensuring your sites are never short on essential resources.",
    image:
      "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/660e4776e2e07aa3f2094940_Group%2010004.webp",
    points: [
      "Monitor manpower efficiency",
      "Track material usage",
      "Control purchases & suppliers",
    ],
    reverse: false,
  },
];

export const BENEFITS_CONTENT = {
  title: "A clear path to construction success",
  tabs: [
    {
      title: "Real-time Site Updates",
      paneTitle: "Track progress across sites",
      desc: "Instantly see how your sites are progressing with daily logs, photo uploads, and time-tracking of workers, ensuring zero delays.",
      image:
        "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/661430b74c27867d46aef5d9_Tab%20Image%201.webp",
      svg: (
        <svg
          width="23"
          height="30"
          viewBox="0 0 23 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4286 22.8571C13 22.8571 14.2857 21.5714 14.2857 20C14.2857 18.4286 13 17.1429 11.4286 17.1429C9.85714 17.1429 8.57143 18.4286 8.57143 20C8.57143 21.5714 9.85714 22.8571 11.4286 22.8571ZM20 10H18.5714V7.14286C18.5714 3.2 15.3714 0 11.4286 0C7.48571 0 4.28571 3.2 4.28571 7.14286H7C7 4.7 8.98571 2.71429 11.4286 2.71429C13.8714 2.71429 15.8571 4.7 15.8571 7.14286V10H2.85714C1.28571 10 0 11.2857 0 12.8571V27.1429C0 28.7143 1.28571 30 2.85714 30H20C21.5714 30 22.8571 28.7143 22.8571 27.1429V12.8571C22.8571 11.2857 21.5714 10 20 10ZM20 27.1429H2.85714V12.8571H20V27.1429Z"
            fill="currentColor"
          />
          <circle cx="11.4294" cy="19.7966" r="3.26531" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Supplier & Purchase Mgmt",
      paneTitle: "Control materials easily",
      desc: "Connect directly with suppliers, manage purchase orders, and monitor deliveries seamlessly to keep your construction sites well-stocked.",
      image:
        "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/661430e033bc9ba36b996314_Tab%20Image%202.webp",
      svg: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.987 0C5.811 0 0 5.824 0 13C0 20.176 5.811 26 12.987 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 12.987 0ZM13 23.4C7.254 23.4 2.6 18.746 2.6 13C2.6 7.254 7.254 2.6 13 2.6C18.746 2.6 23.4 7.254 23.4 13C23.4 18.746 18.746 23.4 13 23.4Z"
            fill="currentColor"
          />
          <path
            d="M13.6492 6.5H11.6992V14.3L18.5242 18.395L19.4992 16.796L13.6492 13.325V6.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Automated Reporting",
      paneTitle: "Accountant-ready data",
      desc: "Instantly generate detailed, accountant-ready financial reports, tracking every lead to completed project expenses in a few clicks.",
      image:
        "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/661430dddec9c8921c916bf1_Tab%20Image%203.webp",
      svg: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4 0H2.6C1.17 0 0 1.17 0 2.6V26L5.2 20.8H23.4C24.83 20.8 26 19.63 26 18.2V2.6C26 1.17 24.83 0 23.4 0ZM23.4 18.2H5.2L2.6 20.8V2.6H23.4V18.2Z"
            fill="currentColor"
          />
          <circle cx="9.01474" cy="10.6788" r="1.47568" fill="currentColor" />
          <circle cx="14.0772" cy="10.6788" r="1.47568" fill="currentColor" />
          <circle cx="19.1397" cy="10.6788" r="1.47568" fill="currentColor" />
        </svg>
      ),
    },
  ],
};

export const EXTRA_FEATURES_CONTENT = {
  title: "Other exclusive features..",
  button: "Start 14-day free trial",
  features: [
    {
      id: "w-node-_99d22934-bf62-45bc-045c-fa2e0f127285-844a6359",
      title: "Mobile Dashboard",
      desc: "Manage projects, monitor manpower, and track expenses directly from your phone while on-site.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601787beefa7fee3fb480d7_Mobile%20Dashboard.svg",
      image:
        "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/66017bd8760dfed7279db3c0_Feature%20Block%20Image.webp",
      hasImage: true,
    },
    {
      id: "w-node-c0d8e3fe-7579-c89a-40bb-622c86c5053f-844a6359",
      title: "Time Tracking",
      desc: "Record worker attendance easily and compute payroll seamlessly.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/66017885268a27502fb08915_Time%20Tracking.svg",
      hasImage: false,
    },
    {
      id: "w-node-_964bb31b-9ee7-57ce-7853-d2c202760421-844a6359",
      title: "Automation",
      desc: "Automate purchase orders and routine follow-ups to save time.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601787b3272aa55775e85a3_Automation.svg",
      hasImage: false,
    },
    {
      id: "w-node-_3d722a9a-1690-0c6a-6c53-ab1655d21d54-844a6359",
      title: "Deadline Reminder",
      desc: "Stay ahead of project timelines and payment collections.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601787b5f6d9f8ef5b92c5e_Deadline%20Reminder.svg",
      hasImage: false,
    },
    {
      id: "w-node-d48fbe72-582f-9822-175e-f40dc6043a54-844a6359",
      title: "Easy to use",
      desc: "An intuitive interface designed specifically for construction professionals.",
      icon: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601787b20f072a100b8be0a_Easy%20to%20use.svg",
      hasImage: false,
    },
  ],
};

export const INTEGRATIONS_CONTENT = {
  title: "Over 100+ Integrations",
  button: "Discover More",
  caseStudy: {
    title: "Nirvag Pro lowered project delays by 50%",
    desc: "A powerful construction management system, replacing scattered spreadsheets and WhatsApp groups with a unified platform.",
    stat1: { label: "Project Efficiency", value: "85.5", symbol: "%" },
    stat2: { label: "Cost Savings", value: "35.2", symbol: "%" },
    button: "Read Case Study",
  },
};

export const DEMO_CONTENT = {
  title: ["Over", "12,000", "builders use Nirvag Pro"],
  desc: "Nirvag Pro is the all-in-one software that supports your construction business from leads to completed projects.",
  button1: "Watch Demo",
  button2: "Case Study",
  trustedTitle: "Trusted by top construction companies",
};

export const PRICING_CONTENT = {
  title: "Simple and transparent pricing",
  desc: "The most competitively priced construction software in the market",
  packages: [
    {
      name: "Starter",
      sub: "For small contractors",
      monthlyPrice: 29,
      yearlyPrice: 290,
      recommended: false,
      features: [
        "Up to 3 Active Projects",
        "Lead Tracking",
        "Basic Site Management",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      sub: "For growing builders",
      monthlyPrice: 79,
      yearlyPrice: 790,
      recommended: true,
      features: [
        "Up to 15 Active Projects",
        "Advanced Resource Management",
        "Supplier Management",
        "Client Billing & Payments",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      sub: "For large construction firms",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      recommended: false,
      features: [
        "Unlimited Projects",
        "Custom Automated Reporting",
        "Real-time Dashboard Analytics",
        "Dedicated Account Manager",
        "API Integrations",
      ],
    },
  ],
};

export const FAQS_CONTENT = {
  title: "Frequently asked questions by contractors",
  contactTitle: "For sales enquiry..",
  faqs: [
    {
      q: "Can Nirvag Pro replace my existing Excel sheets and WhatsApp groups?",
      a: "Yes, Nirvag Pro is designed precisely to eliminate scattered data. It centralizes all your leads, site management, manpower, materials, and communication into a single, secure web application.",
    },
    {
      q: "Is it suitable for managing multiple construction sites?",
      a: "Absolutely! Our platform provides a real-time dashboard that allows you to seamlessly monitor progress, resources, and teams across multiple sites simultaneously.",
    },
    {
      q: "How does it handle client billing and payments?",
      a: "Nirvag Pro has an integrated billing module tailored for construction. You can manage invoices, track client payments securely, and generate accountant-ready financial reports.",
    },
    {
      q: "Does it help with supplier and material management?",
      a: "Yes, you can control purchases, track material usage, and manage your suppliers directly through the platform, ensuring your sites never run out of essential resources.",
    },
    {
      q: "Is there a mobile app or dashboard for on-site use?",
      a: "Nirvag Pro offers a responsive mobile dashboard, meaning you can manage projects, track attendance, and monitor expenses directly from your phone while you are on-site.",
    },
  ],
};

export const CTA_CONTENT = {
  title: "All-in-one Construction Management System",
  button: "Start 14-day free trial",
};
