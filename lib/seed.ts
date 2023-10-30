const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const client = global.prismadb || new PrismaClient();

async function main() {
  const movies = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../movies.json"), "utf8")
  );
  for (const movie of movies) {
    await client.movie.create({
      data: movie,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
    console.log("done");
  });
