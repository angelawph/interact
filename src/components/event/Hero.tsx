import * as React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Event } from "@prisma/client";

export default function Hero({
	event,
	params,
}: {
	event: Event;
	params: { locale: string };
}) {
	return (
		<Box
			component="section"
			sx={{
				p: 2,
				background: "url(/images/crowd.jpg) no-repeat center center",
				backgroundAttachment: 'fixed',
				backgroundSize: "cover",
				height: "25vh",
				width: "100%",
				position: "relative",
				color: "white",
			}}
		>
			<Container>
				<Box
					sx={{
						color: "white",
						position: "absolute",
						left: "50%",
						top: "50%",
						mr: "-50%",
						transform: "translate(-50%, -50%);",
					}}
				>
					<Typography variant="h4" color="inherit">
						{event.title}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
