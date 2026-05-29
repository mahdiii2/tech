import {
  AlertTriangle,
  BarChart3,
  Building2,
  ClipboardCheck,
  Factory,
  Fingerprint,
  Globe,
  HardHat,
  HeartPulse,
  Hotel,
  MapPin,
  Store,
  TrendingUp,
  Zap,
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

const PROBLEM_ICONS: Record<string, LucideIcon> = {
  visibility: BarChart3,
  attendance: Fingerprint,
  credibility: Globe,
  approvals: ClipboardCheck,
  field: MapPin,
  growth: TrendingUp,
  reports: Zap,
  alerts: AlertTriangle,
};

const PROBLEM_ACCENTS: Record<string, { accent: string; accentBg: string }> = {
  visibility: { accent: "var(--dev-500)", accentBg: "var(--dev-50)" },
  attendance: { accent: "var(--design-500)", accentBg: "var(--design-50)" },
  credibility: { accent: "var(--engagement-500)", accentBg: "var(--engagement-50)" },
  approvals: { accent: "var(--dev-500)", accentBg: "var(--dev-50)" },
  field: { accent: "var(--engagement-500)", accentBg: "var(--engagement-50)" },
  growth: { accent: "var(--design-500)", accentBg: "var(--design-50)" },
  reports: { accent: "var(--dev-500)", accentBg: "var(--dev-50)" },
  alerts: { accent: "var(--design-500)", accentBg: "var(--design-50)" },
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

const ICONS: Record<string, LucideIcon> = {
  companies: Building2,
  factories: Factory,
  construction: HardHat,
  hotels: Hotel,
  hospitals: HeartPulse,
  stores: Store,
};

const COLORS: Record<string, { color: string; bg: string }> = {
  companies: { color: "var(--dev-500)", bg: "var(--dev-50)" },
  factories: { color: "var(--design-500)", bg: "var(--design-50)" },
  construction: { color: "var(--engagement-500)", bg: "var(--engagement-50)" },
  hotels: { color: "var(--dev-500)", bg: "var(--dev-50)" },
  hospitals: { color: "var(--engagement-500)", bg: "var(--engagement-50)" },
  stores: { color: "var(--design-500)", bg: "var(--design-50)" },
};

const copy: Record<string, IndustriesCopy> = {
  en: {
    eyebrow: "Industries we support",
    title: "Technology for teams with real schedules, approvals, reports and operations",
    body: "Tech Solutions RDC builds websites, custom apps, attendance automation, Power BI dashboards, data pipelines and AI-assisted workflows for organizations that need cleaner daily operations and better management visibility.",
    support:
      "We do not start with generic software. We start with your real workflow: your teams, schedules, machines, Excel files, approval rules and reports.",
    cta: "Schedule a meeting",
    ctaHref: "/schedule",
    metrics: [
      { value: "6", label: "priority industries" },
      { value: "BI", label: "Power BI and KPI dashboards" },
      { value: "AI", label: "workflow and report assistants" },
    ],
    sectionTitle: "Where Tech Solutions RDC fits",
    sectionBody:
      "Every industry has different operational problems. Some need better attendance tracking. Others need field reporting, stock visibility, production dashboards, appointment tools or internal approval systems. Choose your industry to see the type of systems we can build for your organization.",
    closingTitle: "Build a practical system for your organization",
    closingBody:
      "Bring your schedules, machines, spreadsheets, forms or current process. We will map how the work happens today and show the simplest path to cleaner operations.",
    closingChecklist: [
      "Business websites and custom web applications",
      "Workflow automation and approval flows",
      "Attendance dashboards and HR reporting",
      "Power BI dashboards and KPI reports",
      "Data pipelines and AI-ready reporting",
    ],
    helpsWithLabel: "We help with",
    viewUseCasesLabel: "View use cases",
    useCasesHeroEyebrow: "Real use cases for real operations",
    useCasesHeroTitle: "Daily problems we turn into working systems",
    useCasesHeroBody:
      "Every organization has daily problems that are easy to ignore until they cost time, money or trust.",
    problemsEyebrow: "Common problems we solve",
    problemsTitle: "You don't need technology for decoration",
    problemsBody:
      "You need systems that remove confusion, save time and give management clear visibility. Here are the problems almost every company in DRC recognizes and what changes when they are solved.",
    problemsLabels: {
      problem: "Problem",
      solution: "Solution",
      result: "Result",
    },
    industriesEyebrow: "Where this applies",
    industriesShortTitle: "Built for the industries we work with daily",
    industriesShortBody:
      "Companies, factories, construction, hotels, hospitals and stores all face the same core problems in different ways. Pick yours to see how we shape the solution.",
    detail: {
      backLabel: "All industries",
      exploreLabel: "Explore use cases",
      learnMore: "Learn more",
      overviewLabel: "Overview",
      benefitsTitle: "What you get",
      useCasesTitle: "Use cases",
      useCasesBody: "Real-life scenarios we build for teams in this industry.",
      otherTitle: "Other industries",
    },
    problems: [
      {
        id: "visibility",
        title: "Management cannot see what is happening across the business",
        problem:
          "Reports are spread across Excel files, WhatsApp messages, paper sheets and different departments. By the time management receives the numbers, they are already outdated.",
        solution:
          "We build Power BI dashboards that connect your attendance, sales, production, HR or operations data into one clear management view.",
        result:
          "Leaders see performance, problems, delays and costs before they become expensive.",
        ...PROBLEM_ACCENTS.visibility,
        Icon: PROBLEM_ICONS.visibility,
      },
      {
        id: "attendance",
        title: "Staff attendance is difficult to verify",
        problem:
          "HR spends too much time checking attendance, overtime, lateness, absences and payroll data manually.",
        solution:
          "We connect fingerprint machines, time clock systems or attendance files to automated dashboards and payroll-ready reports.",
        result:
          "Fewer payroll disputes, faster HR reporting and clear proof of who worked, when and where.",
        ...PROBLEM_ACCENTS.attendance,
        Icon: PROBLEM_ICONS.attendance,
      },
      {
        id: "credibility",
        title: "Customers judge the company before speaking to you",
        problem:
          "A serious client searches for your business online but finds no professional website, outdated information or only a PDF brochure.",
        solution:
          "We create a professional website that presents your services, projects, contact details and booking options clearly.",
        result:
          "Your company looks credible, clients understand what you offer and they can contact you easily.",
        ...PROBLEM_ACCENTS.credibility,
        Icon: PROBLEM_ICONS.credibility,
      },
      {
        id: "approvals",
        title: "Internal requests get lost in WhatsApp",
        problem:
          "Leave requests, purchase approvals, maintenance reports and field updates are sent through WhatsApp or paper forms. Some are forgotten, delayed or disputed.",
        solution:
          "We build simple internal apps for approvals, requests, task tracking and follow-up.",
        result: "Every request has a status, owner, date and decision history.",
        ...PROBLEM_ACCENTS.approvals,
        Icon: PROBLEM_ICONS.approvals,
      },
      {
        id: "field",
        title: "Field teams send late or incomplete updates",
        problem:
          "Construction sites, branches, factories or departments send updates manually. Managers spend the day calling people just to know what is happening.",
        solution:
          "We create field reporting apps where supervisors submit daily progress, attendance, photos, materials used, blockers or incidents.",
        result:
          "Management gets reliable updates from every location without chasing people.",
        ...PROBLEM_ACCENTS.field,
        Icon: PROBLEM_ICONS.field,
      },
      {
        id: "growth",
        title: "The company is growing but the workflow is still manual",
        problem:
          "Processes that worked with 10 employees break when the company grows to 50, 100 or more. Excel, paper and WhatsApp become too messy.",
        solution:
          "We map the workflow and build custom software around how the business actually works.",
        result:
          "The company grows with cleaner systems, better control and less dependence on manual follow-up.",
        ...PROBLEM_ACCENTS.growth,
        Icon: PROBLEM_ICONS.growth,
      },
      {
        id: "reports",
        title: "Reports take days instead of minutes",
        problem:
          "Managers ask for weekly or monthly reports, and teams spend hours copying data, cleaning Excel files and preparing slides.",
        solution:
          "We automate recurring reports using Power BI, clean data pipelines and AI summaries.",
        result:
          "Reports are ready faster, more accurate and easier to understand.",
        ...PROBLEM_ACCENTS.reports,
        Icon: PROBLEM_ICONS.reports,
      },
      {
        id: "alerts",
        title: "Problems are discovered too late",
        problem:
          "Management only finds out about overtime abuse, stock issues, production delays, missed shifts or project overruns after the damage is already done.",
        solution:
          "We set up dashboards and alerts that highlight unusual numbers, missing data, delays or risks.",
        result:
          "Teams act early instead of reacting after the problem becomes expensive.",
        ...PROBLEM_ACCENTS.alerts,
        Icon: PROBLEM_ICONS.alerts,
      },
    ],
    industries: [
      {
        id: "companies",
        title: "Companies",
        subtitle: "Websites, operations, HR and management dashboards",
        body: "For offices and growing businesses that need professional websites, internal tools, approval flows, HR automation, attendance reports and management dashboards.",
        points: [
          "Company websites and client portals",
          "Leave, purchase and document approvals",
          "Attendance and payroll summaries",
          "Power BI dashboards for managers",
          "AI report summaries and alerts",
        ],
        outcome: "Better visibility for management and cleaner daily operations.",
        useCases: [
          {
            title: "Management waits too long for reports",
            problem:
              "Sales, HR, finance and operations each send Excel files at different times. Management spends days waiting, checking and combining information before making decisions.",
            solution:
              "We build Power BI dashboards that bring key numbers into one management view.",
            result:
              "Managers see performance, attendance, sales, costs and operations without waiting for manual reports.",
          },
          {
            title: "Approval requests get lost in WhatsApp",
            problem:
              "Leave requests, purchase approvals and document validations are sent by WhatsApp or email. Some are forgotten, delayed or disputed later.",
            solution:
              "We build an internal approval system where every request has a status, approver, date and decision history.",
            result: "Requests become easier to track, approve and audit.",
          },
          {
            title: "The company looks less serious than it really is",
            problem:
              "A potential client asks for your website and receives a PDF, old brochure or WhatsApp message instead.",
            solution:
              "We build a professional company website or client portal that presents your services, projects, team and contact options.",
            result:
              "The company looks more credible and prospects can understand your offer before contacting you.",
          },
        ],
        ...COLORS.companies,
        Icon: ICONS.companies,
      },
      {
        id: "factories",
        title: "Factories",
        subtitle: "Production reporting, shifts, overtime and dashboards",
        body: "For factories that need reliable production reporting, shift tracking, overtime verification, attendance dashboards and operational data that management can trust.",
        points: [
          "Production reporting by shift, line or team",
          "Worker attendance and overtime tracking",
          "Equipment downtime follow-up",
          "Power BI dashboards for output, labor and costs",
          "Payroll-ready attendance summaries",
        ],
        outcome:
          "Clear production numbers, verified hours and fewer surprises at month-end.",
        useCases: [
          {
            title: "Production numbers arrive too late",
            problem:
              "Supervisors submit production numbers after the shift or the next morning. Management only sees problems after the day is already lost.",
            solution:
              "We build a production reporting app connected to Power BI dashboards.",
            result:
              "Managers can see output by line, team, shift or product faster and take action earlier.",
          },
          {
            title: "Overtime creates disputes every month",
            problem:
              "Workers, supervisors and HR disagree about overtime hours during payroll preparation.",
            solution:
              "We connect attendance or fingerprint data to automated overtime calculations and payroll-ready reports.",
            result:
              "Overtime becomes easier to verify and payroll disputes are reduced.",
          },
          {
            title: "Machine downtime is reported too slowly",
            problem:
              "A machine stops, but the issue is reported late or informally. Maintenance loses time and production falls behind.",
            solution:
              "We build a downtime reporting workflow where operators can report issues and maintenance can track resolution.",
            result: "Downtime becomes visible, traceable and easier to reduce.",
          },
        ],
        ...COLORS.factories,
        Icon: ICONS.factories,
      },
      {
        id: "construction",
        title: "Construction companies",
        subtitle: "Project portal, field apps, cost and progress tracking",
        body: "For construction companies managing multiple sites, field teams, project costs, materials, equipment and daily progress reporting.",
        points: [
          "Company websites showing projects and capabilities",
          "Field apps for daily site reporting",
          "Site attendance and crew tracking",
          "Cost and progress dashboards",
          "Material, subcontractor and equipment follow-up",
        ],
        outcome: "Clear visibility across sites, costs, progress and crew.",
        useCases: [
          {
            title: "Site updates are late or incomplete",
            problem:
              "Managers call multiple site supervisors every morning to ask about progress, workers, materials and blockers.",
            solution: "We build a field reporting app for daily site updates.",
            result:
              "Management sees progress, attendance, materials and issues across all sites from one dashboard.",
          },
          {
            title: "Project costs drift before anyone notices",
            problem:
              "Labor, overtime, materials and equipment costs increase slowly across sites. The issue is only noticed near the end of the project.",
            solution:
              "We build Power BI dashboards that track cost, progress, attendance and site activity.",
            result:
              "Managers can identify risky sites before costs become harder to control.",
          },
          {
            title: "Crew attendance is hard to verify",
            problem:
              "Workers move between sites, supervisors report attendance manually, and payroll becomes difficult to confirm.",
            solution: "We build site-based attendance tracking and reporting.",
            result:
              "The company can verify who worked, where, when and under which supervisor.",
          },
        ],
        ...COLORS.construction,
        Icon: ICONS.construction,
      },
      {
        id: "hotels",
        title: "Hotels",
        subtitle: "Hotel website, guest workflows and department dashboards",
        body: "For hotels that need guest-facing websites, booking inquiries, guest request tracking, staff shift coordination and department dashboards.",
        points: [
          "Hotel websites with rooms and booking inquiries",
          "Guest service request workflows",
          "Housekeeping and front-desk coordination",
          "Staff scheduling and attendance reports",
          "Department performance dashboards",
        ],
        outcome:
          "Happy guests, coordinated teams and department visibility on one screen.",
        useCases: [
          {
            title: "Guest requests get lost between shifts",
            problem:
              "A guest reports an issue at reception, but the message is passed verbally and forgotten by the next shift.",
            solution:
              "We build a guest request workflow for reception, housekeeping and maintenance.",
            result: "Every request is logged, assigned, tracked and closed properly.",
          },
          {
            title: "Staff scheduling creates service gaps",
            problem:
              "Housekeeping, reception, restaurant and security schedules are managed manually. Some shifts are overstaffed while others lack coverage.",
            solution:
              "We build staff scheduling and attendance dashboards by department.",
            result:
              "Managers can see coverage, absences and lateness before service quality suffers.",
          },
          {
            title: "Department reports take too long to collect",
            problem:
              "The hotel manager waits for reports from housekeeping, front desk, restaurant and finance before understanding performance.",
            solution: "We build department dashboards in Power BI.",
            result:
              "Management gets a daily view of service, staffing, occupancy-related work and department activity.",
          },
        ],
        ...COLORS.hotels,
        Icon: ICONS.hotels,
      },
      {
        id: "hospitals",
        title: "Hospitals",
        subtitle: "Appointments, scheduling and department reports",
        body: "For hospitals and clinics that need appointment tools, staff scheduling, department reports, attendance tracking and compliance-ready records.",
        points: [
          "Appointment request and patient intake systems",
          "Staff scheduling and on-call planning",
          "Attendance reports by department",
          "Department-level Power BI dashboards",
          "Compliance and staffing reports",
        ],
        outcome:
          "Reliable systems for patients, staff scheduling and reporting.",
        useCases: [
          {
            title: "Appointments are handled manually",
            problem:
              "Patients call the front desk, appointments are written manually, and mistakes can lead to confusion or double booking.",
            solution: "We build an appointment request or patient intake system.",
            result:
              "Patients can request appointments more easily and administrators can manage confirmations with a clear record.",
          },
          {
            title: "Staff rotations are difficult to manage",
            problem:
              "On-call schedules, night shifts and department rotations are prepared manually. It is easy to miss gaps.",
            solution:
              "We build a scheduling tool for staff availability, leave, shifts and rotations.",
            result:
              "Departments can plan coverage more clearly and reduce scheduling mistakes.",
          },
          {
            title: "Compliance reports take too long to prepare",
            problem:
              "When management or inspectors ask for attendance, staffing or department records, the team searches through paper files and Excel sheets.",
            solution:
              "We build attendance dashboards and department-level reporting.",
            result:
              "The hospital can prepare staffing and compliance reports faster and with cleaner data.",
          },
        ],
        ...COLORS.hospitals,
        Icon: ICONS.hospitals,
      },
      {
        id: "stores",
        title: "Stores & e-commerce",
        subtitle: "Online stores, branch dashboards and order management",
        body: "For shops, branches and online stores that need e-commerce websites, order tracking, stock visibility, sales dashboards and staff scheduling.",
        points: [
          "Online stores with product catalogs",
          "Order tracking from payment to delivery",
          "Stock dashboards by branch",
          "Sales and customer dashboards",
          "Staff attendance and scheduling",
        ],
        outcome:
          "An online store that sells, stock that is tracked and branches that are visible.",
        useCases: [
          {
            title: "Stock visibility is unclear across branches",
            problem:
              "Managers call each branch to ask what is selling, what is low and what needs to be transferred.",
            solution: "We build stock and sales dashboards by branch.",
            result:
              "Management sees stock levels, top products and branch performance without calling every store.",
          },
          {
            title: "Online orders are not tracked properly",
            problem:
              "Orders arrive through WhatsApp, Instagram or a basic website. Some are missed, delayed or shipped incorrectly.",
            solution: "We build an online store or order tracking workflow.",
            result:
              "Every order moves through a clear process: received, confirmed, prepared, shipped and delivered.",
          },
          {
            title: "Sales reports arrive too late",
            problem:
              "By the time sales numbers are collected and cleaned, the week is already over.",
            solution:
              "We build Power BI dashboards for sales, stock, branches and customers.",
            result:
              "Owners can see what is selling, where performance is dropping and which products need attention.",
          },
        ],
        ...COLORS.stores,
        Icon: ICONS.stores,
      },
    ],
  },
  fr: {
    eyebrow: "Secteurs que nous accompagnons",
    title: "Technologie pour equipes avec horaires, validations, rapports et operations reels",
    body: "Tech Solutions RDC cree des sites web, apps sur mesure, automatisation de presence, dashboards Power BI, pipelines de donnees et workflows assistes par IA pour les organisations qui ont besoin d'operations quotidiennes plus propres et d'une meilleure visibilite de direction.",
    support:
      "Nous ne partons pas d'un logiciel generique. Nous partons de votre workflow reel : equipes, horaires, machines, fichiers Excel, regles de validation et rapports.",
    cta: "Planifier un rendez-vous",
    ctaHref: "/schedule",
    metrics: [
      { value: "6", label: "secteurs prioritaires" },
      { value: "BI", label: "dashboards Power BI et KPI" },
      { value: "IA", label: "assistants workflow et rapports" },
    ],
    sectionTitle: "La ou Tech Solutions RDC aide",
    sectionBody:
      "Chaque secteur a ses propres problemes operationnels. Certains ont besoin d'un meilleur suivi de presence. D'autres de reporting terrain, visibilite stock, dashboards de production, outils de rendez-vous ou systemes de validation interne. Choisissez votre secteur pour voir les systemes que nous pouvons construire.",
    closingTitle: "Construire un systeme pratique pour votre organisation",
    closingBody:
      "Apportez vos horaires, machines, fichiers Excel, formulaires ou processus actuel. Nous cartographions comment le travail se fait aujourd'hui et montrons le chemin le plus simple vers des operations plus propres.",
    closingChecklist: [
      "Sites web et applications web sur mesure",
      "Automatisation metier et workflows de validation",
      "Dashboards de presence et reporting RH",
      "Dashboards Power BI et rapports KPI",
      "Pipelines de donnees et reporting pret pour l'IA",
    ],
    helpsWithLabel: "Nous aidons sur",
    viewUseCasesLabel: "Voir les cas d'usage",
    useCasesHeroEyebrow: "Cas d'usage reels pour des operations reelles",
    useCasesHeroTitle: "Les problemes quotidiens que nous transformons en systemes operationnels",
    useCasesHeroBody:
      "Chaque organisation a des problemes quotidiens faciles a ignorer jusqu'a ce qu'ils coutent du temps, de l'argent ou de la confiance.",
    problemsEyebrow: "Problemes courants que nous resolvons",
    problemsTitle: "Vous n'avez pas besoin de technologie pour faire joli",
    problemsBody:
      "Vous avez besoin de systemes qui suppriment la confusion, font gagner du temps et donnent a la direction une visibilite claire. Voici les problemes que presque toute entreprise en RDC reconnait — et ce qui change quand ils sont resolus.",
    problemsLabels: {
      problem: "Probleme",
      solution: "Solution",
      result: "Resultat",
    },
    industriesEyebrow: "Ou ca s'applique",
    industriesShortTitle: "Construit pour les secteurs avec lesquels nous travaillons chaque jour",
    industriesShortBody:
      "Entreprises, usines, construction, hotels, hopitaux et magasins font tous face aux memes problemes de fond, sous des formes differentes. Choisissez le votre pour voir comment nous adaptons la solution.",
    detail: {
      backLabel: "Tous les secteurs",
      exploreLabel: "Voir les cas d'usage",
      learnMore: "En savoir plus",
      overviewLabel: "Apercu",
      benefitsTitle: "Ce que vous obtenez",
      useCasesTitle: "Cas d'usage",
      useCasesBody:
        "Des scenarios reels que nous construisons pour ce secteur.",
      otherTitle: "Autres secteurs",
    },
    problems: [
      {
        id: "visibility",
        title: "La direction ne voit pas ce qui se passe dans l'entreprise",
        problem:
          "Les rapports sont eparpilles entre fichiers Excel, messages WhatsApp, feuilles papier et differents departements. Quand la direction recoit les chiffres, ils sont deja perimes.",
        solution:
          "Nous construisons des dashboards Power BI qui connectent vos donnees de presence, ventes, production, RH ou operations dans une vue de direction claire.",
        result:
          "Les dirigeants voient performance, problemes, retards et couts avant qu'ils ne deviennent couteux.",
        ...PROBLEM_ACCENTS.visibility,
        Icon: PROBLEM_ICONS.visibility,
      },
      {
        id: "attendance",
        title: "La presence du personnel est difficile a verifier",
        problem:
          "Les RH passent trop de temps a verifier presence, heures supplementaires, retards, absences et donnees de paie manuellement.",
        solution:
          "Nous connectons les pointeuses à empreinte, systèmes de pointage ou fichiers de présence à des dashboards automatisés et des rapports prêts pour la paie.",
        result:
          "Moins de litiges sur la paie, reporting RH plus rapide et preuve claire de qui a travaille, quand et ou.",
        ...PROBLEM_ACCENTS.attendance,
        Icon: PROBLEM_ICONS.attendance,
      },
      {
        id: "credibility",
        title: "Les clients vous jugent avant meme de vous parler",
        problem:
          "Un client serieux cherche votre entreprise en ligne mais ne trouve pas de site professionnel, des infos depassees ou seulement une brochure PDF.",
        solution:
          "Nous creons un site professionnel qui presente vos services, projets, contacts et options de prise de rendez-vous clairement.",
        result:
          "Votre entreprise inspire confiance, les clients comprennent ce que vous offrez et peuvent vous contacter facilement.",
        ...PROBLEM_ACCENTS.credibility,
        Icon: PROBLEM_ICONS.credibility,
      },
      {
        id: "approvals",
        title: "Les demandes internes se perdent dans WhatsApp",
        problem:
          "Demandes de conge, validations d'achat, rapports de maintenance et mises a jour terrain passent par WhatsApp ou des formulaires papier. Certaines sont oubliees, retardees ou contestees.",
        solution:
          "Nous construisons des applications internes simples pour les validations, demandes, suivi de taches et follow-up.",
        result:
          "Chaque demande a un statut, un proprietaire, une date et un historique des decisions.",
        ...PROBLEM_ACCENTS.approvals,
        Icon: PROBLEM_ICONS.approvals,
      },
      {
        id: "field",
        title: "Les equipes terrain envoient des mises a jour tardives ou incompletes",
        problem:
          "Chantiers, points de vente, usines ou departements envoient leurs infos manuellement. Les managers passent la journee a appeler les gens juste pour savoir ce qui se passe.",
        solution:
          "Nous creons des apps de reporting terrain ou les superviseurs soumettent avancement quotidien, presence, photos, materiaux, blocages ou incidents.",
        result:
          "La direction recoit des mises a jour fiables de chaque site sans courir apres personne.",
        ...PROBLEM_ACCENTS.field,
        Icon: PROBLEM_ICONS.field,
      },
      {
        id: "growth",
        title: "L'entreprise grandit mais le workflow est encore manuel",
        problem:
          "Des processus qui marchaient avec 10 employes craquent quand l'entreprise passe a 50, 100 ou plus. Excel, papier et WhatsApp deviennent ingerables.",
        solution:
          "Nous cartographions le workflow et construisons un logiciel sur mesure autour du fonctionnement reel de l'entreprise.",
        result:
          "L'entreprise grandit avec des systemes plus propres, un meilleur controle et moins de dependance au suivi manuel.",
        ...PROBLEM_ACCENTS.growth,
        Icon: PROBLEM_ICONS.growth,
      },
      {
        id: "reports",
        title: "Les rapports prennent des jours au lieu de minutes",
        problem:
          "Les managers demandent des rapports hebdo ou mensuels, et les equipes passent des heures a copier des donnees, nettoyer Excel et preparer des slides.",
        solution:
          "Nous automatisons les rapports recurrents avec Power BI, des pipelines de donnees propres et des resumes IA.",
        result:
          "Les rapports sont prets plus vite, plus precis et plus faciles a comprendre.",
        ...PROBLEM_ACCENTS.reports,
        Icon: PROBLEM_ICONS.reports,
      },
      {
        id: "alerts",
        title: "Les problemes sont decouverts trop tard",
        problem:
          "La direction ne decouvre les abus d'heures supplementaires, problemes de stock, retards de production, shifts manques ou depassements de projet qu'apres les degats.",
        solution:
          "Nous mettons en place des dashboards et alertes qui signalent les chiffres anormaux, donnees manquantes, retards ou risques.",
        result:
          "Les equipes agissent tot au lieu de reagir une fois le probleme devenu couteux.",
        ...PROBLEM_ACCENTS.alerts,
        Icon: PROBLEM_ICONS.alerts,
      },
    ],
    industries: [
      {
        id: "companies",
        title: "Entreprises",
        subtitle: "Sites web, operations, RH et dashboards de direction",
        body: "Pour les bureaux et entreprises en croissance qui ont besoin de sites professionnels, d'outils internes, de workflows de validation, d'automatisation RH, de rapports de presence et de dashboards de direction.",
        points: [
          "Sites web d'entreprise et portails clients",
          "Validations de conge, d'achat et de documents",
          "Syntheses de presence et de paie",
          "Dashboards Power BI pour les managers",
          "Resumes IA et alertes operationnelles",
        ],
        outcome:
          "Meilleure visibilite pour la direction et operations quotidiennes plus propres.",
        useCases: [
          {
            title: "La direction attend trop longtemps pour ses rapports",
            problem:
              "Ventes, RH, finance et operations envoient leurs fichiers Excel a des moments differents. La direction perd des jours a attendre, verifier et combiner les informations avant de pouvoir decider.",
            solution:
              "Nous construisons des dashboards Power BI qui regroupent les chiffres cles dans une vue de direction unique.",
            result:
              "Les managers voient performance, presence, ventes, couts et operations sans attendre les rapports manuels.",
          },
          {
            title: "Les demandes de validation se perdent dans WhatsApp",
            problem:
              "Demandes de conge, validations d'achat et validations de documents passent par WhatsApp ou email. Certaines sont oubliees, retardees ou contestees plus tard.",
            solution:
              "Nous construisons un systeme interne de validation ou chaque demande a un statut, un valideur, une date et un historique des decisions.",
            result:
              "Les demandes deviennent plus faciles a suivre, valider et auditer.",
          },
          {
            title: "L'entreprise parait moins serieuse qu'elle ne l'est vraiment",
            problem:
              "Un client potentiel demande votre site et recoit un PDF, une vieille brochure ou un message WhatsApp a la place.",
            solution:
              "Nous creons un site d'entreprise ou un portail client qui presente vos services, projets, equipe et options de contact.",
            result:
              "L'entreprise inspire plus confiance et les prospects comprennent votre offre avant meme de vous contacter.",
          },
        ],
        ...COLORS.companies,
        Icon: ICONS.companies,
      },
      {
        id: "factories",
        title: "Usines",
        subtitle: "Reporting production, shifts, heures sup. et dashboards",
        body: "Pour les usines qui ont besoin d'un reporting de production fiable, du suivi des shifts, de la verification des heures supplementaires, de dashboards de presence et de donnees operationnelles auxquelles la direction peut se fier.",
        points: [
          "Reporting production par shift, ligne ou equipe",
          "Suivi de presence et heures supplementaires des ouvriers",
          "Suivi des pannes equipement",
          "Dashboards Power BI production, main-d'oeuvre et couts",
          "Syntheses de presence pretes pour la paie",
        ],
        outcome:
          "Chiffres de production clairs, heures verifiees et moins de surprises en fin de mois.",
        useCases: [
          {
            title: "Les chiffres de production arrivent trop tard",
            problem:
              "Les superviseurs remontent les chiffres de production apres le shift ou le lendemain matin. La direction ne voit les problemes qu'une fois la journee deja perdue.",
            solution:
              "Nous construisons une application de reporting production connectee a des dashboards Power BI.",
            result:
              "Les managers voient la production par ligne, equipe, shift ou produit plus vite et peuvent agir plus tot.",
          },
          {
            title: "Les heures supplementaires creent des litiges chaque mois",
            problem:
              "Ouvriers, superviseurs et RH ne sont pas d'accord sur les heures supplementaires au moment de preparer la paie.",
            solution:
              "Nous connectons les donnees de presence ou d'empreinte a un calcul automatique des heures supplementaires et a des rapports prets pour la paie.",
            result:
              "Les heures supplementaires deviennent plus faciles a verifier et les litiges de paie se reduisent.",
          },
          {
            title: "Les pannes machine sont signalees trop lentement",
            problem:
              "Une machine s'arrete, mais le probleme est signale tardivement ou informellement. La maintenance perd du temps et la production prend du retard.",
            solution:
              "Nous construisons un workflow de signalement de panne ou les operateurs peuvent declarer les incidents et la maintenance peut suivre leur resolution.",
            result:
              "Les pannes deviennent visibles, tracables et plus faciles a reduire.",
          },
        ],
        ...COLORS.factories,
        Icon: ICONS.factories,
      },
      {
        id: "construction",
        title: "Construction",
        subtitle: "Portail projet, apps terrain, suivi couts et avancement",
        body: "Pour les entreprises de construction qui gerent plusieurs chantiers, equipes terrain, couts de projet, materiaux, equipements et reporting d'avancement quotidien.",
        points: [
          "Sites web montrant projets et capacites",
          "Apps terrain pour le reporting quotidien des chantiers",
          "Presence et suivi des equipes sur chaque site",
          "Dashboards de couts et d'avancement",
          "Suivi des materiaux, sous-traitants et equipements",
        ],
        outcome: "Vision claire sur les chantiers, couts, avancement et equipes.",
        useCases: [
          {
            title: "Les mises a jour des chantiers sont tardives ou incompletes",
            problem:
              "Les managers appellent chaque matin plusieurs superviseurs de chantier pour connaitre avancement, ouvriers, materiaux et blocages.",
            solution:
              "Nous construisons une app de reporting terrain pour les mises a jour quotidiennes des chantiers.",
            result:
              "La direction voit avancement, presence, materiaux et incidents sur tous les chantiers depuis un seul dashboard.",
          },
          {
            title: "Les couts projet derivent avant qu'on ne s'en rende compte",
            problem:
              "Couts main-d'oeuvre, heures supplementaires, materiaux et equipements augmentent lentement sur les chantiers. Le probleme n'est detecte qu'a la fin du projet.",
            solution:
              "Nous construisons des dashboards Power BI qui suivent cout, avancement, presence et activite des chantiers.",
            result:
              "Les managers peuvent identifier les chantiers risques avant que les couts ne soient plus difficiles a controler.",
          },
          {
            title: "La presence des equipes est difficile a verifier",
            problem:
              "Les ouvriers changent de chantier, les superviseurs remontent la presence manuellement, et la paie devient difficile a confirmer.",
            solution:
              "Nous construisons un suivi de presence et un reporting par site.",
            result:
              "L'entreprise peut verifier qui a travaille, ou, quand et sous quel superviseur.",
          },
        ],
        ...COLORS.construction,
        Icon: ICONS.construction,
      },
      {
        id: "hotels",
        title: "Hotels",
        subtitle: "Site hotel, workflows clients et dashboards par departement",
        body: "Pour les hotels qui ont besoin de sites accessibles aux clients, de demandes de reservation, de suivi des demandes clients, de coordination des shifts du personnel et de dashboards par departement.",
        points: [
          "Sites hotels avec chambres et demandes de reservation",
          "Workflows de demandes de service client",
          "Coordination housekeeping et reception",
          "Planning du personnel et rapports de presence",
          "Dashboards de performance par departement",
        ],
        outcome:
          "Clients satisfaits, equipes coordonnees et visibilite departement sur un seul ecran.",
        useCases: [
          {
            title: "Les demandes des clients se perdent entre les shifts",
            problem:
              "Un client signale un probleme a la reception, mais le message est transmis oralement et oublie par l'equipe suivante.",
            solution:
              "Nous construisons un workflow de demandes clients pour la reception, le housekeeping et la maintenance.",
            result:
              "Chaque demande est enregistree, affectee, suivie et fermee correctement.",
          },
          {
            title: "Le planning du personnel cree des trous de service",
            problem:
              "Housekeeping, reception, restaurant et securite sont planifies manuellement. Certains shifts sont en sureffectif tandis que d'autres manquent de couverture.",
            solution:
              "Nous construisons des dashboards de planning et de presence par departement.",
            result:
              "Les managers voient couverture, absences et retards avant que la qualite de service ne soit affectee.",
          },
          {
            title: "Les rapports par departement sont trop longs a collecter",
            problem:
              "Le directeur d'hotel attend des rapports de housekeeping, reception, restaurant et finance avant de comprendre la performance.",
            solution:
              "Nous construisons des dashboards par departement dans Power BI.",
            result:
              "La direction obtient une vue quotidienne du service, du personnel, du travail lie a l'occupation et de l'activite par departement.",
          },
        ],
        ...COLORS.hotels,
        Icon: ICONS.hotels,
      },
      {
        id: "hospitals",
        title: "Hopitaux",
        subtitle: "Rendez-vous, planning et rapports par service",
        body: "Pour les hopitaux et cliniques qui ont besoin d'outils de prise de rendez-vous, de planification du personnel, de rapports par service, de suivi de presence et de dossiers conformes aux audits.",
        points: [
          "Systemes de prise de rendez-vous et d'admission patient",
          "Planning du personnel et gardes",
          "Rapports de presence par service",
          "Dashboards Power BI par service",
          "Rapports de conformite et d'effectifs",
        ],
        outcome:
          "Systemes fiables pour les patients, la planification du personnel et le reporting.",
        useCases: [
          {
            title: "Les rendez-vous sont geres manuellement",
            problem:
              "Les patients appellent l'accueil, les rendez-vous sont notes a la main, et des erreurs peuvent entrainer confusion ou double reservation.",
            solution:
              "Nous construisons un systeme de demande de rendez-vous ou d'admission patient.",
            result:
              "Les patients peuvent demander un rendez-vous plus facilement et les administrateurs peuvent gerer les confirmations avec un historique clair.",
          },
          {
            title: "Les rotations du personnel sont difficiles a gerer",
            problem:
              "Les plannings de garde, shifts de nuit et rotations par service sont prepares manuellement. Il est facile de manquer des trous.",
            solution:
              "Nous construisons un outil de planification pour la disponibilite, les conges, les shifts et les rotations du personnel.",
            result:
              "Les services peuvent planifier la couverture plus clairement et reduire les erreurs de planning.",
          },
          {
            title: "Les rapports de conformite sont trop longs a preparer",
            problem:
              "Quand la direction ou les inspecteurs demandent des donnees de presence, d'effectifs ou par service, l'equipe cherche dans des dossiers papier et des fichiers Excel.",
            solution:
              "Nous construisons des dashboards de presence et un reporting par service.",
            result:
              "L'hopital peut preparer des rapports d'effectifs et de conformite plus vite et avec des donnees plus propres.",
          },
        ],
        ...COLORS.hospitals,
        Icon: ICONS.hospitals,
      },
      {
        id: "stores",
        title: "Magasins & e-commerce",
        subtitle: "Boutique en ligne, dashboards par magasin et gestion des commandes",
        body: "Pour les magasins, points de vente et boutiques en ligne qui ont besoin de sites e-commerce, de suivi des commandes, de visibilite stock, de dashboards de ventes et de planning du personnel.",
        points: [
          "Boutiques en ligne avec catalogues produits",
          "Suivi des commandes du paiement a la livraison",
          "Dashboards de stock par magasin",
          "Dashboards de ventes et clients",
          "Presence et planning du personnel",
        ],
        outcome:
          "Une boutique en ligne qui vend, un stock suivi et des magasins visibles.",
        useCases: [
          {
            title: "La visibilite du stock n'est pas claire entre les magasins",
            problem:
              "Les managers appellent chaque magasin pour savoir ce qui se vend, ce qui manque et ce qui doit etre transfere.",
            solution:
              "Nous construisons des dashboards de stock et de ventes par magasin.",
            result:
              "La direction voit niveaux de stock, meilleurs produits et performance par magasin sans appeler chaque boutique.",
          },
          {
            title: "Les commandes en ligne ne sont pas suivies correctement",
            problem:
              "Les commandes arrivent via WhatsApp, Instagram ou un site basique. Certaines sont manquees, retardees ou expediees a tort.",
            solution:
              "Nous construisons une boutique en ligne ou un workflow de suivi de commandes.",
            result:
              "Chaque commande passe par un processus clair : recue, confirmee, preparee, expediee et livree.",
          },
          {
            title: "Les rapports de ventes arrivent trop tard",
            problem:
              "Le temps que les chiffres de ventes soient collectes et nettoyes, la semaine est deja finie.",
            solution:
              "Nous construisons des dashboards Power BI pour ventes, stock, magasins et clients.",
            result:
              "Les proprietaires voient ce qui se vend, ou la performance baisse et quels produits demandent attention.",
          },
        ],
        ...COLORS.stores,
        Icon: ICONS.stores,
      },
    ],
  },
};

const TAGS: Record<string, Record<string, string[]>> = {
  en: {
    companies: ["Website", "Approvals", "HR", "Power BI"],
    factories: ["Production", "Shifts", "Overtime", "Dashboards"],
    construction: ["Website", "Field app", "Costs", "Progress"],
    hotels: ["Website", "Service", "Shifts", "Dashboards"],
    hospitals: ["Appointments", "Scheduling", "Departments", "Compliance"],
    stores: ["Online store", "Stock", "Orders", "Sales"],
  },
  fr: {
    companies: ["Site web", "Validations", "RH", "Power BI"],
    factories: ["Production", "Shifts", "Heures sup.", "Dashboards"],
    construction: ["Site web", "App terrain", "Couts", "Avancement"],
    hotels: ["Site web", "Service", "Shifts", "Dashboards"],
    hospitals: ["Rendez-vous", "Planning", "Services", "Conformite"],
    stores: ["Boutique", "Stock", "Commandes", "Ventes"],
  },
};

(["en", "fr"] as const).forEach((loc) => {
  copy[loc].industries.forEach((industry) => {
    industry.tags = TAGS[loc][industry.id];
  });
});

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
