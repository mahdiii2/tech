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
    startProject: "Send project details",
    bookConsultation: "Book a Free Consultation",
    seeWhatWeBuild: "See What We Build",
    contactWhatsapp: "Contact Us on WhatsApp",
  },
  home: {
    hero: {
      eyebrow: "Practical Software for Customer Flow",
      title: "Build the system your customers feel first",
      body:
        "Servicely builds practical software for inquiries, bookings, leads, and follow-up across MENA.",
      trust:
        "Focused on clinics, real estate, automotive, and field service teams across the Middle East, especially Lebanon, Iraq, and the UAE.",
      ctas: [
        { label: "Contact us", href: "/contact" },
        { label: "Explore services", href: "/services#services-blueprints" },
      ],
    },
    improveTitle: "What we help you improve",
    improveBody:
      "We focus on inquiry intake, booking requests, lead follow-up, WhatsApp workflows, websites, apps, and dashboards.",
    marketsTitle: "Built for MENA, focused on Lebanon, Iraq, and the UAE",
    industriesTitle: "Primary industries",
    whyTitle: "Why work with us?",
    whyBody:
      "We are a small technical team for businesses that want direct access to the people doing the work, clear scope, practical execution, and support after launch.",
    practicalTitle: "Practical systems, not unnecessary complexity",
    practicalBody:
      "Most businesses do not need a giant platform. They need a useful system that solves a clear problem.",
    supportTitle: "Support, hosting, and maintenance",
    supportBody:
      "We provide post-launch support, hosting help, monitoring, deployment management, backups, and maintenance options based on the system's importance.",
    finalCtaTitle: "Let's build the system your business actually needs",
    finalCtaBody:
      "Tell us what you want to improve: appointment requests, patient inquiries, property matching, vehicle inquiries, service requests, lead follow-up, WhatsApp workflows, apps, dashboards, or your website.",
  },
  improve: [
    {
      id: "ai-customer-automation",
      title: "Customer automation",
      body:
        "We build assistants and intake flows that answer routine questions, collect customer details, qualify requests, and hand serious inquiries to your team.",
      bestFor: [
        "clinics",
        "real estate agencies",
        "WhatsApp-heavy businesses",
        "teams receiving repeated inquiries",
      ],
      examples: [
        "appointment intake",
        "patient inquiry routing",
        "property lead qualification",
        "FAQ flow",
        "customer request collection",
        "staff handoff",
      ],
    },
    {
      id: "websites-web-apps-portals",
      title: "Websites, apps & portals",
      body:
        "We build websites and platforms connected to real customer actions: booking, inquiry, listing views, request submission, dashboards, and portals.",
      examples: [
        "clinic websites",
        "real estate websites",
        "customer portals",
        "admin dashboards",
        "booking/request flows",
        "property inquiry tools",
      ],
    },
    {
      id: "mobile-apps-store-deployment",
      title: "Mobile apps & deployment",
      body:
        "We build Android and iOS apps when the workflow needs a mobile experience for customers, staff, agents, or internal teams.",
      examples: [
        "customer apps",
        "clinic apps",
        "real estate apps",
        "booking/request apps",
        "agent apps",
        "Google Play and App Store deployment",
      ],
    },
    {
      id: "whatsapp-lead-automation",
      title: "WhatsApp & lead workflows",
      body:
        "Many MENA businesses depend on WhatsApp. We help organize conversations, collect the right information, qualify leads, and route inquiries to the right person.",
      examples: [
        "WhatsApp inquiry flow",
        "appointment request collection",
        "property buyer/renter qualification",
        "clinic appointment requests",
        "staff handoff",
        "after-hours capture",
        "follow-up tracking",
      ],
    },
    {
      id: "reporting-business-visibility",
      title: "Dashboards & business visibility",
      body:
        "We build dashboards that show inquiries, appointment requests, property leads, status, handoff, and follow-up activity in one place.",
      examples: [
        "lead dashboards",
        "appointment dashboards",
        "inquiry tracking",
        "request status",
        "staff response tracking",
        "follow-up reports",
      ],
    },
    {
      id: "support-hosting-maintenance",
      title: "Support, hosting & maintenance",
      body:
        "We support your system after launch with hosting help, SSL, backups, monitoring, deployment management, security updates, and maintenance options.",
      examples: [
        "standard post-launch support",
        "priority maintenance",
        "monitoring",
        "backup checks",
        "security updates",
        "deployment management",
      ],
    },
  ] satisfies BulletSection[],
  markets: [
    {
      title: "MENA",
      body:
        "We build for businesses across the Middle East and North Africa that depend on fast mobile communication and clear customer next steps.",
      points: [
        "Arabic and English customer journeys",
        "WhatsApp-heavy inquiry flows",
        "clinic appointment requests",
        "real estate lead follow-up",
        "automotive and field service requests",
      ],
    },
    {
      title: "Lebanon",
      body:
        "Lebanese clinics and agencies often need practical systems that improve response without adding unnecessary operational weight.",
      points: [
        "clinics",
        "medical centers",
        "real estate agencies",
        "automotive and service businesses",
        "businesses with repeated customer inquiries",
      ],
    },
    {
      title: "Iraq",
      body:
        "Growing Iraqi businesses need stronger digital presence, better intake, and clearer follow-up for customers who contact them online.",
      points: [
        "clinics",
        "medical centers",
        "real estate agencies",
        "automotive and home service teams",
        "sales teams using WhatsApp",
      ],
    },
    {
      title: "UAE",
      body:
        "UAE businesses usually expect a polished digital experience where the website, WhatsApp flow, and team handoff feel connected.",
      points: [
        "clinics",
        "medical centers",
        "real estate agencies",
        "automotive and field service teams",
        "customer-facing teams",
      ],
    },
  ],
  industries: [
    {
      id: "clinics-medical-centers",
      title: "Clinics and medical centers",
      body:
        "Clinics need trust, speed, and clear communication. We help capture appointment requests, route patient inquiries, and keep follow-up visible.",
      systems: [
        "appointment request flow",
        "patient inquiry assistant",
        "service and branch routing",
        "after-hours request capture",
        "clinic website",
        "request dashboard",
      ],
    },
    {
      id: "real-estate-agencies",
      title: "Real estate agencies",
      body:
        "Real estate teams need cleaner property inquiries, qualified buyers or renters, viewing coordination, and clear agent handoff.",
      systems: [
        "property matching flow",
        "buyer/renter qualification",
        "viewing request intake",
        "property listing website",
        "agent dashboard",
        "lead follow-up tracking",
      ],
    },
    {
      id: "automotive-mobility",
      title: "Automotive and mobility",
      body:
        "Automotive teams need clearer vehicle inquiries, service appointment intake, quote follow-up, and branch routing.",
      systems: [
        "vehicle inquiry qualification",
        "test-drive scheduling",
        "service appointment intake",
        "branch routing",
        "rental or availability follow-up",
        "quote tracking dashboard",
      ],
    },
    {
      id: "home-field-services",
      title: "Home and field services",
      body:
        "Field service teams need cleaner service requests, quote details, scheduling, crew assignment, job status, and follow-up.",
      systems: [
        "service request triage",
        "quote intake flow",
        "technician or crew assignment",
        "job status tracking",
        "approval workflow",
        "post-service follow-up",
      ],
    },
  ] satisfies BulletSection[],
  useCases: [
    {
      id: "clinic-appointment-intake",
      title: "Clinic appointment intake",
      problem:
        "Patients send vague appointment messages without service, preferred time, branch, or contact details.",
      solution:
        "A guided intake flow collects the details staff need before confirming the appointment.",
      result: [
        "cleaner appointment requests",
        "less back-and-forth",
        "faster staff confirmation",
        "fewer missed inquiries",
      ],
    },
    {
      id: "clinic-inquiry-routing",
      title: "Clinic service inquiry routing",
      problem:
        "Patients ask basic non-medical questions about services, doctors, branches, hours, and contact options across many channels.",
      solution:
        "An assistant or structured flow answers routine information and routes the request to the right team or branch.",
      result: [
        "faster answers",
        "better patient direction",
        "less repeated manual work",
        "clearer staff handoff",
      ],
    },
    {
      id: "clinic-follow-up-tracking",
      title: "Clinic follow-up and after-hours capture",
      problem:
        "Requests can be delayed or forgotten when messages arrive after hours or during busy clinic periods.",
      solution:
        "A request dashboard tracks status, handoff, reminders, and pending follow-up.",
      result: [
        "after-hours requests are captured",
        "follow-up is visible",
        "staff know what needs attention",
        "patient experience feels more organized",
      ],
    },
    {
      id: "real-estate-property-matching",
      title: "Property matching",
      problem:
        "Buyers and renters ask broadly without budget, area, property type, bedroom count, or timeline.",
      solution:
        "A matching flow collects preferences before suggesting relevant listing categories or handing the lead to an agent.",
      result: [
        "more relevant property conversations",
        "cleaner buyer and renter profiles",
        "faster agent response",
        "less time spent asking basics",
      ],
    },
    {
      id: "real-estate-lead-follow-up",
      title: "Real estate lead qualification and follow-up",
      problem:
        "Agents receive many incomplete leads and lose track of who needs the next call or message.",
      solution:
        "A qualification and follow-up system tracks budget, area, type, urgency, source, status, and next action.",
      result: [
        "agents prioritize serious leads",
        "follow-up becomes consistent",
        "owners see pipeline status",
        "fewer leads are missed",
      ],
    },
    {
      id: "real-estate-viewing-handoff",
      title: "Viewing scheduling and agent handoff",
      problem:
        "Viewing requests require repeated manual coordination between customer availability, property details, and agent assignment.",
      solution:
        "A viewing request flow collects property, preferred time, contact details, and availability before sending it to the right agent.",
      result: [
        "clearer viewing requests",
        "faster agent handoff",
        "less manual coordination",
        "better customer experience",
      ],
    },
    {
      id: "automotive-test-drive-scheduling",
      title: "Vehicle inquiry qualification and test-drive scheduling",
      problem:
        "Buyers ask about vehicles without model, budget, financing, trade-in, location, or timing details.",
      solution:
        "A qualification flow collects vehicle interest, budget, timeline, branch, contact details, and test-drive preference.",
      result: [
        "clearer vehicle inquiries",
        "faster test-drive scheduling",
        "better sales handoff",
        "less time spent asking basics",
      ],
    },
    {
      id: "automotive-service-intake",
      title: "Automotive service appointment intake",
      problem:
        "Service requests arrive without vehicle details, issue, urgency, or preferred branch.",
      solution:
        "An intake flow collects make, model, year, issue, photos if needed, preferred time, and branch.",
      result: [
        "cleaner service requests",
        "better branch routing",
        "faster advisor preparation",
        "clearer next steps for customers",
      ],
    },
    {
      id: "automotive-quote-follow-up",
      title: "Quote, rental, or availability follow-up",
      problem:
        "Customers ask for quotes, rental availability, or stock updates and follow-up gets lost in WhatsApp.",
      solution:
        "A follow-up workflow tracks quote status, availability, customer preference, and next action.",
      result: [
        "more consistent follow-up",
        "fewer cold inquiries",
        "clearer quote status",
        "better visibility for managers",
      ],
    },
    {
      id: "field-service-request-triage",
      title: "Service request triage and quote intake",
      problem:
        "Customers ask for help without explaining the service type, location, photos, urgency, or expected scope.",
      solution:
        "A triage flow collects job category, location, details, media, preferred timing, and quote requirements.",
      result: [
        "clearer service requests",
        "fewer repeated questions",
        "faster quote preparation",
        "better request prioritization",
      ],
    },
    {
      id: "field-service-scheduling",
      title: "Scheduling and technician or crew assignment",
      problem:
        "Scheduling depends on scattered messages between customers, coordinators, and technicians.",
      solution:
        "A scheduling workflow captures availability, location, job type, and crew capacity before assignment.",
      result: [
        "faster crew assignment",
        "clearer appointment windows",
        "less manual coordination",
        "better customer updates",
      ],
    },
    {
      id: "field-service-job-follow-up",
      title: "Job status, approval, and post-service follow-up",
      problem:
        "Customers ask for updates, approvals, and next steps while job status sits in chats or spreadsheets.",
      solution:
        "A status workflow tracks visit outcome, required approval, next action, payment note, and follow-up.",
      result: [
        "visible job progress",
        "clearer customer approvals",
        "better manager oversight",
        "more reliable post-service follow-up",
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
          "You work directly with the people building your system, so scope, decisions, and tradeoffs stay clear.",
      },
      {
        title: "Practical systems",
        body:
          "We do not build complexity to make the project look bigger. We focus on the useful system your business actually needs.",
      },
      {
        title: "Modern development workflow",
        body:
          "We use current development tools to plan, build, debug, document, and test ideas faster. The final system is still reviewed and delivered by real developers.",
      },
      {
        title: "Clear scope and delivery",
        body:
          "Before building, we define the problem, first version, required features, realistic timeline, and support needs after launch.",
      },
      {
        title: "Small team advantage",
        body:
          "A small team means direct access, lower overhead, faster communication, more flexibility, and a closer client relationship.",
      },
    ],
  },
  about: {
    heroTitle: "A practical software partner for MENA businesses",
    heroBody:
      "We help clinics, real estate teams, automotive businesses, field service teams, and growing companies build useful systems for inquiries, bookings, leads, portals, dashboards, and internal workflows.",
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
      "customer automation",
      "WhatsApp workflows",
      "appointment request systems",
      "property lead systems",
      "vehicle inquiry systems",
      "service request systems",
      "websites",
      "mobile apps",
      "web apps",
      "business portals",
      "admin dashboards",
      "reporting tools",
      "internal systems",
    ],
  },
  support: {
    heroTitle: "Support, Hosting & Maintenance",
    heroBody:
      "A digital system should not be abandoned after launch. We offer support, hosting, and maintenance options depending on project importance and required coverage.",
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
      "Whether you need cleaner inquiries, appointment intake, property lead follow-up, WhatsApp workflows, a website, an app, a dashboard, or an internal system, we can help define the simplest useful version.",
    cta:
      "Send your request and we will help you define the most practical system for your business.",
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
          "Inquiry, booking, or lead flow",
          "Clinic, real estate, automotive, or field service workflow",
          "Website, app, portal, or dashboard",
          "WhatsApp automation or handoff",
          "Support, hosting, or maintenance",
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
    startProject: "أرسل تفاصيل المشروع",
    bookConsultation: "احجز استشارة مجانية",
    seeWhatWeBuild: "اطلع على ما نبنيه",
    contactWhatsapp: "تواصل معنا عبر واتساب",
  },
  home: {
    hero: {
      eyebrow: "برمجيات عملية لتدفق العملاء",
      title: "ابنِ النظام الذي يلمسه عملاؤك أولاً",
      body:
        "تبني Servicely برمجيات عملية للاستفسارات والحجوزات والعملاء المحتملين والمتابعة في منطقة MENA.",
      trust:
        "تركيزنا على العيادات والعقارات والسيارات والخدمات الميدانية في الشرق الأوسط، خصوصاً لبنان والعراق والإمارات.",
      ctas: [
        { label: "تواصل معنا", href: "/contact" },
        { label: "استكشف الخدمات", href: "/services#services-blueprints" },
      ],
    },
    improveTitle: "ما الذي نساعدك على تحسينه",
    improveBody:
      "نركز على استقبال الاستفسارات، طلبات المواعيد، متابعة العملاء المحتملين، مسارات واتساب، المواقع، التطبيقات، ولوحات التحكم.",
    marketsTitle: "مصمم لـ MENA، مع تركيز على لبنان والعراق والإمارات",
    industriesTitle: "القطاعات الأساسية",
    whyTitle: "لماذا تعمل معنا؟",
    whyBody:
      "نحن فريق تقني صغير للشركات التي تريد تواصلاً مباشراً مع من يبني النظام، نطاقاً واضحاً، تنفيذاً عملياً، ودعماً بعد الإطلاق.",
    practicalTitle: "أنظمة عملية بدون تعقيد غير ضروري",
    practicalBody:
      "معظم الشركات لا تحتاج إلى منصة ضخمة. تحتاج إلى نظام مفيد يحل مشكلة واضحة.",
    supportTitle: "الدعم، الاستضافة، والصيانة",
    supportBody:
      "نوفر دعماً بعد الإطلاق، مساعدة في الاستضافة، مراقبة، إدارة نشر، نسخاً احتياطية، وخيارات صيانة حسب أهمية النظام.",
    finalCtaTitle: "لنبنِ النظام الذي يحتاجه عملك فعلاً",
    finalCtaBody:
      "أخبرنا بما تريد تحسينه: طلبات المواعيد، استفسارات المرضى، مطابقة العقارات، استفسارات المركبات، طلبات الخدمة، متابعة العملاء المحتملين، مسارات واتساب، التطبيقات، لوحات التحكم، أو موقعك.",
  },
  improve: [
    {
      id: "ai-customer-automation",
      title: "تنفيذ مهام تواصل العملاء تلقائيًا",
      body:
        "نبني مساعدات رقمية ومسارات استقبال تجيب عن الأسئلة الروتينية، تجمع بيانات العملاء، تؤهل الطلبات، وتحول الاستفسارات الجادة إلى فريقك.",
      bestFor: [
        "العيادات",
        "شركات العقارات",
        "الشركات التي تعتمد على واتساب",
        "الفرق التي تستقبل استفسارات متكررة",
      ],
      examples: [
        "استقبال طلبات المواعيد",
        "توجيه استفسارات المرضى",
        "تأهيل العملاء المحتملين في العقارات",
        "مسار أسئلة شائعة",
        "جمع طلبات العملاء",
        "تحويل الطلب إلى الفريق",
      ],
    },
    {
      id: "websites-web-apps-portals",
      title: "المواقع والتطبيقات والبوابات",
      body:
        "نبني مواقع ومنصات مرتبطة بإجراءات فعلية للعميل: الحجز، الاستفسار، مشاهدة العقارات، إرسال الطلبات، لوحات التحكم، والبوابات.",
      examples: [
        "مواقع العيادات",
        "مواقع العقارات",
        "بوابات العملاء",
        "لوحات إدارة",
        "مسارات حجز وطلبات",
        "أدوات استفسار عقارية",
      ],
    },
    {
      id: "mobile-apps-store-deployment",
      title: "تطبيقات الجوال والنشر",
      body:
        "نبني تطبيقات Android و iOS عندما يحتاج سير العمل إلى تجربة جوال للعملاء أو الموظفين أو الوكلاء أو الفرق الداخلية.",
      examples: [
        "تطبيقات العملاء",
        "تطبيقات العيادات",
        "تطبيقات العقارات",
        "تطبيقات الحجز والطلبات",
        "تطبيقات الوكلاء",
        "النشر على Google Play و App Store",
      ],
    },
    {
      id: "whatsapp-lead-automation",
      title: "مسارات واتساب والعملاء المحتملين",
      body:
        "تعتمد كثير من شركات MENA على واتساب. نساعدك على تنظيم المحادثات، جمع المعلومات الصحيحة، تأهيل العملاء المحتملين، وتوجيه الاستفسار للشخص المناسب.",
      examples: [
        "مسار استفسار واتساب",
        "جمع طلبات المواعيد",
        "تأهيل مشتري أو مستأجر عقاري",
        "طلبات مواعيد العيادات",
        "تحويل الطلب إلى الفريق",
        "استقبال الطلبات خارج ساعات العمل",
        "تتبع المتابعة",
      ],
    },
    {
      id: "reporting-business-visibility",
      title: "لوحات تحكم ورؤية أوضح",
      body:
        "نبني لوحات تعرض الاستفسارات وطلبات المواعيد والعملاء المحتملين في العقارات والحالة والتحويل والمتابعة في مكان واحد.",
      examples: [
        "لوحات العملاء المحتملين",
        "لوحات المواعيد",
        "تتبع الاستفسارات",
        "حالة الطلبات",
        "تتبع استجابة الموظفين",
        "تقارير المتابعة",
      ],
    },
    {
      id: "support-hosting-maintenance",
      title: "الدعم والاستضافة والصيانة",
      body:
        "ندعم نظامك بعد الإطلاق من خلال المساعدة في الاستضافة و SSL والنسخ الاحتياطي والمراقبة وإدارة النشر وتحديثات الأمان وخيارات الصيانة.",
      examples: [
        "دعم قياسي بعد الإطلاق",
        "صيانة ذات أولوية",
        "مراقبة",
        "فحص النسخ الاحتياطي",
        "تحديثات الأمان",
        "إدارة النشر",
      ],
    },
  ] satisfies BulletSection[],
  markets: [
    {
      title: "MENA",
      body:
        "نبني للشركات في الشرق الأوسط وشمال أفريقيا التي تعتمد على تواصل سريع عبر الجوال وخطوة تالية واضحة للعميل.",
      points: [
        "رحلات عملاء بالعربية والإنجليزية",
        "مسارات استفسارات تعتمد على واتساب",
        "طلبات مواعيد للعيادات",
        "متابعة العملاء المحتملين في العقارات",
        "طلبات السيارات والخدمات الميدانية",
      ],
    },
    {
      title: "لبنان",
      body:
        "تحتاج الشركات التي تعتمد على الاستفسارات في لبنان غالباً إلى أنظمة عملية تحسن الاستجابة بدون زيادة تعقيد التشغيل.",
      points: [
        "العيادات",
        "المراكز الطبية",
        "شركات العقارات",
        "شركات السيارات والخدمات",
        "الشركات التي تستقبل استفسارات متكررة",
      ],
    },
    {
      title: "العراق",
      body:
        "تحتاج الشركات النامية في العراق إلى حضور رقمي أقوى واستقبال أفضل ومتابعة أوضح للعملاء الذين يتواصلون عبر الإنترنت.",
      points: [
        "العيادات",
        "المراكز الطبية",
        "شركات العقارات",
        "فرق السيارات والخدمات المنزلية",
        "فرق المبيعات التي تستخدم واتساب",
      ],
    },
    {
      title: "الإمارات",
      body:
        "تتوقع الشركات في الإمارات تجربة رقمية مصقولة يكون فيها الموقع ومسار واتساب وتحويل الطلب إلى الفريق أجزاء متصلة.",
      points: [
        "العيادات",
        "المراكز الطبية",
        "شركات العقارات",
        "فرق السيارات والخدمات الميدانية",
        "الفرق التي تتعامل مباشرة مع العملاء",
      ],
    },
  ],
  industries: [
    {
      id: "clinics-medical-centers",
      title: "العيادات والمراكز الطبية",
      body:
        "تحتاج العيادات إلى الثقة والسرعة والتواصل الواضح. نساعدها على استقبال طلبات المواعيد، توجيه استفسارات المرضى، وإظهار المتابعة بوضوح.",
      systems: [
        "مسار طلب موعد",
        "مساعد استفسارات المرضى",
        "توجيه حسب الخدمة أو الفرع",
        "استقبال طلبات خارج ساعات العمل",
        "موقع للعيادة",
        "لوحة متابعة الطلبات",
      ],
    },
    {
      id: "real-estate-agencies",
      title: "شركات العقارات",
      body:
        "تحتاج فرق العقارات إلى استفسارات عقارية أنظف، تأهيل المشترين أو المستأجرين، تنسيق المعاينات، وتحويل واضح إلى الوكلاء.",
      systems: [
        "مسار مطابقة عقارات",
        "تأهيل مشتري أو مستأجر",
        "استقبال طلبات المعاينة",
        "موقع قوائم عقارية",
        "لوحة للوكلاء",
        "تتبع متابعة العملاء المحتملين",
      ],
    },
    {
      id: "automotive-mobility",
      title: "السيارات وخدمات التنقل",
      body:
        "تحتاج فرق السيارات إلى استفسارات مركبات أوضح، استقبال مواعيد صيانة، متابعة عروض، وتوجيه حسب الفرع.",
      systems: [
        "تأهيل استفسارات المركبات",
        "جدولة تجربة القيادة",
        "استقبال مواعيد الصيانة",
        "توجيه حسب الفرع",
        "متابعة التأجير أو التوفر",
        "لوحة متابعة العروض",
      ],
    },
    {
      id: "home-field-services",
      title: "الخدمات المنزلية والميدانية",
      body:
        "تحتاج فرق الخدمات الميدانية إلى طلبات خدمة أوضح، تفاصيل عروض أسعار، جدولة، تعيين فرق، حالة عمل، ومتابعة.",
      systems: [
        "فرز طلبات الخدمة",
        "مسار استقبال عروض الأسعار",
        "تعيين فني أو فريق",
        "تتبع حالة العمل",
        "مسار الموافقات",
        "متابعة ما بعد الخدمة",
      ],
    },
  ] satisfies BulletSection[],
  useCases: [
    {
      id: "clinic-appointment-intake",
      title: "استقبال مواعيد للعيادات",
      problem:
        "يرسل المرضى رسائل مواعيد غامضة بدون خدمة أو وقت مفضل أو فرع أو بيانات تواصل.",
      solution:
        "يجمع مسار استقبال واضح التفاصيل التي يحتاجها الموظفون قبل تأكيد الموعد.",
      result: [
        "طلبات مواعيد أوضح",
        "رسائل متابعة أقل",
        "تأكيد أسرع من الفريق",
        "استفسارات ضائعة أقل",
      ],
    },
    {
      id: "clinic-inquiry-routing",
      title: "توجيه استفسارات خدمات العيادة",
      problem:
        "يسأل المرضى أسئلة أساسية غير طبية عن الخدمات والأطباء والفروع وأوقات العمل وطرق التواصل عبر قنوات كثيرة.",
      solution:
        "يجيب مساعد أو مسار منظم عن المعلومات الروتينية ويوجه الطلب إلى الفريق أو الفرع المناسب.",
      result: [
        "إجابات أسرع",
        "توجيه أفضل للمرضى",
        "عمل يدوي متكرر أقل",
        "تحويل أوضح للموظفين",
      ],
    },
    {
      id: "clinic-follow-up-tracking",
      title: "متابعة العيادات واستقبال الطلبات خارج الدوام",
      problem:
        "قد تتأخر الطلبات أو تُنسى عندما تصل خارج الدوام أو خلال فترات ازدحام العيادة.",
      solution:
        "تعرض لوحة الطلبات الحالة والتحويل والتذكيرات والمتابعة المعلقة.",
      result: [
        "يتم استقبال طلبات خارج الدوام",
        "تصبح المتابعة مرئية",
        "يعرف الفريق ما يحتاج انتباهاً",
        "تبدو تجربة المريض أكثر تنظيماً",
      ],
    },
    {
      id: "real-estate-property-matching",
      title: "مطابقة العقارات",
      problem:
        "يسأل المشترون والمستأجرون بشكل عام بدون ميزانية أو منطقة أو نوع عقار أو عدد غرف أو جدول زمني.",
      solution:
        "يجمع مسار المطابقة التفضيلات قبل اقتراح فئات قوائم مناسبة أو تحويل العميل إلى الوكيل.",
      result: [
        "محادثات عقارية أكثر صلة",
        "ملفات أوضح للمشترين والمستأجرين",
        "استجابة أسرع من الوكيل",
        "وقت أقل في جمع الأساسيات",
      ],
    },
    {
      id: "real-estate-lead-follow-up",
      title: "تأهيل ومتابعة العملاء المحتملين في العقارات",
      problem:
        "يستقبل الوكلاء عملاء محتملين كثيرين بتفاصيل ناقصة ويصعب تتبع من يحتاج الاتصال أو الرسالة التالية.",
      solution:
        "يتتبع نظام التأهيل والمتابعة الميزانية والمنطقة والنوع والاستعجال والمصدر والحالة والخطوة التالية.",
      result: [
        "يرتب الوكلاء العملاء المحتملين الجادين",
        "تصبح المتابعة ثابتة",
        "يرى المالكون حالة خط المبيعات",
        "تضيع فرص أقل",
      ],
    },
    {
      id: "real-estate-viewing-handoff",
      title: "جدولة المعاينات وتحويلها للوكيل",
      problem:
        "تحتاج طلبات المعاينة إلى تنسيق يدوي متكرر بين توفر العميل وتفاصيل العقار وتعيين الوكيل.",
      solution:
        "يجمع مسار طلب المعاينة العقار والوقت المفضل وبيانات التواصل والتوفر قبل إرسالها إلى الوكيل المناسب.",
      result: [
        "طلبات معاينة أوضح",
        "تحويل أسرع إلى الوكيل",
        "تنسيق يدوي أقل",
        "تجربة عميل أفضل",
      ],
    },
    {
      id: "automotive-test-drive-scheduling",
      title: "تأهيل استفسارات المركبات وجدولة تجربة القيادة",
      problem:
        "يسأل المشترون عن المركبات بدون تحديد الموديل أو الميزانية أو التمويل أو البدل أو الموقع أو التوقيت.",
      solution:
        "يجمع مسار التأهيل المركبة المطلوبة والميزانية والجدول الزمني والفرع وبيانات التواصل وتفضيل تجربة القيادة.",
      result: [
        "استفسارات مركبات أوضح",
        "جدولة أسرع لتجارب القيادة",
        "تحويل أفضل إلى فريق المبيعات",
        "وقت أقل في جمع الأساسيات",
      ],
    },
    {
      id: "automotive-service-intake",
      title: "استقبال مواعيد صيانة السيارات",
      problem:
        "تصل طلبات الصيانة بدون تفاصيل المركبة أو المشكلة أو درجة الاستعجال أو الفرع المفضل.",
      solution:
        "يجمع مسار الاستقبال نوع المركبة والموديل والسنة والمشكلة والصور عند الحاجة والوقت والفرع المفضل.",
      result: [
        "طلبات صيانة أنظف",
        "توجيه أفضل حسب الفرع",
        "تحضير أسرع لمستشار الخدمة",
        "خطوات تالية أوضح للعملاء",
      ],
    },
    {
      id: "automotive-quote-follow-up",
      title: "متابعة العروض أو التأجير أو التوفر",
      problem:
        "يسأل العملاء عن عروض أو توفر تأجير أو مخزون، ثم تضيع المتابعة داخل واتساب.",
      solution:
        "يتتبع سير المتابعة حالة العرض والتوفر وتفضيلات العميل والخطوة التالية.",
      result: [
        "متابعة أكثر ثباتاً",
        "استفسارات جادة أقل ضياعاً",
        "حالة عروض أوضح",
        "رؤية أفضل للمديرين",
      ],
    },
    {
      id: "field-service-request-triage",
      title: "فرز طلبات الخدمة واستقبال تفاصيل عرض السعر",
      problem:
        "يطلب العملاء الخدمة بدون توضيح النوع أو الموقع أو الصور أو درجة الاستعجال أو نطاق العمل المتوقع.",
      solution:
        "يجمع مسار الفرز نوع العمل والموقع والتفاصيل والوسائط والوقت المفضل ومتطلبات عرض السعر.",
      result: [
        "طلبات خدمة أوضح",
        "أسئلة متابعة أقل",
        "تحضير أسرع لعروض الأسعار",
        "ترتيب أفضل للأولويات",
      ],
    },
    {
      id: "field-service-scheduling",
      title: "الجدولة وتعيين الفني أو الفريق",
      problem:
        "تعتمد الجدولة على رسائل متفرقة بين العملاء والمنسقين والفنيين.",
      solution:
        "يلتقط سير الجدولة التوفر والموقع ونوع العمل وسعة الفريق قبل التعيين.",
      result: [
        "تعيين أسرع للفريق",
        "نوافذ مواعيد أوضح",
        "تنسيق يدوي أقل",
        "تحديثات أفضل للعملاء",
      ],
    },
    {
      id: "field-service-job-follow-up",
      title: "حالة العمل والموافقة والمتابعة بعد الخدمة",
      problem:
        "يسأل العملاء عن التحديثات والموافقات والخطوات التالية بينما تبقى حالة العمل في المحادثات أو الجداول.",
      solution:
        "يتتبع سير الحالة نتيجة الزيارة والموافقة المطلوبة والخطوة التالية وملاحظة الدفع والمتابعة.",
      result: [
        "تقدم العمل يصبح مرئياً",
        "موافقات أوضح من العملاء",
        "إشراف أفضل للمديرين",
        "متابعة أكثر انتظاماً بعد الخدمة",
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
          "تعمل مباشرة مع الأشخاص الذين يبنون نظامك، لذلك تبقى القرارات والنطاق والمفاضلات واضحة.",
      },
      {
        title: "أنظمة عملية",
        body:
          "لا نبني التعقيد فقط ليبدو المشروع أكبر. نركز على النظام المفيد الذي يحتاجه عملك فعلاً.",
      },
      {
        title: "سير عمل تطوير حديث",
        body:
          "نستخدم أدوات تطوير حديثة للتخطيط والبناء والتصحيح والتوثيق واختبار الأفكار بسرعة أكبر. يبقى النظام النهائي مراجعاً ومسلماً من مطورين حقيقيين.",
      },
      {
        title: "نطاق وتسليم واضح",
        body:
          "قبل البناء نحدد المشكلة والنسخة الأولى والميزات المطلوبة والجدول الواقعي واحتياجات الدعم بعد الإطلاق.",
      },
      {
        title: "ميزة الفريق الصغير",
        body:
          "الفريق الصغير يعني وصولاً مباشراً، تكلفة تشغيل أقل، تواصلاً أسرع، مرونة أكثر، وعلاقة أقرب مع العميل.",
      },
    ],
  },
  about: {
    heroTitle: "شريك برمجي عملي لشركات MENA",
    heroBody:
      "نساعد العيادات وشركات العقارات وشركات السيارات وفرق الخدمات الميدانية والشركات النامية على بناء أنظمة مفيدة للاستفسارات والحجوزات والعملاء المحتملين والبوابات ولوحات التحكم وسير العمل الداخلي.",
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
      "تنفيذ مهام تواصل العملاء تلقائيًا",
      "مسارات واتساب",
      "أنظمة طلب المواعيد",
      "أنظمة العملاء المحتملين في العقارات",
      "أنظمة استفسارات المركبات",
      "أنظمة طلبات الخدمة",
      "مواقع إلكترونية",
      "تطبيقات جوال",
      "تطبيقات ويب",
      "بوابات أعمال",
      "لوحات إدارة",
      "أدوات تقارير",
      "أنظمة داخلية",
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
      "سواء كنت تحتاج استفسارات أوضح، استقبال مواعيد، متابعة عملاء محتملين في العقارات، مسارات واتساب، موقعاً، تطبيقاً، لوحة تحكم، أو نظاماً داخلياً، يمكننا مساعدتك على تحديد أبسط نسخة مفيدة.",
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
          "مسار استفسارات أو حجوزات أو عملاء محتملين",
          "سير عمل للعيادات أو العقارات أو السيارات أو الخدمات الميدانية",
          "موقع أو تطبيق أو بوابة أو لوحة تحكم",
          "تنفيذ مهام واتساب تلقائيًا أو تحويل الطلبات",
          "دعم أو استضافة أو صيانة",
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
