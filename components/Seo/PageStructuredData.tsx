import {
  buildPageStructuredData,
  type SeoPageKey,
} from "@/lib/site";

type Props = {
  page: SeoPageKey;
  locale: string;
};

export function PageStructuredData({ page, locale }: Props) {
  const data = buildPageStructuredData(page, locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
