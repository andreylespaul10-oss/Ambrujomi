# CHAPTER 5
# SHOPPING CART API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Shopping Cart API manages customer and guest shopping carts,
allowing products to be added, updated and removed before checkout.

The system must provide a fast, reliable and secure shopping experience,
with automatic validation of pricing, promotions and inventory.

------------------------------------------------------------

# CART WORKFLOW

Browse Products

↓

Add to Cart

↓

Update Quantity

↓

Apply Coupon

↓

Calculate Totals

↓

Validate Inventory

↓

Proceed to Checkout

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/cart

Authentication

Optional

Supports authenticated customers and guest users.

------------------------------------------------------------

# CART TYPES

Customer Cart

Linked to a registered customer account.

Guest Cart

Linked to a temporary session token.

Business Rule

Guest carts can be merged into a customer cart after login.

------------------------------------------------------------

# ENDPOINT

GET /cart

Purpose

Retrieve the current shopping cart.

Response Includes

Cart ID

Items

Subtotal

Discounts

Shipping Estimate

Taxes

Grand Total

Currency

Applied Coupons

------------------------------------------------------------

# ENDPOINT

POST /cart/items

Purpose

Add a product to the cart.

Request Body

{
  "product_id": "UUID",
  "variant_id": "UUID",
  "quantity": 2
}

Business Rules

Product must exist.

Variant must be available.

Quantity must not exceed available stock.

------------------------------------------------------------

# ENDPOINT

PATCH /cart/items/{item_id}

Purpose

Update the quantity of a cart item.

Request Body

{
  "quantity": 3
}

Business Rules

Minimum quantity: 1

Maximum quantity determined by stock availability.

------------------------------------------------------------

# ENDPOINT

DELETE /cart/items/{item_id}

Purpose

Remove an item from the cart.

Response

HTTP 204 No Content

------------------------------------------------------------

# ENDPOINT

DELETE /cart

Purpose

Empty the entire shopping cart.

Business Rule

This action cannot be undone.

------------------------------------------------------------

# COUPONS

POST /cart/coupons

Purpose

Apply a promotional coupon.

Request

{
  "coupon_code": "WELCOME10"
}

Response

Discount Amount

Updated Totals

Coupon Details

------------------------------------------------------------

DELETE /cart/coupons/{coupon_code}

Purpose

Remove an applied coupon.

------------------------------------------------------------

# GIFT CARDS

POST /cart/gift-cards

Purpose

Apply a gift card balance.

Business Rules

Gift card must be active.

Balance cannot exceed order total.

------------------------------------------------------------

# SHIPPING ESTIMATE

GET /cart/shipping-estimate

Parameters

Country

Postcode

Response

Available Shipping Methods

Estimated Delivery Time

Shipping Cost

------------------------------------------------------------

# CART VALIDATION

Automatically validates

Product Availability

Variant Availability

Current Pricing

Promotions

Coupon Validity

Gift Card Balance

Stock Quantity

------------------------------------------------------------

# CART RESPONSE

Fields

Cart ID

Customer ID

Session ID

Items

Subtotal

Discount Total

Shipping Total

Tax Total

Grand Total

Currency

Item Count

Coupons

Gift Cards

Created At

Updated At

------------------------------------------------------------

# SAVED CARTS

Future Feature

Customers may save carts for later.

Supports

Named Saved Carts

Wishlist Conversion

Cart Sharing

------------------------------------------------------------

# CART EXPIRATION

Guest Cart

30 Days

Authenticated Customer

Persistent until manually cleared or inactive for a configurable period.

------------------------------------------------------------

# ERROR CODES

CART_NOT_FOUND

PRODUCT_OUT_OF_STOCK

INVALID_QUANTITY

INVALID_VARIANT

COUPON_INVALID

COUPON_EXPIRED

COUPON_NOT_APPLICABLE

GIFT_CARD_INVALID

GIFT_CARD_EXPIRED

------------------------------------------------------------

# RATE LIMITS

Cart Retrieval

300 requests/minute

Cart Updates

120 requests/minute

Coupon Operations

30 requests/minute

------------------------------------------------------------

# BUSINESS RULES

Cart prices are recalculated whenever the cart changes.

Promotions are applied automatically where eligible.

Inventory is validated before checkout.

Totals are calculated using the customer's selected currency.

------------------------------------------------------------

# FUTURE FEATURES

One-Click Reorder

Bundle Builder

Subscription Products

AI Cart Recommendations

Cross-Sell Suggestions

Upsell Offers

Abandoned Cart Recovery

------------------------------------------------------------

# NEXT CHAPTER

Chapter 6

Checkout API

Topics

• Customer Details

• Shipping

• Billing

• Payment

• Order Validation

• Order Creation

End of Chapter 5.
