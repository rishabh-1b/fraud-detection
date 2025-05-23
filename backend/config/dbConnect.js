const mongoose = require("mongoose");

async function dbConnect()
{
  await mongoose.connect(process.env.DATABASE_URL)
  .then(()=>console.log("Database connected Successfully"))
  .catch((error)=>
  {
    console.log(`Error occurred while connecting the database : ${error.message}`);
    process.exit(1);
  })
}

module.exports = dbConnect;