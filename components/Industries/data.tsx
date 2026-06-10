import {
  BarChart3,
  Building2,
  CalendarCheck,
  CarFront,
  Globe,
  HeartPulse,
  MessageCircle,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type UseCase = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type Problem = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  Icon: LucideIcon;
  accent: string;
  accentBg: string;
};

export type Industry = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  points: string[];
  tags?: string[];
  outcome: string;
  useCases: UseCase[];
  Icon: LucideIcon;
  color: string;
  bg: string;
};

export type IndustriesCopy = {
  eyebrow: string;
  title: string;
  body: string;
  support: string;
  cta: string;
  ctaHref: string;
  metrics: { value: string; label: string }[];
  sectionTitle: string;
  sectionBody: string;
  closingTitle: string;
  closingBody: string;
  closingChecklist: string[];
  helpsWithLabel: string;
  viewUseCasesLabel: string;
  useCasesHeroEyebrow: string;
  useCasesHeroTitle: string;
  useCasesHeroBody: string;
  problemsEyebrow: string;
  problemsTitle: string;
  problemsBody: string;
  problemsLabels: {
    problem: string;
    solution: string;
    result: string;
  };
  industriesEyebrow: string;
  industriesShortTitle: string;
  industriesShortBody: string;
  detail: {
    backLabel: string;
    exploreLabel: string;
    learnMore: string;
    overviewLabel: string;
    benefitsTitle: string;
    useCasesTitle: string;
    useCasesBody: string;
    otherTitle: string;
  };
  problems: Problem[];
  industries: Industry[];
};

const problemAccents = {
  response: { accent: "var(--dev-500)", accentBg: "var(--dev-50)" },
  appointments: {
    accent: "var(--design-500)",
    accentBg: "var(--design-50)",
  },
  leads: {
    accent: "var(--engagement-500)",
    accentBg: "var(--engagement-50)",
  },
  handoff: { accent: "var(--dev-500)", accentBg: "var(--dev-50)" },
  visibility: {
    accent: "var(--design-500)",
    accentBg: "var(--design-50)",
  },
  credibility: {
    accent: "var(--engagement-500)",
    accentBg: "var(--engagement-50)",
  },
};

const industryStyle = {
  clinics: { color: "var(--dev-500)", bg: "var(--dev-50)" },
  realEstate: { color: "var(--design-500)", bg: "var(--design-50)" },
  automotive: {
    color: "var(--engagement-500)",
    bg: "var(--engagement-50)",
  },
  fieldServices: { color: "var(--dev-500)", bg: "var(--dev-50)" },
};

const enProblems: Problem[] = [
  {
    id: "response",
    title: "Customers wait too long for basic answers",
    problem:
      "Staff repeat the same answers across WhatsApp, calls, Instagram, website forms and direct messages.",
    solution:
      "We build assistants and structured inquiry flows that answer common questions and collect the right details.",
    result:
      "Customers get faster answers and staff handle serious requests with better context.",
    Icon: MessageCircle,
    ...problemAccents.response,
  },
  {
    id: "appointments",
    title: "Appointment requests are messy",
    problem:
      "Requests arrive incomplete, double-booking risk increases and staff spend time asking the same follow-up questions.",
    solution:
      "We build appointment request flows that collect service, preferred time, branch, contact details and notes before staff confirm.",
    result:
      "Teams receive cleaner appointment requests and customers understand the next step.",
    Icon: CalendarCheck,
    ...problemAccents.appointments,
  },
  {
    id: "leads",
    title: "Leads arrive without useful details",
    problem:
      "Agents receive vague messages with no budget, location, property type, timeline or preference.",
    solution:
      "We build qualification flows for real estate teams before handoff to agents.",
    result:
      "Agents spend less time chasing basic information and more time with serious customers.",
    Icon: UserCheck,
    ...problemAccents.leads,
  },
  {
    id: "handoff",
    title: "WhatsApp conversations are hard to organize",
    problem:
      "Different people answer from different places and important requests can be missed or forgotten.",
    solution:
      "We structure intake, routing, summaries and handoff so the right person receives the right request.",
    result:
      "Customer conversations become easier to manage and follow up.",
    Icon: MessageCircle,
    ...problemAccents.handoff,
  },
  {
    id: "visibility",
    title: "Owners cannot see what is happening",
    problem:
      "Leads, appointment requests and follow-up status are spread across messages and spreadsheets.",
    solution:
      "We build dashboards that show inquiries, requests, status, handoff and follow-up activity.",
    result:
      "Owners and managers get a clearer view of customer demand and team response.",
    Icon: BarChart3,
    ...problemAccents.visibility,
  },
  {
    id: "credibility",
    title: "The website does not help customers act",
    problem:
      "The site looks outdated, lacks clear service pages or only describes the company without action flows.",
    solution:
      "We build websites connected to inquiry, appointment, lead capture, portal or customer support workflows.",
    result:
      "The website becomes part of the customer journey, not just a brochure.",
    Icon: Globe,
    ...problemAccents.credibility,
  },
];

