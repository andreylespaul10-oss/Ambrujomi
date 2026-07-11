# ============================================================
# CHAPTER 13
# ARTIFICIAL INTELLIGENCE & PERSONALISATION
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

This chapter defines the database architecture for Artificial Intelligence
(AI), machine learning and customer personalisation features.

The initial platform should operate without AI dependencies. However, the
database must be designed to support future AI capabilities without requiring
major structural changes.

Objectives:

• Personalised shopping experiences
• Intelligent product recommendations
• Predictive analytics
• Smart merchandising
• AI-powered search
• Dynamic customer segmentation
• Automated marketing

------------------------------------------------------------

# AI ARCHITECTURE

Customer Activity

↓

Analytics Events

↓

AI Processing

↓

Recommendation Engine

↓

Website Personalisation

↓

Improved Customer Experience

------------------------------------------------------------

# TABLE: ai_customer_profiles

Purpose

Stores AI-generated customer profiles.

Primary Key

id (UUID)

Columns

id

customer_id

shopping_style

preferred_categories

preferred_brands

preferred_price_range

preferred_skin_type

purchase_frequency

predicted_lifetime_value

churn_risk_score

last_ai_update

created_at

updated_at

------------------------------------------------------------

Business Rules

AI-generated values must never overwrite customer-provided information.

Profiles should be recalculated periodically.

------------------------------------------------------------

# TABLE: ai_product_recommendations

Purpose

Stores personalised product recommendations.

Columns

id

customer_id

product_id

recommendation_score

recommendation_reason

algorithm_version

generated_at

expires_at

------------------------------------------------------------

Recommendation Reasons

Frequently Bought Together

Similar Products

Trending Products

Recently Viewed

Recommended For You

Complete Your Routine

------------------------------------------------------------

# TABLE: ai_search_history

Purpose

Improves search relevance.

Columns

id

customer_id

search_query

clicked_product_id

results_returned

search_timestamp

------------------------------------------------------------

Purpose

Improve autocomplete

Improve ranking

Identify missing products

------------------------------------------------------------

# TABLE: ai_product_rankings

Purpose

Stores AI-generated ranking scores.

Columns

id

product_id

popularity_score

conversion_score

engagement_score

profitability_score

inventory_score

overall_score

generated_at

------------------------------------------------------------

# TABLE: ai_customer_segments

Purpose

Automatically groups customers.

Examples

Luxury Buyers

Frequent Buyers

New Customers

High Lifetime Value

Discount Seekers

Gift Shoppers

Inactive Customers

------------------------------------------------------------

Columns

id

customer_id

segment_name

confidence_score

assigned_at

------------------------------------------------------------

# TABLE: ai_predictions

Purpose

Stores predictive models.

Columns

id

prediction_type

entity_type

entity_id

prediction_value

confidence

model_version

generated_at

------------------------------------------------------------

Prediction Types

Demand Forecast

Sales Forecast

Churn Prediction

Inventory Forecast

Customer Lifetime Value

Product Trend

------------------------------------------------------------

# TABLE: ai_dynamic_pricing

Purpose

Stores AI pricing suggestions.

Columns

id

product_id

current_price

recommended_price

expected_conversion

expected_margin

reason

generated_at

------------------------------------------------------------

Business Rule

AI may recommend prices.

Only authorised administrators may approve price changes.

------------------------------------------------------------

# TABLE: ai_content_generation

Purpose

Supports AI-assisted content creation.

Examples

Product Descriptions

SEO Titles

SEO Descriptions

Blog Ideas

Email Subject Lines

Marketing Copy

Columns

id

content_type

entity_type

entity_id

generated_content

status

approved_by

created_at

------------------------------------------------------------

# AI MODELS

Future Support

Recommendation Engine

Semantic Search

Image Similarity

Trend Detection

Demand Forecasting

Fraud Detection

Marketing Optimisation

Customer Support Assistant

------------------------------------------------------------

# PERSONALISATION FEATURES

Homepage

Recommended Products

Trending For You

Continue Shopping

Recently Viewed

Personal Offers

Personal Discount Codes

------------------------------------------------------------

# BUSINESS KPIs

Measure

Recommendation Click Rate

Recommendation Conversion Rate

AI Revenue Contribution

Search Success Rate

Personalisation Engagement

Average Session Duration

------------------------------------------------------------

# DATA GOVERNANCE

AI recommendations must be explainable where possible.

Customer data should be processed in accordance with UK GDPR.

Model versions should be tracked for auditing purposes.

------------------------------------------------------------

# SECURITY

Do not expose internal AI scores to customers unless required.

Protect AI-generated datasets from unauthorised modification.

Maintain audit logs for AI-generated decisions that affect pricing or promotions.

------------------------------------------------------------

# INDEXES

Create indexes for

customer_id

product_id

segment_name

prediction_type

generated_at

recommendation_score

------------------------------------------------------------

# PERFORMANCE

Support

Millions of recommendation records

Real-time recommendation retrieval

Daily model refreshes

Scalable AI processing pipelines

------------------------------------------------------------

# FUTURE ROADMAP

Version 2.0

AI Shopping Assistant

Conversational Product Search

AI Beauty Routine Builder

Routine Recommendations

AI Skin Quiz

Visual Product Discovery

Predictive Inventory Planning

------------------------------------------------------------

# NEXT CHAPTER

Chapter 14

Administration & System Management

Topics

• Admin Users

• Roles & Permissions

• System Configuration

• Audit Logs

• Feature Flags

• Operational Monitoring

End of Chapter 13.
