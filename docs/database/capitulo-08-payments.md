# ============================================================
# CHAPTER 8
# PAYMENTS & FINANCIAL TRANSACTIONS
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

The Payment System manages every financial transaction performed within
the Bliss Glow platform.

The architecture must provide:

• Secure payment processing
• Financial traceability
• Refund management
• Gateway integration
• Fraud prevention
• Complete audit history

Every payment event must be permanently recorded.

------------------------------------------------------------

# PAYMENT ARCHITECTURE

Customer

↓

Checkout

↓

Payment Gateway

↓

Authorization

↓

Capture

↓

Order Confirmation

↓

Supplier Fulfillment

------------------------------------------------------------

# TABLE: payments

Purpose

Stores payment records.

Primary Key

id (UUID)

Columns

id

order_id

customer_id

payment_gateway_id

payment_method

currency

subtotal

discount_amount

shipping_amount

tax_amount

total_amount

transaction_reference

gateway_reference

payment_status

authorization_code

captured_at

paid_at

created_at

updated_at

------------------------------------------------------------

Payment Status

PENDING

AUTHORIZED

CAPTURED

PAID

FAILED

DECLINED

CANCELLED

PARTIALLY_REFUNDED

REFUNDED

EXPIRED

------------------------------------------------------------

Payment Methods

Credit Card

Debit Card

Apple Pay

Google Pay

PayPal

Bank Transfer

Future BNPL

Gift Card

Store Credit

------------------------------------------------------------

Business Rules

Each payment belongs to one order.

Transaction references must be unique.

Financial records must never be deleted.

------------------------------------------------------------

# TABLE: payment_gateways

Purpose

Stores supported gateways.

Columns

id

gateway_name

provider

environment

api_version

currency_support

status

created_at

updated_at

------------------------------------------------------------

Example Providers

Stripe

PayPal

Adyen

Checkout.com

Future Local Providers

------------------------------------------------------------

# TABLE: payment_transactions

Purpose

Stores every interaction with payment gateways.

Columns

id

payment_id

transaction_type

request_payload

response_payload

gateway_status

http_status

processing_time

created_at

------------------------------------------------------------

Transaction Types

Authorization

Capture

Refund

Void

Chargeback

Verification

------------------------------------------------------------

# TABLE: refunds

Purpose

Stores refund operations.

Columns

id

payment_id

order_id

refund_amount

refund_reason

gateway_reference

refund_status

processed_by

processed_at

created_at

------------------------------------------------------------

Refund Status

Pending

Approved

Rejected

Processing

Completed

Failed

------------------------------------------------------------

# TABLE: chargebacks

Purpose

Stores disputed payments.

Columns

id

payment_id

gateway_case_id

reason

status

opened_at

resolved_at

------------------------------------------------------------

Chargeback Status

Open

Under Review

Won

Lost

Closed

------------------------------------------------------------

# TABLE: payment_logs

Purpose

Stores audit logs for financial events.

Columns

id

payment_id

event_type

message

performed_by

ip_address

created_at

------------------------------------------------------------

Every financial action must generate a log entry.

------------------------------------------------------------

# FRAUD PREVENTION

Future Features

Risk Score

Velocity Checks

Suspicious IP Detection

Device Fingerprinting

Country Verification

Email Reputation

------------------------------------------------------------

# PAYMENT FLOW

Customer Initiates Payment

↓

Gateway Authorization

↓

Payment Approved

↓

Payment Captured

↓

Order Confirmed

↓

Supplier Notified

↓

Customer Receives Confirmation

------------------------------------------------------------

# FAILED PAYMENT FLOW

Payment Failed

↓

Order Remains Pending

↓

Inventory Reservation Released

↓

Customer Notified

↓

Retry Allowed

------------------------------------------------------------

# REFUND FLOW

Refund Requested

↓

Validation

↓

Gateway Processing

↓

Customer Notification

↓

Financial Report Updated

------------------------------------------------------------

# FINANCIAL REPORTING

Generate reports for:

Daily Revenue

Monthly Revenue

Payment Success Rate

Refund Rate

Chargeback Rate

Gateway Performance

Average Transaction Value

------------------------------------------------------------

# MULTI-CURRENCY SUPPORT

Store:

Original Currency

Settlement Currency

Exchange Rate

Conversion Timestamp

------------------------------------------------------------

# SECURITY REQUIREMENTS

Never store:

Raw card numbers

CVV codes

Sensitive gateway secrets

Use gateway tokens for payment references.

------------------------------------------------------------

# INDEXES

Create indexes for

order_id

customer_id

payment_status

transaction_reference

gateway_reference

created_at

------------------------------------------------------------

# PERFORMANCE

Support:

Millions of payment records

Fast financial reporting

Real-time payment status updates

Gateway retry mechanisms

------------------------------------------------------------

# NEXT CHAPTER

Chapter 9

Shipping & Fulfillment

Topics

• Shipping Methods

• Carriers

• Tracking Numbers

• Delivery Status

• Fulfillment Centers

• Shipment Events

End of Chapter 8.
