import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x652bCedbd29B58c5091b48A63BfCC3696485EE2D",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Beautiful Face",
        description: "This NFT will give you access to tapatio DAO 🇲🇽!",
        image: readFileSync("scripts/assets/tapatio_face.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()