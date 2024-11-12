//"use client";
import * as React from "react";

import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	Menu,
	MenuItem,
} from "@mui/material";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

import Header from "@/components/wrapper/Header";


const drawerWidth = 240;

/**
 * Wraps the page with the common elements
 * @param param0
 * @returns
 */
export function Wrapper({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<Box component="main">
            <Header />
			{children}
		</Box>
	);
}

export default Wrapper;
