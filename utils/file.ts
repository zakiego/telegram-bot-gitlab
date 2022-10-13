import * as fs from "fs";

export const saveJson = (data: Record<string, unknown>, filename: string) => {
  const json = JSON.stringify(data, null, 2);
  const path = `./${filename}.json`;
  fs.writeFileSync(path, json);
};
