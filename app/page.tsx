import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";

export const revalidate = 0;

export default async function Home() {
  const client = createClient();
  // Query the landing page by UID
  const page = await client.getSingle("homepage");
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
