# CHAPTER 13
# CHECKOUT COMPONENTS
# Bliss Glow Design System
# Version 1.0
# ============================================================

# PURPOSE

The Checkout Components define every interface involved in completing a
purchase on the Bliss Glow platform.

The checkout experience must be fast, trustworthy, intuitive and
optimised to minimise basket abandonment while maintaining full
accessibility.

------------------------------------------------------------

# DESIGN PRINCIPLES

The checkout should be:

• Simple

• Secure

• Transparent

• Fast

• Mobile-first

• Conversion-focused

------------------------------------------------------------

# CHECKOUT FLOW

Basket

↓

Customer Details

↓

Delivery Address

↓

Delivery Method

↓

Payment

↓

Order Review

↓

Confirmation

Customers should always be able to return to previous steps without
losing entered information.

------------------------------------------------------------

# PROGRESS INDICATOR

Display

Horizontal Stepper

Desktop

Full labels

Mobile

Icons with short labels

Completed steps

Green checkmark

Current step

Primary Brand Colour

------------------------------------------------------------

# ORDER SUMMARY

Sticky on desktop

Displayed at every checkout step

Includes

Products

Quantity

Subtotal

Discount

Delivery

VAT

Total

Estimated Delivery Date

------------------------------------------------------------

# DELIVERY ADDRESS

Fields

Full Name

Telephone

Address Line 1

Address Line 2

City

County

Postcode

Country

Address Lookup (Future)

------------------------------------------------------------

# DELIVERY METHODS

Standard Delivery

Express Delivery

Next-Day Delivery

Click & Collect (Future)

Locker Collection (Future)

Each option displays

Price

Estimated Delivery Date

Description

------------------------------------------------------------

# PAYMENT METHODS

Supported

Credit Card

Debit Card

PayPal

Apple Pay

Google Pay

Gift Card

Store Credit

Future

Klarna

Clearpay

Amazon Pay

------------------------------------------------------------

# PAYMENT FORM

Features

Card Number Formatting

Expiry Date Formatting

CVV Validation

Card Brand Detection

Secure Payment Indicators

Tokenised Payment Processing

------------------------------------------------------------

# DISCOUNT COMPONENTS

Coupon Code

Gift Card

Store Credit

Reward Points

Validation occurs instantly.

------------------------------------------------------------

# ORDER REVIEW

Display

Product Images

Item Details

Delivery Address

Delivery Method

Payment Method

Price Breakdown

Order Notes

Terms Acceptance

------------------------------------------------------------

# CONFIRMATION PAGE

Displays

Order Number

Confirmation Message

Estimated Delivery

Tracking Information

Download Invoice

Continue Shopping

Create Account (Guest Checkout)

------------------------------------------------------------

# ERROR HANDLING

Errors must be:

Specific

Helpful

Inline where possible

Non-blocking when appropriate

Examples

Invalid postcode

Expired payment card

Insufficient funds

Payment provider unavailable

------------------------------------------------------------

# LOADING STATES

Skeleton loaders

Progress indicators

Disabled submit button

Loading animation

Prevent duplicate submissions

------------------------------------------------------------

# TRUST ELEMENTS

SSL Secure Checkout

Accepted Payment Logos

Money-Back Guarantee

Verified Reviews

Customer Support Contact

Privacy Assurance

------------------------------------------------------------

# RESPONSIVE BEHAVIOUR

Desktop

Two-column layout

Sticky order summary

Tablet

Adaptive layout

Mobile

Single-column

Sticky checkout button

Large touch targets

------------------------------------------------------------

# ACCESSIBILITY

Keyboard navigation

Visible focus indicators

Screen reader support

Accessible form labels

Error announcements

WCAG 2.2 AA compliance

------------------------------------------------------------

# PERFORMANCE

Lazy-load non-critical content.

Cache basket data.

Optimise payment initialisation.

Load third-party scripts only when required.

Maintain Core Web Vitals compliance.

------------------------------------------------------------

# DESIGN TOKENS

checkout.step.active

checkout.step.completed

checkout.summary.background

checkout.payment.border

checkout.button.primary

checkout.success.colour

------------------------------------------------------------

# BEST PRACTICES

Minimise the number of required fields.

Provide guest checkout.

Clearly display total cost before payment.

Offer multiple trusted payment methods.

Never surprise customers with hidden fees.

------------------------------------------------------------

# FUTURE ENHANCEMENTS

One-Click Checkout

AI Checkout Assistant

Biometric Authentication

Smart Address Autocomplete

Dynamic Delivery Estimates

Personalised Payment Recommendations

------------------------------------------------------------

# NEXT CHAPTER

Chapter 14

Admin Dashboard UI

Topics

• Dashboard Layout

• Widgets

• Data Tables

• Charts

• Navigation

• Responsive Admin Experience

End of Chapter 13.
