import InfiniteLogos from "@/components/HeroPage/ClientsSlider";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

type Technology = {
  name: string;
  logo: string;
  alt: string;
};

const TECHNOLOGIES: Technology[] = [
  {
    name: "Node.js",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    alt: "Node.js logo",
  },
  {
    name: "Angular",
    logo: "https://cdn.simpleicons.org/angular/DD0031",
    alt: "Angular logo",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    alt: "React logo",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    alt: "Vue.js logo",
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python/3776AB",
    alt: "Python logo",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.simpleicons.org/kotlin/7F52FF",
    alt: "Kotlin logo",
  },
  {
    name: "Swift",
    logo: "https://cdn.simpleicons.org/swift/FA7343",
    alt: "Swift logo",
  },
  {
    name: "Go",
    logo: "https://cdn.simpleicons.org/go/00ADD8",
    alt: "Go logo",
  },
];

const TOOL_GROUPS = [
  {
    title: { en: "Frontend & apps", ar: "الواجهات والتطبيقات" },
    tools: [
      "React.js",
      "Vue.js",
      "Angular",
      "Flutter",
      "Android (Kotlin)",
      "iOS [Swift]",
    ],
  },
  {
    title: { en: "Backend & languages", ar: "الخلفية ولغات البرمجة" },
    tools: ["Node.js", "Python", "Typescript", "Javascript", "Go"],
  },
  {
    title: { en: "Cloud & infrastructure", ar: "السحابة والبنية التحتية" },
    tools: [
      "Amazon Web Services",
      "Google Cloud",
      "MS Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    title: { en: "Monitoring & intelligence", ar: "المراقبة والذكاء" },
    tools: [
      "Grafana",
      "Prometheus",
      "Sentry",
      "Artificial Intelligence",
      "Blockchain",
    ],
  },
];

export default async function TechStackSlider() {
  const t = await getTranslations("HomePage.techStack");
  const locale = await getLocale();
  const groupLocale = locale === "ar" ? "ar" : "en";

  return (
    <section className="w-full px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-center">
        <h2 className="mt-6 text-3xl font-semibold text-neutral-900 md:text-4xl">
          {t("title")}
        </h2>
        <InfiniteLogos speed={40}>
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="mx-10 flex flex-col items-center gap-3 text-neutral-900"
            >
              <div className="mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
                <Image
                  unoptimized
                  src={tech.logo}
                  width={40}
                  height={40}
                  alt={tech.alt}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-base font-semibold">{tech.name}</p>
            </div>
          ))}
        </InfiniteLogos>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl rounded-[28px] border border-black/5 bg-white p-6 shadow-xl sm:p-8 md:p-10">
        <div className="flex flex-col gap-6">
          <h3 className="text-left text-2xl font-semibold text-neutral-900">
            {t("languagesTitle")}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {TOOL_GROUPS.map((group) => (
              <section
                key={group.title.en}
                className="border-t border-neutral-200 pt-4"
              >
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  {group.title[groupLocale]}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="pt-4 text-left">
            <Link
              href="/services#services-blueprints"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3A63FF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2b50d0]"
            >
              {t("languagesCta")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
