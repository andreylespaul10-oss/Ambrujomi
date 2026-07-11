# ============================================================
# CHAPTER 7
# ORDERS & ORDER MANAGEMENT
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

The Order Management System is responsible for managing the complete
customer purchase lifecycle.

It connects:

• Customers
• Products
• Inventory
• Suppliers
• Payments
• Shipping
• Notifications

Every order must be fully traceable from creation until completion.

------------------------------------------------------------

# ORDER LIFECYCLE

Customer Places Order

↓

Payment Processing

↓

Payment Approved

↓

Inventory Reserved

↓

Supplier Receives Order

↓

Supplier Ships Order

↓

Tracking Number Generated

↓

Order Delivered

↓

Customer Review

------------------------------------------------------------

# TABLE: orders

Purpose

Stores every customer order.

Primary Key

id (UUID)

Columns

id

order_number

customer_id

billing_address_id

shipping_address_id

currency

subtotal

discount_total

shipping_total

tax_total

grand_total

payment_status

fulfillment_status

order_status

customer_notes

admin_notes

placed_at

created_at

updated_at

------------------------------------------------------------

Order Status

PENDING

AWAITING_PAYMENT

PAID

PROCESSING

SENT_TO_SUPPLIER

SHIPPED

IN_TRANSIT

DELIVERED

COMPLETED

CANCELLED

REFUNDED

FAILED

------------------------------------------------------------

Business Rules

Each order must have a unique order number.

Orders must never be permanently deleted.

Soft Delete is not recommended.

Historical integrity must always be preserved.

------------------------------------------------------------

# TABLE: order_items

Purpose

Stores every purchased product.

Columns

id

order_id

product_id

product_variant_id

supplier_product_id

product_name_snapshot

sku_snapshot

quantity

unit_price

discount

line_total

currency

created_at

------------------------------------------------------------

Business Rules

Product information is copied into the order.

Future product changes must never modify historical orders.

------------------------------------------------------------

# TABLE: order_status_history

Purpose

Records every order status change.

Columns

id

order_id

previous_status

new_status

changed_by

reason

created_at

------------------------------------------------------------

Every status update must generate a history record.

History must never be deleted.

------------------------------------------------------------

# TABLE: order_notes

Purpose

Stores internal notes.

Columns

id

order_id

admin_user_id

note

visibility

created_at

Visibility

Internal

Customer Visible

------------------------------------------------------------

# TABLE: order_events

Purpose

Timeline of important events.

Examples

Order Created

Payment Approved

Supplier Assigned

Tracking Updated

Package Delivered

Refund Issued

Customer Review Submitted

------------------------------------------------------------

# TABLE: order_documents

Purpose

Stores downloadable files.

Examples

Invoices

Receipts

Shipping Labels

Packing Slips

Custom Documents

------------------------------------------------------------

# ORDER PROCESSING FLOW

Customer Checkout

↓

Order Created

↓

Payment Validation

↓

Inventory Reservation

↓

Supplier Assignment

↓

Supplier Confirmation

↓

Shipment Creation

↓

Tracking Generated

↓

Customer Notification

↓

Delivery Confirmation

------------------------------------------------------------

# ORDER VALIDATION

Before an order is accepted verify:

Inventory

Product Availability

Supplier Status

Coupon Validity

Shipping Method

Payment Authorization

Customer Information

------------------------------------------------------------

# SUPPLIER ASSIGNMENT

Products may be supplied by:

Primary Supplier

Secondary Supplier

Manual Assignment

Future AI Supplier Selection

------------------------------------------------------------

# SPLIT ORDERS

Support multiple suppliers.

Example

Order

↓

Supplier A

Supplier B

Supplier C

Each shipment receives:

Independent Tracking

Independent Status

Independent Delivery

------------------------------------------------------------

# ORDER CANCELLATION

Cancellation Rules

Before Payment

Immediately Allowed

After Payment

Depends on payment gateway

After Shipment

Depends on supplier policy

Delivered

Return process required

------------------------------------------------------------

# RETURNS

Future Table

order_returns

Fields

Order

Products

Reason

Condition

Approval Status

Inspection

Refund Amount

------------------------------------------------------------

# CUSTOMER ORDER TIMELINE

Every customer should see:

Order Created

↓

Payment Confirmed

↓

Supplier Processing

↓

Package Shipped

↓

Package In Transit

↓

Delivered

------------------------------------------------------------

# ADMIN FEATURES

Search Orders

Filter Orders

Bulk Actions

Manual Status Updates

Export Orders

Supplier Assignment

Invoice Generation

------------------------------------------------------------

# REPORTING

Generate reports for:

Daily Orders

Monthly Revenue

Average Order Value

Cancelled Orders

Refund Rate

Supplier Performance

Top Customers

------------------------------------------------------------

# INDEXES

Create indexes for

order_number

customer_id

payment_status

order_status

created_at

supplier_id

------------------------------------------------------------

# PERFORMANCE

Support

Millions of Orders

Fast Order Search

Fast Customer History

Efficient Reporting

Archive Older Records

------------------------------------------------------------

# NEXT CHAPTER

Chapter 8

Payments & Financial Transactions

Topics

• Payment Methods

• Transactions

• Refunds

• Payment Logs

• Financial Reports

• Fraud Prevention

End of Chapter 7.
