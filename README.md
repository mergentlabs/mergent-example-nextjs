# Mergent Example - Next.js

This is an example Next.js app to show how you can use Mergent with Next.js.

## Getting Started

1. Run the Next.js development server with `npm run dev`
2. Start ngrok to get a publicly accessible URL with `ngrok http 3000` ([ngrok + Mergent docs](https://docs.mergent.co/tasks/localhost-dev-and-webhooks))
3. Set your Mergent API Key and base URL from ngrok in `pages/api/tasks/send-email.ts`

Open [http://localhost:3000](http://localhost:3000) to run the example.

You can view the tasks in the [Mergent console](https://app.mergent.co/tasks).

Logs will be shown in the Next.js console.

## Learn More

To learn more about Mergent, take a look at the following resources:

- [Mergent JavaScript / TypeScript Library](https://github.com/mergentlabs/mergent-js)
- [Mergent Documentation](https://docs.mergent.co)
- [Mergent API Reference](http://api.mergent.co/docs)
