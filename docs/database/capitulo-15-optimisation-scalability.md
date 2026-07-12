# ============================================================
# CHAPTER 15
# DATABASE OPTIMISATION, SCALABILITY &
# DISASTER RECOVERY
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

This chapter defines the long-term strategy for maintaining a fast,
secure, resilient and scalable database infrastructure.

The database must support the growth of Bliss Glow from launch through
international expansion while maintaining high performance and data integrity.

Objectives:

• High Availability
• Horizontal Scalability
• Fault Tolerance
• Disaster Recovery
• Performance Optimisation
• Data Security
• Operational Stability

------------------------------------------------------------

# SCALABILITY STRATEGY

Phase 1

Startup

• Single PostgreSQL instance
• Daily backups
• Basic monitoring

Expected Capacity

100,000 customers

50,000 products

250,000 orders

------------------------------------------------------------

Phase 2

Growth

• Read Replicas

• Redis Cache

• Queue Workers

• CDN

Expected Capacity

1 Million Customers

500,000 Products

5 Million Orders

------------------------------------------------------------

Phase 3

Enterprise

• Database Clustering

• Multi-Region Replication

• Automatic Failover

• Distributed Cache

• Event Streaming

Expected Capacity

10+ Million Customers

Millions of Products

Hundreds of Millions of Orders

------------------------------------------------------------

# INDEX OPTIMISATION

Primary Indexes

UUID Primary Keys

Unique Indexes

Email

SKU

Order Number

Slug

Tracking Number

Composite Indexes

(customer_id, created_at)

(product_id, status)

(order_status, created_at)

(payment_status, created_at)

------------------------------------------------------------

# QUERY OPTIMISATION

Use:

Selective indexes

Pagination

Cursor-based pagination

Optimised JOIN operations

Prepared statements

Connection pooling

Avoid:

SELECT *

Unbounded queries

N+1 query patterns

------------------------------------------------------------

# PARTITIONING STRATEGY

Partition high-volume tables by date.

Recommended Tables

analytics_events

audit_logs

payment_logs

order_status_history

shipment_tracking_events

Benefits

Improved query performance

Faster backups

Simplified archiving

------------------------------------------------------------

# CACHING STRATEGY

Technology

Redis

Cache

Homepage

Featured Products

Categories

Navigation

Product Details

Search Results

Customer Sessions

Popular Searches

Recommendation Results

Cache Invalidation

Automatic

Time-based

Event-based

------------------------------------------------------------

# SEARCH ENGINE

Recommended

OpenSearch or Elasticsearch

Indexed Data

Products

Categories

Brands

Blog Articles

FAQs

Search Features

Autocomplete

Synonyms

Typo Tolerance

Faceted Search

Relevance Ranking

------------------------------------------------------------

# STORAGE STRATEGY

Store outside database

Images

Videos

PDF Files

Backups

Recommended Object Storage

AWS S3

Cloudflare R2

Azure Blob Storage

Google Cloud Storage

------------------------------------------------------------

# REPLICATION

Primary Database

↓

Read Replica 1

↓

Read Replica 2

↓

Analytics Replica

Purpose

Improve read performance

Reduce reporting impact

Increase availability

------------------------------------------------------------

# BACKUP POLICY

Daily Incremental Backup

Weekly Full Backup

Monthly Archive Backup

Encrypted Storage

Automated Verification

Backup Retention

Daily

30 Days

Weekly

12 Weeks

Monthly

12 Months

------------------------------------------------------------

# DISASTER RECOVERY

Recovery Objectives

Recovery Time Objective (RTO)

< 1 Hour

Recovery Point Objective (RPO)

< 15 Minutes

Disaster Plan

Automatic Alerts

Failover Procedures

Data Validation

Service Restoration

Post-Incident Review

------------------------------------------------------------

# SECURITY HARDENING

Encrypt data in transit (TLS)

Encrypt sensitive data at rest

Rotate secrets regularly

Restrict database access

Enable audit logging

Use least-privilege access

Protect backup files

Monitor suspicious activity

------------------------------------------------------------

# MONITORING

Track

Database Connections

Slow Queries

Replication Lag

Cache Hit Ratio

Storage Usage

CPU Usage

Memory Usage

Error Rate

Background Jobs

Queue Length

------------------------------------------------------------

# OBSERVABILITY

Recommended Stack

Prometheus

Grafana

OpenTelemetry

Centralised Logging

Application Performance Monitoring (APM)

------------------------------------------------------------

# DATA RETENTION

Customer Data

According to legal requirements

Orders

Permanent

Payments

Permanent

Audit Logs

Minimum 7 Years

Analytics Events

24 Months

Application Logs

90 Days

------------------------------------------------------------

# FUTURE DATABASE ROADMAP

Version 2.0

AI-assisted query optimisation

Automatic partition management

Predictive scaling

Real-time analytics

Data warehouse integration

Multi-tenant architecture

------------------------------------------------------------

# FINAL DATABASE PRINCIPLES

The Bliss Glow database must always be:

Reliable

Secure

Scalable

Maintainable

Observable

Well Documented

Extensible

Cloud Ready

AI Ready

International Ready

------------------------------------------------------------

# DOCUMENT SUMMARY

Estimated Tables

55+

Relationships

150+

Indexes

200+

Architecture

Enterprise Grade

Deployment Target

Cloud Infrastructure

Primary Database

PostgreSQL

Recommended Cache

Redis

Recommended Search

OpenSearch / Elasticsearch

------------------------------------------------------------

END OF DOCUMENT

Database_Schema.md

Version 1.0

Prepared for:

Bliss Glow Premium Beauty & Skincare E-commerce Platform
