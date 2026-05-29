import InfiniteLogos from "@/components/HeroPage/ClientsSlider";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Technology = {
  name: string;
  logo: string;
  alt: string;
};

const TECHNOLOGIES: Technology[] = [
  {
    name: ".NET",
    logo: "https://cdn.simpleicons.org/dotnet/512BD4",
    alt: ".NET logo",
  },
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

const LANGUAGES = [
  ".NET",
  "Amazon Web Services",
  "Android (Kotlin)",
  "Android TV",
  "Angular",
  "Artificial Intelligence",
  "Blockchain",
  "CircleCI",
  "Docker",
  "Flutter",
  "Google Cloud",
  "Grafana",
  "iOS [Swift]",
  "Javascript",
  "Kibana",
  "Kubernetes",
  "LG TV (webOS)",
  "MAVLink",
  "MS Azure",
  "New Relic",
  "Node.js",
  "Prometheus",
  "Python",
  "React.js",
  "Ruby On Rails",
  "Samsung TV (Tizen)",
  "Sentry",
  "Terraform",
  "Typescript",
  "Vue.js",
  "Zabbix",
].sort((a, b) => a.localeCompare(b));

export default async function TechStackSlider() {
  const t = await getTranslations("HomePage.techStack");

  return (
    <section className="w-full px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-center">
        <p className="mt-6 text-3xl font-semibold text-neutral-900 md:text-4xl">
          {t("title")}
        </p>
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

      <div className="mx-auto mt-10 w-full max-w-5xl rounded-[32px] border border-black/5 bg-white p-6 shadow-xl sm:p-8 md:p-12">
        <div className="flex flex-col gap-6">
          <p className="text-left text-2xl font-semibold text-neutral-900">
            {t("languagesTitle")}
          </p>
          <div className="grid grid-cols-2 gap-y-3 text-left text-sm font-semibold text-neutral-700 sm:grid-cols-3 md:text-base">
            {LANGUAGES.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
          <div className="pt-4 text-left">
            <Link
              href="/services"
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
