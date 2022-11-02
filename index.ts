const content = "HEY OH LET'S GO"

const headers = new Headers({
  'Content-Type': 'text/plain'
})

async function handleRequest (request) {
  return new Response(content, headers)
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})







