"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PAYMENT_METHODS } from "@/lib/payments";
import { PaymentMethodLogo } from "./PaymentMethodLogo";

export function PaymentMethodsBlock() {
  const t = useTranslations("paymentMethods");

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">{t("title")}</h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
          {t("subtitle")}
        </p>
      </div>

      <div className="card p-5 md:p-8">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PAYMENT_METHODS.map((method) => (
            <li
              key={method.id}
              className="flex flex-col items-center justify-center gap-2 rounded-xl bg-grand-900/60 px-3 py-4 transition hover:bg-grand-900/90"
            >
              <PaymentMethodLogo id={method.id} />
              <span className="text-center text-xs font-medium text-gray-400">
                {t(`items.${method.id}`)}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-gray-500">{t("note")}</p>
        <div className="mt-4 text-center">
          <Link
            href="/deposit"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-grand-500/30 px-5 py-2.5 text-sm font-semibold text-grand-300 transition hover:border-grand-400 hover:text-white"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
