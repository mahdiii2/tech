type WhyUsSection = {
  title: string;
  body: string;
};

type SupportSection = {
  title: string;
  points: string[];
};

type MarketCopy = {
  common: {
    startProject: string;
  };
  whyUs: {
    heroTitle: string;
    heroBody: string;
    sections: WhyUsSection[];
  };
  support: {
    heroTitle: string;
    heroBody: string;
    sections: SupportSection[];
  };
};

const en = {
  common: {
    startProject: "Map one workflow",
  },
  whyUs: {
    heroTitle: "A direct delivery team with clear scope and visible decisions",
    heroBody:
      "Servicely is a software and automation agency. We map the workflow, define a focused first release, and stay involved through build, launch, and handover. Feasibility, responsibilities, decisions, and tradeoffs are documented along the way.",
    sections: [
      {
        title: "One accountable delivery team",
        body:
          "The people who shape the scope also stay involved in the build and reviews. The project names an owner for decisions, deliverables, questions, and follow-up.",
      },
      {
        title: "Feasibility before commitments",
        body:
          "We check platform and API access, permissions, data quality, exceptions, vendor terms, security needs, and technical ownership before confirming the approach or timing.",
      },
      {
        title: "Scope tied to a workflow result",
        body:
          "Each first-release feature connects to a specific operating problem, review point, or useful success signal, with exclusions and dependencies written down.",
      },
      {
        title: "Working reviews, not a long reveal",
        body:
          "You review working screens and flows at agreed checkpoints while choices, open questions, test findings, and tradeoffs are recorded for the team.",
      },
      {
        title: "Launch, handover, and support planned early",
        body:
          "Deployment, access, documentation, training, backups, ownership, and the appropriate support level are planned before launch rather than left to the final week.",
      },
    ],
  },
  support: {
    heroTitle: "Keep the system reliable after launch",
    heroBody:
      "Choose maintenance, monitoring, deployment, and response coverage based on how often the system changes and what an interruption would mean for your team.",
    sections: [
      {
        title: "Launch care",
        points: [
          "post-launch verification",
          "defect correction within the agreed scope",
          "configuration and content guidance",
          "deployment and access checks",
          "handover questions",
        ],
      },
      {
        title: "Ongoing maintenance",
        points: [
          "dependency and security updates",
          "scheduled backup checks",
          "performance and error review",
          "deployment management",
          "small agreed improvements",
          "maintenance notes after each cycle",
        ],
      },
      {
        title: "Priority incident coverage",
        points: [
          "defined coverage hours",
          "written response and escalation targets",
          "production incident triage",
          "monitoring alerts routed to an owner",
          "recovery steps documented in advance",
          "coverage tailored to system criticality",
        ],
      },
      {
        title: "Hosting and deployment",
        points: [
          "domain and SSL configuration",
          "application and database hosting",
          "backup and restore planning",
          "availability and error monitoring",
          "deployment management",
          "environment and access configuration",
          "infrastructure options selected for the workload",
        ],
      },
    ],
  },
} satisfies MarketCopy;

const ar = {
  common: {
    startProject: "ارسم مسار عمل واحداً",
  },
  whyUs: {
    heroTitle: "فريق تنفيذ مباشر بنطاق واضح وقرارات مرئية",
    heroBody:
      "Servicely وكالة للبرمجيات والأتمتة. نرسم سير العمل ونحدد إصداراً أول واضحاً ونبقى مشاركين خلال البناء والإطلاق والتسليم، مع توثيق الجدوى والمسؤوليات والقرارات والمفاضلات طوال المشروع.",
    sections: [
      {
        title: "فريق واحد مسؤول عن التسليم",
        body:
          "يبقى من يحدد النطاق مشاركاً في البناء والمراجعات، ويسمّي المشروع مسؤولاً عن القرارات والمخرجات والأسئلة والمتابعة.",
      },
      {
        title: "التحقق من الجدوى قبل الالتزام",
        body:
          "نتحقق من الوصول إلى المنصات وواجهات API والصلاحيات وجودة البيانات والاستثناءات وشروط الموردين واحتياجات الأمان والملكية التقنية قبل تأكيد النهج أو التوقيت.",
      },
      {
        title: "نطاق مرتبط بنتيجة في سير العمل",
        body:
          "نربط كل ميزة في الإصدار الأول بمشكلة تشغيلية محددة أو نقطة مراجعة أو مؤشر نجاح مفيد، مع توثيق الاستثناءات والاعتماديات.",
      },
      {
        title: "مراجعات عملية لا انتظار طويل",
        body:
          "تراجع شاشات ومسارات تعمل في نقاط متفق عليها، بينما نوثق الخيارات والأسئلة المفتوحة ونتائج الاختبار والمفاضلات للفريق.",
      },
      {
        title: "التخطيط المبكر للإطلاق والتسليم والدعم",
        body:
          "نخطط للنشر والصلاحيات والتوثيق والتدريب والنسخ الاحتياطي والملكية ومستوى الدعم المناسب قبل الإطلاق، لا في الأسبوع الأخير.",
      },
    ],
  },
  support: {
    heroTitle: "حافظ على موثوقية النظام بعد الإطلاق",
    heroBody:
      "اختر الصيانة والمراقبة وإدارة النشر وتغطية الاستجابة وفق تكرار التغيير وأثر تعطل النظام على فريقك.",
    sections: [
      {
        title: "رعاية الإطلاق",
        points: [
          "التحقق بعد الإطلاق",
          "تصحيح العيوب ضمن النطاق المتفق عليه",
          "إرشاد للإعدادات والمحتوى",
          "فحص النشر والصلاحيات",
          "الإجابة عن أسئلة التسليم",
        ],
      },
      {
        title: "الصيانة المستمرة",
        points: [
          "تحديثات الاعتماديات والأمان",
          "فحص دوري للنسخ الاحتياطي",
          "مراجعة الأداء والأخطاء",
          "إدارة النشر",
          "تحسينات صغيرة متفق عليها",
          "ملاحظات صيانة بعد كل دورة",
        ],
      },
      {
        title: "تغطية أولوية للحوادث",
        points: [
          "ساعات تغطية محددة",
          "أهداف مكتوبة للاستجابة والتصعيد",
          "فرز حوادث بيئة الإنتاج",
          "تنبيهات مراقبة تصل إلى مسؤول محدد",
          "خطوات استعادة موثقة مسبقاً",
          "تغطية تناسب أهمية النظام",
        ],
      },
      {
        title: "الاستضافة والنشر",
        points: [
          "إعداد النطاق وشهادة SSL",
          "استضافة التطبيق وقاعدة البيانات",
          "خطة للنسخ الاحتياطي والاستعادة",
          "مراقبة التوفر والأخطاء",
          "إدارة النشر",
          "إعداد البيئة والصلاحيات",
          "اختيار بنية تحتية تناسب عبء العمل",
        ],
      },
    ],
  },
} satisfies MarketCopy;

export const marketContent = { en, ar };

export function getMarketContent(locale: string) {
  return locale === "ar" ? marketContent.ar : marketContent.en;
}
