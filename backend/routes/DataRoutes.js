const express = require("express");
const router = express.Router();
const {
    createBiodata,
    createSkill,
    createProject,
    createAdmin,
} = require("../controllers/dataController"); // Ensure this path is correct

router.post("/biodata", createBiodata);
router.post("/skill", createSkill);
router.post("/project", createProject);
router.post("/admin", createAdmin);

module.exports = router;
