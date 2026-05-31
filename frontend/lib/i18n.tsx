"use client";

import { NextIntlClientProvider } from "next-intl";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

const messagesMap: Record<string, Record<string, any>> = { en, zh };
const LocaleContext = createContext<string>("en");

export function useLocale() {
  return useContext(LocaleContext);
}

export function detectLocale(): string {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("zh")) return "zh";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    const detected = detectLocale();
    setLocale(detected);
    document.documentElement.lang = detected === "zh" ? "zh-CN" : "en";
  }, []);

  const messages = messagesMap[locale];

  return (
    <LocaleContext.Provider value={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
