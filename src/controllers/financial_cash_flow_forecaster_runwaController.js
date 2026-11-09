/**
 * Personal-Finance-AI - Controller Handler for Day 5
 * Capability: Financial Cash Flow Forecaster & Runway Predictor
 */
const { FinancialCashFlowForecasterRunwa } = require('../features/financial_cash_flow_forecaster_runwa');

class FinancialCashFlowForecasterRunwaController {
  constructor(config = {}) {
    this.feature = new FinancialCashFlowForecasterRunwa(config);
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

module.exports = { FinancialCashFlowForecasterRunwaController };
