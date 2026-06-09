export type MarketLocale = "en" | "ar";

export type TextLink = {
  label: string;
  href: string;
};

export type BulletSection = {
  id?: string;
  title: string;
  body: string;
  bestFor?: string[];
  examples?: string[];
  points?: string[];
  systems?: string[];
};

export type UseCase = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string[];
};

const en = {
  locale: "en" as const,
  brand: "Servicely",
  common: {
    bestFor: "Best for",
    examples: "Examples",
    possibleSystems: "Possible systems",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    startProject: "Start a Project",
    bookConsultation: "Book a Free Consultation",
    seeWhatWeBuild: "See What We Build",
    contactWhatsapp: "Contact Us on WhatsApp",
  },
  home: {
    hero: {
      eyebrow: "AI, Automation & Business Systems",
      title:
        "AI, Automation & Custom Software for Businesses in Lebanon, Iraq, and Dubai",
      body:
        "We build practical AI assistants, automation systems, websites, mobile apps, dashboards, and business tools for companies that want to serve customers faster, capture more inquiries, and reduce manual work.",
      trust:
        "Built for clinics, real estate agencies, premium service businesses, training centers, and companies that rely on online inquiries, appointments, WhatsApp, and customer follow-up.",
      ctas: [
        { label: "Book a Free Consultation", href: "/contact" },
        { label: "See What We Build", href: "/services" },
      ],
    },
    improveTitle: "What we help you improve",
    improveBody:
      "We focus on customer handling, inquiry capture, automation, websites, apps, and business systems that make daily work cleaner.",
    marketsTitle: "Built for Lebanon, Iraq, and Dubai",
    industriesTitle: "Industries we help",
    whyTitle: "Why work with us?",
    whyBody:
      "We are a small technical team built for businesses that want direct access to the people doing the work. No unnecessary agency layers, no outsourcing your project to unknown developers, and no overcomplicated platforms when a practical system is enough.",
    practicalTitle: "Practical systems, not unnecessary complexity",
    practicalBody:
      "Most businesses do not need a giant platform. They need a useful system that solves a clear problem.",
    supportTitle: "Support, hosting, and maintenance",
    supportBody:
      "We provide standard post-launch support based on the agreed support window. For higher-priority response, extended coverage, monitoring, urgent fixes, and 24/7 support, maintenance subscriptions are available.",
    finalCtaTitle: "Let's build the system your business actually needs",
    finalCtaBody:
      "Tell us what you want to improve: customer support, appointment requests, lead follow-up, WhatsApp workflows, internal tools, mobile apps, dashboards, or your website. We will help you define the simplest useful version and turn it into a working system.",
  },
  improve: [
    {
      id: "ai-customer-automation",
      title: "AI & customer automation",
      body:
        "We build AI assistants and automation systems that help your business handle repetitive questions, collect customer requests, qualify leads, and hand serious inquiries to your team.",
      bestFor: [
        "clinics",
        "real estate agencies",
        "service businesses",
        "training centers",
        "WhatsApp-heavy businesses",
        "businesses receiving repeated inquiries",
      ],
      examples: [
        "AI appointment request assistant",
        "AI customer support",
        "WhatsApp inquiry assistant",
        "FAQ assistant",
        "lead qualification assistant",
        "customer request collection",
        "staff handoff system",
        "after-hours inquiry capture",
      ],
    },
    {
      id: "websites-web-apps-portals",
      title: "Websites, web apps & portals",
      body:
        "We build modern websites and web applications connected to real business goals. The focus is not cheap brochure websites, but pages and portals that help customers request appointments, submit inquiries, view listings, register for services, or contact your team.",
      examples: [
        "clinic websites",
        "real estate websites",
        "training center websites",
        "customer portals",
        "admin dashboards",
        "booking/request flows",
        "inquiry management systems",
        "internal business tools",
      ],
    },
    {
      id: "mobile-apps-store-deployment",
      title: "Mobile apps & deployment",
      body:
        "We build Android and iOS apps for businesses that need a mobile experience for customers, employees, agents, students, patients, or internal teams.",
      examples: [
        "customer apps",
        "clinic apps",
        "real estate apps",
        "booking/request apps",
        "employee apps",
        "student apps",
        "service request apps",
        "Google Play deployment",
        "App Store deployment",
      ],
    },
    {
      id: "whatsapp-lead-automation",
      title: "WhatsApp & lead automation",
      body:
        "Many businesses in Lebanon, Iraq, and Dubai depend heavily on WhatsApp. We help organize conversations, collect the right information, qualify leads, and hand inquiries to the right person.",
      examples: [
        "WhatsApp inquiry flow",
        "customer information collection",
        "appointment request collection",
        "real estate buyer/renter qualification",
        "clinic appointment requests",
        "service request automation",
        "owner/staff handoff",
        "after-hours message capture",
        "lead tracking",
      ],
    },
    {
      id: "reporting-business-visibility",
      title: "Reporting & business visibility",
      body:
        "We build dashboards and reporting systems that help owners and managers understand what is happening in the business. The goal is better visibility, faster decisions, and less manual spreadsheet work.",
      examples: [
        "lead dashboards",
        "appointment dashboards",
        "inquiry tracking",
        "customer request reports",
        "sales/inquiry summaries",
        "branch performance reports",
        "staff response tracking",
        "service request dashboards",
      ],
    },
    {
      id: "support-hosting-maintenance",
      title: "Support, hosting & maintenance",
      body:
        "We can support your system after launch and deploy it on reliable cloud or partner infrastructure with SSL, backups, monitoring, deployment management, security updates, and uptime monitoring options.",
      examples: [
        "standard post-launch support",
        "priority maintenance subscriptions",
        "monitoring",
        "backup checks",
        "security updates",
        "deployment management",
        "SLA-backed infrastructure options up to 99.99%, depending on architecture and hosting plan",
      ],
    },
  ] satisfies BulletSection[],
  markets: [
    {
      title: "Lebanon",
      body:
        "Many Lebanese businesses need affordable but professional digital systems that help them compete, automate repetitive work, and improve customer experience.",
      points: [
        "dental clinics",
        "aesthetic clinics",
        "real estate agencies",
        "training centers",
        "professional services",
        "service companies",
        "businesses with repeated customer inquiries",
      ],
    },
    {
      title: "Iraq",
      body:
        "Iraq has many growing businesses that need stronger digital presence, better customer handling, and modern online systems.",
      points: [
        "clinics",
        "medical centers",
        "real estate agencies",
        "education/training centers",
        "hospitality businesses",
        "premium service companies",
        "multi-branch businesses",
      ],
    },
    {
      title: "Dubai / UAE",
      body:
        "Dubai businesses usually expect a more premium digital experience. The opportunity is not only to have a website, but to make the full customer journey smarter.",
      points: [
        "aesthetic clinics",
        "dental clinics",
        "medical centers",
        "real estate agencies",
        "luxury service businesses",
        "hospitality/tourism businesses",
        "professional service companies",
        "premium brands",
      ],
    },
  ],
  industries: [
    {
      id: "clinics-medical-centers",
      title: "Clinics and medical centers",
      body:
        "Clinics need trust, speed, and clear communication. We help capture appointment requests, answer repeated questions with AI, route inquiries, and hand serious requests to staff.",
      systems: [
        "AI appointment request assistant",
        "AI customer support for repetitive questions",
        "WhatsApp inquiry assistant",
        "branch-based request routing",
        "after-hours appointment request capture",
        "modern clinic website",
        "treatment/service pages",
        "admin dashboard for requests",
      ],
    },
    {
      id: "dental-aesthetic-clinics",
      title: "Dental and aesthetic clinics",
      body:
        "Dental and aesthetic clinics need fast mobile contact, clean service pages, appointment request flows, and a premium digital experience that builds confidence.",
      systems: [
        "treatment pages",
        "before/after content structure",
        "AI service FAQ assistant",
        "appointment request flow",
        "WhatsApp request intake",
        "branch or doctor routing",
        "patient inquiry dashboard",
      ],
    },
    {
      id: "real-estate-agencies",
      title: "Real estate agencies",
      body:
        "Real estate teams receive repeated questions about availability, price, location, viewings, and property details. We help qualify buyers or renters before they reach the agent.",
      systems: [
        "property listing website",
        "AI real estate inquiry assistant",
        "buyer/renter qualification flow",
        "WhatsApp follow-up system",
        "viewing request form",
        "agent dashboard",
        "property admin panel",
        "lead tracking dashboard",
      ],
    },
    {
      id: "premium-service-businesses",
      title: "Premium service businesses",
      body:
        "Premium businesses need their digital experience to match their real-world service quality. We build inquiry flows, AI support assistants, request systems, portals, and automation tools.",
      systems: [
        "premium website refresh",
        "AI customer support",
        "consultation request flow",
        "WhatsApp automation",
        "customer intake forms",
        "client portals",
        "service request systems",
        "reporting dashboards",
      ],
    },
    {
      id: "training-education",
      title: "Training centers and education businesses",
      body:
        "Training centers need to explain courses clearly, capture student inquiries, handle repetitive questions, and manage registrations.",
      systems: [
        "course websites",
        "student registration forms",
        "student inquiry assistant",
        "course FAQ assistant",
        "payment-ready landing pages",
        "admin dashboards",
        "student request tracking",
        "WhatsApp inquiry automation",
      ],
    },
    {
      id: "hospitality-tourism",
      title: "Hospitality, tourism, and travel businesses",
      body:
        "Hotels, travel agencies, and tourism businesses depend on fast communication, clear information, and smooth customer requests.",
      systems: [
        "booking inquiry flows",
        "AI FAQ assistant",
        "WhatsApp customer support",
        "service request forms",
        "tour package websites",
        "customer intake forms",
        "request dashboards",
        "multilingual content structure",
      ],
    },
    {
      id: "multi-branch-businesses",
      title: "Multi-branch businesses",
      body:
        "Businesses with multiple branches need clear routing, consistent reporting, and better visibility.",
      systems: [
        "branch-specific contact flows",
        "branch routing",
        "centralized customer request management",
        "branch reporting dashboards",
        "staff assignment tools",
        "multi-branch websites",
        "inquiry tracking by location",
        "owner dashboard",
      ],
    },
  ] satisfies BulletSection[],
  useCases: [
    {
      id: "clinic-appointment-assistant",
      title: "AI appointment request assistant for clinics",
      problem:
        "Patients ask repetitive questions and may leave if the website or contact flow is slow.",
      solution:
        "An AI assistant collects appointment requests, answers basic non-medical questions, and hands the request to staff when needed.",
      result: [
        "faster response",
        "fewer missed inquiries",
        "better patient experience",
        "less repetitive work for staff",
        "more organized appointment requests",
      ],
    },
    {
      id: "clinic-customer-support",
      title: "AI customer support for clinics",
      problem:
        "Clinic staff answer the same questions every day, especially about services, hours, locations, branches, and contact details.",
      solution:
        "An AI assistant answers basic service, location, opening hour, branch, and contact questions, then collects the patient's request for the team.",
      result: [
        "patients get faster answers",
        "staff save time",
        "after-hours inquiries are captured",
        "the clinic looks more professional",
        "requests become easier to track",
      ],
    },
    {
      id: "real-estate-lead-qualification",
      title: "Real estate lead qualification",
      problem:
        "Agents receive many incomplete inquiries such as price, availability, or location requests without enough context.",
      solution:
        "An AI or automated flow asks for budget, location, property type, buying or renting, number of bedrooms, timeline, viewing time, and contact details.",
      result: [
        "agents receive cleaner leads",
        "less time wasted",
        "faster follow-up",
        "better customer organization",
        "easier lead tracking",
      ],
    },
    {
      id: "whatsapp-support-handoff",
      title: "WhatsApp support and handoff",
      problem:
        "Many businesses rely on WhatsApp, but conversations become messy, repeated, or handled inconsistently.",
      solution:
        "A WhatsApp automation flow collects the customer's request, organizes the information, answers repeated questions, and hands off serious inquiries.",
      result: [
        "faster response",
        "cleaner customer information",
        "better staff handoff",
        "fewer missed messages",
        "more organized sales/support process",
      ],
    },
    {
      id: "premium-website-modernization",
      title: "Premium website modernization",
      problem:
        "The business looks good offline, but the website feels old, slow, unclear, or unprofessional.",
      solution:
        "A modern website with clear service pages, mobile design, inquiry forms, WhatsApp contact, appointment requests, and optional AI/request integration.",
      result: [
        "stronger trust",
        "better customer action",
        "easier contact",
        "clearer service presentation",
        "improved online image",
      ],
    },
    {
      id: "training-center-registration",
      title: "Training center registration flow",
      problem:
        "Training centers receive repeated questions about courses, prices, schedules, registration, and certificates across many channels.",
      solution:
        "A course website or landing page with registration forms, AI FAQ assistant, WhatsApp automation, and an admin dashboard.",
      result: [
        "better student inquiry collection",
        "less repetitive answering",
        "easier registration management",
        "clearer course presentation",
        "faster follow-up",
      ],
    },
    {
      id: "multi-branch-routing",
      title: "Multi-branch inquiry routing",
      problem:
        "Businesses with multiple branches often struggle to route customers to the right location or team.",
      solution:
        "A branch-based contact system asks for location, preferred branch, or service need, then routes the request correctly.",
      result: [
        "fewer wrong inquiries",
        "faster response",
        "better branch organization",
        "clearer reporting for owners",
        "improved customer experience",
      ],
    },
  ] satisfies UseCase[],
  whyUs: {
    heroTitle: "Small technical team. Direct builders. Practical systems.",
    heroBody:
      "We are built for businesses that want direct access to the people doing the work, clear scope, practical execution, and support after launch.",
    sections: [
      {
        title: "Direct communication",
        body:
          "You work directly with the people building your system. That means clearer communication, faster decisions, less misunderstanding, and better control over scope.",
      },
      {
        title: "Practical systems",
        body:
          "We do not build complexity just to make the project look bigger. We focus on the useful system your business actually needs.",
      },
      {
        title: "AI-assisted development workflow",
        body:
          "We use modern AI-assisted development tools to plan, code, debug, document, test ideas, and improve speed. The final system is still planned, reviewed, and delivered by real developers.",
      },
      {
        title: "Clear scope and delivery",
        body:
          "Before building, we help define the problem, required features, first version, realistic timeline, and support needs after launch.",
      },
      {
        title: "Small team advantage",
        body:
          "A small team means direct access, lower overhead, faster communication, more flexibility, and a closer client relationship.",
      },
    ],
  },
  about: {
    heroTitle:
      "A practical software and automation team for Lebanon, Iraq, and Dubai",
    heroBody:
      "We help businesses build useful digital systems: AI assistants, automation, websites, mobile apps, dashboards, portals, and internal tools that solve real business problems.",
    processTitle: "How we work",
    process: [
      "Understand the problem",
      "Define the scope",
      "Suggest the best practical solution",
      "Build the first version",
      "Test and revise",
      "Deploy",
      "Support after launch if needed",
    ],
    whatTitle: "What we build",
    what: [
      "AI assistants",
      "WhatsApp automation",
      "customer support systems",
      "appointment request systems",
      "websites",
      "mobile apps",
      "web apps",
      "business portals",
      "admin dashboards",
      "reporting tools",
      "internal systems",
      "customer request flows",
      "lead qualification tools",
    ],
  },
  support: {
    heroTitle: "Support, Hosting & Maintenance",
    heroBody:
      "A digital system should not be abandoned after launch. We offer support, hosting, and maintenance options depending on the importance of the project and the level of coverage required.",
    sections: [
      {
        title: "Standard support",
        points: [
          "bug fixes",
          "small corrections",
          "technical guidance",
          "deployment checks",
          "basic post-launch support",
          "minor content or configuration help",
        ],
      },
      {
        title: "Priority support",
        points: [
          "faster response",
          "higher-priority fixes",
          "monitoring",
          "updates",
          "small improvements",
          "technical support",
          "deployment management",
          "backup checks",
          "performance checks",
        ],
      },
      {
        title: "24/7 support",
        points: [
          "urgent production response",
          "stronger monitoring",
          "faster escalation",
          "higher availability",
          "critical-system support",
          "extended response coverage",
        ],
      },
      {
        title: "Hosting and deployment",
        points: [
          "SSL certificate",
          "domain connection",
          "backups",
          "monitoring",
          "uptime monitoring",
          "deployment management",
          "database hosting",
          "cloud server setup",
          "security updates",
          "environment configuration",
          "SLA-backed infrastructure options up to 99.99%, depending on architecture and hosting plan",
        ],
      },
    ],
  },
  contact: {
    heroTitle: "Tell us what you want to improve",
    heroBody:
      "Whether you need an AI assistant, WhatsApp automation, a modern website, a mobile app, a dashboard, or an internal system, we can help you define the simplest useful version and build it.",
    cta: "Send your request and we will help you define the best practical system for your business.",
    groups: [
      {
        title: "Basic information",
        fields: [
          "Name",
          "Business name",
          "Country",
          "City",
          "Industry",
          "Website or social media link",
          "WhatsApp number",
          "Email",
        ],
      },
      {
        title: "What do you need?",
        fields: [
          "AI customer support",
          "WhatsApp automation",
          "Appointment request system",
          "Website",
          "Web app",
          "Mobile app",
          "Dashboard/reporting",
          "Internal business tool",
          "Real estate lead system",
          "Clinic/patient inquiry system",
          "Customer portal",
          "Support/hosting",
          "Not sure yet",
        ],
      },
      {
        title: "Project details",
        fields: [
          "What problem do you want to solve?",
          "What are you using now?",
          "Do you already have a website?",
          "Do you receive many inquiries on WhatsApp?",
          "Do you need Arabic, English, or both?",
          "Is this a new project or improvement of an existing system?",
          "Preferred launch timeline",
          "Budget range",
          "Preferred contact method",
        ],
      },
    ],
  },
};

