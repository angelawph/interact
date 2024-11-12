import * as React from "react";
import { Box, Typography, Button, Container, List } from "@mui/material";
import { Event, Question } from "@prisma/client";
import SingleQuestion from "@/components/event/SingleQuestion";
import Alert from '@mui/material/Alert';
export default function Questions({
	event,
	questions,
	params,
}: {
	event: Event | null;
	questions: Question[];
	params: { locale: string, eventid: string };
}) {
	return (
		<>
			{questions.length ? (
				<Box
					sx={{
						
						mb: 2,
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
                <Alert severity="info" variant="outlined">No questions, Be the first to ask a question.</Alert>
			)}
		</>
	);
}
