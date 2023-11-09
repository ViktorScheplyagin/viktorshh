import { NextResponse } from "next/server";
import { closeMongoDB, connectMongoDB } from "@/db";
import { Education } from "@/db/models";
import { IEducationData } from "./interfaces";

export async function GET() {
  await connectMongoDB();
  const education: IEducationData | null = await Education.findOne();
  await closeMongoDB();

  return NextResponse.json(education);
}
