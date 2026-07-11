# ============================================================
# CHAPTER 5
# INVENTORY & SUPPLIER MANAGEMENT
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

This chapter defines the inventory and supplier architecture for Bliss Glow.

The system must support:

• DSers integration
• AliExpress suppliers
• Future private suppliers
• Own warehouse
• Multiple warehouses
• Inventory synchronization
• Automatic stock updates
• Price synchronization
• Supplier performance monitoring

The architecture must allow migration from pure dropshipping to hybrid or
fully owned inventory without redesigning the database.

------------------------------------------------------------

# INVENTORY ARCHITECTURE

Inventory is separated from Products.

Products define:

• What is sold

Inventory defines:

• What is available

This separation improves scalability.

------------------------------------------------------------

# TABLE: inventory

Purpose

Stores inventory information for every product variant.

Primary Key

id (UUID)

Columns

id

product_variant_id

warehouse_id

available_quantity

reserved_quantity

incoming_quantity

minimum_stock

maximum_stock

reorder_level

stock_status

Possible Values

IN_STOCK

LOW_STOCK

OUT_OF_STOCK

PREORDER

DISCONTINUED

last_sync_at

created_at

updated_at

------------------------------------------------------------

Business Rules

Available quantity can never become negative.

Reserved quantity must be deducted only after order confirmation.

Incoming quantity is used for supplier shipments.

------------------------------------------------------------

# TABLE: warehouses

Purpose

Supports future warehouse expansion.

Columns

id

name

country

state

city

address

postal_code

contact_email

contact_phone

warehouse_type

Possible Values

DROPSHIPPING

OWNED

THIRD_PARTY

FULFILLMENT_CENTER

status

------------------------------------------------------------

Relationships

Warehouse

↓

Inventory

------------------------------------------------------------

# TABLE: suppliers

Purpose

Stores supplier information.

Examples

AliExpress Supplier

Future UK Supplier

Private Manufacturer

Brand Distributor

Columns

id

supplier_name

supplier_type

website

contact_name

contact_email

contact_phone

country

currency

rating

average_processing_time

return_policy

status

created_at

updated_at

------------------------------------------------------------

Supplier Types

ALIEXPRESS

PRIVATE_LABEL

WHOLESALER

MANUFACTURER

LOCAL_SUPPLIER

------------------------------------------------------------

# TABLE: supplier_products

Purpose

Maps products to supplier products.

Columns

id

supplier_id

product_id

supplier_product_id

supplier_variant_id

supplier_price

supplier_currency

supplier_stock

shipping_time

last_sync

------------------------------------------------------------

Purpose

Allows the same product to exist with multiple suppliers.

------------------------------------------------------------

# TABLE: inventory_movements

Purpose

Tracks every inventory change.

Movement Types

SALE

RETURN

RESTOCK

ADJUSTMENT

IMPORT

EXPORT

Columns

id

inventory_id

movement_type

quantity

previous_quantity

new_quantity

reason

reference_id

performed_by

created_at

------------------------------------------------------------

Every inventory change must be recorded.

Inventory history must never be deleted.

------------------------------------------------------------

# TABLE: stock_alerts

Purpose

Automatically generate stock warnings.

Alert Types

LOW_STOCK

OUT_OF_STOCK

PRICE_CHANGE

SYNC_ERROR

SUPPLIER_DELAY

Columns

id

inventory_id

alert_type

message

resolved

created_at

------------------------------------------------------------

# DSERS INTEGRATION

The database must support:

Automatic Product Import

Automatic Inventory Updates

Automatic Price Updates

Automatic Tracking Updates

Automatic Order Export

Automatic Supplier Synchronization

------------------------------------------------------------

# TABLE: dsers_sync_logs

Purpose

Stores synchronization history.

Columns

id

supplier_id

product_id

sync_type

status

started_at

finished_at

error_message

records_processed

------------------------------------------------------------

Possible Sync Types

PRODUCT_IMPORT

PRICE_UPDATE

INVENTORY_UPDATE

TRACKING_UPDATE

ORDER_EXPORT

------------------------------------------------------------

# PRICE SYNCHRONIZATION

Track

Supplier Price

Selling Price

Previous Price

Margin

Markup Percentage

Last Synchronization

------------------------------------------------------------

# INVENTORY STATUS FLOW

Supplier Update

↓

DSers Synchronization

↓

Inventory Updated

↓

Website Updated

↓

Customer Sees New Stock

------------------------------------------------------------

# SUPPLIER PERFORMANCE

Measure

Average Processing Time

Cancellation Rate

Return Rate

Late Shipment Rate

Average Rating

Response Time

------------------------------------------------------------

# BUSINESS RULES

If supplier stock reaches zero:

↓

Product automatically becomes

OUT_OF_STOCK

If supplier price changes:

↓

Recalculate selling price

↓

Respect configured pricing rules

------------------------------------------------------------

# FUTURE EXPANSION

Support

Multiple Suppliers

Supplier Priority

Automatic Supplier Selection

Regional Suppliers

Warehouse Transfers

Inventory Forecasting

AI Demand Prediction

------------------------------------------------------------

# INDEXES

Create indexes for

supplier_id

product_variant_id

warehouse_id

stock_status

last_sync_at

------------------------------------------------------------

# NEXT CHAPTER

Chapter 6

Shopping Cart & Checkout

The next chapter defines:

• Shopping Cart
• Checkout
• Coupons
• Taxes
• Shipping Calculation
• Guest Checkout
• Customer Checkout Flow

End of Chapter 5.
