/**
 * Personal-Finance-AI - Controller Handler for Day 8
 * Capability: Chat with Your Expenses Natural Language Query Agent
 */
const { ChatWithYourExpensesNaturalLang } = require('../features/chat_with_your_expenses_natural_lang');

class ChatWithYourExpensesNaturalLangController {
  constructor(config = {}) {
    this.feature = new ChatWithYourExpensesNaturalLang(config);
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

module.exports = { ChatWithYourExpensesNaturalLangController };
