# ============================================================
# CHAPTER 12
# ANALYTICS & BUSINESS INTELLIGENCE
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

The Analytics & Business Intelligence platform provides real-time insights
into customer behaviour, sales performance, marketing effectiveness,
operational efficiency and business growth.

The architecture must support:

• Real-time dashboards
• Customer analytics
• Product analytics
• Marketing attribution
• Sales reporting
• Funnel analysis
• Inventory analytics
• Supplier performance
• Financial reporting
• Executive KPIs

All analytical data must support future AI-powered reporting and predictive
analytics.

------------------------------------------------------------

# ANALYTICS ARCHITECTURE

Customer Activity

↓

Event Collection

↓

Data Processing

↓

Analytics Database

↓

Dashboards

↓

Business Decisions

------------------------------------------------------------

# TABLE: analytics_events

Purpose

Stores every measurable customer event.

Primary Key

id (UUID)

Columns

id

event_name

event_category

customer_id

session_id

product_id

order_id

page_url

referrer

device_type

browser

operating_system

country

city

ip_hash

event_timestamp

metadata (JSONB)

created_at

------------------------------------------------------------

Common Events

Page View

Product View

Search

Category View

Add To Cart

Remove From Cart

Begin Checkout

Payment Started

Purchase Completed

Wishlist Added

Account Created

Review Submitted

Newsletter Signup

------------------------------------------------------------

# TABLE: customer_sessions

Purpose

Tracks browsing sessions.

Columns

id

session_token

customer_id

landing_page

exit_page

traffic_source

traffic_medium

campaign_name

device_type

browser

country

started_at

ended_at

------------------------------------------------------------

# TABLE: sales_reports

Purpose

Stores aggregated sales metrics.

Columns

id

report_date

orders_count

gross_revenue

net_revenue

refund_total

average_order_value

conversion_rate

currency

created_at

------------------------------------------------------------

# TABLE: product_analytics

Purpose

Tracks product performance.

Columns

id

product_id

views

unique_views

cart_additions

wishlist_additions

purchases

conversion_rate

revenue_generated

refund_rate

report_date

------------------------------------------------------------

# TABLE: marketing_attribution

Purpose

Tracks acquisition sources.

Columns

id

customer_id

source

medium

campaign

ad_group

keyword

first_touch

last_touch

conversion_value

created_at

------------------------------------------------------------

Traffic Sources

Google Ads

Meta Ads

TikTok Ads

Organic Search

Email

Direct

Referral

Affiliate

------------------------------------------------------------

# TABLE: search_analytics

Purpose

Tracks internal search behaviour.

Columns

id

search_query

results_count

clicked_product_id

customer_id

search_timestamp

------------------------------------------------------------

Business Value

Identify products customers expect to find.

Discover missing catalogue items.

Improve search relevance.

------------------------------------------------------------

# TABLE: dashboard_snapshots

Purpose

Stores daily KPI summaries.

Columns

id

snapshot_date

daily_revenue

daily_orders

new_customers

returning_customers

conversion_rate

average_order_value

top_product_id

top_category_id

------------------------------------------------------------

# CUSTOMER KPIs

Track

Customer Lifetime Value (CLV)

Average Order Value (AOV)

Purchase Frequency

Retention Rate

Repeat Purchase Rate

Churn Rate

Customer Acquisition Cost (CAC)

------------------------------------------------------------

# PRODUCT KPIs

Track

Best Sellers

Lowest Sellers

Most Viewed

Highest Conversion

Highest Margin

Most Returned

Highest Rated

------------------------------------------------------------

# MARKETING KPIs

Track

Return on Ad Spend (ROAS)

Cost Per Acquisition (CPA)

Click Through Rate (CTR)

Email Open Rate

Email Click Rate

Revenue Per Campaign

------------------------------------------------------------

# SUPPLIER KPIs

Track

Average Processing Time

Late Shipment Rate

Cancellation Rate

Supplier Rating

Stock Accuracy

Order Accuracy

------------------------------------------------------------

# EXECUTIVE DASHBOARD

Display

Today's Revenue

Weekly Revenue

Monthly Revenue

Orders Today

Average Order Value

Conversion Rate

Top Categories

Top Products

Active Customers

Low Stock Alerts

------------------------------------------------------------

# FUTURE AI FEATURES

Demand Forecasting

Sales Prediction

Customer Lifetime Prediction

Churn Prediction

Inventory Forecast

Dynamic Pricing Suggestions

Personalised Recommendations

------------------------------------------------------------

# DATA RETENTION

Raw Events

24 Months

Aggregated Reports

Unlimited

Audit Logs

Unlimited

------------------------------------------------------------

# BUSINESS RULES

Analytics collection must not affect customer experience.

Personally identifiable information should be minimised or anonymised where appropriate.

Dashboard data should refresh automatically.

------------------------------------------------------------

# INDEXES

Create indexes for

customer_id

product_id

order_id

event_name

event_timestamp

campaign

report_date

------------------------------------------------------------

# PERFORMANCE

Support

Billions of analytics events

Real-time event ingestion

Sub-second dashboard queries

Historical trend analysis

------------------------------------------------------------

# NEXT CHAPTER

Chapter 13

Artificial Intelligence & Personalisation

Topics

• AI Recommendations

• Personalised Search

• Product Ranking

• Customer Segmentation

• Predictive Models

• Smart Merchandising

End of Chapter 12.
