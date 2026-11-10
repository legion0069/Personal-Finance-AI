/**
 * Automated Unit Test Suite for Day 6: Smart Investment Suggestions & Savings Rate Optimizer
 */
const assert = require('assert');
const { SmartInvestmentSuggestionsSavings } = require('../src/features/smart_investment_suggestions_savings');
const { SmartInvestmentSuggestionsSavingsController } = require('../src/controllers/smart_investment_suggestions_savingsController');
const { formatCurrency, validateFinancialRecord, normalizeDate } = require('../src/utils/smart_investment_suggestions_savingsUtils');

console.log('🧪 Testing Day 6: Smart Investment Suggestions & Savings Rate Optimizer...');

// Test 1: Feature Instantiation & Execution
(async () => {
  const instance = new SmartInvestmentSuggestionsSavings();
  assert.strictEqual(instance.day, 6);
  const res = await instance.process({ items: [1, 2, 3] });
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.recordsProcessed, 3);
  console.log('  ✅ Feature processing verified');

  // Test 2: Controller Dispatcher
  const controller = new SmartInvestmentSuggestionsSavingsController();
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

  console.log('🎉 Day 6 test suite passed with 100% success!');
})();
