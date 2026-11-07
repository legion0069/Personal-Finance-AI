/**
 * Personal-Finance-AI - Controller Handler for Day 3
 * Capability: AI Spending Analysis & Merchant Categorization Engine
 */
const { AiSpendingAnalysisMerchantCatego } = require('../features/ai_spending_analysis_merchant_catego');

class AiSpendingAnalysisMerchantCategoController {
  constructor(config = {}) {
    this.feature = new AiSpendingAnalysisMerchantCatego(config);
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

module.exports = { AiSpendingAnalysisMerchantCategoController };
