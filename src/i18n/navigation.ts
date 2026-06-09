import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers. Use these instead of next/link and
// next/navigation so internal links keep the active locale prefix.
// External hrefs (https:, mailto:, tel:, wa.me) are passed through unchanged.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
