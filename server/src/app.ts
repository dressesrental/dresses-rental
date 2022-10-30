import { mongoDBConnection,  createBAsicAppWithExpress} from "@APIConfiguration"
import { Application } from "express"


const App = (): void => {
    const app: Application = createBAsicAppWithExpress()
    mongoDBConnection()
}

export default App




