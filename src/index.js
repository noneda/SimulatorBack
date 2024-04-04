import app from './app'
import './database'

import {getConfig} from './config'

const conf = getConfig()

const port = conf.conection.PORT;

app.listen(
    port,
    () => {
        console.log(`Server online, http://localhost:${port}`)
    }
)
