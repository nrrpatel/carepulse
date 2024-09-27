// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9279ec4250e856d06747bbaebcb6603c@o4508023382147072.ingest.us.sentry.io/4508023384834048",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
