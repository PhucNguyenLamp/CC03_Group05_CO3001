import express from "express";
import userRoutes from "./user.routes.js";
import printorderRoutes from "./printorder.routes.js";
import pageorderRoutes from "./pageorder.routes.js";
import StudentRoutes from "./Student.routes.js";
import PrinterRoutes from "./printer.routes.js";

const router = express.Router();

router.use("/authentication", userRoutes);
router.use("/printorder", printorderRoutes);
router.use("/pageorder",pageorderRoutes);
router.use("/Student",StudentRoutes);
router.use("/printer",PrinterRoutes);

export default router;
