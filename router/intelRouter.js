const intelController = require('../controller/intelController');

const express = require('express');
const intelRouter = express.Router();

intelRouter.get('/test', intelController.testConnection);
intelRouter.post('/registerTeam', intelController.registerTeam);
intelRouter.post('/editTeam', intelController.editTeam);
intelRouter.post('/submitFirstRound', intelController.submitFirstRound);
intelRouter.post('/editFirstRoundSubmission', intelController.editFirstRoundSubmission);
intelRouter.post('/submitSecondRound', intelController.submitSecondRound);
intelRouter.post('/editSecondRoundSubmission', intelController.editSecondRoundSubmission);
intelRouter.post('/admin/intelSelectToSecondRound', intelController.intelSelectToSecondRound);
intelRouter.post('/admin/intelSelectToThirdRound', intelController.intelSelectToThirdRound);
intelRouter.get('/getDashBoard', intelController.getDashBoard);
intelRouter.get('/getAllSubmissions/:round([1-3])', intelController.getAllSubmissions);

module.exports = intelRouter;