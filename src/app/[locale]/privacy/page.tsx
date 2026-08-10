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
    eyebrow: "Servicely",
    title: "Privacy Policy",
    updated: "Last updated: August 11, 2026",
    intro:
      "This policy explains how Servicely handles information you provide and the limited technical data processed by the tools used to operate the website and deliver projects.",
    sections: [
      {
        title: "Information you provide",
        body: "When you contact us, we may receive your name, business name, industry, email, WhatsApp number, website or product link, time zone or preferred meeting hours, service interest, budget range, timeline, and any project details you choose to share.",
      },
      {
        title: "Technical and usage information",
        body: "Hosting, security, and analytics tools may process limited technical information such as browser or device type, pages viewed, referral source, technical identifiers, and request timestamps. We use this information to operate, secure, and improve the website.",
      },
      {
        title: "How we use information",
        body: "We use information to respond to requests, understand the workflow you want to improve, prepare a scope or recommendation, deliver agreed software and services, maintain project records, and protect our systems from misuse.",
      },
      {
        title: "Service providers",
        body: "Email, messaging, scheduling, analytics, hosting, and project-delivery providers may process information on our behalf under their own terms and privacy practices. We share only what is reasonably needed for the relevant service.",
      },
      {
        title: "Retention and security",
        body: "We retain information only as long as it is reasonably needed for communication, project delivery, legal obligations, or legitimate business records. We use practical access controls and service-provider safeguards, but no online system can guarantee absolute security.",
      },
      {
        title: "Your choices",
        body: "You may ask us to access, correct, or delete information you previously shared, subject to any information we must retain for legal or operational reasons. You may also ask us to stop non-essential follow-up communication.",
      },
      {
        title: "Contact",
        body: "For a privacy question or request, contact sales@servicely.tech.",
      },
    ],
  },
  ar: {
    eyebrow: "Servicely",
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: 11 أغسطس 2026",
    intro:
      "توضح هذه السياسة كيف تتعامل Servicely مع المعلومات التي تقدمها والبيانات التقنية المحدودة التي تعالجها الأدوات المستخدمة لتشغيل الموقع وتنفيذ المشاريع.",
    sections: [
      {
        title: "المعلومات التي تقدمها",
        body: "عند التواصل معنا، قد نستقبل اسمك، واسم الشركة، والقطاع، والبريد الإلكتروني، ورقم واتساب، ورابط الموقع أو المنتج، والمنطقة الزمنية أو أوقات الاجتماع المناسبة، والخدمة المطلوبة، ونطاق الميزانية، والجدول الزمني، وأي تفاصيل تختار مشاركتها عن المشروع.",
      },
      {
        title: "المعلومات التقنية ومعلومات الاستخدام",
        body: "قد تعالج أدوات الاستضافة والحماية والتحليلات معلومات تقنية محدودة، مثل نوع المتصفح أو الجهاز، والصفحات التي تمت زيارتها، ومصدر الإحالة، والمعرّفات التقنية، وأوقات الطلبات. نستخدم هذه المعلومات لتشغيل الموقع وحمايته وتحسينه.",
      },
      {
        title: "كيف نستخدم المعلومات",
        body: "نستخدم المعلومات للرد على الطلبات، وفهم سير العمل الذي تريد تحسينه، وإعداد نطاق أو توصية، وتنفيذ البرمجيات والخدمات المتفق عليها، وحفظ سجلات المشروع، وحماية أنظمتنا من سوء الاستخدام.",
      },
      {
        title: "مقدمو الخدمات",
        body: "قد يعالج مقدمو خدمات البريد والرسائل والجدولة والتحليلات والاستضافة وتنفيذ المشاريع بعض المعلومات نيابة عنا وفق شروطهم وممارسات الخصوصية لديهم. لا نشارك إلا ما يلزم بصورة معقولة للخدمة المعنية.",
      },
      {
        title: "الاحتفاظ بالمعلومات وحمايتها",
        body: "نحتفظ بالمعلومات للمدة اللازمة بصورة معقولة للتواصل أو تنفيذ المشروع أو الالتزامات القانونية أو سجلات العمل المشروعة. نستخدم ضوابط وصول عملية وإجراءات الحماية التي يوفرها مزودو الخدمات، لكن لا يمكن لأي نظام عبر الإنترنت ضمان حماية مطلقة.",
      },
      {
        title: "خياراتك",
        body: "يمكنك طلب الوصول إلى المعلومات التي شاركتها أو تصحيحها أو حذفها، مع مراعاة أي معلومات يجب الاحتفاظ بها لأسباب قانونية أو تشغيلية. ويمكنك أيضاً طلب إيقاف رسائل المتابعة غير الضرورية.",
      },
      {
        title: "التواصل",
        body: "لأي سؤال أو طلب متعلق بالخصوصية، تواصل عبر sales@servicely.tech.",
      },
    ],
  },
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "ar" ? copy.ar : copy.en;

  return (
    <main className="bg-white">
      <PageStructuredData page="privacy" locale={locale} />
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-3 text-sm text-neutral-500">{content.updated}</p>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            {content.intro}
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {content.sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 2) * 0.08}>
              <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-300 hover:bg-white hover:shadow-[0_14px_35px_rgba(0,0,0,0.05)]">
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
