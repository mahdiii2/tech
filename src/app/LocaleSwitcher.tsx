"use client";

import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const router = useRouter();

  function switchLocale() {
    const newLocale = document.cookie.includes("locale=fr") ? "en" : "fr";

    // Store new locale in cookie
    document.cookie = `locale=${newLocale}; path=/;`;

    // Refresh page so next-intl loads new messages
    router.refresh();
  }

  return (
    <button
      onClick={switchLocale}
      style={{
        padding: "6px 12px",
        marginBottom: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Switch language
    </button>
  );
}
