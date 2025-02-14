/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "ry1lMNI6coZygGfR2KLvwwtt",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
