import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { materials } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type MaterialPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return materials.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: MaterialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);
  if (!material) return {};
  return createMetadata({
    title: `${material.title} | Quran Academy Materials`,
    description: material.description,
    path: `/materials/${material.slug}`
  });
}

export default async function MaterialDetailPage({ params }: MaterialPageProps) {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);
  if (!material) notFound();

  return (
    <>
      <PageHero title={material.title} subtitle={material.description} image="/images/home-quran.jpg" />
      <section className="container-page py-16 sm:py-20">
        <article className="mx-auto max-w-3xl rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">{material.level}</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Material Overview</h2>
          <p className="mt-5 leading-8 text-[var(--ink-muted)]">{material.description}</p>
          <div className="mt-8 rounded-[1.25rem] bg-[var(--surface-soft)] p-5 text-[var(--emerald)]">
            This frontend demo reserves the material route and SEO structure. Add real PDF files under public/materials when the academy content is finalized.
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/registration">Study With a Teacher</ButtonLink>
            <ButtonLink href="/materials" variant="secondary">All Materials</ButtonLink>
          </div>
        </article>
      </section>
    </>
  );
}
