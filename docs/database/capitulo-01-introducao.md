# ============================================================
# BLISS GLOW
# DATABASE SCHEMA
# Version 1.0
# ============================================================

# DOCUMENT PURPOSE

This document defines the complete database architecture for the Bliss Glow e-commerce platform.

The database is designed to support:

• Premium e-commerce operations
• DSers + AliExpress dropshipping
• International expansion
• Multi-currency
• Multi-language
• Future mobile applications
• AI-powered features
• Enterprise scalability

------------------------------------------------------------

# DATABASE OBJECTIVES

The database must provide:

• High performance
• Strong data integrity
• Scalability
• Security
• Easy maintenance
• Flexible relationships
• Future-proof architecture

------------------------------------------------------------

# DATABASE ENGINE

Recommended:

PostgreSQL (Primary)

Reasons:

• Excellent performance
• Advanced indexing
• JSON support
• Full-text search
• High reliability
• ACID compliance

Alternative:

MySQL 8+

------------------------------------------------------------

# DATABASE ORGANIZATION

The database is divided into logical domains.

Core Domains

• Authentication
• Customers
• Products
• Categories
• Inventory
• Suppliers
• Orders
• Payments
• Shipping
• Marketing
• Reviews
• Analytics
• Administration
• Notifications
• Content Management

------------------------------------------------------------

# ENTITY RELATIONSHIP OVERVIEW

Main Relationships

Customer

↓

Orders

↓

Order Items

↓

Products

↓

Categories

Products

↓

Variants

↓

Inventory

Products

↓

Reviews

Products

↓

Wishlist

Suppliers

↓

Products

Orders

↓

Payments

Orders

↓

Shipping

------------------------------------------------------------

# DATABASE DESIGN PRINCIPLES

Every table must include:

Primary Key

UUID

Created At

Updated At

Soft Delete support where appropriate

Status fields

Audit information

------------------------------------------------------------

# NAMING CONVENTIONS

Tables

Plural

Examples:

users

products

orders

payments

reviews

Columns

snake_case

Examples:

first_name

created_at

updated_at

order_status

Primary Keys

id

Foreign Keys

entity_id

Examples:

user_id

product_id

order_id

supplier_id

------------------------------------------------------------

# STANDARD COLUMNS

Most tables should include:

id

created_at

updated_at

deleted_at (optional)

status

created_by (optional)

updated_by (optional)

------------------------------------------------------------

# DATA TYPES

UUID

Primary Keys

VARCHAR

Names

Emails

URLs

TEXT

Descriptions

DECIMAL

Prices

FLOAT

Ratings

BOOLEAN

Flags

INTEGER

Counters

TIMESTAMP

Dates

JSONB

Flexible configuration

------------------------------------------------------------

# INDEX STRATEGY

Create indexes for:

Email

SKU

Slug

Category

Product Name

Supplier

Order Number

Tracking Number

Payment Status

------------------------------------------------------------

# SOFT DELETE

Entities supporting Soft Delete

Products

Customers

Categories

Coupons

Blog Articles

Media

Never permanently remove important business data by default.

------------------------------------------------------------

# AUDIT STRATEGY

Every critical change should be logged.

Track:

User

Action

Date

Old Value

New Value

IP Address

------------------------------------------------------------

# MULTI-CURRENCY SUPPORT

Store:

Base Currency

Display Currency

Exchange Rate

Historical Conversion

------------------------------------------------------------

# MULTI-LANGUAGE SUPPORT

Prepare translation tables for:

Products

Categories

Pages

Blog

Navigation

------------------------------------------------------------

# PERFORMANCE PRINCIPLES

Use:

Indexes

Pagination

Caching

Optimized Queries

Efficient Relationships

------------------------------------------------------------

# SECURITY PRINCIPLES

Never store:

Plain passwords

Raw payment data

Sensitive secrets

Encrypt sensitive information where required.

------------------------------------------------------------

# NEXT CHAPTER

Chapter 2

Entity Relationship Diagram (ERD)

The following chapter defines all database entities and relationships.

End of Chapter 1.
