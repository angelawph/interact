import * as React from "react";
import NextLink from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import prisma from "@/lib/prisma";
import Wrapper from "@/components/wrapper";
import { Container, Box, Typography } from "@mui/material";
import Hero from "@/components/event/Hero";
import Questions from "@/components/event/Questions";
import QuestionForm from "@/components/event/QuestionForm";
import { Question } from "@prisma/client";

async function getEventDetails(eventCode: string) {
	return await prisma.event.findFirst({
		include: {
			questions: true,
		},
		where: {
			code: eventCode,
		},
	});
}

async function getEventQuestions(eventCode: string) {
	let questions: Question[] = [];
	const valid_event = await prisma.event.findFirst({
		where: {
			code: eventCode,
		},
	});
	if (valid_event) {
		questions = await prisma.question.findMany({
			where: {
				eventId: valid_event.id,
			},
			orderBy: [
				{
					answered: "asc",
				},
				{
					votes: "desc",
				},
				{
					created: "asc",
				},
			],
		});
	}
	return questions;
}

export async function generateMetadata(
	{
		params,
	}: {
		params: { locale: string; eventid: string };
		//searchParams: { [key: string]: string | string[] | undefined }
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	const eventData = getEventDetails(params.eventid);
	const [event] = await Promise.all([eventData]);

	return {
		title: event.title,
		description: "Engage, Empower, Evolve – Make Every Interaction Count!",
	};
}

export default async function Page({
	params,
}: {
	params: { locale: string; eventid: string };
	//searchParams: { [key: string]: string | string[] | undefined }
}) {
	const eventData = getEventDetails(params.eventid);
	const eventQuestionsData = getEventQuestions(params.eventid);
	const [event, questions] = await Promise.all([eventData, eventQuestionsData]);
	return (
		<Wrapper params={params}>
			<Box
				component="section"
				sx={{
					p: 2,
					background: "url(/images/crowd.jpg) no-repeat center center",
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
					height: "100vh",
					width: "100%",
					overflow: 'auto',
					position: "relative",
				}}
			>
				<Container sx={{
					backgroundColor: 'white',
					mt: 4,
					opacity: '0.85',
					py: 4,
				}}>
					<Typography variant="h4" color="inherit">
						{event.title}
					</Typography>

					<Questions event={event} questions={questions} params={params} />
					<QuestionForm event={event} params={params} />
				</Container>
			</Box>
		</Wrapper>
	);
}

/*
<Box
						sx={{
							color: "white",
							position: "absolute",
							left: "50%",
							top: "10%",
							mr: "-50%",
							transform: "translate(-50%, -50%);",
						}}
					></Box>
<Hero params={params} event={event} />
			<Container>
				
				
			</Container>
*/
