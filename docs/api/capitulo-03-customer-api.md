# CHAPTER 3
# CUSTOMER API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Customer API manages customer accounts, personal information,
preferences, saved addresses, wishlists, notification settings and
account-related operations.

The API is designed to provide a secure and personalised customer
experience across all Bliss Glow platforms.

------------------------------------------------------------

# CUSTOMER LIFECYCLE

Visitor

↓

Registration

↓

Email Verification

↓

Customer Account

↓

Orders

↓

Loyalty Programme

↓

VIP Customer

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/customers

Authentication

Required

JWT Bearer Token

------------------------------------------------------------

# ENDPOINT

GET /me

Purpose

Retrieve the authenticated customer's profile.

Authentication

Required

Response

HTTP 200 OK

{
  "id": "UUID",
  "first_name": "Emma",
  "last_name": "Taylor",
  "email": "emma.taylor@example.com",
  "phone": "+44XXXXXXXXXX",
  "date_of_birth": "1998-03-15",
  "membership_level": "Gold",
  "reward_points": 2450,
  "created_at": "2026-01-10T10:00:00Z"
}

------------------------------------------------------------

# ENDPOINT

PATCH /me

Purpose

Update customer profile information.

Editable Fields

First Name

Last Name

Phone Number

Date of Birth

Marketing Preferences

Communication Preferences

Preferred Currency

Preferred Language

------------------------------------------------------------

# ENDPOINT

DELETE /me

Purpose

Request account deletion.

Business Rules

Customer identity must be verified.

Completed orders remain stored for legal and accounting purposes.

Personal information is anonymised where required by UK GDPR.

------------------------------------------------------------

# ADDRESS MANAGEMENT

------------------------------------------------------------

GET /addresses

Retrieve all saved addresses.

------------------------------------------------------------

POST /addresses

Create a new address.

Fields

Recipient Name

Phone Number

Country

County

City

Postcode

Address Line 1

Address Line 2

Default Address

------------------------------------------------------------

PATCH /addresses/{address_id}

Update an existing address.

------------------------------------------------------------

DELETE /addresses/{address_id}

Delete a saved address.

Business Rule

The default address cannot be deleted until another default address is assigned.

------------------------------------------------------------

# WISHLIST API

GET /wishlist

Retrieve saved wishlist items.

------------------------------------------------------------

POST /wishlist

Add a product to the wishlist.

------------------------------------------------------------

DELETE /wishlist/{product_id}

Remove a product from the wishlist.

Business Rules

Duplicate products are not permitted.

Wishlist supports unlimited items.

Future support for wishlist sharing.

------------------------------------------------------------

# ORDER HISTORY

GET /orders

Retrieve all customer orders.

Supports

Pagination

Filtering

Sorting

Search by Order Number

------------------------------------------------------------

GET /orders/{order_id}

Retrieve detailed order information.

Includes

Order Items

Shipment Status

Tracking Information

Payment Status

Invoices

------------------------------------------------------------

# NOTIFICATION PREFERENCES

GET /notifications/preferences

Retrieve communication preferences.

------------------------------------------------------------

PATCH /notifications/preferences

Update preferences.

Options

Email Marketing

Order Updates

Shipping Updates

Product Recommendations

Promotional Campaigns

Security Alerts

------------------------------------------------------------

# LOYALTY PROGRAMME

GET /loyalty

Retrieve loyalty account details.

Response

Membership Level

Available Points

Lifetime Points

Points Expiration

Reward History

------------------------------------------------------------

# SAVED PAYMENT METHODS

GET /payment-methods

Retrieve saved payment methods.

------------------------------------------------------------

POST /payment-methods

Add a payment method.

Future Support

Tokenised Cards

Apple Pay

Google Pay

PayPal

------------------------------------------------------------

DELETE /payment-methods/{payment_method_id}

Remove a saved payment method.

------------------------------------------------------------

# CUSTOMER PREFERENCES

GET /preferences

Retrieve preferences.

Fields

Language

Currency

Theme (Future)

Beauty Interests

Skin Type

Hair Type

Product Preferences

------------------------------------------------------------

PATCH /preferences

Update customer preferences.

------------------------------------------------------------

# ACCOUNT SECURITY

GET /security/sessions

Retrieve active sessions.

------------------------------------------------------------

DELETE /security/sessions/{session_id}

Terminate a specific session.

------------------------------------------------------------

POST /security/change-password

Change account password.

Business Rules

Current password required.

New password must meet security policy.

------------------------------------------------------------

# CUSTOMER DASHBOARD

Display

Recent Orders

Wishlist Summary

Reward Points

Recommended Products

Recently Viewed

Saved Addresses

Account Status

------------------------------------------------------------

# ERROR CODES

CUSTOMER_NOT_FOUND

ADDRESS_NOT_FOUND

INVALID_ADDRESS

WISHLIST_ITEM_EXISTS

PAYMENT_METHOD_NOT_FOUND

INVALID_PREFERENCE

ACCOUNT_DELETION_DENIED

------------------------------------------------------------

# RATE LIMITS

Profile Requests

120 requests/minute

Profile Updates

30 requests/minute

Wishlist Operations

60 requests/minute

Address Operations

30 requests/minute

------------------------------------------------------------

# FUTURE FEATURES

Family Accounts

Gift Registry

Shared Wishlist

Beauty Profile

Skin Analysis

AI Personal Shopping Assistant

Subscription Management

------------------------------------------------------------

# NEXT CHAPTER

Chapter 4

Product API

Topics

• Products

• Categories

• Brands

• Collections

• Product Search

• Product Filters

• Product Reviews

End of Chapter 3.
