export async function GET(request: Request) {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
  });
}
