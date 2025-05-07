import "server-only";
import crypto from "node:crypto";

export default function convertToHash(target: string) {
  return crypto.createHash("sha256").update(target).digest("hex");
}
