/**
 * Personal-Finance-AI - Controller Handler for Day 6
 * Capability: Smart Investment Suggestions & Savings Rate Optimizer
 */
const { SmartInvestmentSuggestionsSavings } = require('../features/smart_investment_suggestions_savings');

class SmartInvestmentSuggestionsSavingsController {
  constructor(config = {}) {
    this.feature = new SmartInvestmentSuggestionsSavings(config);
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

module.exports = { SmartInvestmentSuggestionsSavingsController };
