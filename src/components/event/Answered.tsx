import * as React from "react";
import { Box, Typography, Button, Container, List } from "@mui/material";
import { Event, Question } from "@prisma/client";
import SingleQuestion from "@/components/event/SingleQuestion";
export default function Questions({
	event,
	questions,
	params,
}: {
	event: Event;
	questions: Question[];
	params: { locale: string };
}) {
	return (
		<>
			{questions.length ? (
				<Box
					sx={{
						maxHeight: "50vh",
						overflowY: "auto",
					}}
				>
					<List
						sx={{
							py: 2,
						}}
					>
						{questions.map((item: Question) => (
							<SingleQuestion
								event={event}
								key={item.id}
								questions={questions}
								question={item}
								params={params}
							/>
						))}
					</List>
				</Box>
			) : (
				<div>No Questions</div>
			)}
		</>
	);
}
