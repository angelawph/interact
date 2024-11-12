import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import Wrapper from "@/components/wrapper";
import prisma from "@/lib/prisma";

import Hero from "@/components/home/Hero";
import Events from "@/components/home/Events";

async function getEvents() {
	return await prisma.event.findMany({
		include: {
			questions: true,
		},
		orderBy: {
			created: "desc"
		}
	});
}

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

export default async function Page({
	params,
}: {
	params: { locale: string };
	//searchParams: { [key: string]: string | string[] | undefined }
}) {
	const eventsData = getEvents();
	const [events] = await Promise.all([eventsData]);

	return (
        <Wrapper params={params}>
            <Hero />
			<Events events={events} params={params} />
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
