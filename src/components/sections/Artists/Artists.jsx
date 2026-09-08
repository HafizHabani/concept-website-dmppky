import { artists } from "../../../data/artists";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import ArtistCard from "./ArtistCard";

function Artists() {
  const tallArtist = artists.find((artist) => artist.size === "tall");
  const wideArtists = artists.filter((artist) => artist.size !== "tall");

  return (
    <section id="artists" className="bg-surface py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Lineup"
          title="Meet the artists"
          description="A small, carefully picked lineup spanning three very different sounds."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {tallArtist && <ArtistCard artist={tallArtist} />}
          <div className="flex flex-col gap-4">
            {wideArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Artists;
