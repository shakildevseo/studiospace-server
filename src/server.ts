import app from "./app.js";
import { connectToMongoDb } from "./config/datrabase.js"

const PORT = process.env.PORT || 5050;



async function startServer() {

    try {
        await connectToMongoDb();

        app.listen(PORT, () => {
            console.log(`StudioSpace server running on port ${PORT}`);
        })
    }catch(err){
         console.error("Failed to start StudioSpace server:", err);
        process.exit(1);
    }


    
}



startServer()
