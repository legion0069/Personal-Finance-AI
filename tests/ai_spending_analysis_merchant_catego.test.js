/**
 * Automated Unit Test Suite for Day 3: AI Spending Analysis & Merchant Categorization Engine
 */
const assert = require('assert');
const { AiSpendingAnalysisMerchantCatego } = require('../src/features/ai_spending_analysis_merchant_catego');
const { AiSpendingAnalysisMerchantCategoController } = require('../src/controllers/ai_spending_analysis_merchant_categoController');
const { formatCurrency, validateFinancialRecord, normalizeDate } = require('../src/utils/ai_spending_analysis_merchant_categoUtils');

console.log('🧪 Testing Day 3: AI Spending Analysis & Merchant Categorization Engine...');

// Test 1: Feature Instantiation & Execution
(async () => {
  const instance = new AiSpendingAnalysisMerchantCatego();
  assert.strictEqual(instance.day, 3);
  const res = await instance.process({ items: [1, 2, 3] });
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.recordsProcessed, 3);
  console.log('  ✅ Feature processing verified');

  // Test 2: Controller Dispatcher
  const controller = new AiSpendingAnalysisMerchantCategoController();
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

  console.log('🎉 Day 3 test suite passed with 100% success!');
})();
