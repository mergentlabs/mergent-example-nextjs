import type { NextApiRequest, NextApiResponse } from "next";
import Mergent from "mergent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // This example uses the presence of the `x-mergent-task` header to
    // determine whether or not the request came from Mergent. If it did, we
    // perform the task; if it did not, we assume it came from the frontend, and
    // create the task.
    const taskID = req.headers["x-mergent-task"] as string;
    taskID ? await performTask(taskID, req.body) : await createTask(req.body);

    // Return a 200 to indicate success.
    res.status(200).send("");
  } catch (err) {
    // Return a 500 to indicate failure with the details of the error, which can
    // be viewed in the Mergent console.
    res.status(500).json({ error: err });
  }
}

async function createTask(body: string) {
  // The API key for your Mergent project. This can be retreived from the
  // Mergent console at https://app.mergent.co/project/settings.
  const apiKey = "...";

  // The base URL for this Next.js app. For example, with Vercel, this would
  // be `https://yourapp.vercel.app`; for localhost development using ngrok,
  // this would be `https://yourapp.ngrok.io`.
  const baseURL = "...";

  // Create the Mergent task
  const mergent = new Mergent(apiKey);
  const task = await mergent.tasks.create({
    request: {
      url: `${baseURL}/api/tasks/send-email`, // The URL for this endpoint
      body,
    },
    delay: "5s",
  });

  console.log(`enqueued task ${task.id}...`);
}

async function performTask(id: string, body: string) {
  console.log(`performing task ${id} with body ${body}...`);

  // Simulate an operation lasting 3 seconds (note: ngrok has a 5 second limt).
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Comment this out to simulate an error.
  // throw "something went wrong";

  console.log(`done performing task ${id}.`);
}
