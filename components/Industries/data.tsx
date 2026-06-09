import {
  BarChart3,
  Building2,
  CalendarCheck,
  Gem,
  Globe,
  GraduationCap,
  HeartPulse,
  Hotel,
  MessageCircle,
  Network,
  UserCheck,
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
  premium: { color: "var(--engagement-500)", bg: "var(--engagement-50)" },
  training: { color: "var(--dev-500)", bg: "var(--dev-50)" },
  hospitality: {
    color: "var(--engagement-500)",
    bg: "var(--engagement-50)",
  },
  branches: { color: "var(--design-500)", bg: "var(--design-50)" },
};

const copy: Record<string, IndustriesCopy> = {
  en: {
    eyebrow: "Industries we support",
    title: "AI, automation and websites for customer-driven businesses",
    body: "Servicely builds practical customer systems for businesses in Lebanon, Iraq and Dubai/UAE: AI assistants, WhatsApp automation, appointment flows, websites, apps, portals and dashboards.",
    support:
      "We start with the real customer journey: questions, messages, handoff, appointments, leads, branches, follow-up and reporting.",
    cta: "Start a project",
    ctaHref: "/contact",
    metrics: [
      { value: "3", label: "priority markets: Lebanon, Iraq and Dubai/UAE" },
      { value: "2", label: "languages for customer journeys: English and Arabic" },
      { value: "AI", label: "assistants, WhatsApp flows and dashboards" },
    ],
    sectionTitle: "Where Servicely fits",
    sectionBody:
      "Every business receives inquiries differently. Clinics need appointment clarity. Real estate agencies need qualified leads. Premium service teams need a trustworthy digital journey. We shape the system around the way customers actually contact you.",
    closingTitle: "Build the customer system your team can actually use",
    closingBody:
      "Bring your messages, forms, appointment process, property inquiry flow, service catalog or branch routing. We will map the simplest useful system and build it cleanly.",
    closingChecklist: [
      "AI customer support and FAQ assistants",
      "WhatsApp inquiry and handoff automation",
      "Appointment request and lead qualification flows",
      "Business websites, apps, portals and dashboards",
      "Support, hosting, monitoring and practical improvements",
    ],
    helpsWithLabel: "We help with",
    viewUseCasesLabel: "View use cases",
    useCasesHeroEyebrow: "Real use cases",
    useCasesHeroTitle: "Customer problems we turn into working systems",
    useCasesHeroBody:
      "The right system makes first contact clearer, response faster and follow-up easier for your team.",
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
    industriesShortTitle: "Built for businesses that rely on inquiries",
    industriesShortBody:
      "Clinics, real estate agencies, premium service businesses, training centers, hospitality teams and multi-branch companies all need cleaner customer workflows.",
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
    problems: [
      {
        id: "response",
        title: "Customers wait too long for basic answers",
        problem:
          "Staff repeat the same answers across WhatsApp, calls, Instagram, website forms and direct messages.",
        solution:
          "We build AI assistants and structured inquiry flows that answer common questions and collect the right details.",
        result:
          "Customers get faster answers and staff handle the serious requests with better context.",
        Icon: MessageCircle,
        ...problemAccents.response,
      },
      {
        id: "appointments",
        title: "Appointment requests are messy",
        problem:
          "Requests arrive incomplete, double-booking risk increases and staff spend time asking the same follow-up questions.",
        solution:
          "We build appointment request flows that collect preferred date, service, contact details and notes before staff confirm.",
        result:
          "Teams receive cleaner appointment requests and customers understand the next step.",
        Icon: CalendarCheck,
        ...problemAccents.appointments,
      },
      {
        id: "leads",
        title: "Leads arrive without useful details",
        problem:
          "Sales teams receive vague messages like pricing requests with no budget, location, timeline or preference.",
        solution:
          "We build qualification flows for real estate and service businesses before handoff to staff.",
        result:
          "Teams spend less time chasing basic information and more time with serious customers.",
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
          "Leads, appointments, branch requests and follow-up status are spread across messages and spreadsheets.",
        solution:
          "We build dashboards that show inquiries, requests, status, branches and follow-up activity.",
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
    ],
    industries: [
      {
        id: "clinics-medical-centers",
        title: "Clinics & medical centers",
        subtitle: "Appointment requests, patient inquiries and AI support",
        body: "For clinics that need clearer appointment requests, faster answers to basic non-medical questions and cleaner staff handoff.",
        points: [
          "Appointment request flows",
          "Patient inquiry assistants",
          "Service and branch information",
          "Staff handoff and follow-up",
          "Request dashboards",
        ],
        tags: ["Appointments", "AI assistant", "WhatsApp", "Dashboard"],
        outcome: "Patients ask clearly, staff receive cleaner requests, and follow-up becomes easier.",
        useCases: [
          {
            title: "Patients ask the same questions every day",
            problem: "Staff repeat location, hours, services, preparation and contact answers manually.",
            solution: "An assistant answers common non-medical questions and collects appointment intent.",
            result: "Staff spend more time confirming serious requests instead of repeating basics.",
          },
          {
            title: "Appointment requests arrive incomplete",
            problem: "Patients send vague messages without service, preferred time or contact details.",
            solution: "A request flow collects the required details before staff confirmation.",
            result: "The clinic receives clearer requests and fewer back-and-forth messages.",
          },
          {
            title: "Follow-up is hard to track",
            problem: "Some requests are answered late or forgotten when messages become busy.",
            solution: "A dashboard tracks request status, handoff and follow-up.",
            result: "The team sees what still needs attention.",
          },
        ],
        Icon: HeartPulse,
        ...industryStyle.clinics,
      },
      {
        id: "real-estate-agencies",
        title: "Real estate agencies",
        subtitle: "Qualified property leads and viewing requests",
        body: "For agencies that need cleaner leads, property inquiry tools, viewing requests and better agent handoff.",
        points: [
          "Lead qualification flows",
          "Viewing request intake",
          "Property landing pages",
          "Agent routing",
          "Lead dashboards",
        ],
        tags: ["Leads", "Listings", "Viewing", "Agents"],
        outcome: "Agents receive better-qualified leads with budget, location, timeline and preference.",
        useCases: [
          {
            title: "Agents receive vague messages",
            problem: "A lead asks for prices but gives no budget, location, property type or timeline.",
            solution: "A qualification flow collects the right details before agent handoff.",
            result: "Agents can prioritize serious leads faster.",
          },
          {
            title: "Property inquiries are scattered",
            problem: "Messages arrive from WhatsApp, social media and website forms without a shared view.",
            solution: "A lead dashboard centralizes inquiries and status.",
            result: "The agency sees which leads need follow-up.",
          },
          {
            title: "Viewings take too much manual coordination",
            problem: "Staff ask the same availability and property questions repeatedly.",
            solution: "A viewing request flow collects preferences and availability first.",
            result: "Scheduling becomes clearer for customers and agents.",
          },
        ],
        Icon: Building2,
        ...industryStyle.realEstate,
      },
      {
        id: "premium-service-businesses",
        title: "Premium service businesses",
        subtitle: "Trustworthy digital journeys for high-value services",
        body: "For aesthetic, wellness, consulting, legal, financial, repair or specialist service companies that need a polished online journey.",
        points: [
          "Premium service pages",
          "Inquiry and consultation flows",
          "Client intake forms",
          "Customer portals",
          "Service dashboards",
        ],
        tags: ["Premium", "Consultation", "Intake", "Portal"],
        outcome: "Customers understand the offer and know exactly how to start.",
        useCases: [
          {
            title: "Customers do not understand the service quickly",
            problem: "Service pages are vague and customers need manual explanation before taking action.",
            solution: "We build clear service pages with inquiry flows and next steps.",
            result: "Serious customers know what to ask for and how to begin.",
          },
          {
            title: "Client intake happens manually",
            problem: "Staff collect the same customer details through repeated messages.",
            solution: "A structured intake form or portal collects the important details first.",
            result: "Teams start conversations with better context.",
          },
          {
            title: "The brand feels less premium online",
            problem: "The digital experience does not match the value of the service.",
            solution: "We create a polished website connected to inquiry and follow-up workflows.",
            result: "The customer journey feels more professional from first click.",
          },
        ],
        Icon: Gem,
        ...industryStyle.premium,
      },
      {
        id: "training-education",
        title: "Training & education",
        subtitle: "Course pages, registration flows and student inquiries",
        body: "For academies, training centers and education businesses that need clearer course information, registration and student support.",
        points: [
          "Course landing pages",
          "Registration flows",
          "Student inquiry assistants",
          "Payment or document intake",
          "Enrollment dashboards",
        ],
        tags: ["Courses", "Registration", "Students", "Support"],
        outcome: "Students understand courses faster and registration becomes easier to manage.",
        useCases: [
          {
            title: "Students ask the same course questions",
            problem: "Staff repeat dates, prices, schedules and requirements manually.",
            solution: "An assistant answers common course questions and routes serious inquiries.",
            result: "The team spends less time repeating basics.",
          },
          {
            title: "Registration data is incomplete",
            problem: "Student details arrive in different formats across messages and forms.",
            solution: "A registration flow collects required information consistently.",
            result: "Enrollment data becomes easier to review and follow up.",
          },
          {
            title: "Course demand is hard to see",
            problem: "Management cannot quickly see which programs are getting attention.",
            solution: "A dashboard shows inquiries, registrations and course interest.",
            result: "The center can plan marketing and schedules with better visibility.",
          },
        ],
        Icon: GraduationCap,
        ...industryStyle.training,
      },
      {
        id: "hospitality-tourism",
        title: "Hospitality & tourism",
        subtitle: "Booking inquiries, guest requests and multilingual flows",
        body: "For hotels, tour operators and hospitality teams that need cleaner guest inquiries, booking requests and service handoff.",
        points: [
          "Booking inquiry flows",
          "Guest request intake",
          "Multilingual support journeys",
          "WhatsApp routing",
          "Request dashboards",
        ],
        tags: ["Bookings", "Guests", "WhatsApp", "Multilingual"],
        outcome: "Guest requests become easier to answer, route and follow up.",
        useCases: [
          {
            title: "Booking questions repeat all day",
            problem: "Guests ask the same availability, location, policy and package questions.",
            solution: "An assistant answers common questions and collects booking intent.",
            result: "Staff receive better requests and answer serious guests faster.",
          },
          {
            title: "Guest requests are missed between shifts",
            problem: "Requests move through calls or WhatsApp and can be forgotten.",
            solution: "A request workflow logs, routes and tracks guest requests.",
            result: "Teams know what is open, assigned and completed.",
          },
          {
            title: "Tour inquiries need better qualification",
            problem: "Customers ask broadly without dates, group size, budget or preference.",
            solution: "A tour inquiry flow collects the details before staff follow-up.",
            result: "The team can respond with more relevant options.",
          },
        ],
        Icon: Hotel,
        ...industryStyle.hospitality,
      },
      {
        id: "multi-branch-businesses",
        title: "Multi-branch businesses",
        subtitle: "Branch routing, request visibility and owner dashboards",
        body: "For businesses with several branches, locations or teams that need centralized customer requests and clearer routing.",
        points: [
          "Branch-based inquiry routing",
          "Central request dashboards",
          "Location pages",
          "Staff handoff",
          "Owner reporting",
        ],
        tags: ["Branches", "Routing", "Dashboard", "Reporting"],
        outcome: "Owners see demand across locations and customers reach the right branch faster.",
        useCases: [
          {
            title: "Customers contact the wrong branch",
            problem: "Requests arrive centrally or to the wrong location and need manual forwarding.",
            solution: "A branch routing flow sends requests to the right team.",
            result: "Customers reach the right branch with less delay.",
          },
          {
            title: "Owners cannot compare branch demand",
            problem: "Each branch handles messages differently and reports are inconsistent.",
            solution: "A dashboard shows inquiries, requests and response status by branch.",
            result: "Management sees which locations need attention.",
          },
          {
            title: "Service information changes by location",
            problem: "Customers receive outdated or inconsistent branch details.",
            solution: "Location pages and assistant flows present current services, hours and contacts.",
            result: "Customers get clearer information before contacting staff.",
          },
        ],
        Icon: Network,
        ...industryStyle.branches,
      },
    ],
  },
  ar: {
    eyebrow: "القطاعات التي نخدمها",
    title: "ذكاء اصطناعي وأتمتة ومواقع للشركات التي تعتمد على التواصل مع العملاء",
    body: "تبني Servicely أنظمة عملية للشركات في لبنان والعراق ودبي/الإمارات: مساعدين أذكياء بالذكاء الاصطناعي، أتمتة واتساب، مسارات مواعيد، مواقع، تطبيقات، بوابات، ولوحات تحكم.",
    support:
      "نبدأ من رحلة العميل الفعلية: الأسئلة، الرسائل، تحويل الطلبات، المواعيد، العملاء المحتملون، الفروع، المتابعة، والتقارير.",
    cta: "ابدأ مشروعاً",
    ctaHref: "/contact",
    metrics: [
      { value: "3", label: "أسواق رئيسية: لبنان، العراق، ودبي/الإمارات" },
      { value: "2", label: "لغتان لرحلات العملاء: العربية والإنجليزية" },
      { value: "AI", label: "مساعدون أذكياء، مسارات واتساب، ولوحات تحكم" },
    ],
    sectionTitle: "أين يمكن أن تساعدك Servicely؟",
    sectionBody:
      "كل شركة تستقبل الاستفسارات بطريقة مختلفة. العيادات تحتاج مواعيد أوضح. شركات العقارات تحتاج عملاء مؤهلين. شركات الخدمات المميزة تحتاج رحلة رقمية موثوقة. نشكل النظام حول طريقة تواصل العملاء معك فعلاً.",
    closingTitle: "ابنِ نظام خدمة العملاء الذي يستطيع فريقك استخدامه فعلاً",
    closingBody:
      "شارك معنا رسائلك، نماذجك، مسار المواعيد، استفسارات العقارات، كتالوج الخدمات، أو طريقة توجيه الفروع. سنرسم أبسط نظام مفيد، ثم نبنيه بطريقة واضحة ومنظمة.",
    closingChecklist: [
      "دعم عملاء بالذكاء الاصطناعي ومساعدو أسئلة متكررة",
      "أتمتة استفسارات واتساب وتحويلها إلى الفريق",
      "مسارات مواعيد وتأهيل عملاء محتملين",
      "مواقع أعمال وتطبيقات وبوابات ولوحات تحكم",
      "دعم واستضافة ومراقبة وتحسينات عملية",
    ],
    helpsWithLabel: "نساعد في",
    viewUseCasesLabel: "شاهد حالات الاستخدام",
    useCasesHeroEyebrow: "حالات استخدام عملية",
    useCasesHeroTitle: "مشكلات العملاء التي نحولها إلى أنظمة تعمل فعلاً",
    useCasesHeroBody:
      "النظام المناسب يجعل أول تواصل أوضح، الاستجابة أسرع، والمتابعة أسهل على فريقك.",
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
      "العيادات، شركات العقارات، الخدمات المميزة، مراكز التدريب، الضيافة والشركات متعددة الفروع تحتاج جميعها إلى مسارات عملاء أوضح.",
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
    problems: [
      {
        id: "response",
        title: "العملاء ينتظرون طويلاً للإجابات الأساسية",
        problem: "يكرر الموظفون نفس الإجابات عبر واتساب والمكالمات وإنستغرام ونماذج الموقع والرسائل.",
        solution: "نبني مساعدين أذكياء بالذكاء الاصطناعي ومسارات استفسار منظمة تجيب عن الأسئلة الشائعة وتجمع التفاصيل الصحيحة.",
        result: "يحصل العملاء على إجابات أسرع ويتعامل الموظفون مع الطلبات الجدية بسياق أفضل.",
        Icon: MessageCircle,
        ...problemAccents.response,
      },
      {
        id: "appointments",
        title: "طلبات المواعيد غير منظمة",
        problem: "تصل الطلبات ناقصة، يزيد خطر التداخل، ويقضي الموظفون وقتاً في طرح نفس أسئلة المتابعة.",
        solution: "نبني مسارات طلب مواعيد تجمع التاريخ المفضل والخدمة وبيانات التواصل والملاحظات قبل التأكيد.",
        result: "يستقبل الفريق طلبات أوضح ويفهم العملاء الخطوة التالية.",
        Icon: CalendarCheck,
        ...problemAccents.appointments,
      },
      {
        id: "leads",
        title: "العملاء المحتملون يصلون بدون تفاصيل مفيدة",
        problem: "تصل لفرق المبيعات رسائل عامة بدون ميزانية أو موقع أو جدول زمني أو تفضيلات.",
        solution: "نبني مسارات تأهيل لشركات العقارات والخدمات قبل تسليم العميل للموظفين.",
        result: "يقضي الفريق وقتاً أقل في جمع المعلومات الأساسية ووقتاً أكثر مع العملاء الجديين.",
        Icon: UserCheck,
        ...problemAccents.leads,
      },
      {
        id: "handoff",
        title: "محادثات واتساب صعبة التنظيم",
        problem: "يرد أشخاص مختلفون من أماكن مختلفة وقد تضيع الطلبات المهمة أو تُنسى.",
        solution: "ننظم استقبال الطلبات والتوجيه والملخصات وتحويل الطلب حتى يصل إلى الشخص الصحيح.",
        result: "تصبح محادثات العملاء أسهل في الإدارة والمتابعة.",
        Icon: MessageCircle,
        ...problemAccents.handoff,
      },
      {
        id: "visibility",
        title: "المالكون لا يرون ما يحدث بوضوح",
        problem: "العملاء والمواعيد وطلبات الفروع وحالة المتابعة متفرقة بين الرسائل والجداول.",
        solution: "نبني لوحات تحكم تعرض الاستفسارات والطلبات والحالة والفروع ونشاط المتابعة.",
        result: "يحصل المالكون والمديرون على رؤية أوضح لطلب العملاء واستجابة الفريق.",
        Icon: BarChart3,
        ...problemAccents.visibility,
      },
      {
        id: "credibility",
        title: "الموقع لا يساعد العملاء على اتخاذ إجراء",
        problem: "الموقع قديم أو لا يحتوي صفحات خدمات واضحة أو يصف الشركة فقط بدون مسارات فعل.",
        solution: "نبني مواقع مرتبطة بالاستفسارات أو المواعيد أو جمع العملاء أو البوابات أو دعم العملاء.",
        result: "يصبح الموقع جزءاً من رحلة العميل وليس مجرد بروشور.",
        Icon: Globe,
        ...problemAccents.credibility,
      },
    ],
    industries: [
      {
        id: "clinics-medical-centers",
        title: "العيادات والمراكز الطبية",
        subtitle: "طلبات مواعيد واستفسارات مرضى ودعم ذكي",
        body: "للعيادات التي تحتاج إلى طلبات مواعيد أوضح، إجابات أسرع عن الأسئلة الأساسية غير الطبية، وتحويل أنظف للطلبات إلى الموظفين.",
        points: ["مسارات طلب مواعيد", "مساعد استفسارات المرضى", "معلومات الخدمات والفروع", "تسليم ومتابعة", "لوحات طلبات"],
        tags: ["مواعيد", "مساعد ذكي", "واتساب", "لوحة تحكم"],
        outcome: "يساعد النظام المرضى على إرسال طلبات أوضح، ويمنح الموظفين معلومات أنظف، ويجعل المتابعة أسهل.",
        useCases: [
          {
            title: "المرضى يطرحون نفس الأسئلة يومياً",
            problem: "يكرر الموظفون معلومات الموقع، أوقات الدوام، الخدمات، التحضير، وطرق التواصل يدوياً.",
            solution: "مساعد ذكي يجيب عن الأسئلة غير الطبية الشائعة ويجمع نية حجز الموعد.",
            result: "يقضي الموظفون وقتاً أكثر في تأكيد الطلبات الجدية بدلاً من تكرار الأساسيات.",
          },
          {
            title: "طلبات المواعيد تصل ناقصة",
            problem: "يرسل المرضى رسائل غامضة بدون خدمة أو وقت مفضل أو بيانات تواصل.",
            solution: "مسار طلب يجمع التفاصيل المطلوبة قبل تأكيد الموظفين.",
            result: "تستقبل العيادة طلبات أوضح ورسائل متابعة أقل.",
          },
          {
            title: "المتابعة صعبة التتبع",
            problem: "بعض الطلبات يتم الرد عليها متأخراً أو تُنسى عندما تصبح الرسائل كثيرة.",
            solution: "لوحة تحكم تتبع حالة الطلب والتسليم والمتابعة.",
            result: "يرى الفريق ما الذي لا يزال يحتاج انتباهاً.",
          },
        ],
        Icon: HeartPulse,
        ...industryStyle.clinics,
      },
      {
        id: "real-estate-agencies",
        title: "شركات العقارات",
        subtitle: "عملاء عقارات مؤهلون وطلبات معاينة",
        body: "لشركات العقارات التي تحتاج إلى عملاء محتملين أكثر وضوحاً، أدوات استفسار عن العقارات، طلبات معاينة، وتسليم أفضل للوكلاء.",
        points: ["تأهيل العملاء", "طلبات معاينة", "صفحات عقارات", "توجيه للوكلاء", "لوحات العملاء"],
        tags: ["عملاء", "عقارات", "معاينة", "وكلاء"],
        outcome: "يتلقى الوكلاء عملاء محتملين مؤهلين، مع ميزانية وموقع وجدول زمني وتفضيلات أوضح.",
        useCases: [
          {
            title: "الوكلاء يستلمون رسائل غامضة",
            problem: "يسأل العميل عن الأسعار دون توضيح الميزانية، الموقع، نوع العقار، أو الجدول الزمني.",
            solution: "مسار تأهيل يجمع التفاصيل الصحيحة قبل تسليمها للوكيل.",
            result: "يمكن للوكلاء ترتيب العملاء الجديين بسرعة أكبر.",
          },
          {
            title: "استفسارات العقارات متفرقة",
            problem: "تصل الرسائل من واتساب والسوشيال ونماذج الموقع بدون رؤية مشتركة.",
            solution: "لوحة عملاء تجمع الاستفسارات والحالة.",
            result: "ترى الشركة العملاء الذين يحتاجون متابعة.",
          },
          {
            title: "تنسيق المعاينات يأخذ وقتاً كبيراً",
            problem: "يسأل الموظفون نفس أسئلة التوفر والعقار مراراً.",
            solution: "مسار طلب معاينة يجمع التفضيلات والتوفر أولاً.",
            result: "يصبح الجدولة أوضح للعملاء والوكلاء.",
          },
        ],
        Icon: Building2,
        ...industryStyle.realEstate,
      },
      {
        id: "premium-service-businesses",
        title: "الخدمات المميزة",
        subtitle: "رحلات رقمية موثوقة للخدمات المميزة",
        body: "لشركات التجميل، العافية، الاستشارات، والخدمات القانونية أو المالية أو المتخصصة التي تحتاج إلى رحلة رقمية احترافية.",
        points: ["صفحات خدمات مميزة", "مسارات استفسار واستشارة", "نماذج استقبال العملاء", "بوابات عملاء", "لوحات خدمات"],
        tags: ["مميز", "استشارة", "استقبال", "بوابة"],
        outcome: "يفهم العملاء العرض ويعرفون بالضبط كيف يبدأون.",
        useCases: [
          {
            title: "العملاء لا يفهمون الخدمة بسرعة",
            problem: "صفحات الخدمات عامة ويحتاج العملاء شرحاً يدوياً قبل اتخاذ خطوة.",
            solution: "نبني صفحات خدمات واضحة مع مسارات استفسار وخطوات تالية.",
            result: "يعرف العملاء الجديون ماذا يطلبون وكيف يبدأون.",
          },
          {
            title: "استقبال بيانات العميل يتم يدوياً",
            problem: "يجمع الموظفون نفس تفاصيل العميل عبر رسائل متكررة.",
            solution: "نموذج أو بوابة تجمع التفاصيل المهمة أولاً.",
            result: "يبدأ الفريق المحادثات بسياق أفضل.",
          },
          {
            title: "العلامة لا تبدو مميزة رقمياً",
            problem: "التجربة الرقمية لا تعكس قيمة الخدمة.",
            solution: "ننشئ موقعاً مصقولاً مرتبطاً بالاستفسار والمتابعة.",
            result: "تشعر رحلة العميل بمهنية أكبر من أول نقرة.",
          },
        ],
        Icon: Gem,
        ...industryStyle.premium,
      },
      {
        id: "training-education",
        title: "التدريب والتعليم",
        subtitle: "صفحات دورات وتسجيل واستفسارات طلاب",
        body: "للأكاديميات ومراكز التدريب التي تحتاج إلى معلومات أوضح عن الدورات، ومسارات تسجيل، ودعم أفضل للطلاب.",
        points: ["صفحات دورات", "مسارات تسجيل", "مساعد استفسارات الطلاب", "استقبال مستندات أو دفع", "لوحات تسجيل"],
        tags: ["دورات", "تسجيل", "طلاب", "دعم"],
        outcome: "يفهم الطلاب تفاصيل الدورات بسرعة، وتصبح إدارة التسجيل أسهل.",
        useCases: [
          {
            title: "الطلاب يسألون نفس أسئلة الدورات",
            problem: "يكرر الموظفون المواعيد والأسعار والجداول والمتطلبات يدوياً.",
            solution: "مساعد يجيب عن الأسئلة الشائعة ويوجه الاستفسارات الجدية.",
            result: "يقضي الفريق وقتاً أقل في تكرار الأساسيات.",
          },
          {
            title: "بيانات التسجيل ناقصة",
            problem: "تصل تفاصيل الطلاب بصيغ مختلفة عبر الرسائل والنماذج.",
            solution: "مسار تسجيل يجمع المعلومات المطلوبة بشكل ثابت.",
            result: "تصبح بيانات التسجيل أسهل للمراجعة والمتابعة.",
          },
          {
            title: "طلب الدورات غير واضح",
            problem: "لا تستطيع الإدارة رؤية البرامج التي تحصل على اهتمام بسرعة.",
            solution: "لوحة تعرض الاستفسارات والتسجيل والاهتمام بالدورات.",
            result: "يمكن للمركز تخطيط التسويق والجداول برؤية أفضل.",
          },
        ],
        Icon: GraduationCap,
        ...industryStyle.training,
      },
      {
        id: "hospitality-tourism",
        title: "الضيافة والسياحة",
        subtitle: "استفسارات حجز وطلبات ضيوف ومسارات متعددة اللغات",
        body: "للفنادق وشركات السياحة والضيافة التي تحتاج إلى استفسارات ضيوف أوضح، طلبات حجز منظمة، وتسليم أفضل للخدمات.",
        points: ["مسارات استفسار الحجز", "طلبات الضيوف", "رحلات دعم متعددة اللغات", "توجيه واتساب", "لوحات طلبات"],
        tags: ["حجوزات", "ضيوف", "واتساب", "متعدد اللغات"],
        outcome: "تصبح طلبات الضيوف أسهل في الرد عليها، توجيهها، ومتابعتها.",
        useCases: [
          {
            title: "أسئلة الحجز تتكرر طوال اليوم",
            problem: "يسأل الضيوف نفس أسئلة التوفر والموقع والسياسات والباقات.",
            solution: "مساعد يجيب عن الأسئلة الشائعة ويجمع نية الحجز.",
            result: "يستقبل الموظفون طلبات أفضل ويردون على الضيوف الجديين أسرع.",
          },
          {
            title: "طلبات الضيوف تضيع بين المناوبات",
            problem: "تنتقل الطلبات عبر المكالمات أو واتساب وقد تُنسى.",
            solution: "مسار طلبات يسجل ويوجه ويتتبع طلبات الضيوف.",
            result: "يعرف الفريق ما هو مفتوح ومخصص ومكتمل.",
          },
          {
            title: "استفسارات الجولات تحتاج تأهيلاً أفضل",
            problem: "يسأل العملاء بشكل عام بدون تواريخ أو حجم مجموعة أو ميزانية أو تفضيل.",
            solution: "مسار استفسار يجمع التفاصيل قبل متابعة الموظفين.",
            result: "يمكن للفريق الرد بخيارات أكثر صلة.",
          },
        ],
        Icon: Hotel,
        ...industryStyle.hospitality,
      },
      {
        id: "multi-branch-businesses",
        title: "الشركات متعددة الفروع",
        subtitle: "توجيه الفروع ورؤية الطلبات ولوحات المالكين",
        body: "للشركات التي لديها عدة فروع أو مواقع أو فرق، وتحتاج إلى إدارة مركزية لطلبات العملاء وتوجيه أوضح.",
        points: ["توجيه حسب الفرع", "لوحات طلبات مركزية", "صفحات مواقع", "تحويل للموظفين", "تقارير للمالك"],
        tags: ["فروع", "توجيه", "لوحة", "تقارير"],
        outcome: "يرى المالكون الطلبات عبر الفروع، ويصل العملاء إلى الفرع الصحيح بسرعة أكبر.",
        useCases: [
          {
            title: "العملاء يتواصلون مع الفرع الخطأ",
            problem: "تصل الطلبات مركزياً أو إلى موقع غير مناسب وتحتاج تحويل يدوي.",
            solution: "مسار توجيه حسب الفرع يرسل الطلب إلى الفريق الصحيح.",
            result: "يصل العملاء للفرع المناسب بتأخير أقل.",
          },
          {
            title: "المالكون لا يقارنون طلب الفروع",
            problem: "كل فرع يتعامل مع الرسائل بطريقة مختلفة والتقارير غير موحدة.",
            solution: "لوحة تعرض الاستفسارات والطلبات وحالة الرد حسب الفرع.",
            result: "ترى الإدارة المواقع التي تحتاج اهتماماً.",
          },
          {
            title: "معلومات الخدمة تختلف حسب الموقع",
            problem: "يحصل العملاء على تفاصيل فروع قديمة أو غير متناسقة.",
            solution: "صفحات مواقع ومسارات مساعد تعرض الخدمات والدوام ووسائل التواصل الحالية.",
            result: "يحصل العملاء على معلومات أوضح قبل التواصل مع الموظفين.",
          },
        ],
        Icon: Network,
        ...industryStyle.branches,
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
