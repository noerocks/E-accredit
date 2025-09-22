import { verifySession } from "../action/session";
import { LevelDTO } from "../dto/level";
import { prisma } from "../prisma";

export async function getLevels(): Promise<LevelDTO[] | null> {
  const session = await verifySession();
  if (!session) return null;
  const levels = await prisma.level.findMany();
  return levels.map((level) => ({
    id: level.id,
    rank: level.rank,
    label: level.label,
    phase: level.phase,
  }));
}
