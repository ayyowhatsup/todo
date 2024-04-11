import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let initVal = { todos: [] };
try {
    const content = fs.readFileSync(path.join(__dirname, "./../db.json"));
    const old = JSON.parse(content);
    initVal = old
} catch(e){}

const db = new Low(new JSONFile("db.json"), initVal);

export default db;
