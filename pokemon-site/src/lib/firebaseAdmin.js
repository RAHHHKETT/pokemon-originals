import admin from "firebase-admin";
import fs from "fs";
import path from "path";

let serviceAccountPath = path.join(process.cwd(), "serviceAccountKey.json");
if (!fs.existsSync(serviceAccountPath)) {
  serviceAccountPath = path.join(process.cwd(), "..", "serviceAccountKey.json");
}

// Prevent re-initialization during hot reloads
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(
    fs.readFileSync(serviceAccountPath, "utf8")
  );

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
