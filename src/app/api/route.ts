
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'


/**
 * Creating a new comment
 * @param request 
 * @returns 
 */
export async function POST(request: NextRequest) {
    const status: number = 200;
    let message: string = 'unprocessed';
    let outcome: number = 0; // 0: unprocessed, 1: no perms, 2: error, 3: normal completion
    let items: any[] = [];

    outcome = 1;
    message = 'no-perms';

    return NextResponse.json({ status, message, outcome, items })
}

/**
 * Fetches all favourites
 * @param request 
 * @returns 
 */
export async function GET(request: Request) {
    const status: number = 200;
    let message: string = 'hello';
    let outcome: number = 0; // 0: unprocessed, 1: no perms, 2: error, 3: normal completion
    let items: any[] = [];


    return NextResponse.json({ status, message, outcome, items })
}
