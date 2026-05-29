import { getLocale } from "next-intl/server";

const copy = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: May 28, 2026",
    intro:
      "Tech Solutions RDC uses only the information you choose to send us when you request a meeting or contact us by email.",
    sections: [
      {
        title: "Information we collect",
        body: "We may receive your name, company, email, phone number, service interest and any details you share about your project, attendance machines, reports or workflows.",
      },
      {
        title: "How we use it",
        body: "We use this information to reply to your request, prepare a demo, understand your business needs and provide software, automation, analytics or AI services.",
      },
      {
        title: "Third-party tools",
        body: "Scheduling and email communication may use tools such as Calendly, Google Calendar or Gmail. Those services process data under their own policies.",
      },
      {
        title: "Contact",
        body: "For privacy questions, contact sales@techsolutionsrdc.com.",
      },
    ],
  },
  fr: {
    title: "Politique de confidentialite",
    updated: "Derniere mise a jour : 28 mai 2026",
    intro:
      "Tech Solutions RDC utilise seulement les informations que vous choisissez de nous envoyer lorsque vous demandez un rendez-vous ou nous contactez par email.",
    sections: [
      {
        title: "Informations collectees",
        body: "Nous pouvons recevoir votre nom, entreprise, email, telephone, service souhaite et les details que vous partagez sur votre projet, machines de presence, rapports ou workflows.",
      },
      {
        title: "Utilisation",
        body: "Nous utilisons ces informations pour repondre a votre demande, preparer une demo, comprendre vos besoins et fournir des services logiciels, automatisation, analytics ou IA.",
      },
      {
        title: "Outils tiers",
        body: "La planification et les emails peuvent utiliser des outils comme Calendly, Google Calendar ou Gmail. Ces services traitent les donnees selon leurs propres politiques.",
      },
      {
        title: "Contact",
        body: "Pour toute question confidentialite, contactez sales@techsolutionsrdc.com.",
      },
    ],
  },
};

export default async function PrivacyPage() {
  const locale = await getLocale();
  const content = locale === "fr" ? copy.fr : copy.en;

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Tech Solutions RDC
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
          {content.title}
        </h1>
        <p className="mt-3 text-sm text-neutral-500">{content.updated}</p>
        <p className="mt-6 text-lg leading-8 text-neutral-700">
          {content.intro}
        </p>

        <div className="mt-10 space-y-6">
          {content.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <h2 className="text-xl font-semibold text-neutral-950">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-neutral-700">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
