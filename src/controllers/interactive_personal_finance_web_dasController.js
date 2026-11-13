/**
 * Personal-Finance-AI - Controller Handler for Day 9
 * Capability: Interactive Personal Finance Web Dashboard & Analytics UI
 */
const { InteractivePersonalFinanceWebDas } = require('../features/interactive_personal_finance_web_das');

class InteractivePersonalFinanceWebDasController {
  constructor(config = {}) {
    this.feature = new InteractivePersonalFinanceWebDas(config);
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

module.exports = { InteractivePersonalFinanceWebDasController };
