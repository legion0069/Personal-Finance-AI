/**
 * Personal-Finance-AI - Helper Utilities for Day 2
 * Focus: Bank Statement Parser & Multi-Format Ingestion Engine
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
