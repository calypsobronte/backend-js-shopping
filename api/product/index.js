/**
 * Product
 * @author: Lina Maria Montaño Ramirez <calypsobronte@calypsobronte.me>
 */

const { Router } = require('express');

const controller = require('./product.controller');

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);

module.exports = router;
