import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";

import { schemaTypes } from "./schemas";
import { getDefaultDocumentNode } from "./structure";
import { myTheme } from "./theme";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  icon: Logo,
  logo: Logo,
  subtitle: "Login to manage the Blog",
  title: "Creator Space",
  name: "Creator_Space",
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});