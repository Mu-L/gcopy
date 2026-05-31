import { locales } from "@/lib/i18n";
import Navbar from "@/components/navbar";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }));
}
import SyncClipboard from "@/components/sync-clipboard";
import Notice from "@/components/notice";
import Footer from "@/components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <div className="min-h-screen flex flex-col items-center justify-between mx-auto  max-w-5xl">
      <header className="p-6 w-full">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
        </NextIntlClientProvider>
      </header>
      <main className="flex-1 p-6  w-full">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SyncClipboard />
        </NextIntlClientProvider>
        <Notice />
      </main>
      <Footer />
    </div>
  );
}
