import { userRouter } from "../UserObjects.js";
const { router, controller } = userRouter;

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
