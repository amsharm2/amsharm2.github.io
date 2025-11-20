---
layout: default
title: "Greenlight — Project 1"
---

## 🎯 Key Initiatives & Impact

### 1. 💰 Snowflake Cost Optimization
**Goal:** Reduce escalating cloud infrastructure costs.
- **Strategy:** Analyzed warehouse usage patterns to identify redundant roles and inefficient resource allocation.
- **Execution:**
  - ⚡ Refactored long-running transformation jobs to use incremental models.
  - 🔧 Optimized **dbt** job definitions to eliminate redundant heavy-mode executions.
  - 🎯 Systematically targeted and optimized top resource-consuming queries in each sprint.
- **Impact:** **💵 Saved ~$100K annually** on Snowflake compute costs.

### 2. 🤖 Automated Data Quality & Reporting
**Goal:** Ensure reliability of Tableau dashboards and reduce manual monitoring.
- **Solution:** Built **Airflow** DAGs to automate dashboard refreshes with integrated Data Quality (DQ) and freshness checks.
- **Technique:**
  - 📊 Implemented statistical outlier detection (N-tile method) to flag anomalies (top/bottom 5-20% variation).
  - 💬 Integrated **Slack** notifications for real-time success/failure reporting.
- **Impact:** ✅ Guaranteed data freshness and automated alert systems for the data team.

### 3. 🏆 Customer Engagement "Badges" Product
**Goal:** Drive organic growth via gamification and social sharing.
- **Product:** Developed a data product awarding badges to customers based on spending/engagement percentiles (e.g., top 20% in a City/State).
- **Pipeline:** Built end-to-end pipelines (**Databricks/Snowflake**) to calculate metrics and serve them via low-latency APIs to the mobile app.
- **Impact:** 🚀 Encouraged customers to share achievements on social channels, driving organic user acquisition with **zero marketing cost**.

---

### 👥 Leadership & Tech Stack
- **Role:** Mentored a cross-functional team of 6 (Data Engineers, Analytics Engineers, AI & BI specialists).
- **Domain:** 💼 Gained deep exposure to the financial business logic and fintech operations.
- **Tech Stack:** `Snowflake` ❄️ | `Airflow` 🌊 | `dbt` 🔨 | `Databricks` ⚡ | `Tableau` 📈 | `Slack API` 💬 | `Python` 🐍 | `SQL` 🗄️