# ============================================================
# PART 8 — SHOPPING CART SPECIFICATION
# Bliss Glow
# ============================================================

# SHOPPING CART OBJECTIVE

The Shopping Cart is the bridge between product discovery and checkout.

Its primary goals are:

• Minimize cart abandonment
• Increase Average Order Value (AOV)
• Keep the customer informed
• Make editing the cart effortless
• Build trust before checkout

The cart experience must feel fast, intuitive and reassuring.

------------------------------------------------------------

# CART TYPES

The platform must support two shopping cart experiences:

1. Mini Cart (Side Drawer)

Appears when:
- Product is added to cart
- User clicks the cart icon

Contains:
- Product image
- Product name
- Variant
- Quantity
- Price
- Remove button
- Cart subtotal
- Continue Shopping button
- Checkout button

The Mini Cart must slide in smoothly without reloading the page.

------------------------------------------------------------

2. Full Cart Page

Contains:

• Breadcrumb
• Cart Items
• Coupon Section
• Shipping Estimator
• Order Summary
• Recommended Products
• Checkout Button
• Continue Shopping Button

------------------------------------------------------------

# CART ITEM COMPONENT

Each product should display:

• Product Image
• Product Name
• Selected Variant
• SKU
• Unit Price
• Quantity Selector
• Subtotal
• Remove Button
• Save for Later (optional)

------------------------------------------------------------

# QUANTITY CONTROLS

Support:

• Increase quantity
• Decrease quantity
• Direct number input

Updating quantities should refresh totals instantly without reloading the page.

------------------------------------------------------------

# REMOVE ITEM

When removing an item:

• Show smooth animation
• Update totals immediately
• Offer an Undo option for a short period

------------------------------------------------------------

# SAVE FOR LATER

Users may move products from the cart to a saved list without deleting them permanently.

------------------------------------------------------------

# COUPON SYSTEM

Allow customers to:

• Enter coupon code
• Apply coupon
• Remove coupon
• See discount details

Display clear messages for:

• Valid coupon
• Invalid coupon
• Expired coupon
• Minimum purchase not reached

------------------------------------------------------------

# SHIPPING ESTIMATOR

Customers can:

• Enter ZIP/Postal Code
• View shipping methods
• Compare shipping prices
• View estimated delivery dates

Shipping values should update dynamically.

------------------------------------------------------------

# ORDER SUMMARY

Display:

• Subtotal
• Shipping Cost
• Discount
• Taxes (if applicable)
• Estimated Total
• Savings

Totals must update instantly whenever the cart changes.

------------------------------------------------------------

# RECOMMENDED PRODUCTS

Display products based on:

• Similar products
• Frequently bought together
• Customer purchase history
• AI recommendations (future feature)

Allow Add to Cart directly from this section.

------------------------------------------------------------

# TRUST ELEMENTS

Show:

• Secure Checkout badge
• Money-back guarantee
• Easy returns
• Customer support availability
• Accepted payment methods

------------------------------------------------------------

# EMPTY CART

If the cart is empty:

Display:

• Friendly illustration
• Informative message
• "Start Shopping" button
• Featured categories
• Best-selling products

------------------------------------------------------------

# RESPONSIVE DESIGN

Desktop:

• Two-column layout
• Cart items on the left
• Summary on the right (sticky)

Tablet:

• Optimized spacing
• Collapsible summary if needed

Mobile:

• Single-column layout
• Sticky Checkout button
• Large touch controls

------------------------------------------------------------

# PERFORMANCE

Requirements:

• Instant cart updates
• Optimized images
• Lazy loading for recommendations
• Minimal layout shift
• Fast rendering

------------------------------------------------------------

# ACCESSIBILITY

Support:

• Keyboard navigation
• Screen readers
• Accessible quantity controls
• Visible focus states
• High contrast
• Large touch targets

------------------------------------------------------------

# INTERACTIVE PROTOTYPE REQUIREMENTS

The interactive prototype must allow users to:

• Open and close the Mini Cart
• Increase or decrease product quantities
• Remove products
• Undo product removal
• Save products for later
• Apply and remove coupons
• Calculate shipping
• View updated totals instantly
• Add recommended products to the cart
• Proceed to Checkout
• Return to Shopping

Every interaction should mimic the behavior of a production-ready e-commerce website.

------------------------------------------------------------

# DESIGN GOALS

The Shopping Cart should feel:

• Fast
• Clean
• Premium
• Trustworthy
• Easy to edit
• Conversion-focused
• Mobile-first

End of Part 8.
