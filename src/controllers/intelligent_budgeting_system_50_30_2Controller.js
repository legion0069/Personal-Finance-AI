/**
 * Personal-Finance-AI - Controller Handler for Day 4
 * Capability: Intelligent Budgeting System & 50/30/20 Rule Allocator
 */
const { IntelligentBudgetingSystem50302 } = require('../features/intelligent_budgeting_system_50_30_2');

class IntelligentBudgetingSystem50302Controller {
  constructor(config = {}) {
    this.feature = new IntelligentBudgetingSystem50302(config);
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

module.exports = { IntelligentBudgetingSystem50302Controller };
