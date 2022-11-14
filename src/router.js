const {Router} = require("express");
const router = Router();

const controller = require("./controller");



router.get("/track", controller.getTrack);
router.get("/trackIdAll", controller.getTrackAllId);
router.post("/addTrack",controller.addTrack);
router.post("/trackCreateRecord",controller.addTrackRecord);
router.put("/updateTrack",controller.updateTrack);
router.delete("/deleteTrack",controller.deleteTrack);
router.get("/max-data", controller.maxTrack);
router.get("/trackRecord",controller.getTrackRecord);



module.exports = router;