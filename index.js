const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.listen(process.env.port || 8000)
