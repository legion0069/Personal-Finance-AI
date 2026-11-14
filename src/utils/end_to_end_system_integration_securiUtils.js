/**
 * Personal-Finance-AI - Helper Utilities for Day 10
 * Focus: End-to-End System Integration, Security Audit & v1.0.0 Release Packaging
 */

function formatCurrency(amount, currency = 'USD') {
  const num = Number(amount) || 0;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(num);
}

function validateFinancialRecord(record = {}) {
  if (!record || typeof record !== 'object') return false;
  return Boolean(record.id || record.amount !== undefined || record.date);
}

function normalizeDate(dateInput) {
  const d = new Date(dateInput || Date.now());
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

module.exports = { formatCurrency, validateFinancialRecord, normalizeDate };
