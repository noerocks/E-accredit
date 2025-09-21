"use server";

import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/drive"];

async function authorize() {
  const credentialsString = process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS;
  if (!credentialsString) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_CREDENTIALS environment variable is not defined."
    );
  }
  let credentials;
  try {
    credentials = JSON.parse(credentialsString);
  } catch (error) {
    throw new Error("Failed to parse GOOGLE_SERVICE_ACCOUNT_CREDENTIALS JSON.");
  }
  const jwtClient = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
  });

  await jwtClient.authorize();
  return jwtClient;
}

export async function createFolder(folderName: string, parentId?: string) {
  const authClient = await authorize();
  const drive = google.drive({ version: "v3", auth: authClient });

  const fileMetadata: any = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
    parents: ["1AzZ-9vHxTAni3UdUXZWMEn2b1nAKxPZy"],
  };
  if (parentId) {
    fileMetadata.parents = ["1AzZ-9vHxTAni3UdUXZWMEn2b1nAKxPZ"];
  }
  const folder = await drive.files.create({
    requestBody: fileMetadata,
    fields: "id, name",
  });
  return folder.data;
}
