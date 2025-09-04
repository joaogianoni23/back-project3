import express from "express";
import FilmeController from "../controllers/filmeController.js";
import filmeController from "../controllers/filmeController.js";

const router = express.Router();

router.get("/", FilmeController.getAll);
router.get("/:id", filmeController.getById);
router.post("/", filmeController.create);
router.put("/:id", filmeController.update);
router.delete("/:id", filmeController.delete);

export default router