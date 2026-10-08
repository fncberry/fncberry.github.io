import { existsSync } from "node:fs";
import path from "node:path";
import type { Shot } from "@/data/types";

// 빌드할 때 public/ 안에 실제로 있는 이미지만 남김.
// 스크린샷 자리를 데이터에 미리 적어둬도, 파일을 넣기 전까지는 화면에 안 나옴.
export function existingShots(shots: Shot[]): Shot[] {
  return shots.filter((shot) => existsSync(path.join(process.cwd(), "public", shot.src)));
}
