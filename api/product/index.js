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
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove); // Falta   Esta ruta deberá ser solo para usuarios autenticados (mas adelante sabras como hacer esto)

module.exports = router;
