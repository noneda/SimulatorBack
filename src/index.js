import app from './app.js'
import './database/index.js'

import {getConfig} from './config.js'

const conf = getConfig()

const port = conf.conection.PORT;

app.listen(
    port,
    () => {
        console.log(`Server online, http://localhost:${port}`)
    }
)
