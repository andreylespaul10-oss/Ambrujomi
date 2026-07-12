# CHAPTER 8
# PAYMENT API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Payment API manages secure payment processing for all customer
transactions.

The architecture is provider-agnostic, allowing multiple payment gateways
to operate through a unified API while maintaining PCI DSS compliance.

Objectives

• Secure payment processing
• Payment authorisation
• Payment capture
• Refund management
• Tokenised payment methods
• Fraud prevention
• Multi-currency readiness
• High availability

------------------------------------------------------------

# PAYMENT FLOW

Checkout

↓

Payment Initialised

↓

Payment Provider

↓

Authorisation

↓

Fraud Validation

↓

Payment Captured

↓

Order Confirmed

↓

Receipt Issued

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/payments

Authentication

Required

JWT Bearer Token

------------------------------------------------------------

# SUPPORTED PAYMENT PROVIDERS

Primary

Stripe

PayPal

Apple Pay

Google Pay

Gift Cards

Store Credit

Future Providers

Klarna

Clearpay

Amazon Pay

Revolut Pay

------------------------------------------------------------

# ENDPOINT

GET /payments/methods

Purpose

Retrieve available payment methods.

Response Includes

Method Name

Supported Currencies

Supported Countries

Processing Fees (if applicable)

Availability

------------------------------------------------------------

# ENDPOINT

POST /payments/intent

Purpose

Create a payment intent.

Request Body

{
  "order_id": "UUID",
  "payment_method": "stripe",
  "currency": "GBP"
}

Response

Payment Intent ID

Client Secret

Status

Expiration Time

------------------------------------------------------------

# ENDPOINT

POST /payments/confirm

Purpose

Confirm a payment after customer authorisation.

Response

Payment Status

Transaction ID

Authorisation Code

Receipt Reference

------------------------------------------------------------

# PAYMENT STATUS

Pending

Authorised

Captured

Completed

Failed

Cancelled

Expired

Refunded

Partially Refunded

Chargeback

------------------------------------------------------------

# ENDPOINT

GET /payments/{payment_id}

Purpose

Retrieve payment details.

Response Includes

Payment ID

Order ID

Provider

Status

Amount

Currency

Authorisation Code

Transaction Reference

Created At

------------------------------------------------------------

# ENDPOINT

POST /payments/{payment_id}/capture

Purpose

Capture an authorised payment.

Business Rule

Only authorised payments may be captured.

------------------------------------------------------------

# ENDPOINT

POST /payments/{payment_id}/refund

Purpose

Issue a refund.

Refund Types

Full Refund

Partial Refund

Store Credit

Gift Card Credit

------------------------------------------------------------

# TOKENISED PAYMENTS

Sensitive card details are never stored.

Supported

Payment Tokens

Network Tokens

Wallet Tokens

Future Vault Tokens

------------------------------------------------------------

# PAYMENT VALIDATION

Validate

Currency

Amount

Customer

Order

Payment Method

Fraud Score

Duplicate Payment

------------------------------------------------------------

# FRAUD PREVENTION

Support

3D Secure

Address Verification (AVS)

CVV Verification

Velocity Checks

Risk Scoring

Suspicious Activity Detection

IP Reputation

Device Fingerprinting (Future)

------------------------------------------------------------

# PAYMENT RECEIPTS

Automatically Generated

Payment Confirmation

Refund Confirmation

Failed Payment Notification

------------------------------------------------------------

# WEBHOOK EVENTS

payment.created

payment.authorised

payment.captured

payment.failed

payment.cancelled

payment.refunded

payment.chargeback

------------------------------------------------------------

# BUSINESS RULES

Payments must always reference a valid order.

Duplicate payment attempts should be prevented.

Refund amounts cannot exceed the captured amount.

All financial events must be recorded in the audit log.

------------------------------------------------------------

# ERROR CODES

PAYMENT_NOT_FOUND

PAYMENT_DECLINED

PAYMENT_EXPIRED

INVALID_PAYMENT_METHOD

PAYMENT_ALREADY_CAPTURED

REFUND_LIMIT_EXCEEDED

FRAUD_CHECK_FAILED

------------------------------------------------------------

# RATE LIMITS

Create Payment Intent

60 requests/minute

Confirm Payment

30 requests/minute

Retrieve Payment

120 requests/minute

Refund Requests

20 requests/hour

------------------------------------------------------------

# PCI DSS COMPLIANCE

Requirements

No raw card storage

Encrypted communication (TLS)

Provider-hosted payment forms where possible

Secure token exchange

Regular security reviews

------------------------------------------------------------

# FUTURE FEATURES

One-Click Payments

Subscription Billing

Split Payments

Installment Payments

AI Fraud Detection

Smart Payment Routing

Cryptocurrency Payments (Optional)

------------------------------------------------------------

# NEXT CHAPTER

Chapter 9

Administration API

Topics

• Products

• Orders

• Customers

• Reports

• CMS

• System Settings

End of Chapter 8.
