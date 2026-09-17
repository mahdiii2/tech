import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Reveal } from "@/components/Industries/Reveal";
import { PageStructuredData } from "@/components/Seo/PageStructuredData";
import { buildPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("privacy", locale);
}

const copy = {
  en: {
    eyebrow: "Servicely data practices",
    title: "Privacy & Data Notice",
    updated: "Last updated: September 2, 2026",
    intro:
      "This notice explains how Servicely handles business outreach, website inquiries, and data used for scoped projects. It describes the site as currently configured; project-specific privacy, security, and processing responsibilities are agreed in writing before access to client systems or production data.",
    summaryTitle: "At a glance",
    summary: [
      {
        title: "No hosted contact form",
        body: "Email and WhatsApp links open third-party services. This website does not store a form submission.",
      },
      {
        title: "Limited site data",
        body: "A functional cookie may remember your language. The site code does not currently include advertising pixels or behavioral analytics.",
      },
      {
        title: "Safe first contact",
        body: "Send a workflow summary or redacted example—not patient records, card data, passwords, IDs, API keys, or confidential production files.",
      },
    ],
    sections: [
      {
        title: "Website inquiries and project roles",
        body: "For a direct website inquiry, Servicely decides how the contact details are used to respond. For a client system, the client generally defines the business purpose and authorized users. Responsibilities, including any processor or subprocessor terms, are confirmed in the proposal, contract, or data agreement when relevant.",
      },
      {
        title: "Information you choose to provide",
        body: "When you contact us, we may receive your name, business name, industry, work email, WhatsApp number, website link, time zone, service interest, budget range, timeline, current tools, and the project details you choose to share.",
      },
      {
        title: "Business outreach and prospecting",
        body: "Servicely may use professional contact information—such as a name, role, employer, business email or phone, public profile, source URL, and interaction or opt-out history—for relevant email or LinkedIn outreach. Sources may include company websites, public professional profiles, referrals, business or event directories, and providers selected for a campaign. We do not use patient records or unrelated customer data for prospecting. You may ask where your details came from or request no further outreach at sales@servicely.tech; we may retain a minimal suppression record to honor that request. Campaign sourcing, retention, and channel rules are reviewed for the markets being contacted.",
      },
      {
        title: "Website operation, logs, and cookies",
        body: "A functional NEXT_LOCALE cookie may remember the selected language. Hosting and security infrastructure may create request logs containing an IP address, browser or device details, requested pages, referrer, and timestamps for reliability and misuse prevention. We do not intentionally set advertising cookies or run behavioral analytics in the current site code.",
      },
      {
        title: "Email, WhatsApp, and external assets",
        body: "Email actions may open Google or Gmail, and WhatsApp actions open a service provided by Meta; information you send is also handled under those providers’ terms. The technology display may request logo files from the Simple Icons content network, which can receive ordinary technical request data. Servicely does not control third-party sites.",
      },
      {
        title: "How inquiry information is used",
        body: "We use inquiry information to reply, understand the workflow, assess fit, clarify dependencies, prepare a scope or recommendation, maintain necessary business records, prevent misuse, and—if you proceed—deliver and support the agreed services.",
      },
      {
        title: "Project data and AI-assisted tools",
        body: "We do not assume that client or production data may be sent to an AI provider. If AI processing is part of a project, the relevant data flows, provider, purpose, permitted data, access, retention, testing, exception handling, and human review are agreed before use.",
      },
      {
        title: "Service providers and processing locations",
        body: "Hosting, security, email, messaging, scheduling, storage, and project-delivery providers may process limited information where they or their infrastructure operate. We aim to share only what is reasonably needed. Material vendors, hosting or residency requirements, and contractual safeguards are confirmed for each project when required.",
      },
      {
        title: "Retention and deletion",
        body: "There is no single retention period for every record. Timing depends on the inquiry, active project or support term, legal and accounting records, dispute prevention, and backup cycles. Project-specific retention or deletion rules are documented when material. You may request deletion, subject to records we must keep and the time needed for backup copies to expire.",
      },
      {
        title: "Security and access",
        body: "We use practical access controls, limited-authority accounts, provider safeguards, and appropriate transfer methods for the agreed work. Credentials and secrets should use a designated secure channel rather than ordinary outreach messages. No online service can guarantee absolute security.",
      },
      {
        title: "Sensitive and regulated information",
        body: "Do not send medical or patient records, payment-card details, passwords, API keys, identity documents, or sensitive production data during initial contact. Use redacted field structures or synthetic examples until an approved channel and access plan exist. Any privacy, consent, residency, security, or regulatory requirement must be identified and scoped; this notice is not a blanket compliance certification.",
      },
      {
        title: "Your choices, contact, and updates",
        body: "You may ask to access, correct, or delete information you previously shared, or stop marketing and non-essential follow-up, subject to legitimate records and minimal suppression details we may need to retain. Contact sales@servicely.tech. We may update this notice when the website, providers, or data practices change and will revise the date above.",
      },
    ],
  },
  ar: {
    eyebrow: "ممارسات البيانات لدى Servicely",
    title: "إشعار الخصوصية والبيانات",
    updated: "آخر تحديث: 2 سبتمبر 2026",
    intro:
      "يوضح هذا الإشعار كيف تتعامل Servicely مع التواصل التجاري واستفسارات الموقع والبيانات المستخدمة في المشاريع محددة النطاق. وهو يصف إعداد الموقع الحالي؛ أما مسؤوليات الخصوصية والأمان والمعالجة الخاصة بكل مشروع فتُتفق عليها كتابة قبل الوصول إلى أنظمة العميل أو بيانات الإنتاج.",
    summaryTitle: "لمحة سريعة",
    summary: [
      {
        title: "لا يوجد نموذج تواصل مستضاف",
        body: "تفتح روابط البريد الإلكتروني وواتساب خدمات خارجية، ولا يخزن هذا الموقع نموذج إرسال.",
      },
      {
        title: "بيانات محدودة للموقع",
        body: "قد يتذكر ملف تعريف ارتباط وظيفي اللغة المختارة، ولا تتضمن شيفرة الموقع حالياً بكسلات إعلانية أو تحليلات سلوكية.",
      },
      {
        title: "تواصل أولي آمن",
        body: "أرسل ملخصاً لسير العمل أو مثالاً منقحاً، لا سجلات مرضى أو بيانات بطاقات أو كلمات مرور أو هويات أو مفاتيح API أو ملفات إنتاج سرية.",
      },
    ],
    sections: [
      {
        title: "استفسارات الموقع وأدوار المشروع",
        body: "في استفسار مباشر عبر الموقع، تحدد Servicely كيفية استخدام بيانات التواصل للرد. وفي نظام يُبنى لعميل، يحدد العميل عادة غرض العمل والمستخدمين المصرح لهم. وتُحدد المسؤوليات، بما فيها شروط المعالج أو المعالج الفرعي عند الحاجة، في العرض أو العقد أو اتفاقية البيانات.",
      },
      {
        title: "المعلومات التي تختار تقديمها",
        body: "عند التواصل معنا، قد نستقبل اسمك واسم الشركة والقطاع والبريد الإلكتروني للعمل ورقم واتساب ورابط الموقع والمنطقة الزمنية والخدمة المطلوبة ونطاق الميزانية والجدول الزمني والأدوات الحالية وتفاصيل المشروع التي تختار مشاركتها.",
      },
      {
        title: "التواصل التجاري واستكشاف العملاء المحتملين",
        body: "قد تستخدم Servicely بيانات تواصل مهنية، مثل الاسم والدور وجهة العمل والبريد أو الهاتف المهني والملف العام ورابط المصدر وسجل التفاعل أو طلب إيقاف التواصل، لإرسال تواصل ملائم عبر البريد الإلكتروني أو LinkedIn. وقد تأتي المصادر من مواقع الشركات أو الملفات المهنية العامة أو الإحالات أو أدلة الأعمال والفعاليات أو مزودين يتم اختيارهم للحملة. لا نستخدم سجلات المرضى أو بيانات عملاء غير مرتبطة لأغراض الاستهداف. يمكنك سؤالنا عن مصدر بياناتك أو طلب عدم التواصل مجدداً عبر sales@servicely.tech؛ وقد نحتفظ بسجل منع محدود لاحترام الطلب. وتُراجع مصادر الحملات وفترات الاحتفاظ وقواعد القنوات وفق الأسواق المستهدفة.",
      },
      {
        title: "تشغيل الموقع والسجلات وملفات تعريف الارتباط",
        body: "قد يتذكر ملف NEXT_LOCALE الوظيفي اللغة المختارة. وقد تنشئ بنية الاستضافة والحماية سجلات طلبات تتضمن عنوان IP وتفاصيل المتصفح أو الجهاز والصفحات المطلوبة ومصدر الإحالة والتوقيت لأغراض الموثوقية ومنع إساءة الاستخدام. لا نضع عمداً ملفات إعلانية ولا نشغّل تحليلات سلوكية في شيفرة الموقع الحالية.",
      },
      {
        title: "البريد الإلكتروني وواتساب والأصول الخارجية",
        body: "قد تفتح إجراءات البريد Google أو Gmail، وتفتح إجراءات واتساب خدمة تقدمها Meta؛ لذلك تخضع المعلومات التي ترسلها أيضاً لشروط تلك الجهات. وقد يطلب عرض التقنيات ملفات شعارات من شبكة Simple Icons التي يمكن أن تستقبل بيانات الطلب التقنية المعتادة. لا تتحكم Servicely في مواقع الأطراف الثالثة.",
      },
      {
        title: "كيفية استخدام معلومات الاستفسار",
        body: "نستخدم معلومات الاستفسار للرد وفهم سير العمل وتقييم الملاءمة وتوضيح الاعتماديات وإعداد نطاق أو توصية وحفظ سجلات العمل اللازمة ومنع إساءة الاستخدام، وإذا قررت المتابعة، لتنفيذ الخدمات المتفق عليها ودعمها.",
      },
      {
        title: "بيانات المشروع والأدوات المدعومة بالذكاء الاصطناعي",
        body: "لا نفترض جواز إرسال بيانات العميل أو الإنتاج إلى مزود ذكاء اصطناعي. إذا كانت المعالجة بالذكاء الاصطناعي جزءاً من المشروع، نتفق قبل الاستخدام على تدفقات البيانات والمزود والغرض والبيانات المسموح بها والوصول والاحتفاظ والاختبار ومعالجة الاستثناءات والمراجعة البشرية.",
      },
      {
        title: "مقدمو الخدمات ومواقع المعالجة",
        body: "قد يعالج مقدمو الاستضافة والحماية والبريد والرسائل والجدولة والتخزين وتنفيذ المشاريع معلومات محدودة حيث يعملون أو تعمل بنيتهم التحتية. نسعى إلى مشاركة ما يلزم بصورة معقولة فقط، ونؤكد الموردين المؤثرين ومتطلبات الاستضافة أو موقع البيانات والضمانات التعاقدية لكل مشروع عند الحاجة.",
      },
      {
        title: "الاحتفاظ والحذف",
        body: "لا توجد مدة احتفاظ واحدة لكل السجلات. تعتمد المدة على الاستفسار والمشروع أو الدعم النشط والسجلات القانونية والمحاسبية ومنع النزاعات ودورات النسخ الاحتياطي. نوثق قواعد الاحتفاظ أو الحذف الخاصة بالمشروع عندما تكون مهمة، ويمكنك طلب الحذف مع مراعاة السجلات الواجب الاحتفاظ بها والوقت اللازم لانتهاء النسخ الاحتياطية.",
      },
      {
        title: "الأمان والوصول",
        body: "نستخدم ضوابط وصول عملية وحسابات محدودة الصلاحية وضمانات مقدمي الخدمات وطرق نقل مناسبة للعمل المتفق عليه. يجب مشاركة بيانات الدخول والأسرار عبر قناة آمنة مخصصة لا عبر رسائل التواصل المعتادة. ولا يمكن لأي خدمة عبر الإنترنت ضمان أمان مطلق.",
      },
      {
        title: "المعلومات الحساسة والمنظمة",
        body: "لا ترسل سجلات طبية أو سجلات مرضى أو بيانات بطاقات دفع أو كلمات مرور أو مفاتيح API أو وثائق هوية أو بيانات إنتاج حساسة أثناء التواصل الأولي. استخدم هياكل حقول منقحة أو أمثلة اصطناعية حتى يتم اعتماد قناة وخطة وصول. ويجب تحديد أي متطلبات للخصوصية أو الموافقة أو موقع البيانات أو الأمان أو التنظيم ضمن النطاق؛ فهذا الإشعار ليس اعتماد امتثال شاملاً.",
      },
      {
        title: "خياراتك والتواصل والتحديثات",
        body: "يمكنك طلب الوصول إلى المعلومات التي شاركتها أو تصحيحها أو حذفها أو إيقاف التسويق والمتابعة غير الضرورية، مع مراعاة السجلات المشروعة وبيانات المنع المحدودة التي قد يلزم الاحتفاظ بها. تواصل عبر sales@servicely.tech. قد نحدّث هذا الإشعار عند تغير الموقع أو مقدمي الخدمات أو ممارسات البيانات، وسنعدّل التاريخ أعلاه.",
      },
    ],
  },
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "ar" ? copy.ar : copy.en;
  const isAr = locale === "ar";

  return (
    <main className="bg-white">
      <PageStructuredData page="privacy" locale={locale} />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <p
            className={`text-sm font-semibold text-blue-600 ${
              isAr ? "tracking-normal" : "uppercase tracking-[0.18em]"
            }`}
          >
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-3 text-sm text-neutral-500">{content.updated}</p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
            {content.intro}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="mt-10 rounded-3xl border border-blue-200 bg-blue-50/70 p-5 sm:p-7">
            <h2 className="text-xl font-semibold text-neutral-950">
              {content.summaryTitle}
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {content.summary.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-5 ring-1 ring-blue-100">
                  <h3 className="font-semibold text-neutral-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{item.body}</p>
                </div>
              ))}
            </div>
          </aside>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 2) * 0.06}>
              <article className="h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-300 hover:bg-white hover:shadow-[0_14px_35px_rgba(0,0,0,0.05)]">
                <h2 className="text-xl font-semibold text-neutral-950">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-neutral-700">
                  {section.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
