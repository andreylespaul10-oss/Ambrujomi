# ============================================================
# CHAPTER 9
# SHIPPING & FULFILLMENT
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

The Shipping & Fulfillment System manages the complete delivery lifecycle
from supplier dispatch to final customer delivery.

The architecture must support:

• DSers fulfillment
• AliExpress suppliers
• Multiple shipping carriers
• Multiple warehouses
• Split shipments
• Tracking synchronization
• International shipping
• Future owned fulfillment centers

Every shipment must be completely traceable.

------------------------------------------------------------

# SHIPPING ARCHITECTURE

Customer Order

↓

Payment Approved

↓

Supplier Assigned

↓

Fulfillment Created

↓

Package Shipped

↓

Tracking Updates

↓

Delivered

↓

Completed

------------------------------------------------------------

# TABLE: shipping_methods

Purpose

Stores available shipping methods.

Columns

id

name

carrier

service_level

estimated_delivery_days

minimum_delivery_days

maximum_delivery_days

tracking_supported

international

active

created_at

updated_at

------------------------------------------------------------

Examples

Standard Shipping

Express Shipping

Priority Shipping

Economy Shipping

------------------------------------------------------------

# TABLE: shipments

Purpose

Stores shipment information.

Columns

id

order_id

supplier_id

warehouse_id

shipping_method_id

carrier

tracking_number

tracking_url

shipment_status

shipping_cost

estimated_delivery

shipped_at

delivered_at

created_at

updated_at

------------------------------------------------------------

Shipment Status

Pending

Preparing

Ready For Shipment

Shipped

In Transit

Customs Clearance

Out For Delivery

Delivered

Delivery Failed

Returned

Cancelled

------------------------------------------------------------

Business Rules

One order may contain multiple shipments.

Each shipment receives an independent tracking number.

------------------------------------------------------------

# TABLE: shipment_items

Purpose

Stores products included in each shipment.

Columns

id

shipment_id

order_item_id

product_variant_id

quantity

created_at

------------------------------------------------------------

Supports

Split shipments

Multiple warehouses

Multiple suppliers

------------------------------------------------------------

# TABLE: shipment_tracking_events

Purpose

Stores tracking history.

Columns

id

shipment_id

tracking_status

location

country

carrier_message

event_timestamp

created_at

------------------------------------------------------------

Tracking Examples

Shipment Created

Package Received

Left Warehouse

Arrived At Hub

Customs Clearance

Out For Delivery

Delivered

------------------------------------------------------------

# TABLE: carriers

Purpose

Stores carrier information.

Columns

id

carrier_name

website

tracking_url_template

customer_service_email

customer_service_phone

international_support

status

------------------------------------------------------------

Example Carriers

Royal Mail

Evri

DPD

DHL

FedEx

UPS

AliExpress Standard Shipping

Cainiao

------------------------------------------------------------

# TABLE: shipping_rates

Purpose

Stores shipping pricing rules.

Columns

id

shipping_method_id

country

region

minimum_weight

maximum_weight

minimum_order_value

maximum_order_value

price

currency

------------------------------------------------------------

Supports

Free Shipping

Flat Rate

Weight Based

Region Based

------------------------------------------------------------

# TABLE: shipping_addresses

Purpose

Stores shipping destination snapshots.

Columns

id

order_id

recipient_name

phone

country

state

city

postal_code

street

house_number

complement

reference

------------------------------------------------------------

Purpose

Addresses are copied into the order.

Customer profile updates must never modify historical orders.

------------------------------------------------------------

# DSERS SHIPPING SUPPORT

The system must synchronize:

Tracking Numbers

Shipment Status

Carrier

Estimated Delivery

Supplier Shipment Confirmation

------------------------------------------------------------

# SHIPPING WORKFLOW

Order Paid

↓

Supplier Accepts Order

↓

Supplier Ships Package

↓

Tracking Number Received

↓

Shipment Created

↓

Customer Notification

↓

Tracking Updates

↓

Delivered

------------------------------------------------------------

# CUSTOMER EXPERIENCE

Customers should be able to:

View Shipment Status

Track Package

View Estimated Delivery

Download Invoice

Contact Support

------------------------------------------------------------

# DELIVERY EXCEPTIONS

Support

Delayed Shipment

Lost Package

Damaged Package

Incorrect Address

Customer Not Available

Customs Delay

Returned Shipment

------------------------------------------------------------

# RETURNS LOGISTICS

Future Support

Return Request

Return Label

Warehouse Inspection

Refund Approval

Inventory Adjustment

------------------------------------------------------------

# SHIPPING ANALYTICS

Generate reports for:

Average Delivery Time

Carrier Performance

Supplier Shipping Time

Late Deliveries

Delivery Success Rate

Shipping Costs

Countries Served

------------------------------------------------------------

# INDEXES

Create indexes for

order_id

tracking_number

shipment_status

carrier

supplier_id

warehouse_id

estimated_delivery

------------------------------------------------------------

# PERFORMANCE

Support:

Millions of shipments

Real-time tracking updates

Automatic carrier synchronization

Fast shipment searches

------------------------------------------------------------

# NEXT CHAPTER

Chapter 10

Marketing, Promotions & Customer Engagement

Topics

• Coupons

• Promotions

• Loyalty Program

• Gift Cards

• Email Marketing

• Customer Segmentation

• Referral Program

End of Chapter 9.
