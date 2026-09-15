import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/PageHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { OfficeMap } from "@/components/OfficeMap";
import { ContactButtons } from "@/components/ContactButtons";
import { OFFICE, TEAM_HERO_IMAGE, TEAM_MEMBERS } from "@/lib/about";
import { SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

const sectionKeys = ["origin", "association", "liveEra", "onlinePivot", "festivals", "today"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return buildPageMetadata({
    locale,
    path: "/about",
    title: t("title"),
    description: t("subtitle"),
    image: {
      url: `${SITE_URL}${TEAM_HERO_IMAGE.split("?")[0]}`,
      width: 1200,
      height: 675,
      alt: t("teamPhotoAlt"),
    },
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="mx-auto max-w-4xl px-4 pb-6">
        <img
          src={TEAM_HERO_IMAGE}
          alt={t("teamPhotoAlt")}
          width={1200}
          height={675}
          fetchPriority="high"
          decoding="async"
          className="w-full rounded-2xl object-cover shadow-xl shadow-black/40"
        />
        <p className="mt-4 text-center text-sm italic text-gray-500">{t("teamPhotoCaption")}</p>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-12 border-l-2 border-grand-gold pl-5 text-lg leading-relaxed text-gray-300">
          {t("intro")}
        </p>

        <div className="space-y-12">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h2 className="mb-4 text-2xl font-bold text-white">{t(`story.${key}.heading`)}</h2>
              {t.raw(`story.${key}.paragraphs`).map((paragraph: string) => (
                <p key={paragraph} className="mb-4 leading-relaxed text-gray-400">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">{t("teamTitle")}</h2>
        <p className="mb-10 text-center text-gray-400">{t("teamSubtitle")}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} id={member.id} image={member.image} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">{t("officeTitle")}</h2>
        <p className="mb-8 text-center text-gray-400">{t("officeSubtitle")}</p>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-grand-400">
              {t("legalAddress")}
            </h3>
            <p className="mb-1 font-semibold text-white">{OFFICE.legalName}</p>
            <p className="mb-3 font-mono text-xs text-grand-gold">CNPJ {OFFICE.cnpj}</p>
            <address className="not-italic text-sm leading-relaxed text-gray-400">
              {OFFICE.legal.street}
              <br />
              {OFFICE.legal.district}, {OFFICE.legal.city} — {OFFICE.legal.state}
              <br />
              CEP {OFFICE.legal.cep}, {OFFICE.legal.country}
            </address>
          </div>

          <div className="card p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-grand-400">
              {t("operationalAddress")}
            </h3>
            <p className="mb-3 text-sm text-gray-400">{t("operationalNote")}</p>
            <address className="not-italic text-sm leading-relaxed text-gray-400">
              {OFFICE.operational.street}
              <br />
              {OFFICE.operational.district}, {OFFICE.operational.city} — {OFFICE.operational.state}
              <br />
              CEP {OFFICE.operational.cep}, {OFFICE.operational.country}
            </address>
            <dl className="mt-4 space-y-1 text-sm text-gray-400">
              <div>
                <dt className="inline font-medium text-gray-300">{t("hours")}: </dt>
                <dd className="inline">{OFFICE.hours}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-gray-300">{t("phone")}: </dt>
                <dd className="inline">
                  <a href={`tel:${OFFICE.phone.replace(/\s/g, "")}`} className="text-grand-400 hover:underline">
                    {OFFICE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-medium text-gray-300">{t("email")}: </dt>
                <dd className="inline">
                  <a href={`mailto:${OFFICE.email}`} className="text-grand-400 hover:underline">
                    {OFFICE.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <OfficeMap title={t("mapTitle")} />

        <div className="mt-10 text-center">
          <ContactButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
