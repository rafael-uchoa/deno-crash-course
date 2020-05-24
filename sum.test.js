import { assertEquals } from "./deps.js";
import sum from "./sum.js";

Deno.test("Testing sum", () => {
  assertEquals(sum(1, 2), 3);
});
