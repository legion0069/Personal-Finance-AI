/**
 * Automated Unit Test Suite for Day 5: Financial Cash Flow Forecaster & Runway Predictor
 */
const assert = require('assert');
const { FinancialCashFlowForecasterRunwa } = require('../src/features/financial_cash_flow_forecaster_runwa');
const { FinancialCashFlowForecasterRunwaController } = require('../src/controllers/financial_cash_flow_forecaster_runwaController');
const { formatCurrency, validateFinancialRecord, normalizeDate } = require('../src/utils/financial_cash_flow_forecaster_runwaUtils');

console.log('🧪 Testing Day 5: Financial Cash Flow Forecaster & Runway Predictor...');

// Test 1: Feature Instantiation & Execution
(async () => {
  const instance = new FinancialCashFlowForecasterRunwa();
  assert.strictEqual(instance.day, 5);
  const res = await instance.process({ items: [1, 2, 3] });
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.recordsProcessed, 3);
  console.log('  ✅ Feature processing verified');

  // Test 2: Controller Dispatcher
  const controller = new FinancialCashFlowForecasterRunwaController();
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

  console.log('🎉 Day 5 test suite passed with 100% success!');
})();