const arProblems: Problem[] = [
  {
    id: "response",
    title: "العملاء ينتظرون طويلاً للإجابات الأساسية",
    problem:
      "يكرر الموظفون نفس الإجابات عبر واتساب والمكالمات وإنستغرام ونماذج الموقع والرسائل.",
    solution:
      "نبني مساعدين ومسارات استفسار منظمة تجيب عن الأسئلة الشائعة وتجمع التفاصيل الصحيحة.",
    result:
      "يحصل العملاء على إجابات أسرع ويتعامل الموظفون مع الطلبات الجدية بسياق أفضل.",
    Icon: MessageCircle,
    ...problemAccents.response,
  },
  {
    id: "appointments",
    title: "طلبات المواعيد غير منظمة",
    problem:
      "تصل الطلبات ناقصة، يزيد خطر التداخل، ويقضي الموظفون وقتاً في طرح نفس أسئلة المتابعة.",
    solution:
      "نبني مسارات طلب مواعيد تجمع الخدمة والوقت المفضل والفرع وبيانات التواصل والملاحظات قبل التأكيد.",
    result: "يستقبل الفريق طلبات أوضح ويفهم العملاء الخطوة التالية.",
    Icon: CalendarCheck,
    ...problemAccents.appointments,
  },
  {
    id: "leads",
    title: "العملاء المحتملون يصلون بدون تفاصيل مفيدة",
    problem:
      "تصل للوكلاء رسائل عامة بدون ميزانية أو موقع أو نوع عقار أو جدول زمني أو تفضيلات.",
    solution:
      "نبني مسارات تأهيل لفرق العقارات قبل تحويل العميل إلى الوكيل.",
    result:
      "يقضي الوكلاء وقتاً أقل في جمع المعلومات الأساسية ووقتاً أكثر مع العملاء الجديين.",
    Icon: UserCheck,
    ...problemAccents.leads,
  },
  {
    id: "handoff",
    title: "محادثات واتساب صعبة التنظيم",
    problem:
      "يرد أشخاص مختلفون من أماكن مختلفة وقد تضيع الطلبات المهمة أو تُنسى.",
    solution:
      "ننظم استقبال الطلبات والتوجيه والملخصات والتحويل حتى يصل الطلب إلى الشخص الصحيح.",
    result: "تصبح محادثات العملاء أسهل في الإدارة والمتابعة.",
    Icon: MessageCircle,
    ...problemAccents.handoff,
  },
  {
    id: "visibility",
    title: "المالكون لا يرون ما يحدث بوضوح",
    problem:
      "العملاء وطلبات المواعيد وحالة المتابعة متفرقة بين الرسائل والجداول.",
    solution:
      "نبني لوحات تحكم تعرض الاستفسارات والطلبات والحالة والتحويل ونشاط المتابعة.",
    result:
      "يحصل المالكون والمديرون على رؤية أوضح لطلب العملاء واستجابة الفريق.",
    Icon: BarChart3,
    ...problemAccents.visibility,
  },
  {
    id: "credibility",
    title: "الموقع لا يساعد العملاء على اتخاذ إجراء",
    problem:
      "الموقع قديم أو لا يحتوي صفحات خدمات واضحة أو يصف الشركة فقط بدون مسارات فعل.",
    solution:
      "نبني مواقع مرتبطة بالاستفسارات أو المواعيد أو جمع العملاء أو البوابات أو دعم العملاء.",
    result: "يصبح الموقع جزءاً من رحلة العميل وليس مجرد بروشور.",
    Icon: Globe,
    ...problemAccents.credibility,
  },
];

