// JavaScript because I'm not gonna do Type-Gymnastics

export async function GET() {
  let unix = Math.floor(Date.now() / 1000);
  let route =
    `https://brawlstars.inbox.supercell.com/data/en/news/content.json?cachebust=${unix}`;

  let request = await fetch(route);
  let response = await request.json();
  let firstEvent = response.entries.eventEntries[0];

  return new Response(JSON.stringify(firstEvent));
}
