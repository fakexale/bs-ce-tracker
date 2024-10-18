# bs-ce-tracker

just a simple svelte(kit) site to get all the infos provided by brawl stars
inbox api about the current community event

to run it, figure it out using instructions provided by the
[kit docs](https://kit.svelte.dev/)

## how work?

this program simply queries the inbox api into providing information about the
community event while its quite simple, you can find out how by reading
`src/routes/api/progress/+server`

if you have this project running as a dev server, you can also make a GET
request to `hostname:port/api/progress` and itll send only the important bits as
a JSON string.

## attributioning

original idea from [somerandostuff](https://github.com/somerandostuff), even
though i kinda helped figuring out how it works lol
