const express = require('express')
const app = express()

app.use('/', express.static('public'))

app.listen(8080, function() {
	console.log('server running at http://127.0.0.1:8080')
})
