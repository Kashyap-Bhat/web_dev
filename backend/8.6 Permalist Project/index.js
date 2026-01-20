import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "kashyapbhat@2004",
  port: 5432,
});
db.connect();

let items = [
  { id: 1, title: "Buy milk" },
];

async function getItems() {
  const res = await db.query("SELECT * FROM items");
  items = res.rows;
}

app.get("/", async (req, res) => {
  await getItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO  items(title) VALUES ($1)", [item]);
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  const itemId = req.body.updatedItemId;
  const itemTitle = req.body.updatedItemTitle;
  await db.query("UPDATE items set title = $1 where id = $2", [itemTitle, itemId])
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
  const itemId = req.body.deleteItemId;
  await db.query("DELETE FROM items where id =$1", [itemId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
