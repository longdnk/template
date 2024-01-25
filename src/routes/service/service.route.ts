import { Router } from "express";
import { fetchController } from "./service.controller";

export const router = Router();

router.get('/', fetchController);