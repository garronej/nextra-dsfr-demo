export { default } from "@codegouvfr/nextra-theme-dsfr/_document";

import type Link from "next/link";
import "@codegouvfr/react-dsfr/next-pagesdir"

declare module "@codegouvfr/react-dsfr/next-pagesdir" {
    interface RegisterLink {
        Link: typeof Link;
    }
}