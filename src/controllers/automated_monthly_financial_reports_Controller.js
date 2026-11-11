/**
 * Personal-Finance-AI - Controller Handler for Day 7
 * Capability: Automated Monthly Financial Reports Generator
 */
const { AutomatedMonthlyFinancialReports_ } = require('../features/automated_monthly_financial_reports_');

class AutomatedMonthlyFinancialReports_Controller {
  constructor(config = {}) {
    this.feature = new AutomatedMonthlyFinancialReports_(config);
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

module.exports = { AutomatedMonthlyFinancialReports_Controller };
