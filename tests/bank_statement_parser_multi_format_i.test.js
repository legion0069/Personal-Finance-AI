/**
 * Automated Unit Test Suite for Day 2: Bank Statement Parser & Multi-Format Ingestion Engine
 */
const assert = require('assert');
const { BankStatementParserMultiFormatI } = require('../src/features/bank_statement_parser_multi_format_i');
const { BankStatementParserMultiFormatIController } = require('../src/controllers/bank_statement_parser_multi_format_iController');
const { formatCurrency, validateFinancialRecord, normalizeDate } = require('../src/utils/bank_statement_parser_multi_format_iUtils');

console.log('🧪 Testing Day 2: Bank Statement Parser & Multi-Format Ingestion Engine...');

// Test 1: Feature Instantiation & Execution
(async () => {
  const instance = new BankStatementParserMultiFormatI();
  assert.strictEqual(instance.day, 2);
  const res = await instance.process({ items: [1, 2, 3] });
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.recordsProcessed, 3);
  console.log('  ✅ Feature processing verified');

  // Test 2: Controller Dispatcher
  const controller = new BankStatementParserMultiFormatIController();
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

  console.log('🎉 Day 2 test suite passed with 100% success!');
})();
