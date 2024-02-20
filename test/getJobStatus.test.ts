import Civitai from "../src/Civitai";
import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

describe("Get Job Status by Token Functionality", () => {
  let civitai: Civitai;
  let jobId: string = "7b5ed968-1887-4ce2-8504-235383b53f6a"; // Use a real or mocked jobId
  let jokenToken: string =
    "W3siVGVtcGxhdGVUeXBlIjoiQ2l2aXRhaS5PcmNoZXN0cmF0aW9uLkFwaS5Db250cm9sbGVycy52MS5Db25zdW1lci5Kb2JzLlRlbXBsYXRlcy5UZXh0VG9JbWFnZUpvYlRlbXBsYXRlIiwiSm9icyI6eyIzZjZmZTZjZC02ZWQ1LTQ5ZjItOWU2Yi0yNDcxYTIxYzg4ZmYiOiI2MDY1NjRCMkU2NzI4MkI0OUU1RDBEMjVEOTg5QkIxMjEzRDFDNzY2RDRCRDI1MzMzRUMxRUVEQTI1NzJBQzUxIn19XQ==";

  beforeAll(() => {
    civitai = new Civitai({
      auth: process.env.CIVITAI_TOKEN || "",
    });
  });

  test("successfully fetches job status", async () => {
    const response = await civitai.job.get(jokenToken);
    console.log("Response:", JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
  });
});