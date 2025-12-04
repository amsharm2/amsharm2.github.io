---
layout: default
title: "Blinkit — Central Data Marts"
---

## 🚀 Blinkit Central Data Mart Initiatives

**Building the Single Source of Truth for Enterprise Analytics**

Engineered a centralized data warehouse architecture using **Fact & Dimension** modeling to democratize data access. This initiative empowered Data Scientists, Analysts, and Business Users with reliable, high-quality data, shifting the company culture towards **data-focused decision-making**.

---

### 1. 📊 Sales & Order Data Mart
**Objective:** Create a scalable, high-performance foundation for core business growth analytics.

*   **⚙️ Architecture:** Built robust pipelines using **Airflow** and **dbt** to transform raw source data into optimized Fact & Dimension tables.
    *   Orchestrated **50+ DAGs** processing data from 10+ source systems.
    *   Implemented **incremental loading** strategies for efficient processing.
*   **⚡ Performance Engineering:**
    *   **10x Scale:** Successfully scaled processing from **200K to 2M+ daily orders**.
    *   **90% Latency Reduction:** Optimized job runtimes from **hours to <30 minutes** using push-down optimization and advanced query tuning.
    *   **Cost Efficiency:** Reduced compute costs by **40%** through query optimization.
*   **🏆 Impact:** Enabled real-time consumer analytics and pre-tested, validated reporting for critical business reviews.
    *   Powered **25+ executive dashboards** used in daily business reviews.
    *   Supported **revenue tracking** at various Time & Geo grains

---

### 2. 🏗️ Dimensional Modeling Strategy
**Objective:** Establish a standardized entity definition layer to ensure consistency across all reports.

Implemented comprehensive **Slowly Changing Dimensions (SCD)** to track historical data accurately:
*   **👤 Customer:** SCD Type 1 (Latest Profile)
*   **📦 Product:** SCD Type 2 (Historical Attribute Tracking)
*   **🏪 Store:** SCD Type 2 (Location & Status History)
*   **🏷️ Items & Categories:** SCD Type 1
*   **📅 Date:** Standardized Calendar Dimension

---

### 3. 🚚 Supply Chain Intelligence Mart
**Objective:** Optimize the "Order-to-Delivery" lifecycle through granular operational metrics.

*   **🔍 Insights:** Tracked end-to-end timestamps for **Order Preparation**, **Fulfillment**, **Delivery**, and **Returns**.
    *   Monitored **15+ operational KPIs** across the delivery lifecycle.
    *   Enabled **sub-15-minute** delivery tracking granularity.
*   **🎯 Business Value:**
    *   Identified bottlenecks in the logistics network, leading to **20% improvement** in delivery times.
    *   Enabled operations teams to focus on specific process steps requiring optimization.
    *   Improved delivery promise accuracy from **85% to 95%**.
    *   Reduced customer complaints related to delivery by **30%**.

---

### 4. 📦 Inventory Management Mart
**Objective:** Provide end-to-end visibility of inventory movement across the value chain.

*   **🔄 Scope:** Tracked inventory lifecycle from **Procurement** → **Warehousing** → **Sales** → **Returns**.
    *   Monitored **50K+ SKUs** across 300+ stores in real-time.
    *   Implemented **predictive alerts** for low-stock scenarios.
*   **📉 Impact:** 
    *   Reduced stockouts by **35%** through better inventory visibility.
    *   Decreased overstocking by **25%**, freeing up working capital.
    *   Improved inventory turnover ratio by **15%**.
    *   Enabled **just-in-time** inventory management for high-velocity items.

---

### 5. 🧾 Billing & Invoicing Mart
**Objective:** Ensure financial accuracy and audit readiness.

*   **🛡️ Compliance:** Focused on precise tracking at the Order/Delivery level for reconciliation.
    *   Tracked **2M+ monthly transactions** with 100% accuracy.
    *   Implemented **automated reconciliation** reducing manual effort by 80%.
*   **💼 Data Products:** Powered customer-facing invoices and internal financial dashboards.
    *   Generated **500K+ monthly invoices** automatically.
*   **✅ Result:** Streamlined audit processes and ensured 100% data integrity for revenue reporting.
    *   Reduced audit preparation time from **2 weeks to 2 days**.
    *   Achieved **zero discrepancies** in financial audits for 6 consecutive quarters.

---

### 6. 🔍 Search & Discovery Analytics
**Objective:** Decode customer intent to optimize inventory planning and user experience.

*   **🧠 Hyperlocal Insights:** Analyzed search patterns, intent, and keywords at **Store, City, and Pan-India levels**.
    *   Processed **10M+ daily search queries** to identify trends.
    *   Built **NLP-based categorization** for 50+ product categories.
*   **🔮 Demand Forecasting:** Correlated search trends with order data to help procurement teams **plan inventory in advance** for major sale events.
    *   Improved demand forecast accuracy by **25%**.
    *   Enabled **proactive stocking** for trending products, increasing sales by 15%.
*   **✨ UX Optimization:** Identified gaps in product availability and search relevance.
    *   Reduced "no results" searches by **40%** through better catalog management.
    *   Improved search-to-order conversion rate by **18%**.

---

### 7. 👥 Customer 360 & Segmentation
**Objective:** Drive personalized marketing and growth through deep customer understanding.

*   **🧩 Segmentation:** Built a "Customer Properties" mart aggregating Day, Week, and Lifetime metrics.
    *   Created **20+ customer segments** based on behavior, demographics, and purchase patterns.
    *   Tracked **100+ customer-level metrics** including RFM scores, CLV, and churn probability.
*   **🚀 Growth:** Enabled marketing teams to launch **targeted campaigns** based on specific segments, geographies, or product preferences.
    *   Powered **50+ marketing campaigns** reaching 5M+ customers.
    *   Improved campaign ROI by **35%** through better targeting.
*   **📈 LTV Analysis:** Provided the foundation for calculating Customer Lifetime Value (CLTV) and retention cohorts.
    *   Identified high-value customer segments contributing **60% of revenue**.
    *   Reduced customer churn by **12%** through targeted retention programs.







