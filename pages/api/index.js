const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appkjkLQHsjcoRPhN",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "Borrow",
  transform: (res) => {
    return res.fields;
  },
});

export default async (req, res) => {
  const readRes = await airtable.read();
  res.status(200).json(readRes);
};
