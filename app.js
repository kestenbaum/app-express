const express = require('express')
const app = express()
const port = 3000

const Logger = (req, res, next) => {
		console.log("port")
		next()
}
app.use(Logger)

app.get('/', (req, res) => {
		res.send('Hello World!')
})
app.get("/about", (req, res) => {
		res.send('About Page')
})
app.get("/about/:username", (req, res) => {
		res.json({
				message: `Hello World! + ${req.params.username}`,
				query: req.query
		})
})
app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
})