# 💰 Personal Finance AI

> **An autonomous, intelligent personal financial operating system powered by GitStreak AI.**
> Upload bank statements, uncover spending habits, forecast cash runways, optimize investments, and chat with your expenses in plain English.

[![GitStreak Automation](https://github.com/legion0069/Personal-Finance-AI/actions/workflows/daily-streak.yml/badge.svg)](https://github.com/legion0069/Personal-Finance-AI/actions/workflows/daily-streak.yml)
[![Contributions Welcome](https://img.shields.io/badge/streak-automated-brightgreen.svg)](#)
[![Progress](https://img.shields.io/badge/progress-Day%201%20of%2010%20(6%20commits%2Fday)-blue.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Core Capabilities

### 📄 Bank Statement Upload & Parsing
- Multi-format ingestion: CSV, PDF, OFX, and statement JSON
- Automatic column mapping (Date, Payee, Description, Debit, Credit, Balance)
- Duplicate transaction detection & deduplication engine

### 🧠 AI Financial Intelligence
- **Spending Analysis**: Automatic categorization, merchant normalization, and anomaly detection.
- **Intelligent Budgeting**: Dynamic envelope allocation, 50/30/20 budget framework, and burn-rate velocity tracking.
- **Cash Flow Forecasting**: Monte Carlo balance projections, recurring bill runway, and end-of-month surplus forecasts.
- **Investment Suggestions**: Savings rate optimization, emergency fund sizing, and diversified asset allocation models.
- **Monthly Reports**: Automated executive summaries, net cash flow charts, and category delta comparisons.
- **Chat with Your Expenses**: Natural language query engine over transaction history ("How much did I spend on dining out last month?").

---

## 🚀 10-Day Development Roadmap (6 Commits / Day)

- [ ] **Day 1**: Financial Data Architecture, Bank Statement Models & Transaction Schemas
- [ ] **Day 2**: Bank Statement Parser & Multi-Format Ingestion Engine
- [ ] **Day 3**: AI Spending Analysis & Merchant Categorization Engine
- [ ] **Day 4**: Intelligent Budgeting System & 50/30/20 Rule Allocator
- [ ] **Day 5**: Financial Cash Flow Forecaster & Runway Predictor
- [ ] **Day 6**: Smart Investment Suggestions & Savings Rate Optimizer
- [ ] **Day 7**: Automated Monthly Financial Reports Generator
- [ ] **Day 8**: "Chat with Your Expenses" Natural Language Query Agent
- [ ] **Day 9**: Interactive Personal Finance Web Dashboard & Analytics UI
- [ ] **Day 10**: End-to-End System Integration, Security Audit & v1.0.0 Release Packaging
<!-- gitstreak-roadmap-end -->

---

## 🛠️ Architecture & Daily Workflow

- **Schedule**: Every day at **4:00 PM IST (16:00 IST / 10:30 UTC)** via GitHub Actions cron `30 10 * * *`.
- **Commits per Day**: **6 commits** every day covering Domain Logic, Controllers, Utilities, Unit Tests, Architecture Specs, and Milestone Manifests.
- **Testing**: Pure Node.js test harness run automatically on every single commit.

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/legion0069/Personal-Finance-AI.git
cd Personal-Finance-AI

# Run automated tests
npm test

# Trigger streak runner locally
npm run streak
```