const copy: Record<string, IndustriesCopy> = {
  en: {
    eyebrow: "Primary industries",
    title: "Practical systems for inquiry-heavy MENA businesses",
    body:
      "Servicely builds customer-flow software for clinics, real estate teams, automotive businesses and home service teams across MENA, with a focus on Lebanon, Iraq and the UAE.",
    support:
      "We start with the real customer journey: inquiry, booking, qualification, handoff, follow-up and visibility.",
    cta: "Request a scope",
    ctaHref: "/contact",
    metrics: [
      { value: "MENA", label: "built for the Middle East and North Africa" },
      { value: "3", label: "focus markets: Lebanon, Iraq and the UAE" },
      { value: "4", label: "primary industries with dedicated use cases" },
    ],
    sectionTitle: "Where Servicely fits",
    sectionBody:
      "Clinics need appointment clarity. Real estate agencies need better-qualified leads. Automotive teams need cleaner vehicle and service requests. Field service teams need scheduling and job follow-up that customers can understand.",
    closingTitle: "Build the customer system your team can actually use",
    closingBody:
      "Bring your appointment process, property inquiry flow, WhatsApp messages, website, forms or follow-up spreadsheet. We will map the simplest useful system and build it cleanly.",
    closingChecklist: [
      "Clinic appointment intake and patient inquiry routing",
      "Real estate property matching and lead qualification",
      "Automotive inquiries, service intake and quote follow-up",
      "Home and field service requests, scheduling and job status",
      "WhatsApp intake, handoff and follow-up workflows",
      "Business websites, apps, portals and dashboards",
    ],
    helpsWithLabel: "We help with",
    viewUseCasesLabel: "View use cases",
    useCasesHeroEyebrow: "Real use cases",
    useCasesHeroTitle: "Twelve customer problems we turn into working systems",
    useCasesHeroBody:
      "Four primary industries, each with three practical customer-flow use cases.",
    problemsEyebrow: "Common problems",
    problemsTitle: "You do not need digital tools for decoration",
    problemsBody:
      "You need systems that remove confusion, save time and help customers take the next step.",
    problemsLabels: {
      problem: "Problem",
      solution: "Solution",
      result: "Result",
    },
    industriesEyebrow: "Where this applies",
    industriesShortTitle: "Built for inquiry-heavy businesses",
    industriesShortBody:
      "Clinics, real estate teams, automotive businesses and field service teams need clearer intake, faster response and better follow-up.",
    detail: {
      backLabel: "All industries",
      exploreLabel: "Explore use cases",
      learnMore: "Learn more",
      overviewLabel: "Overview",
      benefitsTitle: "What you get",
      useCasesTitle: "Use cases",
      useCasesBody: "Practical scenarios we build for this type of business.",
      otherTitle: "Other industries",
    },
    problems: enProblems,
    industries: [
      {
        id: "clinics-medical-centers",
        title: "Clinics & medical centers",
        subtitle: "Appointment intake, patient inquiries and follow-up",
        body:
          "For clinics that need clearer appointment requests, faster answers to basic non-medical questions, and cleaner staff handoff.",
        points: [
          "Appointment request intake",
          "Patient inquiry routing",
          "Service and branch information",
          "After-hours request capture",
          "Follow-up dashboards",
        ],
        tags: ["Appointments", "Patients", "WhatsApp", "Follow-up"],
        outcome:
          "Patients send clearer requests, staff receive better context, and follow-up becomes visible.",
        useCases: [
          {
            title: "Appointment scheduling and patient intake",
            problem:
              "Patients send vague messages without service, preferred time, branch or contact details.",
            solution:
              "A guided flow collects the required details before staff confirm the appointment.",
            result:
              "The clinic receives cleaner requests with fewer back-and-forth messages.",
          },
          {
            title: "Service inquiry routing",
            problem:
              "Patients ask basic non-medical questions across different channels and often reach the wrong person.",
            solution:
              "A structured assistant answers routine information and routes the request by service, doctor or branch.",
            result:
              "Patients get faster direction and staff handle requests with better context.",
          },
          {
            title: "Follow-up and after-hours tracking",
            problem:
              "Requests can be missed when messages arrive after hours or during busy clinic periods.",
            solution:
              "A dashboard tracks request status, handoff, reminders and pending follow-up.",
            result: "The team sees what needs attention before requests go cold.",
          },
        ],
        Icon: HeartPulse,
        ...industryStyle.clinics,
      },
      {
        id: "real-estate-agencies",
        title: "Real estate agencies",
        subtitle: "Property matching, qualified leads and viewing handoff",
        body:
          "For agencies that need cleaner property inquiries, better-qualified buyers or renters, viewing requests and agent follow-up.",
        points: [
          "Property matching flows",
          "Buyer/renter qualification",
          "Viewing request intake",
          "Agent handoff",
          "Lead follow-up dashboards",
        ],
        tags: ["Matching", "Leads", "Viewings", "Agents"],
        outcome:
          "Agents receive leads with budget, area, property type, timeline and viewing preference.",
        useCases: [
          {
            title: "Property matching",
            problem:
              "Buyers and renters ask broadly without budget, area, property type, bedrooms or timeline.",
            solution:
              "A matching flow collects preferences before suggesting relevant listings or handing the lead to an agent.",
            result:
              "Agents start with a clearer buyer or renter profile.",
          },
          {
            title: "Lead qualification and follow-up",
            problem:
              "Agents receive incomplete leads and lose track of who needs the next message or call.",
            solution:
              "A qualification workflow tracks budget, area, type, urgency, source, status and next action.",
            result:
              "The agency can prioritize serious leads and follow up consistently.",
          },
          {
            title: "Viewing scheduling and agent handoff",
            problem:
              "Viewing requests require repeated manual coordination between customer availability, property details and agent assignment.",
            solution:
              "A viewing flow collects the property, preferred time, contact details and availability before routing the request.",
            result:
              "Scheduling becomes clearer for customers and agents.",
          },
        ],
        Icon: Building2,
        ...industryStyle.realEstate,
      },
      {
        id: "automotive-mobility",
        title: "Automotive & mobility",
        subtitle: "Vehicle inquiries, service intake and quote follow-up",
        body:
          "For dealerships, rental teams, garages and mobility businesses that need clearer vehicle requests, service bookings, branch routing and follow-up.",
        points: [
          "Vehicle inquiry qualification",
          "Test-drive scheduling",
          "Service appointment intake",
          "Branch routing",
          "Quote and availability follow-up",
        ],
        tags: ["Vehicles", "Service", "Quotes", "Follow-up"],
        outcome:
          "Teams receive inquiries with vehicle, budget, service need, branch and timing details.",
        useCases: [
          {
            title: "Vehicle inquiry qualification and test-drive scheduling",
            problem:
              "Buyers ask about vehicles without model, budget, financing, trade-in, location or timing details.",
            solution:
              "A qualification flow collects vehicle interest, budget, timeline, branch, contact details and test-drive preference.",
            result:
              "Sales teams receive clearer leads and schedule serious test drives faster.",
          },
          {
            title: "Service appointment intake and branch routing",
            problem:
              "Service requests arrive without vehicle details, issue, urgency or preferred branch.",
            solution:
              "An intake flow collects make, model, year, issue, photos if needed, preferred time and branch.",
            result:
              "Advisors can route and prepare service requests before the customer arrives.",
          },
          {
            title: "Quote, rental or availability follow-up",
            problem:
              "Customers ask for quotes, rental availability or stock updates and follow-up gets lost in WhatsApp.",
            solution:
              "A follow-up workflow tracks quote status, availability, customer preference and next action.",
            result:
              "Teams follow up consistently and fewer high-intent inquiries go cold.",
          },
        ],
        Icon: CarFront,
        ...industryStyle.automotive,
      },
      {
        id: "home-field-services",
        title: "Home & field services",
        subtitle: "Service requests, scheduling and job follow-up",
        body:
          "For maintenance, repair, cleaning, installation and field teams that need cleaner requests, quote details, scheduling and customer updates.",
        points: [
          "Service request triage",
          "Quote intake",
          "Technician or crew assignment",
          "Job status tracking",
          "Post-service follow-up",
        ],
        tags: ["Requests", "Quotes", "Scheduling", "Status"],
        outcome:
          "Teams get clearer job details before dispatch and customers know the next step.",
        useCases: [
          {
            title: "Service request triage and quote intake",
            problem:
              "Customers ask for help without explaining the service type, location, photos, urgency or expected scope.",
            solution:
              "A triage flow collects job category, location, details, media, preferred timing and quote requirements.",
            result:
              "Teams can price, prioritize and route requests with fewer repeated questions.",
          },
          {
            title: "Scheduling and technician or crew assignment",
            problem:
              "Scheduling depends on scattered messages between customers, coordinators and technicians.",
            solution:
              "A scheduling workflow captures availability, location, job type and crew capacity before assignment.",
            result:
              "Coordinators assign work faster and customers receive clearer appointment windows.",
          },
          {
            title: "Job status, approval and post-service follow-up",
            problem:
              "Customers ask for updates, approvals and next steps while job status sits in chats or spreadsheets.",
            solution:
              "A status workflow tracks visit outcome, required approval, next action, payment note and follow-up.",
            result:
              "Managers see job progress and customers are not left guessing.",
          },
        ],
        Icon: Wrench,
        ...industryStyle.fieldServices,
      },
    ],
  },
  ar: {
    eyebrow: "القطاعات الأساسية",
    title: "أنظمة عملية للشركات التي تعتمد على الاستفسارات في MENA",
    body:
      "تبني Servicely برمجيات لتنظيم تدفق العملاء للعيادات وشركات العقارات وقطاع السيارات وفرق الخدمات الميدانية في منطقة MENA، مع تركيز على لبنان والعراق والإمارات.",
    support:
      "نبدأ من رحلة العميل الفعلية: الاستفسار، الحجز، التأهيل، التحويل، المتابعة، والرؤية الواضحة.",
    cta: "اطلب نطاقاً واضحاً",
    ctaHref: "/contact",
    metrics: [
      { value: "MENA", label: "مصمم للشرق الأوسط وشمال أفريقيا" },
      { value: "3", label: "أسواق تركيز: لبنان والعراق والإمارات" },
      { value: "4", label: "قطاعات أساسية مع حالات استخدام مخصصة" },
    ],
    sectionTitle: "أين يمكن أن تساعدك Servicely؟",
    sectionBody:
      "تحتاج العيادات إلى مواعيد أوضح. وتحتاج شركات العقارات إلى عملاء مؤهلين أكثر. وتحتاج فرق السيارات إلى استفسارات مركبات وخدمات أنظف. وتحتاج فرق الخدمات الميدانية إلى جدولة ومتابعة حالة يفهمها العميل.",
    closingTitle: "ابنِ نظام العملاء الذي يستطيع فريقك استخدامه فعلاً",
    closingBody:
      "شارك معنا مسار المواعيد أو استفسارات العقارات أو رسائل واتساب أو الموقع أو النماذج أو جدول المتابعة. سنرسم أبسط نظام مفيد، ثم نبنيه بطريقة واضحة.",
    closingChecklist: [
      "استقبال مواعيد العيادات وتوجيه استفسارات المرضى",
      "مطابقة العقارات وتأهيل العملاء المحتملين",
      "استفسارات السيارات واستقبال الصيانة ومتابعة العروض",
      "طلبات الخدمات المنزلية والميدانية والجدولة وحالة العمل",
      "مسارات واتساب للاستقبال والتحويل والمتابعة",
      "مواقع أعمال وتطبيقات وبوابات ولوحات تحكم",
    ],
    helpsWithLabel: "نساعد في",
    viewUseCasesLabel: "شاهد حالات الاستخدام",
    useCasesHeroEyebrow: "حالات استخدام عملية",
    useCasesHeroTitle: "اثنتا عشرة مشكلة عملاء نحولها إلى أنظمة تعمل",
    useCasesHeroBody:
      "أربعة قطاعات أساسية، ولكل قطاع ثلاث حالات استخدام عملية لتنظيم تدفق العملاء.",
    problemsEyebrow: "مشكلات شائعة",
    problemsTitle: "لا تحتاج أدوات رقمية للزينة",
    problemsBody:
      "تحتاج إلى أنظمة تزيل الفوضى، توفر الوقت، وتساعد العملاء على اتخاذ الخطوة التالية.",
    problemsLabels: {
      problem: "المشكلة",
      solution: "الحل",
      result: "النتيجة",
    },
    industriesEyebrow: "أين ينطبق ذلك",
    industriesShortTitle: "مصمم للشركات التي تعتمد على الاستفسارات",
    industriesShortBody:
      "تحتاج العيادات وشركات العقارات وفرق السيارات والخدمات الميدانية إلى استقبال أوضح واستجابة أسرع ومتابعة أفضل.",
    detail: {
      backLabel: "كل القطاعات",
      exploreLabel: "استكشف حالات الاستخدام",
      learnMore: "اعرف المزيد",
      overviewLabel: "نظرة عامة",
      benefitsTitle: "ما الذي تحصل عليه",
      useCasesTitle: "حالات الاستخدام",
      useCasesBody: "سيناريوهات عملية نبنيها لهذا النوع من الأعمال.",
      otherTitle: "قطاعات أخرى",
    },
    problems: arProblems,
    industries: [
      {
        id: "clinics-medical-centers",
        title: "العيادات والمراكز الطبية",
        subtitle: "استقبال مواعيد واستفسارات مرضى ومتابعة",
        body:
          "للعيادات التي تحتاج إلى طلبات مواعيد أوضح، إجابات أسرع عن الأسئلة الأساسية غير الطبية، وتحويل أنظف للطلبات إلى الموظفين.",
        points: [
          "استقبال طلبات المواعيد",
          "توجيه استفسارات المرضى",
          "معلومات الخدمات والفروع",
          "استقبال الطلبات خارج الدوام",
          "لوحات متابعة",
        ],
        tags: ["مواعيد", "مرضى", "واتساب", "متابعة"],
        outcome:
          "يرسل المرضى طلبات أوضح، ويستقبل الموظفون سياقاً أفضل، وتصبح المتابعة مرئية.",
        useCases: [
          {
            title: "جدولة المواعيد واستقبال بيانات المرضى",
            problem:
              "يرسل المرضى رسائل غامضة بدون خدمة أو وقت مفضل أو فرع أو بيانات تواصل.",
            solution:
              "يجمع مسار واضح التفاصيل المطلوبة قبل تأكيد الموظفين للموعد.",
            result:
              "تستقبل العيادة طلبات أنظف مع رسائل متابعة أقل.",
          },
          {
            title: "توجيه استفسارات الخدمات",
            problem:
              "يسأل المرضى أسئلة أساسية غير طبية عبر قنوات مختلفة وقد يصلون إلى الشخص غير المناسب.",
            solution:
              "يجيب مساعد منظم عن المعلومات الروتينية ويوجه الطلب حسب الخدمة أو الطبيب أو الفرع.",
            result:
              "يحصل المرضى على توجيه أسرع ويتعامل الموظفون مع الطلبات بسياق أفضل.",
          },
          {
            title: "المتابعة وتتبع الطلبات خارج الدوام",
            problem:
              "قد تضيع الطلبات عندما تصل خارج الدوام أو خلال فترات ازدحام العيادة.",
            solution:
              "تتبع لوحة الطلبات الحالة والتحويل والتذكيرات والمتابعة المعلقة.",
            result:
              "يرى الفريق ما يحتاج انتباهاً قبل أن تبرد الطلبات.",
          },
        ],
        Icon: HeartPulse,
        ...industryStyle.clinics,
      },
      {
        id: "real-estate-agencies",
        title: "شركات العقارات",
        subtitle: "مطابقة عقارات وعملاء مؤهلون وتحويل معاينات",
        body:
          "لشركات العقارات التي تحتاج إلى استفسارات عقارية أوضح، تأهيل أفضل للمشترين أو المستأجرين، طلبات معاينة، ومتابعة للوكلاء.",
        points: [
          "مسارات مطابقة عقارات",
          "تأهيل مشتري أو مستأجر",
          "استقبال طلبات المعاينة",
          "تحويل إلى الوكيل",
          "لوحات متابعة العملاء",
        ],
        tags: ["مطابقة", "عملاء", "معاينات", "وكلاء"],
        outcome:
          "يستقبل الوكلاء عملاء مع ميزانية ومنطقة ونوع عقار وجدول زمني وتفضيل معاينة.",
        useCases: [
          {
            title: "مطابقة العقارات",
            problem:
              "يسأل المشترون والمستأجرون بشكل عام بدون ميزانية أو منطقة أو نوع عقار أو عدد غرف أو جدول زمني.",
            solution:
              "يجمع مسار المطابقة التفضيلات قبل اقتراح عقارات مناسبة أو تحويل العميل إلى الوكيل.",
            result:
              "يبدأ الوكلاء بملف أوضح للمشتري أو المستأجر.",
          },
          {
            title: "تأهيل العملاء والمتابعة",
            problem:
              "يستقبل الوكلاء عملاء بتفاصيل ناقصة ويصعب تتبع من يحتاج الرسالة أو المكالمة التالية.",
            solution:
              "يتتبع مسار التأهيل الميزانية والمنطقة والنوع والاستعجال والمصدر والحالة والخطوة التالية.",
            result:
              "تستطيع الشركة ترتيب العملاء الجادين ومتابعتهم بثبات.",
          },
          {
            title: "جدولة المعاينات وتحويلها للوكيل",
            problem:
              "تحتاج طلبات المعاينة إلى تنسيق يدوي متكرر بين توفر العميل وتفاصيل العقار وتعيين الوكيل.",
            solution:
              "يجمع مسار المعاينة العقار والوقت المفضل وبيانات التواصل والتوفر قبل توجيه الطلب.",
            result:
              "تصبح الجدولة أوضح للعملاء والوكلاء.",
          },
        ],
        Icon: Building2,
        ...industryStyle.realEstate,
      },
      {
        id: "automotive-mobility",
        title: "السيارات وخدمات التنقل",
        subtitle: "استفسارات مركبات واستقبال صيانة ومتابعة عروض",
        body:
          "للوكلاء وشركات التأجير ومراكز الصيانة وشركات التنقل التي تحتاج إلى طلبات مركبات أوضح، حجوزات خدمة، توجيه للفروع، ومتابعة.",
        points: [
          "تأهيل استفسارات المركبات",
          "جدولة تجربة القيادة",
          "استقبال مواعيد الصيانة",
          "توجيه الطلب حسب الفرع",
          "متابعة العروض والتوفر",
        ],
        tags: ["مركبات", "صيانة", "عروض", "متابعة"],
        outcome:
          "يستقبل الفريق استفسارات تتضمن المركبة والميزانية واحتياج الخدمة والفرع والتوقيت.",
        useCases: [
          {
            title: "تأهيل استفسارات المركبات وجدولة تجربة القيادة",
            problem:
              "يسأل المشترون عن المركبات بدون تحديد الموديل أو الميزانية أو التمويل أو البدل أو الموقع أو التوقيت.",
            solution:
              "يجمع مسار التأهيل المركبة المطلوبة والميزانية والجدول الزمني والفرع وبيانات التواصل وتفضيل تجربة القيادة.",
            result:
              "يستقبل فريق المبيعات عملاء أوضح ويجدول تجارب القيادة الجادة بشكل أسرع.",
          },
          {
            title: "استقبال مواعيد الصيانة وتوجيهها للفروع",
            problem:
              "تصل طلبات الصيانة بدون تفاصيل المركبة أو المشكلة أو درجة الاستعجال أو الفرع المفضل.",
            solution:
              "يجمع مسار الاستقبال نوع المركبة والموديل والسنة والمشكلة والصور عند الحاجة والوقت والفرع المفضل.",
            result:
              "يستطيع مستشارو الخدمة توجيه الطلبات وتجهيزها قبل وصول العميل.",
          },
          {
            title: "متابعة العروض أو التأجير أو التوفر",
            problem:
              "يسأل العملاء عن عروض أو توفر تأجير أو مخزون، ثم تضيع المتابعة داخل واتساب.",
            solution:
              "يتتبع سير المتابعة حالة العرض والتوفر وتفضيلات العميل والخطوة التالية.",
            result:
              "يتابع الفريق بثبات ولا تبرد الاستفسارات الجادة.",
          },
        ],
        Icon: CarFront,
        ...industryStyle.automotive,
      },
      {
        id: "home-field-services",
        title: "الخدمات المنزلية والميدانية",
        subtitle: "طلبات خدمة وجدولة ومتابعة حالة العمل",
        body:
          "لشركات الصيانة والإصلاح والتنظيف والتركيب والفرق الميدانية التي تحتاج إلى طلبات أوضح، تفاصيل عروض، جدولة، وتحديثات للعملاء.",
        points: [
          "فرز طلبات الخدمة",
          "استقبال تفاصيل العرض",
          "تعيين فني أو فريق",
          "تتبع حالة العمل",
          "متابعة ما بعد الخدمة",
        ],
        tags: ["طلبات", "عروض", "جدولة", "حالة"],
        outcome:
          "يحصل الفريق على تفاصيل أوضح قبل الإرسال ويعرف العميل الخطوة التالية.",
        useCases: [
          {
            title: "فرز طلبات الخدمة واستقبال تفاصيل العرض",
            problem:
              "يطلب العملاء الخدمة بدون توضيح النوع أو الموقع أو الصور أو درجة الاستعجال أو نطاق العمل المتوقع.",
            solution:
              "يجمع مسار الفرز نوع العمل والموقع والتفاصيل والوسائط والوقت المفضل ومتطلبات العرض.",
            result:
              "يستطيع الفريق التسعير وترتيب الأولويات وتوجيه الطلبات بأسئلة متابعة أقل.",
          },
          {
            title: "الجدولة وتعيين الفني أو الفريق",
            problem:
              "تعتمد الجدولة على رسائل متفرقة بين العملاء والمنسقين والفنيين.",
            solution:
              "يلتقط سير الجدولة التوفر والموقع ونوع العمل وسعة الفريق قبل التعيين.",
            result:
              "يعين المنسقون العمل أسرع ويحصل العملاء على نافذة موعد أوضح.",
          },
          {
            title: "حالة العمل والموافقة والمتابعة بعد الخدمة",
            problem:
              "يسأل العملاء عن التحديثات والموافقات والخطوات التالية بينما تبقى حالة العمل في المحادثات أو الجداول.",
            solution:
              "يتتبع سير الحالة نتيجة الزيارة والموافقة المطلوبة والخطوة التالية وملاحظة الدفع والمتابعة.",
            result:
              "يرى المديرون تقدم العمل ولا يترك العملاء بلا وضوح.",
          },
        ],
        Icon: Wrench,
        ...industryStyle.fieldServices,
      },
    ],
  },
};

export function getIndustriesCopy(locale: string): IndustriesCopy {
  return copy[locale] ?? copy.en;
}

export function getIndustry(
  locale: string,
  slug: string
): Industry | undefined {
  return getIndustriesCopy(locale).industries.find(
    (industry) => industry.id === slug
  );
}

export const INDUSTRY_SLUGS = copy.en.industries.map((industry) => industry.id);
