"use client";

import { definePreview } from "next-sanity/preview";
// @ts-ignore
import { projectId, dataset } from "lib/sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
