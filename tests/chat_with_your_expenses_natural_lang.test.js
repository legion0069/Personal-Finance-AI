/**
 * Automated Unit Test Suite for Day 8: Chat with Your Expenses Natural Language Query Agent
 */
const assert = require('assert');
const { ChatWithYourExpensesNaturalLang } = require('../src/features/chat_with_your_expenses_natural_lang');
const { ChatWithYourExpensesNaturalLangController } = require('../src/controllers/chat_with_your_expenses_natural_langController');
const { formatCurrency, validateFinancialRecord, normalizeDate } = require('../src/utils/chat_with_your_expenses_natural_langUtils');

console.log('🧪 Testing Day 8: Chat with Your Expenses Natural Language Query Agent...');

// Test 1: Feature Instantiation & Execution
(async () => {
  const instance = new ChatWithYourExpensesNaturalLang();
  assert.strictEqual(instance.day, 8);
  const res = await instance.process({ items: [1, 2, 3] });
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.recordsProcessed, 3);
  console.log('  ✅ Feature processing verified');

  // Test 2: Controller Dispatcher
  const controller = new ChatWithYourExpensesNaturalLangController();
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

  console.log('🎉 Day 8 test suite passed with 100% success!');
})();
