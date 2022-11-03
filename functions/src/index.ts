import * as functions from 'firebase-functions'
import { scrapeClasses } from './scraper/classes'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//

export const classes = functions.https.onRequest(async (_, response) => {
  try {
    const specs = await scrapeClasses()
    response.set('Access-Control-Allow-Origin', '*')
    response.set('Access-Control-Allow-Headers', 'Authorization, Content-Type')
    response.send(specs)
  } catch (e) {
    console.error(e)
    response.sendStatus(500)
  }
})
