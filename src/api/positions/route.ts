import { NextResponse } from "next/server";
import { closeMongoDB, connectMongoDB } from "@/utils";
import { IPosition } from "@/app/interfaces";
import { Position } from "@/db/models";

export async function GET() {
  await connectMongoDB();
  const positions: IPosition[] | null = await Position.find();
  await closeMongoDB();

  const sorted = positions.sort((a, b) => {
    const from = new Date(a.employmentPeriod.from);
    const to = new Date(b.employmentPeriod.from);
    return from < to ? 1 : -1;
  });

  return NextResponse.json(sorted);
}
