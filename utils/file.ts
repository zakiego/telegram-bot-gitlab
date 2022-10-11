import * as fs from "fs";

export const saveJson = (data: Record<string, unknown>) => {
  const json = JSON.stringify(data, null, 2);
  const path = "./data.json";
  fs.writeFileSync(path, json);
};
