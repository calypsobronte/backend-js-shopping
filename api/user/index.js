/**
 * Main application routes
 * @author: Lina Maria Montaño Ramirez <calypsobronte@calypsobronte.me>
 */

const { Router } = require('express');
const controller = require('./user.controller');

// New line
const auth = require('./../../auth/auth.service');


const router = new Router();

// New Line
router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', controller.create);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.delete('/:id', auth.hasRole('admin'), controller.remove);

module.exports = router;
