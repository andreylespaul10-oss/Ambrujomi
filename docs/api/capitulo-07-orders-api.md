# CHAPTER 7
# ORDERS API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Orders API manages the complete order lifecycle, from order creation
to delivery, returns, refunds and customer notifications.

It provides customers and administrators with secure access to order
information while ensuring complete traceability.

------------------------------------------------------------

# ORDER LIFECYCLE

Checkout Completed

↓

Order Created

↓

Payment Confirmed

↓

Supplier Processing

↓

Order Dispatched

↓

In Transit

↓

Delivered

↓

Completed

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/orders

Authentication

Required

JWT Bearer Token

------------------------------------------------------------

# ENDPOINT

GET /orders

Purpose

Retrieve customer orders.

Supports

Pagination

Filtering

Sorting

Search by Order Number

Order Status Filter

Date Range Filter

------------------------------------------------------------

# RESPONSE

Each order includes

Order ID

Order Number

Order Date

Order Status

Payment Status

Shipment Status

Grand Total

Currency

Estimated Delivery

------------------------------------------------------------

# ENDPOINT

GET /orders/{order_id}

Purpose

Retrieve complete order details.

Returns

Customer Details

Products

Variants

Pricing

Discounts

Shipping Information

Tracking Information

Payment Details

Invoices

Timeline

------------------------------------------------------------

# ORDER STATUS

Pending Payment

Payment Authorised

Payment Failed

Confirmed

Processing

Awaiting Supplier

Packed

Dispatched

In Transit

Delivered

Completed

Cancelled

Refunded

Returned

------------------------------------------------------------

# PAYMENT STATUS

Pending

Authorised

Paid

Partially Refunded

Refunded

Failed

Cancelled

------------------------------------------------------------

# SHIPPING STATUS

Preparing Shipment

Awaiting Collection

Dispatched

In Transit

Out For Delivery

Delivered

Delivery Failed

Returned To Sender

------------------------------------------------------------

# ORDER TIMELINE

Every order records

Creation

Payment

Supplier Acceptance

Dispatch

Tracking Updates

Delivery

Return Events

Refund Events

------------------------------------------------------------

# ENDPOINT

GET /orders/{order_id}/tracking

Purpose

Retrieve shipment tracking.

Returns

Carrier

Tracking Number

Tracking URL

Shipment Status

Tracking Events

Estimated Delivery Date

------------------------------------------------------------

# ENDPOINT

GET /orders/{order_id}/invoice

Purpose

Retrieve invoice.

Supported Formats

PDF

Future

Electronic Invoice API

------------------------------------------------------------

# ENDPOINT

POST /orders/{order_id}/cancel

Purpose

Request order cancellation.

Business Rules

Cancellation is only permitted before supplier processing begins.

Refunds follow the payment provider's settlement rules.

------------------------------------------------------------

# ENDPOINT

POST /orders/{order_id}/return

Purpose

Create a return request.

Required Information

Reason

Products

Quantity

Photos (Optional)

Comments

------------------------------------------------------------

# RETURN REASONS

Damaged Item

Wrong Item

Changed Mind

Defective Product

Missing Item

Other

------------------------------------------------------------

# ENDPOINT

GET /orders/{order_id}/returns

Purpose

Retrieve return requests.

------------------------------------------------------------

# ENDPOINT

POST /orders/{order_id}/refund

Purpose

Request a refund.

Refund Types

Full Refund

Partial Refund

Store Credit

Gift Card Credit

------------------------------------------------------------

# CUSTOMER NOTIFICATIONS

Automatically Sent

Order Confirmation

Payment Confirmation

Shipment Confirmation

Tracking Updates

Out For Delivery

Delivered

Return Updates

Refund Confirmation

------------------------------------------------------------

# DSERS INTEGRATION

Order Export

Automatic Supplier Submission

Tracking Import

Shipment Synchronisation

Status Synchronisation

------------------------------------------------------------

# ADMIN FEATURES

Search Orders

Filter Orders

Manual Status Update

Issue Refund

Download Invoice

Export Orders

Order Notes

------------------------------------------------------------

# BUSINESS RULES

Orders become immutable after payment confirmation.

Prices remain fixed after order creation.

Inventory is reserved after successful payment.

Tracking information is synchronised automatically.

------------------------------------------------------------

# ERROR CODES

ORDER_NOT_FOUND

ORDER_ALREADY_CANCELLED

ORDER_NOT_CANCELLABLE

RETURN_NOT_ALLOWED

REFUND_NOT_ALLOWED

TRACKING_NOT_AVAILABLE

INVALID_ORDER_STATUS

------------------------------------------------------------

# RATE LIMITS

Retrieve Orders

120 requests/minute

Retrieve Order Details

120 requests/minute

Cancellation Requests

10 requests/hour

Return Requests

20 requests/hour

------------------------------------------------------------

# FUTURE FEATURES

Partial Shipment Support

Split Orders

Scheduled Delivery

Gift Orders

Subscription Orders

Digital Products

AI Delivery Predictions

------------------------------------------------------------

# NEXT CHAPTER

Chapter 8

Payment API

Topics

• Payment Processing

• Payment Providers

• Tokenisation

• Refunds

• Payment Events

• Fraud Prevention

End of Chapter 7.
