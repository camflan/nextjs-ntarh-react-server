import { env } from "../../../../constants/env";

export async function GET() {
  return Response.json({
    success: true,
    data: {
      env: env.ENV,
    },
  });
}
