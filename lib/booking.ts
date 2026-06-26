export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "";

export const salesEmail = "sales@servicely.tech";

export function gmailComposeHref(to: string, subject = "", body = "") {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
  });

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function meetingEmailHref(slot: string) {
  const subject = `Schedule a meeting: ${slot}`;
  const body = `Hello Servicely,\n\nI would like to schedule a meeting for ${slot}.\n\nCompany:\nPhone:\nService needed:\n\nThank you.`;

  return gmailComposeHref(salesEmail, subject, body);
}
