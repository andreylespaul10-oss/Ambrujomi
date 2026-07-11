# ============================================================
# CHAPTER 6
# SHOPPING CART & CHECKOUT
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

This chapter defines the complete shopping cart and checkout architecture.

The checkout must be:

• Fast
• Secure
• Mobile-first
• Conversion optimized
• Ready for guest checkout
• Ready for registered customers

The purchasing process should require as few steps as possible while collecting all required information.

------------------------------------------------------------

# CHECKOUT PRINCIPLES

Goals:

• Reduce cart abandonment

• Minimize user friction

• Support discount codes

• Support multiple payment methods

• Calculate shipping automatically

• Save customer progress

------------------------------------------------------------

# TABLE: shopping_carts

Purpose

Stores active shopping carts.

Columns

id

user_id (nullable)

session_id

cart_status

currency

subtotal

discount_total

shipping_total

tax_total

grand_total

expires_at

created_at

updated_at

------------------------------------------------------------

Cart Status

ACTIVE

ABANDONED

CONVERTED

EXPIRED

------------------------------------------------------------

Business Rules

Guest users may have carts.

Registered users may recover carts.

Only one active cart per customer.

------------------------------------------------------------

# TABLE: cart_items

Purpose

Stores items inside the shopping cart.

Columns

id

cart_id

product_id

product_variant_id

quantity

unit_price

discount

line_total

created_at

updated_at

------------------------------------------------------------

Business Rules

Quantity must always be greater than zero.

Inventory availability must be verified before checkout.

------------------------------------------------------------

# TABLE: checkout_sessions

Purpose

Stores checkout progress.

Columns

id

cart_id

user_id

checkout_step

shipping_address_id

billing_address_id

shipping_method_id

payment_method_id

status

created_at

updated_at

------------------------------------------------------------

Checkout Steps

Customer Information

↓

Shipping Address

↓

Shipping Method

↓

Payment

↓

Review

↓

Order Confirmation

------------------------------------------------------------

# TABLE: coupons

Purpose

Stores promotional discount codes.

Columns

id

code

description

discount_type

discount_value

minimum_order_value

maximum_discount

usage_limit

usage_count

start_date

end_date

status

created_at

updated_at

------------------------------------------------------------

Discount Types

Percentage

Fixed Amount

Free Shipping

Gift

------------------------------------------------------------

Business Rules

Expired coupons cannot be applied.

Usage limits must be enforced.

Coupons may be restricted by product, category, or customer segment.

------------------------------------------------------------

# TABLE: coupon_redemptions

Purpose

Tracks coupon usage.

Columns

id

coupon_id

user_id

order_id

discount_amount

redeemed_at

------------------------------------------------------------

# SHIPPING CALCULATION

Inputs

Destination

Product Dimensions

Weight

Shipping Method

Supplier

Output

Shipping Cost

Estimated Delivery

Carrier

Tracking Availability

------------------------------------------------------------

# TAX CALCULATION

Support

Country Rules

Regional Rules

Future VAT Configuration

Tax Exempt Orders

------------------------------------------------------------

# GUEST CHECKOUT

Allow purchases without account creation.

Store

Email

Shipping Address

Billing Address

Order Information

Offer account creation after purchase.

------------------------------------------------------------

# PAYMENT PREPARATION

The checkout must support multiple payment gateways.

Payment is created only after:

Customer confirms order

↓

Inventory validation

↓

Coupon validation

↓

Shipping validation

↓

Fraud checks (future)

------------------------------------------------------------

# ABANDONED CART RECOVERY

Track

Customer

Products

Cart Value

Last Activity

Recovery Email Sent

Recovered

Recovery Date

------------------------------------------------------------

# CHECKOUT VALIDATION

Validate

Inventory

Product Availability

Coupon Validity

Shipping Address

Payment Method

Customer Information

------------------------------------------------------------

# PERFORMANCE

Checkout pages should:

Load quickly

Autosave progress

Recover interrupted sessions

Prevent duplicate submissions

------------------------------------------------------------

# FUTURE FEATURES

One-Click Checkout

Express Checkout

Apple Pay

Google Pay

Buy Now Button

Saved Payment Methods

Subscription Products

------------------------------------------------------------

# INDEXES

Create indexes for

user_id

session_id

cart_status

coupon_code

checkout_status

------------------------------------------------------------

# NEXT CHAPTER

Chapter 7

Orders & Order Management

Topics

• Orders

• Order Items

• Order Status History

• Returns

• Refunds

• Customer Timeline

End of Chapter 6.
