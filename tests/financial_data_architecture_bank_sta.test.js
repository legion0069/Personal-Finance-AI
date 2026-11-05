/**
 * Automated Unit Test Suite for Day 1: Financial Data Architecture, Bank Statement Models & Transaction Schemas
 */
const assert = require('assert');
const { FinancialDataArchitectureBankSta } = require('../src/features/financial_data_architecture_bank_sta');
const { FinancialDataArchitectureBankStaController } = require('../src/controllers/financial_data_architecture_bank_staController');
const { formatCurrency, validateFinancialRecord, normalizeDate } = require('../src/utils/financial_data_architecture_bank_staUtils');

console.log('🧪 Testing Day 1: Financial Data Architecture, Bank Statement Models & Transaction Schemas...');

// Test 1: Feature Instantiation & Execution
(async () => {
  const instance = new FinancialDataArchitectureBankSta();
  assert.strictEqual(instance.day, 1);
  const res = await instance.process({ items: [1, 2, 3] });
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.recordsProcessed, 3);
  console.log('  ✅ Feature processing verified');

  // Test 2: Controller Dispatcher
  const controller = new FinancialDataArchitectureBankStaController();
  const ctrlRes = await controller.handleRequest({ body: { items: [100] } });
  assert.strictEqual(ctrlRes.statusCode, 200);
  assert.strictEqual(ctrlRes.body.success, true);
  console.log('  ✅ Controller routing verified');

  // Test 3: Utilities Validation
  assert.ok(formatCurrency(250).includes('250'));
  assert.strictEqual(validateFinancialRecord({ id: 'tx-1' }), true);
  assert.strictEqual(validateFinancialRecord(null), false);
  assert.ok(normalizeDate('2026-11-05'));
  console.log('  ✅ Utility functions verified');

  console.log('🎉 Day 1 test suite passed with 100% success!');
})();
