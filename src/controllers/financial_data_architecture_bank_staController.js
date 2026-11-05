/**
 * Personal-Finance-AI - Controller Handler for Day 1
 * Capability: Financial Data Architecture, Bank Statement Models & Transaction Schemas
 */
const { FinancialDataArchitectureBankSta } = require('../features/financial_data_architecture_bank_sta');

class FinancialDataArchitectureBankStaController {
  constructor(config = {}) {
    this.feature = new FinancialDataArchitectureBankSta(config);
  }

  async handleRequest(req = {}) {
    try {
      const payload = req.body || req.payload || req;
      const result = await this.feature.process(payload);
      return { statusCode: 200, body: result };
    } catch (err) {
      return { statusCode: 500, error: err.message || 'Controller error' };
    }
  }
}

module.exports = { FinancialDataArchitectureBankStaController };
