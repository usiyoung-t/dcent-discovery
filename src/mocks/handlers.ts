import { http, HttpResponse } from "msw";

export const handlers = [
  // GET 요청 예시
  http.get("/api/users", () => {
    return HttpResponse.json([
      { id: 1, name: "홍길동", email: "hong@example.com" },
      { id: 2, name: "김철수", email: "kim@example.com" },
    ]);
  }),

  // POST 요청 예시
  http.post("/api/users", async ({ request }) => {
    const newUser = (await request.json()) as { name: string; email: string };
    return HttpResponse.json({ id: 3, ...newUser }, { status: 201 });
  }),
];
