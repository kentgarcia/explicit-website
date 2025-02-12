import Menu from "@/components/Menu";
import getPostMetadata from "@/utils/getPostMetadata";
import SearchView from "@/components/SearchView";

export default function News() {
  const postMetadata = getPostMetadata('blogs');

  return (
    <main>
      <Menu />
      <h1>News</h1>
      <SearchView postMetadata={postMetadata} />
    </main>
  );
}