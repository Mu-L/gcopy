import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/lib/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }));
}

export default function UserLayout({
  params: { locale },
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-auto px-4">
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
