# CHAPTER 10
# DSERS INTEGRATION API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The DSers Integration API connects the Bliss Glow platform with DSers and
AliExpress suppliers, providing automated synchronisation of products,
inventory, orders and shipment tracking.

The integration is designed to minimise manual operations while ensuring
accurate product and order data.

------------------------------------------------------------

# INTEGRATION ARCHITECTURE

Bliss Glow

↓

Integration Layer

↓

DSers

↓

AliExpress Suppliers

↓

Order Processing

↓

Tracking Synchronisation

------------------------------------------------------------

# OBJECTIVES

• Product synchronisation

• Inventory synchronisation

• Automatic order export

• Tracking import

• Supplier status updates

• Pricing synchronisation

• Error handling

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/integrations/dsers

Authentication

Administrator JWT

API Integration Key

------------------------------------------------------------

# PRODUCT SYNCHRONISATION

GET /products

Purpose

Retrieve products available through DSers.

Returns

Supplier Product ID

Title

Description

Images

Variants

Current Price

Available Stock

Supplier Rating

Estimated Processing Time

------------------------------------------------------------

POST /products/import

Purpose

Import selected products into the Bliss Glow catalogue.

Business Rules

Generate internal product ID.

Generate SEO-friendly slug.

Optimise images.

Assign categories.

Apply pricing rules.

------------------------------------------------------------

# INVENTORY SYNCHRONISATION

POST /inventory/sync

Purpose

Synchronise inventory with suppliers.

Synchronised Data

Stock Quantity

Availability

Variant Availability

Supplier Status

Last Updated Timestamp

------------------------------------------------------------

# PRICE SYNCHRONISATION

POST /pricing/sync

Purpose

Update supplier pricing.

Business Rules

Apply configured pricing rules.

Never reduce selling prices below minimum margin.

Log every price change.

------------------------------------------------------------

# ORDER EXPORT

POST /orders/export

Purpose

Export confirmed customer orders to DSers.

Exported Data

Customer Name

Delivery Address

Ordered Products

Variants

Quantities

Shipping Method

Order Reference

------------------------------------------------------------

# ORDER STATUS SYNCHRONISATION

GET /orders/status

Purpose

Retrieve supplier order status.

Possible Status

Awaiting Processing

Processing

Packed

Shipped

Completed

Cancelled

------------------------------------------------------------

# TRACKING IMPORT

POST /tracking/import

Purpose

Import shipment tracking.

Imported Data

Tracking Number

Carrier

Dispatch Date

Estimated Delivery

Tracking Events

Current Shipment Status

------------------------------------------------------------

# SUPPLIER MANAGEMENT

GET /suppliers

Returns

Supplier Name

Supplier Rating

Processing Time

Cancellation Rate

Order Accuracy

Average Delivery Time

------------------------------------------------------------

# SUPPLIER VALIDATION

Automatically Validate

Supplier Availability

Product Availability

Inventory

Processing Time

Supplier Rating

Shipping Capability

------------------------------------------------------------

# IMAGE SYNCHRONISATION

Automatically Import

Main Images

Gallery Images

Variant Images

Business Rules

Generate WebP versions.

Generate thumbnails.

Optimise image size.

------------------------------------------------------------

# CATEGORY MAPPING

Automatically map supplier products to:

Skincare

Haircare

Makeup

Beauty Tools

Body Care

Fragrance

Gift Sets

Accessories

Manual review supported when confidence is low.

------------------------------------------------------------

# ERROR HANDLING

Retry Strategy

3 automatic retries

Exponential backoff

Dead-letter queue for failed jobs

Administrator notification after repeated failures

------------------------------------------------------------

# WEBHOOK EVENTS

supplier.product.updated

supplier.inventory.updated

supplier.price.updated

supplier.order.shipped

supplier.order.cancelled

supplier.tracking.updated

------------------------------------------------------------

# AUDIT LOGGING

Record

Product Imports

Inventory Updates

Price Changes

Order Exports

Tracking Imports

Supplier Errors

------------------------------------------------------------

# RATE LIMITING

Product Import

60 requests/minute

Inventory Sync

120 requests/minute

Order Export

60 requests/minute

Tracking Import

120 requests/minute

------------------------------------------------------------

# SECURITY

HTTPS Required

Encrypted API Keys

Webhook Signature Validation

Audit Logging

Role-Based Access Control

Request Validation

------------------------------------------------------------

# BUSINESS RULES

Only confirmed customer orders may be exported.

Inventory updates must not overwrite manual stock adjustments without validation.

Supplier prices must always respect Bliss Glow pricing policies.

All synchronisation operations must be idempotent.

------------------------------------------------------------

# FUTURE FEATURES

Multi-Supplier Support

Automatic Supplier Selection

Supplier Performance Scoring

AI Supplier Recommendations

Predictive Inventory Planning

Automatic Product Translation

Real-Time Synchronisation

------------------------------------------------------------

# NEXT CHAPTER

Chapter 11

Webhooks API

Topics

• Payment Events

• Order Events

• Shipment Events

• Customer Events

• Retry Policy

• Event Security

End of Chapter 10.
