# ============================================================
# CHAPTER 10
# MARKETING, PROMOTIONS & CUSTOMER ENGAGEMENT
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

This chapter defines the marketing infrastructure for the Bliss Glow
platform.

The objective is to increase customer acquisition, improve retention,
encourage repeat purchases, and build long-term customer loyalty.

The architecture must support:

• Promotional campaigns
• Discount coupons
• Gift cards
• Loyalty programme
• Referral programme
• Email marketing
• SMS marketing (Future)
• Push notifications (Future)
• Customer segmentation
• Marketing analytics

------------------------------------------------------------

# MARKETING ECOSYSTEM

Visitor

↓

Customer

↓

First Purchase

↓

Email Automation

↓

Second Purchase

↓

Loyalty Rewards

↓

VIP Customer

↓

Brand Advocate

------------------------------------------------------------

# TABLE: promotions

Purpose

Stores promotional campaigns.

Columns

id

promotion_name

description

promotion_type

status

start_date

end_date

priority

created_at

updated_at

------------------------------------------------------------

Promotion Types

Percentage Discount

Fixed Discount

Free Shipping

Buy One Get One

Bundle Discount

Category Discount

Flash Sale

Seasonal Sale

------------------------------------------------------------

# TABLE: promotion_products

Purpose

Links promotions to products.

Columns

id

promotion_id

product_id

discount_amount

discount_percentage

priority

------------------------------------------------------------

Supports

Product-specific promotions

Category promotions

Brand promotions

------------------------------------------------------------

# TABLE: gift_cards

Purpose

Stores digital gift cards.

Columns

id

gift_code

initial_balance

current_balance

currency

expiry_date

purchased_by

redeemed_by

status

created_at

------------------------------------------------------------

Gift Card Status

Active

Redeemed

Expired

Cancelled

------------------------------------------------------------

# TABLE: loyalty_accounts

Purpose

Stores customer loyalty information.

Columns

id

customer_id

membership_level

reward_points

lifetime_points

points_expiration

created_at

updated_at

------------------------------------------------------------

Membership Levels

Bronze

Silver

Gold

Platinum

Diamond

------------------------------------------------------------

# TABLE: loyalty_transactions

Purpose

Tracks reward point activity.

Columns

id

customer_id

transaction_type

points

reference_order_id

description

created_at

------------------------------------------------------------

Transaction Types

Earned

Redeemed

Expired

Adjusted

Bonus

------------------------------------------------------------

# TABLE: referral_program

Purpose

Stores customer referral data.

Columns

id

referrer_customer_id

referred_customer_id

referral_code

reward_status

reward_points

created_at

------------------------------------------------------------

Reward Status

Pending

Approved

Paid

Cancelled

------------------------------------------------------------

# TABLE: email_campaigns

Purpose

Stores marketing email campaigns.

Columns

id

campaign_name

subject

audience

scheduled_at

sent_at

status

created_at

------------------------------------------------------------

Audience Types

All Customers

VIP Customers

New Customers

Inactive Customers

Newsletter Subscribers

Custom Segment

------------------------------------------------------------

# TABLE: email_logs

Purpose

Stores email delivery history.

Columns

id

campaign_id

customer_id

delivery_status

opened

clicked

bounced

sent_at

opened_at

------------------------------------------------------------

# TABLE: customer_segments

Purpose

Groups customers for marketing.

Examples

First Purchase

Repeat Customers

VIP

High Spending

Inactive

Abandoned Cart

Newsletter Only

------------------------------------------------------------

# TABLE: wishlists

Purpose

Stores customer saved products.

Columns

id

customer_id

product_id

created_at

------------------------------------------------------------

Business Rules

Unlimited wishlist items.

Support future "Share Wishlist" feature.

------------------------------------------------------------

# ABANDONED CART AUTOMATION

Track

Customer

Cart Value

Products

Last Activity

Recovery Email

Recovered Order

Recovery Revenue

------------------------------------------------------------

# FUTURE AUTOMATIONS

Birthday Discounts

Anniversary Rewards

Win-back Campaigns

Product Restock Alerts

Price Drop Notifications

Back-in-Stock Emails

AI Product Recommendations

------------------------------------------------------------

# CUSTOMER ENGAGEMENT METRICS

Track

Customer Lifetime Value (CLV)

Repeat Purchase Rate

Average Order Value (AOV)

Email Open Rate

Email Click Rate

Referral Conversion

Loyalty Redemption Rate

------------------------------------------------------------

# BUSINESS RULES

Promotions must never create negative prices.

Gift cards cannot exceed available balance.

Reward points expire according to programme rules.

Referral rewards are granted only after qualifying purchases.

------------------------------------------------------------

# INDEXES

Create indexes for

promotion_name

customer_id

membership_level

campaign_name

referral_code

status

created_at

------------------------------------------------------------

# PERFORMANCE

Support:

Millions of loyalty transactions

High-volume email campaigns

Real-time promotion validation

Fast customer segmentation

------------------------------------------------------------

# NEXT CHAPTER

Chapter 11

Content Management System (CMS)

Topics

• Static Pages

• Blog

• FAQs

• Media Library

• Navigation Menus

• SEO Content

End of Chapter 10.
