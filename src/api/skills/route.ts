import { closeMongoDB, connectMongoDB } from "@/utils";
import { Skill } from "@/db/models";
import { ISkill } from "@/app/interfaces";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const skills: ISkill[] | null = await Skill.find();
  await closeMongoDB();

  return NextResponse.json(skills);
}