const ar = {
  locale: "ar" as const,
  brand: "Servicely",
  common: {
    bestFor: "مناسب لـ",
    examples: "أمثلة",
    possibleSystems: "أنظمة ممكنة",
    problem: "المشكلة",
    solution: "الحل",
    result: "النتيجة",
    startProject: "ابدأ مشروعك",
    bookConsultation: "احجز استشارة مجانية",
    seeWhatWeBuild: "اطلع على ما نبنيه",
    contactWhatsapp: "تواصل معنا عبر واتساب",
  },
  home: {
    hero: {
      eyebrow: "ذكاء اصطناعي، أتمتة وأنظمة أعمال",
      title:
        "ذكاء اصطناعي، أتمتة وبرمجيات مخصصة للشركات في لبنان والعراق ودبي/الإمارات",
      body:
        "نساعد الشركات على استخدام الذكاء الاصطناعي، الأتمتة، المواقع الإلكترونية، تطبيقات الجوال ولوحات التحكم لخدمة العملاء بسرعة أكبر، استقبال استفسارات أكثر، وتقليل العمل اليدوي.",
      trust:
        "مناسب للعيادات، شركات العقارات، الخدمات المميزة، مراكز التدريب، والشركات التي تعتمد على الاستفسارات الإلكترونية والمواعيد وواتساب ومتابعة العملاء.",
      ctas: [
        { label: "احجز استشارة مجانية", href: "/contact" },
        { label: "اطلع على ما نبنيه", href: "/services" },
      ],
    },
    improveTitle: "ما الذي نساعدك على تحسينه",
    improveBody:
      "نركز على خدمة العملاء، استقبال الطلبات، الأتمتة، المواقع، التطبيقات، وأنظمة الأعمال التي تجعل العمل اليومي أوضح وأسهل.",
    marketsTitle: "مصمم للبنان، العراق، ودبي/الإمارات",
    industriesTitle: "القطاعات التي نساعدها",
    whyTitle: "لماذا تعمل معنا؟",
    whyBody:
      "نحن فريق تقني صغير يناسب الشركات التي تريد تواصلاً مباشراً مع من يبني النظام. لا طبقات وكالة غير ضرورية، ولا تسليم المشروع لمطورين غير معروفين، ولا منصات معقدة عندما يكفي نظام عملي.",
    practicalTitle: "أنظمة عملية بدون تعقيد غير ضروري",
    practicalBody:
      "معظم الشركات لا تحتاج إلى منصة ضخمة. تحتاج إلى نظام مفيد يحل مشكلة واضحة.",
    supportTitle: "الدعم، الاستضافة، والصيانة",
    supportBody:
      "نوفر دعماً بعد الإطلاق حسب الفترة المتفق عليها. وللاستجابة ذات الأولوية، التغطية الممتدة، المراقبة، الإصلاحات العاجلة، والدعم على مدار الساعة، تتوفر اشتراكات صيانة.",
    finalCtaTitle: "لنبنِ النظام الذي يحتاجه عملك فعلاً",
    finalCtaBody:
      "أخبرنا بما تريد تحسينه: دعم العملاء، طلبات المواعيد، متابعة العملاء، مسارات واتساب، الأدوات الداخلية، تطبيقات الجوال، لوحات التحكم أو موقعك الإلكتروني.",
  },
  improve: [
    {
      id: "ai-customer-automation",
      title: "الذكاء الاصطناعي وأتمتة خدمة العملاء",
      body:
        "نبني مساعدين أذكياء بالذكاء الاصطناعي وأنظمة أتمتة تساعد عملك على الرد على الأسئلة المتكررة، استقبال طلبات العملاء، تأهيل العملاء المحتملين، وتحويل الطلبات المهمة إلى فريقك.",
      bestFor: [
        "العيادات",
        "شركات العقارات",
        "شركات الخدمات",
        "مراكز التدريب",
        "الشركات التي تعتمد على واتساب",
        "الشركات التي تستقبل أسئلة متكررة",
      ],
      examples: [
        "مساعد طلب مواعيد بالذكاء الاصطناعي",
        "دعم عملاء بالذكاء الاصطناعي",
        "مساعد استفسارات واتساب",
        "مساعد أسئلة شائعة",
        "تأهيل العملاء المحتملين",
        "استقبال طلبات العملاء",
        "تحويل الطلب إلى الفريق",
        "استقبال الطلبات خارج ساعات العمل",
      ],
    },
    {
      id: "websites-web-apps-portals",
      title: "المواقع الإلكترونية وتطبيقات الويب والبوابات",
      body:
        "نبني مواقع وتطبيقات ويب حديثة مرتبطة بأهداف عمل واضحة، مثل طلب المواعيد، إرسال الاستفسارات، عرض العقارات، التسجيل في الخدمات، أو استخدام بوابة عملاء.",
      examples: [
        "مواقع العيادات",
        "مواقع العقارات",
        "مواقع مراكز التدريب",
        "بوابات العملاء",
        "لوحات إدارة",
        "مسارات طلب وحجز",
        "أنظمة إدارة الاستفسارات",
        "أدوات داخلية للأعمال",
      ],
    },
    {
      id: "mobile-apps-store-deployment",
      title: "تطبيقات الجوال ونشرها على المتاجر",
      body:
        "نبني تطبيقات Android و iOS للشركات التي تحتاج تجربة جوال للعملاء أو الموظفين أو الوكلاء أو الطلاب أو المرضى أو الفرق الداخلية.",
      examples: [
        "تطبيقات العملاء",
        "تطبيقات العيادات",
        "تطبيقات العقارات",
        "تطبيقات الحجز والطلبات",
        "تطبيقات الموظفين",
        "تطبيقات الطلاب",
        "تطبيقات طلب الخدمة",
        "النشر على Google Play",
        "النشر على App Store",
      ],
    },
    {
      id: "whatsapp-lead-automation",
      title: "أتمتة واتساب وتأهيل العملاء",
      body:
        "تعتمد كثير من الشركات في لبنان والعراق ودبي/الإمارات على واتساب بشكل كبير. نساعدك على تنظيم المحادثات، جمع المعلومات الصحيحة، تأهيل العملاء المحتملين، وتحويل الاستفسار للشخص المناسب.",
      examples: [
        "مسار استفسار واتساب",
        "جمع معلومات العميل",
        "جمع طلبات المواعيد",
        "تأهيل المشتري أو المستأجر المحتمل",
        "طلبات مواعيد العيادات",
        "أتمتة طلبات الخدمة",
        "تحويل الطلب إلى المالك أو الفريق",
        "استقبال الرسائل خارج ساعات العمل",
      ],
    },
    {
      id: "reporting-business-visibility",
      title: "التقارير ولوحات التحكم",
      body:
        "نبني لوحات تحكم وأنظمة تقارير تساعد المالكين والمديرين على فهم ما يحدث في العمل، مع وضوح أكبر وقرارات أسرع وعمل يدوي أقل.",
      examples: [
        "لوحات العملاء المحتملين",
        "لوحات المواعيد",
        "تتبع الاستفسارات",
        "تقارير طلبات العملاء",
        "ملخصات المبيعات والاستفسارات",
        "تقارير أداء الفروع",
        "تتبع استجابة الموظفين",
        "لوحات طلبات الخدمة",
      ],
    },
    {
      id: "support-hosting-maintenance",
      title: "الدعم والاستضافة والصيانة",
      body:
        "نستطيع دعم نظامك بعد الإطلاق ونشره على بنية سحابية أو بنية شريكة موثوقة مع SSL، النسخ الاحتياطي، المراقبة، إدارة النشر، تحديثات الأمان، وخيارات مراقبة التوفر.",
      examples: [
        "دعم قياسي بعد الإطلاق",
        "اشتراكات صيانة ذات أولوية",
        "مراقبة",
        "فحص النسخ الاحتياطي",
        "تحديثات الأمان",
        "إدارة النشر",
        "خيارات بنية تحتية مدعومة باتفاقية مستوى خدمة حتى 99.99% حسب البنية وخطة الاستضافة",
      ],
    },
  ] satisfies BulletSection[],
  markets: [
    {
      title: "لبنان",
      body:
        "تحتاج كثير من الشركات اللبنانية إلى أنظمة رقمية احترافية وبأسعار مناسبة تساعدها على المنافسة، أتمتة العمل المتكرر، وتحسين تجربة العملاء.",
      points: [
        "عيادات الأسنان",
        "عيادات التجميل",
        "شركات العقارات",
        "مراكز التدريب",
        "الخدمات المهنية",
        "شركات الخدمات",
        "الشركات التي تستقبل استفسارات متكررة",
      ],
    },
    {
      title: "العراق",
      body:
        "في العراق شركات نامية كثيرة تحتاج حضوراً رقمياً أقوى، تعاملاً أفضل مع العملاء، وأنظمة إلكترونية حديثة.",
      points: [
        "العيادات",
        "المراكز الطبية",
        "شركات العقارات",
        "مراكز التعليم والتدريب",
        "شركات الضيافة",
        "شركات الخدمات المميزة",
        "الشركات متعددة الفروع",
      ],
    },
    {
      title: "دبي / الإمارات",
      body:
        "تتوقع شركات دبي عادة تجربة رقمية أكثر تميزاً. الفرصة ليست في امتلاك موقع فقط، بل في جعل رحلة العميل كاملة أكثر ذكاءً وسلاسة.",
      points: [
        "عيادات التجميل",
        "عيادات الأسنان",
        "المراكز الطبية",
        "شركات العقارات",
        "شركات الخدمات المميزة",
        "شركات السياحة والضيافة",
        "الشركات المهنية",
        "العلامات التجارية المميزة",
      ],
    },
  ],
  industries: [
    {
      id: "clinics-medical-centers",
      title: "العيادات والمراكز الطبية",
      body:
        "تحتاج العيادات إلى الثقة والسرعة والتواصل الواضح. نساعدها على استقبال طلبات المواعيد، الرد على الأسئلة المتكررة، توجيه الاستفسارات، وتحويل الطلبات الجادة للموظفين.",
      systems: [
        "مساعد حجز مواعيد بالذكاء الاصطناعي",
        "دعم عملاء للأسئلة المتكررة",
        "مساعد واتساب للاستفسارات",
        "توجيه الطلب حسب الفرع",
        "استقبال طلبات خارج ساعات العمل",
        "موقع حديث للعيادة",
        "صفحات علاج وخدمات",
        "لوحة إدارة للطلبات",
      ],
    },
    {
      id: "dental-aesthetic-clinics",
      title: "عيادات الأسنان والتجميل",
      body:
        "تحتاج عيادات الأسنان والتجميل إلى تواصل سريع عبر الجوال، صفحات خدمات واضحة، مسارات طلب مواعيد، وتجربة رقمية مميزة تبني الثقة.",
      systems: [
        "صفحات علاجات",
        "تنظيم محتوى قبل وبعد",
        "مساعد أسئلة خدمات بالذكاء الاصطناعي",
        "مسار طلب موعد",
        "استقبال طلبات واتساب",
        "توجيه حسب الطبيب أو الفرع",
        "لوحة استفسارات المرضى",
      ],
    },
    {
      id: "real-estate-agencies",
      title: "شركات العقارات",
      body:
        "تستقبل فرق العقارات أسئلة متكررة عن التوفر والسعر والموقع والمعاينات وتفاصيل العقار. نساعدها على تأهيل المشتري أو المستأجر المحتمل قبل وصوله إلى الوكيل.",
      systems: [
        "موقع قوائم عقارية",
        "مساعد استفسارات عقارية بالذكاء الاصطناعي",
        "مسار تأهيل مشتري أو مستأجر",
        "متابعة واتساب",
        "نموذج طلب معاينة",
        "لوحة للوكلاء",
        "لوحة إدارة عقارات",
        "لوحة متابعة العملاء المحتملين الجادين",
      ],
    },
    {
      id: "premium-service-businesses",
      title: "شركات الخدمات المميزة",
      body:
        "تحتاج شركات الخدمات المميزة إلى تجربة رقمية تعكس جودة الخدمة على أرض الواقع. نبني مسارات استفسار، مساعدين أذكياء للرد، أنظمة طلبات، بوابات، وأدوات أتمتة.",
      systems: [
        "تحديث موقع احترافي",
        "دعم عملاء بالذكاء الاصطناعي",
        "مسار طلب استشارة",
        "أتمتة واتساب",
        "نماذج استقبال العملاء",
        "بوابات عملاء",
        "أنظمة طلب خدمة",
        "لوحات تقارير",
      ],
    },
    {
      id: "training-education",
      title: "مراكز التدريب والتعليم",
      body:
        "تحتاج مراكز التدريب إلى شرح البرامج بوضوح، استقبال استفسارات الطلاب، الرد على الأسئلة المتكررة، وإدارة التسجيلات.",
      systems: [
        "مواقع دورات",
        "نماذج تسجيل الطلاب",
        "مساعد استفسارات الطلاب",
        "مساعد أسئلة الدورات",
        "صفحات جاهزة للدفع",
        "لوحات إدارة",
        "تتبع طلبات الطلاب",
        "أتمتة استفسارات واتساب",
      ],
    },
    {
      id: "hospitality-tourism",
      title: "شركات السياحة والضيافة",
      body:
        "تعتمد الفنادق ووكالات السفر وشركات السياحة على التواصل السريع، المعلومات الواضحة، وتجربة طلب سلسة للعملاء.",
      systems: [
        "مسارات طلبات الحجز",
        "مساعد أسئلة متكررة بالذكاء الاصطناعي",
        "دعم واتساب للعملاء",
        "نماذج طلب خدمة",
        "مواقع باقات سياحية",
        "نماذج استقبال العملاء",
        "لوحات طلبات",
        "هيكلة محتوى متعددة اللغات",
      ],
    },
    {
      id: "multi-branch-businesses",
      title: "الشركات متعددة الفروع",
      body:
        "تحتاج الشركات متعددة الفروع إلى توجيه واضح للعملاء، تقارير متسقة، ورؤية أفضل لما يحدث في كل فرع.",
      systems: [
        "مسارات تواصل حسب الفرع",
        "نظام توجيه الفروع",
        "إدارة مركزية لطلبات العملاء",
        "لوحات تقارير للفروع",
        "أدوات توزيع الطلبات على الموظفين",
        "مواقع متعددة الفروع",
        "تتبع الاستفسارات حسب الموقع",
        "لوحة للمالك",
      ],
    },
  ] satisfies BulletSection[],
  useCases: [
    {
      id: "clinic-appointment-assistant",
      title: "مساعد حجز مواعيد بالذكاء الاصطناعي للعيادات",
      problem:
        "يسأل المرضى أسئلة متكررة وقد يغادرون إذا كان الموقع أو مسار التواصل بطيئاً.",
      solution:
        "يجمع المساعد طلبات المواعيد، يجيب عن الأسئلة العامة غير الطبية، ويحول الطلب إلى الفريق عند الحاجة.",
      result: [
        "استجابة أسرع",
        "استفسارات ضائعة أقل",
        "تجربة أفضل للمريض",
        "عمل متكرر أقل للموظفين",
        "طلبات مواعيد أكثر تنظيماً",
      ],
    },
    {
      id: "clinic-customer-support",
      title: "دعم عملاء بالذكاء الاصطناعي للعيادات",
      problem:
        "يجيب موظفو العيادة عن الأسئلة نفسها يومياً حول الخدمات، المواعيد، الفروع، وساعات العمل.",
      solution:
        "يجيب مساعد ذكي عن الأسئلة الأساسية ويجمع طلب المريض لإرساله إلى الفريق.",
      result: [
        "يحصل المرضى على إجابات أسرع",
        "يوفر الموظفون الوقت",
        "يتم استقبال طلبات خارج ساعات العمل",
        "تظهر العيادة بشكل أكثر احترافية",
        "تصبح الطلبات أسهل في التتبع",
      ],
    },
    {
      id: "real-estate-lead-qualification",
      title: "تأهيل عملاء العقارات المحتملين",
      problem:
        "يتلقى الوكلاء استفسارات ناقصة عن السعر أو التوفر أو الموقع بدون تفاصيل كافية.",
      solution:
        "يسأل مسار آلي عن الميزانية، المنطقة، نوع العقار، شراء أو إيجار، عدد الغرف، موعد المعاينة، وبيانات التواصل.",
      result: [
        "عملاء جادون أوضح للوكلاء",
        "وقت أقل مهدور",
        "متابعة أسرع",
        "تنظيم أفضل للعملاء",
        "متابعة أسهل للعملاء الجادين",
      ],
    },
    {
      id: "whatsapp-support-handoff",
      title: "دعم واتساب وتحويل الطلب إلى الفريق",
      problem:
        "تعتمد كثير من الشركات على واتساب، لكن المحادثات تصبح فوضوية أو متكررة أو غير متسقة.",
      solution:
        "يجمع مسار واتساب طلب العميل، ينظم المعلومات، يجيب عن الأسئلة المتكررة، ويحول الطلبات الجادة إلى الفريق.",
      result: [
        "استجابة أسرع",
        "معلومات عميل أوضح",
        "تحويل أوضح للموظفين",
        "رسائل ضائعة أقل",
        "عملية مبيعات ودعم أكثر تنظيماً",
      ],
    },
    {
      id: "premium-website-modernization",
      title: "تحديث موقع لشركة خدمات مميزة",
      problem:
        "تبدو الشركة ممتازة خارج الإنترنت، لكن الموقع قديم أو بطيء أو غير واضح أو غير احترافي.",
      solution:
        "موقع حديث مع صفحات خدمات واضحة، تصميم متجاوب، نماذج استفسار، واتساب، طلب مواعيد، وربط اختياري بالذكاء الاصطناعي.",
      result: [
        "ثقة أقوى",
        "خطوات أوضح من العميل",
        "تواصل أسهل",
        "عرض أوضح للخدمات",
        "صورة رقمية محسنة",
      ],
    },
    {
      id: "training-center-registration",
      title: "مسار تسجيل لمركز تدريب",
      problem:
        "تستقبل مراكز التدريب أسئلة متكررة عن الدورات والأسعار والجداول والتسجيل والشهادات عبر قنوات متعددة.",
      solution:
        "موقع للدورات أو صفحة هبوط مع نماذج تسجيل، مساعد أسئلة شائعة، أتمتة واتساب، ولوحة إدارة.",
      result: [
        "استقبال أفضل لاستفسارات الطلاب",
        "ردود متكررة أقل",
        "إدارة تسجيل أسهل",
        "عرض أوضح للدورات",
        "متابعة أسرع",
      ],
    },
    {
      id: "multi-branch-routing",
      title: "توجيه استفسارات الشركات متعددة الفروع",
      problem:
        "تواجه الشركات متعددة الفروع صعوبة في توجيه العملاء إلى الفرع أو الفريق الصحيح.",
      solution:
        "يسأل نظام التواصل عن موقع العميل أو الفرع المفضل أو الخدمة المطلوبة، ثم يوجه الطلب إلى المكان الصحيح.",
      result: [
        "استفسارات خاطئة أقل",
        "استجابة أسرع",
        "تنظيم أفضل للفروع",
        "تقارير أوضح للمالكين",
        "تجربة عميل محسنة",
      ],
    },
  ] satisfies UseCase[],
  whyUs: {
    heroTitle: "فريق تقني صغير. تواصل مباشر. أنظمة عملية.",
    heroBody:
      "نناسب الشركات التي تريد الوصول المباشر إلى من يبني النظام، نطاقاً واضحاً، تنفيذاً عملياً، ودعماً بعد الإطلاق.",
    sections: [
      {
        title: "تواصل مباشر",
        body:
          "تعمل مباشرة مع الأشخاص الذين يبنون نظامك، مما يعني وضوحاً أكثر، قرارات أسرع، سوء فهم أقل، وتحكماً أفضل بالنطاق.",
      },
      {
        title: "أنظمة عملية",
        body:
          "لا نبني التعقيد فقط ليبدو المشروع أكبر. نركز على النظام المفيد الذي يحتاجه عملك فعلاً.",
      },
      {
        title: "سير عمل تطوير مدعوم بالذكاء الاصطناعي",
        body:
          "نستخدم أدوات تطوير حديثة مدعومة بالذكاء الاصطناعي للتخطيط والبرمجة والتصحيح والتوثيق واختبار الأفكار وتسريع العمل. لكن النظام النهائي يبقى مخططاً ومراجعاً ومسلماً من مطورين حقيقيين.",
      },
      {
        title: "نطاق وتسليم واضح",
        body:
          "قبل البناء نحدد المشكلة، الميزات المطلوبة، النسخة الأولى، الجدول الواقعي، واحتياجات الدعم بعد الإطلاق.",
      },
      {
        title: "ميزة الفريق الصغير",
        body:
          "الفريق الصغير يعني وصولاً مباشراً، تكلفة تشغيل أقل، تواصلاً أسرع، مرونة أكثر، وعلاقة أقرب مع العميل.",
      },
    ],
  },
  about: {
    heroTitle: "فريق برمجيات وأتمتة عملي للبنان والعراق ودبي/الإمارات",
    heroBody:
      "نساعد الشركات على بناء أنظمة رقمية عملية: مساعدون ذكيون بالذكاء الاصطناعي، أتمتة، مواقع، تطبيقات جوال، لوحات تحكم، بوابات، وأدوات داخلية تحل مشاكل حقيقية في العمل.",
    processTitle: "كيف نعمل",
    process: [
      "نفهم المشكلة",
      "نحدد النطاق",
      "نقترح الحل العملي الأفضل",
      "نبني النسخة الأولى",
      "نختبر ونعدل",
      "ننشر النظام",
      "ندعم بعد الإطلاق عند الحاجة",
    ],
    whatTitle: "ما الذي نبنيه",
    what: [
      "مساعدون ذكيون بالذكاء الاصطناعي",
      "أتمتة واتساب",
      "أنظمة دعم العملاء",
      "أنظمة طلب المواعيد",
      "مواقع إلكترونية",
      "تطبيقات جوال",
      "تطبيقات ويب",
      "بوابات أعمال",
      "لوحات إدارة",
      "أدوات تقارير",
      "أنظمة داخلية",
      "مسارات طلبات العملاء",
      "أدوات تأهيل العملاء المحتملين",
    ],
  },
  support: {
    heroTitle: "الدعم، الاستضافة والصيانة",
    heroBody:
      "لا يجب أن يُترك النظام الرقمي بعد الإطلاق. نوفر خيارات دعم واستضافة وصيانة حسب أهمية المشروع ومستوى التغطية المطلوب.",
    sections: [
      {
        title: "الدعم القياسي",
        points: [
          "إصلاح الأخطاء",
          "تصحيحات صغيرة",
          "إرشاد تقني",
          "فحوصات نشر",
          "دعم أساسي بعد الإطلاق",
          "مساعدة بسيطة في المحتوى أو الإعدادات",
        ],
      },
      {
        title: "الدعم ذو الأولوية",
        points: [
          "استجابة أسرع",
          "إصلاحات ذات أولوية أعلى",
          "مراقبة",
          "تحديثات",
          "تحسينات صغيرة",
          "دعم تقني",
          "إدارة النشر",
          "فحوصات النسخ الاحتياطي",
          "فحوصات الأداء",
        ],
      },
      {
        title: "دعم 24/7",
        points: [
          "استجابة عاجلة للأعطال الحية",
          "مراقبة أقوى",
          "تصعيد أسرع",
          "توفر أعلى",
          "دعم للأنظمة الحرجة",
          "تغطية استجابة ممتدة",
        ],
      },
      {
        title: "الاستضافة والنشر",
        points: [
          "شهادة SSL",
          "ربط النطاق",
          "نسخ احتياطية",
          "مراقبة",
          "مراقبة التوفر",
          "إدارة النشر",
          "استضافة قاعدة البيانات",
          "إعداد خادم سحابي",
          "تحديثات الأمان",
          "إعداد البيئة",
          "خيارات بنية تحتية مدعومة باتفاقية مستوى خدمة حتى 99.99% حسب البنية وخطة الاستضافة",
        ],
      },
    ],
  },
  contact: {
    heroTitle: "أخبرنا بما تريد تحسينه",
    heroBody:
      "سواء كنت تحتاج مساعداً ذكياً بالذكاء الاصطناعي، أتمتة واتساب، موقعاً حديثاً، تطبيق جوال، لوحة تحكم، أو نظاماً داخلياً، يمكننا مساعدتك على تحديد أبسط نسخة مفيدة وبنائها.",
    cta:
      "أرسل طلبك وسنساعدك على تحديد أنسب نظام عملي لعملك.",
    groups: [
      {
        title: "المعلومات الأساسية",
        fields: [
          "الاسم",
          "اسم الشركة",
          "الدولة",
          "المدينة",
          "القطاع",
          "رابط الموقع أو الحساب الاجتماعي",
          "رقم واتساب",
          "البريد الإلكتروني",
        ],
      },
      {
        title: "ما الذي تحتاجه؟",
        fields: [
          "دعم عملاء بالذكاء الاصطناعي",
          "أتمتة واتساب",
          "نظام طلب مواعيد",
          "موقع إلكتروني",
          "تطبيق ويب",
          "تطبيق جوال",
          "لوحة تحكم أو تقارير",
          "أداة داخلية للأعمال",
          "نظام لعملاء العقارات",
          "نظام استفسارات عيادة أو مرضى",
          "بوابة عملاء",
          "دعم واستضافة",
          "لست متأكداً بعد",
        ],
      },
      {
        title: "تفاصيل المشروع",
        fields: [
          "ما المشكلة التي تريد حلها؟",
          "ما الذي تستخدمه حالياً؟",
          "هل لديك موقع بالفعل؟",
          "هل تستقبل استفسارات كثيرة على واتساب؟",
          "هل تحتاج العربية أو الإنجليزية أو الاثنين؟",
          "هل المشروع جديد أم تحسين لنظام موجود؟",
          "موعد الإطلاق المفضل",
          "نطاق الميزانية",
          "طريقة التواصل المفضلة",
        ],
      },
    ],
  },
};

export const marketContent = { en, ar };

export function getMarketContent(locale: string) {
  return locale === "ar" ? marketContent.ar : marketContent.en;
}
