import * as React from "react";
import NextLink from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import Wrapper from "@/components/wrapper";
import { Container } from "@mui/material";

export async function generateMetadata(
	{
		params,
	}: {
		params: { locale: string };
		//searchParams: { [key: string]: string | string[] | undefined }
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		title: "interact | Engage, Empower, Evolve – Make Every Interaction Count!",
		description: "Engage, Empower, Evolve – Make Every Interaction Count!",
	};
}

export default function Home({
	params,
}: {
	params: { locale: string };
	//searchParams: { [key: string]: string | string[] | undefined }
}) {
	return (
		<Wrapper params={params}>
			<Container>
				Login
			</Container>
		</Wrapper>
	);
}

/*
<Container maxWidth="lg">
			<Box
				sx={{
					my: 4,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
					Material UI - Next.js App Router example in TypeScript
				</Typography>
				<Link href="/about" color="secondary" component={NextLink}>
					Go to the about page
				</Link>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
*/
