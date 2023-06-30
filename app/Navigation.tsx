"use client";

import { MainNavigation } from "@codegouvfr/react-dsfr/MainNavigation";
import { useSelectedLayoutSegment } from "next/navigation";

export function Navigation() {

	const segment = useSelectedLayoutSegment();

	return (
		<MainNavigation
			items={[
				{
					"text": "Acceuil",
					"linkProps": {
						"href": "/"
					},
					"isActive": segment === null
				},
				{
					"text": "Documentation",
					"linkProps": {
						"href": "/docs"
					}
				}
			]}
		/>
	);

}