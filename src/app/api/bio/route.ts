import { NextResponse } from "next/server";
import { closeMongoDB, connectMongoDB } from "@/db";
import { Biography } from "@/db/models";
import { IBiography } from "./interfaces";

export async function GET() {
  await connectMongoDB();
  const bioData: IBiography | null = await Biography.findOne({ title: "Bio" });
  await closeMongoDB();

  return NextResponse.json(bioData);
}
