/**
 * Automated Unit Test Suite for Day 4: Intelligent Budgeting System & 50/30/20 Rule Allocator
 */
const assert = require('assert');
const { IntelligentBudgetingSystem50302 } = require('../src/features/intelligent_budgeting_system_50_30_2');
const { IntelligentBudgetingSystem50302Controller } = require('../src/controllers/intelligent_budgeting_system_50_30_2Controller');
const { formatCurrency, validateFinancialRecord, normalizeDate } = require('../src/utils/intelligent_budgeting_system_50_30_2Utils');

console.log('🧪 Testing Day 4: Intelligent Budgeting System & 50/30/20 Rule Allocator...');

// Test 1: Feature Instantiation & Execution
(async () => {
  const instance = new IntelligentBudgetingSystem50302();
  assert.strictEqual(instance.day, 4);
  const res = await instance.process({ items: [1, 2, 3] });
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.recordsProcessed, 3);
  console.log('  ✅ Feature processing verified');

  // Test 2: Controller Dispatcher
  const controller = new IntelligentBudgetingSystem50302Controller();
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

  console.log('🎉 Day 4 test suite passed with 100% success!');
})();
