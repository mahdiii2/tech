import {
  Building2,
  CarFront,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type UseCase = {
  title: string;
  problem: string;
  solution: string;
  result: string;
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
  useCasesClosingTitle: string;
  useCasesClosingBody: string;
  useCasesClosingChecklist: string[];
  helpsWithLabel: string;
  viewUseCasesLabel: string;
  useCasesHeroEyebrow: string;
  useCasesHeroTitle: string;
  useCasesHeroBody: string;
  problemsLabels: {
    problem: string;
    solution: string;
    result: string;
  };
  detail: {
    backLabel: string;
  };
  industries: Industry[];
};

const industryStyle = {
  construction: { color: "var(--design-500)", bg: "var(--design-50)" },
  clinics: { color: "var(--dev-500)", bg: "var(--dev-50)" },
  dealerships: {
    color: "var(--engagement-500)",
    bg: "var(--engagement-50)",
  },
};

const copy: Record<string, IndustriesCopy> = {
  en: {
    eyebrow: "Built for your workflow",
    title: "Software and automation for teams that cannot afford slow follow-up",
    body:
      "We focus on construction and trades, dental and medical clinics, and independent car dealerships—three industries where a missed message can become a missed job, appointment, or sale.",
    support:
      "Each solution can combine custom software, AI-assisted workflows, WhatsApp automation, integrations, and reporting around the way your team already operates.",
    cta: "Map one workflow",
    ctaHref: "/contact",
    metrics: [
      { value: "Capture", label: "Collect the details your team needs" },
      { value: "Follow up", label: "Keep every lead and next action visible" },
      { value: "Operate", label: "Connect staff, systems, and reporting" },
    ],
    sectionTitle: "Three industries with different operating realities",
    sectionBody:
      "A contractor prices work, a clinic manages appointments, and a dealership moves buyers toward the right vehicle. The system should reflect those differences.",
    closingTitle: "Start with one lead, booking, or job",
    closingBody:
      "Walk us through a recent request from the first message to the final outcome. We will identify what should stay human, what can be automated, and what belongs in a focused first release.",
    closingChecklist: [
      "One recent lead, booking, quote, or job",
      "The channels and tools involved today",
      "The people who own each decision and handoff",
      "The response, status, or report you need at the end",
    ],
    useCasesClosingTitle: "See a familiar bottleneck? Let us scope it around your process",
    useCasesClosingBody:
      "Use these examples as a starting point, not a fixed package. We adapt the conversation, rules, human review, integrations, and reporting to your operation.",
    useCasesClosingChecklist: [
      "Share one real message thread or request",
      "Point out where the delay or repeated work begins",
      "Choose the first outcome worth improving",
      "Receive a practical first-release direction",
    ],
    helpsWithLabel: "Common priorities",
    viewUseCasesLabel: "View use cases",
    useCasesHeroEyebrow: "Practical use cases",
    useCasesHeroTitle: "Find the workflow that looks most like yours",
    useCasesHeroBody:
      "See how custom software, AI automation, WhatsApp, and connected follow-up can support the specific work your team handles every day.",
    problemsLabels: {
      problem: "Where work breaks down",
      solution: "What we can build",
      result: "What this enables",
    },
    detail: {
      backLabel: "All industries",
    },
    industries: [
      {
        id: "construction-trades",
        title: "Construction & trades",
        subtitle: "Lead intake, estimating, job coordination, and follow-up",
        body:
          "For contractors and trade businesses that need to turn inquiries into priced work and keep the office, crews, and customers aligned.",
        points: [
          "Quote-ready lead intake",
          "WhatsApp lead qualification",
          "Estimate and deposit follow-up",
          "Crew scheduling and job updates",
          "Internal job portals and dashboards",
        ],
        tags: ["Leads", "Quotes", "Jobs", "Crews"],
        outcome:
          "Collect better job details, respond with context, and keep every quote and active job moving toward its next step.",
        useCases: [
          {
            title: "Quote-ready lead intake",
            problem:
              "New inquiries arrive without the trade, site details, scope, photos, urgency, or timing needed to estimate the work.",
            solution:
              "A website or WhatsApp flow collects the missing details and creates a review-ready summary for the estimator.",
            result:
              "The team can assess fit, prioritize the request, and prepare the next response with less back-and-forth.",
          },
          {
            title: "Estimate, approval, and deposit follow-up",
            problem:
              "Quotes are sent, but reminders, customer questions, approvals, and deposits remain scattered across inboxes and chats.",
            solution:
              "A follow-up workflow tracks the estimate stage, owner, next action, approval, and deposit status in one view.",
            result:
              "Sales and operations know which opportunity needs attention and what was promised next.",
          },
          {
            title: "Job handoff, scheduling, and site updates",
            problem:
              "Won work is copied into new sheets and chats, while scope changes, crew updates, and site notes become hard to trace.",
            solution:
              "A custom job workspace connects scope, schedule, crew, site notes, customer updates, and approvals.",
            result:
              "Office and field teams share the same current job status without replacing every existing tool at once.",
          },
        ],
        Icon: Building2,
        ...industryStyle.construction,
      },
      {
        id: "dental-medical-clinics",
        title: "Dental & medical clinics",
        subtitle: "Appointment intake, non-clinical conversations, and follow-up",
        body:
          "For independent clinics that want faster responses while reducing repetitive front-desk work and keeping staff in control.",
        points: [
          "Appointment requests and reminders",
          "Non-clinical WhatsApp assistants",
          "Consultation inquiry follow-up",
          "Administrative intake workflows",
          "Clinic dashboards and staff portals",
        ],
        tags: ["Appointments", "WhatsApp", "Patients", "Follow-up"],
        outcome:
          "Give patients a clear next step, capture the context staff need, and keep operational follow-up visible.",
        useCases: [
          {
            title: "Appointment intake, reminders, and rescheduling",
            problem:
              "Patients send incomplete requests, and staff repeat the same questions before they can confirm or change an appointment.",
            solution:
              "A guided flow captures service, preferred time, contact details, and scheduling notes, then supports configured reminders and rescheduling.",
            result:
              "Staff receive more complete requests and patients understand what happens next.",
          },
          {
            title: "WhatsApp front-desk automation",
            problem:
              "The front desk repeatedly answers the same non-clinical questions while time-sensitive requests wait in the same queue.",
            solution:
              "An approved WhatsApp assistant handles routine service information, collects intent, and hands the conversation to staff when needed.",
            result:
              "Routine conversations move faster without asking automation to provide medical advice.",
          },
          {
            title: "Consultation and inquiry follow-up",
            problem:
              "Consultation requests, referrals, and pending follow-up are difficult to track once the first conversation ends.",
            solution:
              "A lightweight follow-up workspace records the owner, status, next action, and patient communication history.",
            result:
              "The team can see which operational follow-up is pending while keeping human review in the process.",
          },
        ],
        Icon: HeartPulse,
        ...industryStyle.clinics,
      },
      {
        id: "independent-car-dealerships",
        title: "Independent car dealerships",
        subtitle: "Inventory inquiries, test drives, trade-ins, and sales follow-up",
        body:
          "For independent dealers that need to respond across lead sources, qualify buyer intent, and keep every salesperson's next action visible.",
        points: [
          "Vehicle inquiry qualification",
          "WhatsApp sales conversations",
          "Test-drive scheduling",
          "Trade-in and finance intake",
          "Sales pipelines and inventory tools",
        ],
        tags: ["Inventory", "Buyers", "Trade-ins", "Follow-up"],
        outcome:
          "Route better-qualified vehicle inquiries to the right salesperson and follow each opportunity through its next action.",
        useCases: [
          {
            title: "Vehicle inquiry qualification and routing",
            problem:
              "Leads arrive from multiple sources with little context about the vehicle, budget, financing, trade-in, or purchase timing.",
            solution:
              "A connected intake flow captures buyer intent, matches the inquiry to inventory, and routes it with a concise summary.",
            result:
              "Salespeople begin with useful context and managers can see where each lead came from.",
          },
          {
            title: "Test-drive and trade-in intake",
            problem:
              "Booking a test drive or evaluating a trade-in requires repeated messages to collect availability and vehicle details.",
            solution:
              "A guided conversation collects the preferred vehicle and time plus trade-in details, photos, and contact information when relevant.",
            result:
              "The salesperson receives a structured request and the buyer gets a clear next step.",
          },
          {
            title: "WhatsApp lead follow-up and sales pipeline",
            problem:
              "Promising buyers go quiet because follow-up timing, ownership, and conversation history live across individual inboxes.",
            solution:
              "A follow-up workflow schedules configured messages, records responses, and returns active conversations to a salesperson.",
            result:
              "The team follows up consistently while people remain responsible for the sales conversation.",
          },
        ],
        Icon: CarFront,
        ...industryStyle.dealerships,
      },
    ],
  },
  ar: {
    eyebrow: "مصمم وفق سير عملك",
    title: "برمجيات وأتمتة لفرق لا تحتمل بطء المتابعة",
    body:
      "نركز على شركات المقاولات والخدمات الفنية، وعيادات الأسنان والعيادات الطبية، ومعارض السيارات المستقلة؛ وهي قطاعات قد تعني فيها الرسالة الضائعة خسارة مشروع أو موعد أو صفقة.",
    support:
      "يمكن أن يجمع الحل بين البرمجيات المخصصة، وسير العمل المدعوم بالذكاء الاصطناعي، وأتمتة واتساب، والتكاملات، والتقارير وفق طريقة عمل فريقك.",
    cta: "ارسم سير عمل واحداً معنا",
    ctaHref: "/contact",
    metrics: [
      { value: "استقبال", label: "اجمع التفاصيل التي يحتاجها الفريق" },
      { value: "متابعة", label: "أبقِ كل عميل والخطوة التالية واضحين" },
      { value: "تشغيل", label: "اربط الفريق والأنظمة والتقارير" },
    ],
    sectionTitle: "ثلاثة قطاعات بطرق تشغيل مختلفة",
    sectionBody:
      "تسعّر شركة المقاولات عملاً، وتنظم العيادة المواعيد، ويوجّه معرض السيارات المشتري إلى المركبة المناسبة. يجب أن يعكس النظام هذه الفروقات.",
    closingTitle: "ابدأ بعميل أو موعد أو مشروع واحد",
    closingBody:
      "راجع معنا طلباً حديثاً من أول رسالة حتى النتيجة. سنحدد ما يجب أن يبقى بيد الفريق، وما يمكن أتمتته، وما يستحق الدخول في الإصدار الأول.",
    closingChecklist: [
      "عميل أو موعد أو عرض سعر أو مشروع حديث",
      "القنوات والأدوات المستخدمة اليوم",
      "المسؤولون عن كل قرار ونقطة تحويل",
      "الاستجابة أو الحالة أو التقرير المطلوب في النهاية",
    ],
    useCasesClosingTitle: "هل وجدت نقطة تعطّل مألوفة؟ لنحددها وفق عمليتك",
    useCasesClosingBody:
      "استخدم هذه الأمثلة كنقطة بداية لا كحزمة ثابتة. نكيّف المحادثة والقواعد والمراجعة البشرية والتكاملات والتقارير مع طريقة عملك.",
    useCasesClosingChecklist: [
      "شارك محادثة أو طلباً حقيقياً",
      "حدد أين يبدأ التأخير أو العمل المتكرر",
      "اختر أول نتيجة تستحق التحسين",
      "احصل على اتجاه عملي للإصدار الأول",
    ],
    helpsWithLabel: "الأولويات الشائعة",
    viewUseCasesLabel: "شاهد حالات الاستخدام",
    useCasesHeroEyebrow: "حالات استخدام عملية",
    useCasesHeroTitle: "اختر سير العمل الأقرب إلى واقع فريقك",
    useCasesHeroBody:
      "شاهد كيف تدعم البرمجيات المخصصة وأتمتة الذكاء الاصطناعي وواتساب والمتابعة المترابطة العمل اليومي لفريقك.",
    problemsLabels: {
      problem: "أين يتعطل العمل",
      solution: "ما الذي يمكننا بناءه",
      result: "ما الذي يتيحه الحل",
    },
    detail: {
      backLabel: "كل القطاعات",
    },
    industries: [
      {
        id: "construction-trades",
        title: "المقاولات والخدمات الفنية",
        subtitle: "استقبال العملاء والتسعير وتنسيق المشاريع والمتابعة",
        body:
          "لشركات المقاولات والخدمات الفنية التي تريد تحويل الاستفسارات إلى أعمال مسعّرة، مع إبقاء المكتب والفرق والعملاء على صورة واحدة.",
        points: [
          "استقبال طلبات جاهزة للتسعير",
          "تأهيل العملاء عبر واتساب",
          "متابعة العروض والدفعات المقدمة",
          "جدولة الفرق وتحديثات المشروع",
          "بوابات داخلية ولوحات متابعة",
        ],
        tags: ["عملاء", "عروض", "مشاريع", "فرق"],
        outcome:
          "اجمع تفاصيل أفضل، واستجب بسياق واضح، وأبقِ كل عرض ومشروع نشط متجهاً نحو خطوته التالية.",
        useCases: [
          {
            title: "استقبال طلبات جاهزة للتسعير",
            problem:
              "تصل الاستفسارات من دون نوع العمل أو تفاصيل الموقع أو النطاق أو الصور أو درجة الاستعجال أو التوقيت المطلوب.",
            solution:
              "يجمع مسار عبر الموقع أو واتساب التفاصيل الناقصة وينتج ملخصاً منظماً يراجعه مسؤول التسعير.",
            result:
              "يستطيع الفريق تقييم الملاءمة وترتيب الطلب وتجهيز الرد التالي بأسئلة متكررة أقل.",
          },
          {
            title: "متابعة العرض والموافقة والدفعة المقدمة",
            problem:
              "تُرسل عروض الأسعار، لكن التذكيرات وأسئلة العميل والموافقات والدفعات تبقى موزعة بين الرسائل والمحادثات.",
            solution:
              "يتتبع سير متابعة واحد مرحلة العرض والمسؤول والخطوة التالية والموافقة وحالة الدفعة المقدمة.",
            result:
              "يعرف فريقا المبيعات والتشغيل أي فرصة تحتاج إلى إجراء وما الذي وُعد به العميل.",
          },
          {
            title: "تحويل المشروع والجدولة وتحديثات الموقع",
            problem:
              "تُنقل المشاريع الجديدة إلى جداول ومحادثات أخرى، فيصعب تتبع تغييرات النطاق وتحديثات الفرق وملاحظات الموقع.",
            solution:
              "تربط مساحة عمل مخصصة النطاق والجدول والفريق وملاحظات الموقع وتحديثات العميل والموافقات.",
            result:
              "يشترك المكتب والفرق الميدانية في حالة محدثة من دون استبدال جميع الأدوات الحالية دفعة واحدة.",
          },
        ],
        Icon: Building2,
        ...industryStyle.construction,
      },
      {
        id: "dental-medical-clinics",
        title: "عيادات الأسنان والعيادات الطبية",
        subtitle: "استقبال المواعيد والمحادثات غير الطبية والمتابعة",
        body:
          "للعيادات المستقلة التي تريد استجابة أسرع مع تقليل العمل المتكرر على مكتب الاستقبال وإبقاء القرار بيد الموظفين.",
        points: [
          "طلبات المواعيد والتذكيرات",
          "مساعد واتساب للأسئلة الإدارية غير الطبية",
          "متابعة طلبات الاستشارة",
          "مسارات الاستقبال الإداري",
          "لوحات للعيادة وبوابات للموظفين",
        ],
        tags: ["مواعيد", "واتساب", "مرضى", "متابعة"],
        outcome:
          "امنح المريض خطوة تالية واضحة، واجمع السياق الذي يحتاجه الموظفون، وأظهر المتابعة التشغيلية بوضوح.",
        useCases: [
          {
            title: "استقبال المواعيد والتذكير وإعادة الجدولة",
            problem:
              "يرسل المرضى طلبات ناقصة ويكرر الموظفون الأسئلة نفسها قبل تأكيد الموعد أو تغييره.",
            solution:
              "يجمع مسار موجّه الخدمة والوقت المفضل وبيانات التواصل وملاحظات الجدولة، ثم يدعم التذكيرات وإعادة الجدولة وفق إعدادات العيادة.",
            result:
              "يستقبل الموظفون طلبات أكثر اكتمالاً ويفهم المرضى الخطوة التالية.",
          },
          {
            title: "أتمتة مكتب الاستقبال عبر واتساب",
            problem:
              "يجيب مكتب الاستقبال مراراً عن الأسئلة غير الطبية نفسها بينما تنتظر الطلبات الحساسة للوقت في المحادثة ذاتها.",
            solution:
              "يتعامل مساعد واتساب مع معلومات الخدمات المعتمدة، ويحدد غرض المحادثة، ثم يحولها إلى الموظف عند الحاجة.",
            result:
              "تتحرك المحادثات الروتينية أسرع من دون استخدام الأتمتة لتقديم نصيحة طبية.",
          },
          {
            title: "متابعة طلبات الاستشارة والاستفسارات",
            problem:
              "يصعب تتبع طلبات الاستشارة والإحالات والمتابعة المعلقة بعد انتهاء المحادثة الأولى.",
            solution:
              "تسجل مساحة متابعة خفيفة المسؤول والحالة والخطوة التالية وسجل التواصل مع المريض.",
            result:
              "يرى الفريق المتابعة التشغيلية المعلقة مع إبقاء المراجعة البشرية ضمن المسار.",
          },
        ],
        Icon: HeartPulse,
        ...industryStyle.clinics,
      },
      {
        id: "independent-car-dealerships",
        title: "معارض السيارات المستقلة",
        subtitle:
          "استفسارات المخزون وتجارب القيادة واستبدال السيارة ومتابعة المبيعات",
        body:
          "للمعارض المستقلة التي تريد الاستجابة عبر مصادر العملاء المختلفة، وتأهيل نية الشراء، وإظهار الخطوة التالية لكل مسؤول مبيعات.",
        points: [
          "تأهيل استفسارات المركبات",
          "محادثات المبيعات عبر واتساب",
          "جدولة تجارب القيادة",
          "استقبال بيانات استبدال السيارة والتمويل",
          "مسارات مبيعات وأدوات مخزون",
        ],
        tags: ["مخزون", "مشترون", "استبدال", "متابعة"],
        outcome:
          "وجّه استفسارات أوضح إلى مسؤول المبيعات المناسب وتابع كل فرصة حتى خطوتها التالية.",
        useCases: [
          {
            title: "تأهيل استفسارات المركبات وتوجيهها",
            problem:
              "تصل طلبات العملاء المحتملين من مصادر متعددة مع سياق محدود حول المركبة أو الميزانية أو التمويل أو استبدال السيارة أو توقيت الشراء.",
            solution:
              "يجمع مسار مترابط نية المشتري ويربط الاستفسار بالمخزون ويوجهه مع ملخص واضح.",
            result:
              "يبدأ مسؤول المبيعات بسياق مفيد ويرى المدير مصدر كل فرصة وحالتها.",
          },
          {
            title: "تجربة القيادة واستقبال بيانات استبدال السيارة",
            problem:
              "تحتاج جدولة تجربة القيادة أو تقييم السيارة المقدمة للاستبدال إلى رسائل متكررة لجمع التوفر وتفاصيل المركبة.",
            solution:
              "تجمع محادثة موجّهة المركبة والوقت المفضل، إضافة إلى تفاصيل السيارة المقدمة للاستبدال وصورها وبيانات التواصل عند الحاجة.",
            result:
              "يستقبل مسؤول المبيعات طلباً منظماً ويحصل المشتري على خطوة تالية واضحة.",
          },
          {
            title: "متابعة العملاء عبر واتساب ومسار المبيعات",
            problem:
              "تتوقف فرص واعدة لأن توقيت المتابعة والمسؤول وسجل المحادثة موزعة بين صناديق رسائل فردية.",
            solution:
              "يجدول سير المتابعة رسائل محددة مسبقاً، ويسجل الردود، ويعيد المحادثات النشطة إلى مسؤول المبيعات.",
            result:
              "يتابع الفريق بثبات مع بقاء مسؤولية محادثة البيع بيد الأشخاص.",
          },
        ],
        Icon: CarFront,
        ...industryStyle.dealerships,
      },
    ],
  },
};

export function getIndustriesCopy(locale: string): IndustriesCopy {
  return copy[locale] ?? copy.en;
}
