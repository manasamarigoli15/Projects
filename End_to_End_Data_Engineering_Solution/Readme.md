
# Sales Data Analytics: Azure Data Engineering End-to-End Project

This project demonstrates a full-scale Azure-based data engineering pipeline for sales data analytics. It showcases data ingestion, transformation, and visualization using Microsoft's modern data platform tools.

## 📦 Project Overview
The solution is built on top of the **AdventureWorks2017LT** dataset and demonstrates how to:
- Ingest on-premise SQL Server data into Azure
- Transform and clean data using Databricks (Apache Spark)
- Store results using Delta Lake
- Load into Azure Synapse Analytics
- Visualize insights using Power BI

## 🛠️ Tools & Technologies
- **Azure Data Factory** – for data ingestion and orchestration
- **Azure Data Lake Storage Gen2** – for raw/processed data storage
- **Azure Databricks (Apache Spark)** – for data transformation and cleansing
- **Delta Lake** – for ACID-compliant, scalable storage
- **Azure Synapse Analytics** – for data warehousing and modeling
- **Power BI** – for creating interactive dashboards

## 📌 Project Architecture

```text
[SQL Server] 
    ↓ Azure Data Factory (Copy Activity)
[Azure Data Lake Gen2] (Raw Zone)
    ↓ Azure Databricks (Transform using PySpark + Delta Lake)
[Azure Data Lake Gen2] (Processed Zone)
    ↓ Synapse (External Table / Dedicated Pool)
[Power BI] (Dashboard Consumption)
```

## ✅ Key Features
- Incremental data loads using Azure Data Factory pipelines.
- Scalable transformations with Delta Lake using Apache Spark.
- Dimensional modeling (Star Schema) in Synapse.
- Drill-down reporting in Power BI with KPIs like revenue, order count, customer region, etc.
- Data quality checks during transformation (nulls, duplicates).

## 📊 Power BI Dashboard
- **Revenue trends**
- **Top-selling products**
- **Customer distribution by region**
- **Sales performance by channel**

## 🧪 Data Governance & Quality
- Ensures schema validation and data completeness checks.
- Implements row-level security (RLS) in Power BI.
- Data lineage and access tracking via Azure Monitor.

## 📄 License
This project is for educational and portfolio demonstration purposes.
