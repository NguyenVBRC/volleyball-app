import { getStoryblokApi } from "@storyblok/react";
import styles from "./page.module.css";
import Link from "next/link";

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });
}

export default async function Home() {
  // const { data } = await fetchData();

  return (
    <div className={styles.page}>
      {/* <h1 className={styles.bannerContainer}>Story: {data.story.name}</h1> */}
      <div className={styles.homepage_links}>
        <Link id={styles.linkCards} href="/tournaments">
          All Tournaments
        </Link>
        <Link id={styles.linkCards} href="/leagues">
          All Leagues
        </Link>
      </div>
    </div>
  );
}
