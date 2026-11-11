import express from "express";
import cors from "cors";
import "dotenv/config";
import studioRouter from "./modules/studios/studios.routes.js";
//initialize app
const app = express();
//middleware
app.use(cors({
    origin: "http://localhost:300",
    credentials: true
}));
app.use(express.json());
// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "StudioSpace API is running!"
    });
});
// Routes
app.use("/api/studios", studioRouter);
export default app;
//# sourceMappingURL=app.js.map