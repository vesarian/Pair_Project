const express = require('express');
const app = express()
const port = 3000
const router = require('./routers');
const users = require('./routers/user');
const diseases = require('./routers/disease');
const symptoms = require('./routers/symptom');

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use("/", router)
app.use("/users", users)
app.use("/diseases", diseases)
app.use("/symptoms", symptoms)


app.listen(port, () => console.log("Listening on port", port))