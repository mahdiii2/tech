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
    heroTitle: "Direct access to the people planning and building your system",
    heroBody:
      "Work with one accountable team from workflow mapping through launch. Decisions stay documented, tradeoffs stay visible, and every release has a useful business purpose.",
    sections: [
      {
        title: "One accountable delivery team",
        body:
          "The people who shape the scope also build and review the product. You always know who owns the next decision, deliverable, and follow-up.",
      },
      {
        title: "Scope tied to an outcome",
        body:
          "We connect every feature to a workflow problem, success signal, or operational requirement before it enters the first release.",
      },
      {
        title: "Working reviews, not long reveals",
        body:
          "You review working screens and flows at agreed checkpoints, while choices, open questions, and tradeoffs are recorded for the team.",
      },
      {
        title: "Launch and handover planned early",
        body:
          "Deployment, access, documentation, training, backups, and ownership are planned before launch instead of being left to the final week.",
      },
      {
        title: "Support matched to the system",
        body:
          "After launch, choose a support level based on business impact, change frequency, response expectations, and infrastructure needs.",
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
    heroTitle: "وصول مباشر إلى من يخطط لنظامك ويبنيه",
    heroBody:
      "تعمل مع فريق واحد مسؤول من رسم سير العمل حتى الإطلاق. تبقى القرارات موثقة، والمفاضلات واضحة، ولكل إصدار غرض عملي.",
    sections: [
      {
        title: "فريق واحد مسؤول عن التسليم",
        body:
          "من يحدد النطاق هو نفسه من يبني المنتج ويراجعه، لذلك تعرف دائماً من يملك القرار والتسليم والخطوة التالية.",
      },
      {
        title: "نطاق مرتبط بنتيجة",
        body:
          "نربط كل ميزة بمشكلة في سير العمل أو مؤشر نجاح أو متطلب تشغيلي قبل إدخالها في الإصدار الأول.",
      },
      {
        title: "مراجعات عملية لا انتظار طويل",
        body:
          "تراجع شاشات ومسارات تعمل في نقاط متفق عليها، بينما نوثق الخيارات والأسئلة المفتوحة والمفاضلات للفريق.",
      },
      {
        title: "الإطلاق والتسليم جزء من الخطة",
        body:
          "نخطط للنشر والصلاحيات والتوثيق والتدريب والنسخ الاحتياطي والملكية مبكراً، لا في الأسبوع الأخير.",
      },
      {
        title: "دعم يناسب أهمية النظام",
        body:
          "بعد الإطلاق تختار مستوى الدعم وفق أثر النظام وتكرار التغيير وتوقعات الاستجابة واحتياجات البنية التحتية.",
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
