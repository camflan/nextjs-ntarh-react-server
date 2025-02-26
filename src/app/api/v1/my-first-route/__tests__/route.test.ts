import { test, expect } from "vitest";
import { testApiHandler } from "next-test-api-route-handler";

import { GET } from "../route";

test("test my route", async () => {
  testApiHandler({
    appHandler: {
      GET,
    },
    async test({ fetch }) {
      const result = await fetch({
        method: "GET",
      });

      expect(result).toStrictEqual({
        success: true,
      });
    },
  });
});
