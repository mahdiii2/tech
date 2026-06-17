import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/Industries/Reveal";
import { buildPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...buildPageMetadata("privacy", locale),
    robots: { index: true, follow: true },
  };
}

const copy = {
  en: {
    eyebrow: "Servicely",
    title: "Privacy Policy",
    updated: "Last updated: June 7, 2026",
    intro:
      "Servicely uses only the information you choose to send us when you contact us about a project.",
    sections: [
      {
        title: "Information we collect",
        body: "We may receive your name, business name, country, city, industry, email, WhatsApp number, website or social media link, service interest, budget range, timeline and any project details you share.",
      },
      {
        title: "How we use it",
        body: "We use this information to reply to your request, understand your business needs, prepare recommendations, and provide AI, automation, website, app, dashboard, support or hosting services.",
      },
      {
        title: "Third-party tools",
        body: "Email, messaging, scheduling, hosting or analytics tools may process information under their own policies when they are used for communication or project delivery.",
      },
      {
        title: "Contact",
        body: "For privacy questions, contact hello@servicely.digital.",
      },
    ],
  },
  ar: {
    eyebrow: "Servicely",
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: 7 يونيو 2026",
    intro:
      "تستخدم Servicely فقط المعلومات التي تختار إرسالها لنا عند التواصل معنا بخصوص مشروع.",
    sections: [
      {
        title: "المعلومات التي نجمعها",
        body: "قد نستقبل اسمك، اسم الشركة، الدولة، المدينة، القطاع، البريد الإلكتروني، رقم واتساب، رابط الموقع أو الحساب الاجتماعي، الخدمة المطلوبة، نطاق الميزانية، الجدول الزمني، وأي تفاصيل تشاركها عن المشروع.",
      },
      {
        title: "كيف نستخدمها",
        body: "نستخدم هذه المعلومات للرد على طلبك، فهم احتياجات عملك، إعداد توصيات، وتقديم خدمات الذكاء الاصطناعي، التنفيذ التلقائي، المواقع، التطبيقات، لوحات التحكم، الدعم أو الاستضافة.",
      },
      {
        title: "أدوات خارجية",
        body: "قد تعالج أدوات البريد الإلكتروني أو الرسائل أو الجدولة أو الاستضافة أو التحليلات بعض المعلومات وفق سياساتها الخاصة عند استخدامها للتواصل أو تنفيذ المشروع.",
      },
      {
        title: "التواصل",
        body: "لأسئلة الخصوصية، تواصل عبر hello@servicely.digital.",
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
