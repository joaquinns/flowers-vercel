import { GridSearchResults } from "../ui/components/grid-results";
import { SearchBar } from "../ui/components/search-bar";
import { SubHero } from "../ui/components/Subhero";

export default async function Hombres({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const { q } = params;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl py-8 px-4 xl:px-0 text-slate-900">
        <SearchBar />
      </div>
      <SubHero
        altImage="Damas hero image alt"
        imgURL="/whisky.jpg"
        title="Regalos para Caballeros"
      />
      <section className="max-w-6xl px-4 xl:px-0 py-8 mx-auto">
        <GridSearchResults query={q} man={true} />
      </section>
    </div>
  );
}
