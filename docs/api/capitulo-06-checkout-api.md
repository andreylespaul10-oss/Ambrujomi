# CHAPTER 6
# CHECKOUT API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Checkout API manages the complete purchase process, from validating
the shopping cart to creating a confirmed order.

The checkout experience must be fast, secure and optimised for maximum
conversion while supporting both guest and registered customers.

------------------------------------------------------------

# CHECKOUT FLOW

Shopping Cart

↓

Customer Information

↓

Shipping Address

↓

Shipping Method

↓

Billing Address

↓

Payment Method

↓

Order Validation

↓

Payment Processing

↓

Order Confirmation

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/checkout

Authentication

Optional

Supports guest checkout and authenticated customers.

------------------------------------------------------------

# ENDPOINT

GET /checkout

Purpose

Retrieve the current checkout summary.

Response Includes

Customer Details

Shipping Address

Billing Address

Items

Shipping Options

Applied Discounts

Taxes

Grand Total

------------------------------------------------------------

# ENDPOINT

POST /checkout/customer

Purpose

Save customer information.

Request Body

{
  "email": "emma.taylor@example.com",
  "first_name": "Emma",
  "last_name": "Taylor",
  "phone": "+44XXXXXXXXXX"
}

Business Rules

Email is required.

Guest customers may continue without creating an account.

------------------------------------------------------------

# ENDPOINT

POST /checkout/shipping-address

Purpose

Save the shipping address.

Required Fields

Country

County

City

Postcode

Address Line 1

Recipient Name

Phone Number

------------------------------------------------------------

# ENDPOINT

POST /checkout/billing-address

Purpose

Save the billing address.

Business Rule

Customers may choose to use the same address as the shipping address.

------------------------------------------------------------

# ENDPOINT

GET /checkout/shipping-methods

Purpose

Retrieve available shipping methods.

Example Response

Standard Delivery

Express Delivery

Next Day Delivery

Free Delivery (when eligible)

Each option returns

Carrier

Estimated Delivery Date

Shipping Cost

Tracking Availability

------------------------------------------------------------

# ENDPOINT

POST /checkout/shipping-method

Purpose

Select the preferred shipping method.

Business Rules

Only valid methods for the destination postcode are returned.

Shipping prices are recalculated automatically.

------------------------------------------------------------

# ENDPOINT

GET /checkout/payment-methods

Purpose

Retrieve available payment methods.

Supported Methods

Credit Card

Debit Card

PayPal

Apple Pay

Google Pay

Gift Card

Store Credit

Future Methods

Klarna

Clearpay

------------------------------------------------------------

# ENDPOINT

POST /checkout/payment

Purpose

Submit payment information.

Business Rules

Sensitive payment information must never be stored directly.

All card processing must use secure payment provider tokens.

------------------------------------------------------------

# ENDPOINT

POST /checkout/validate

Purpose

Validate the checkout before creating an order.

Validation Includes

Stock Availability

Product Prices

Discount Eligibility

Coupon Validity

Gift Card Balance

Shipping Availability

Tax Calculation

Fraud Checks

------------------------------------------------------------

# ENDPOINT

POST /checkout/complete

Purpose

Create the order after successful validation and payment.

Response

HTTP 201 Created

Returns

Order ID

Order Number

Payment Status

Estimated Delivery Date

Tracking Availability

------------------------------------------------------------

# CHECKOUT RESPONSE

Fields

Checkout ID

Customer

Items

Shipping Method

Billing Address

Shipping Address

Subtotal

Discount

Shipping

Taxes

Grand Total

Currency

------------------------------------------------------------

# GUEST CHECKOUT

Supported

Yes

Guest customers receive

Order Confirmation Email

Order Tracking Link

Optional Account Creation Invitation

------------------------------------------------------------

# CHECKOUT SECURITY

Mandatory

HTTPS

Payment Tokenisation

Fraud Detection

Rate Limiting

Server-side Validation

Address Validation

------------------------------------------------------------

# BUSINESS RULES

Orders cannot be created with unavailable products.

Checkout totals are recalculated before payment.

Coupons are validated at the final stage.

Payment authorisation is required before order creation.

------------------------------------------------------------

# ERROR CODES

CHECKOUT_NOT_FOUND

INVALID_SHIPPING_METHOD

INVALID_PAYMENT_METHOD

PAYMENT_DECLINED

INSUFFICIENT_STOCK

ADDRESS_INVALID

CHECKOUT_VALIDATION_FAILED

------------------------------------------------------------

# RATE LIMITS

Checkout Summary

120 requests/minute

Checkout Updates

60 requests/minute

Complete Checkout

20 requests/minute

------------------------------------------------------------

# FUTURE FEATURES

One-Click Checkout

Express Checkout

Saved Checkout Profiles

Subscription Checkout

Split Payments

Buy Now Button

AI Fraud Detection

------------------------------------------------------------

# NEXT CHAPTER

Chapter 7

Orders API

Topics

• Order Details

• Order Status

• Tracking

• Returns

• Refunds

• Invoices

End of Chapter 6.
