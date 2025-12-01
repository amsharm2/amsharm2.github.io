---
layout: default
title: "Cisco — Data Engineering"
---

## 1. 🏗️ Modern Data Pipeline Development & Modeling

### A. Next-Gen ELT Platform Research & Implementation

**Goal:** Evaluate and recommend modern tools to streamline and centralize the data transformation process.

* **Research Focus:** Deep dive into next-generation ETL/ELT platforms, specifically **Fivetran** (for automated data ingestion) and **dbt (data build tool)** (for in-warehouse transformation).
* **Recommendation:** Championed the adoption of a robust ELT architecture, leveraging dbt for modular, testable, and version-controlled data transformations directly within the data warehouse.

### B. Financial Recurring Metrics Data Modeling ( ARR Sales Crediting Methods)

**Goal:** Design and implement a scalable, auditable data model to support accurate reporting of key recurring financial metrics.
* **Deliverable:** Developed a canonical, dimensional data model (e.g., Star Schema) optimized for calculating complex financial metrics (e.g., Annual Recurring Revenue - ARR, Net Retention Rate - NRR).
* **Technology Stack:** Leveraged **Snowflake** as the primary warehouse and **dbt** for maintaining data quality and lineage.

### C. Data Completion & Quality Analysis

**Goal:** Proactively identify and monitor missing or incomplete data in critical, high-volume tables to ensure reporting accuracy.

* **Conceptualization & Build:** Designed and deployed a specialized data completion analysis framework for larger tables in **Snowflake**.
* **Mechanism:** Implemented scheduled jobs to automatically analyze column coverage and fill rates, flagging anomalies and data gaps for upstream remediation.

## 2. 📡 Telemetry Data Engineering

### A. Telemetry Data Ingestion Pipeline

**Goal:** Establish a reliable pipeline for integrating high-velocity telemetry data into the central data platform.

* **Execution:** Built the ingestion pipeline to efficiently load raw telemetry event streams into **Snowflake**, preparing the data for subsequent exploration and modeling.

### B. Data Exploration & Understanding

**Goal:** Deeply understand the structure and content of diverse telemetry data streams from various Cisco product lines.

* **Activities:** Performed extensive data profiling and schema exploration to map out crucial signals, events, and usage patterns necessary for deriving business value and operational insights.

---

## 3. 🧠 Machine Learning & Advanced Analytics

### A. Cisco Datathon '2019 Challenge Winner

**Achievement:** Awarded **winner** in the Cisco Datathon 2019 Challenge.

* **Project:** Developed a predictive model for **Air Quality Index (AQI)** using advanced machine learning techniques.
* **Key Models:** Leveraged **XGBoost** and **Regression** models for accurate time-series forecasting.

### B. Incident and Time-Series Forecasting

**Goal:** Implement predictive models to forecast operational incidents and resource needs.

* **Models Utilized:** Applied various time-series and classification models, including **Naive Bayes**, **tbats**, **mv**, **nneter**, and standard regression models, primarily using **R** and the **Shiny R** framework for interactive deployment.

### C. Operational Data Stack

**Key Technical Skills & Projects:**

* **Data Languages:** Proficient in **Oracle SQL** for complex querying and **Python** for analytical scripting and clustering algorithms.
* **NoSQL Experience:** Experience with **MongoDB** for handling unstructured and semi-structured data.
* **Visualization:** Developed a suite of **Tableau** visualizations to create and maintain an operational metrics dashboard for senior leadership.
```