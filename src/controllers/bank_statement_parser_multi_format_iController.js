/**
 * Personal-Finance-AI - Controller Handler for Day 2
 * Capability: Bank Statement Parser & Multi-Format Ingestion Engine
 */
const { BankStatementParserMultiFormatI } = require('../features/bank_statement_parser_multi_format_i');

class BankStatementParserMultiFormatIController {
  constructor(config = {}) {
    this.feature = new BankStatementParserMultiFormatI(config);
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

module.exports = { BankStatementParserMultiFormatIController };
