# CHAPTER 4
# PRODUCT API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Product API provides access to the complete Bliss Glow catalogue.

It supports:

• Product discovery
• Advanced search
• Categories
• Brands
• Collections
• Product variants
• Reviews
• AI recommendations
• SEO-friendly URLs

The API is optimised for high-performance product browsing.

------------------------------------------------------------

# PRODUCT ARCHITECTURE

Homepage

↓

Collections

↓

Categories

↓

Product Listing

↓

Product Details

↓

Product Variants

↓

Add To Cart

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/products

Authentication

Optional

Some endpoints are public.

------------------------------------------------------------

# ENDPOINT

GET /products

Purpose

Retrieve products.

Supports

Pagination

Sorting

Filtering

Search

Response

HTTP 200 OK

Returns

Products

Pagination

Available Filters

------------------------------------------------------------

# PAGINATION

Parameters

page

limit

Example

GET /products?page=1&limit=24

------------------------------------------------------------

# SORTING

Supported

Newest

Popularity

Best Selling

Highest Rated

Price Ascending

Price Descending

Alphabetical

Recommended

------------------------------------------------------------

# FILTERS

Supported Filters

Category

Brand

Price Range

Skin Type

Hair Type

Product Type

Availability

Rating

Ingredients

Cruelty Free

Vegan

Organic

New Arrival

Best Seller

------------------------------------------------------------

# ENDPOINT

GET /products/{slug}

Purpose

Retrieve detailed product information.

Returns

Basic Information

Description

Images

Gallery

Variants

Inventory Status

Pricing

Discounts

Reviews

Related Products

Frequently Bought Together

SEO Metadata

------------------------------------------------------------

# PRODUCT RESPONSE

Fields

ID

SKU

Slug

Name

Brand

Category

Description

Short Description

Images

Videos (Future)

Variants

Price

Compare Price

Currency

Availability

Rating

Review Count

Tags

Ingredients

Attributes

Shipping Information

------------------------------------------------------------

# PRODUCT VARIANTS

GET

/products/{id}/variants

Examples

Colour

Size

Bundle

Volume

------------------------------------------------------------

# PRODUCT SEARCH

GET

/products/search

Query Parameter

q

Example

/products/search?q=vitamin+c+serum

Features

Autocomplete

Synonyms

Typo Tolerance

AI Semantic Search (Future)

------------------------------------------------------------

# CATEGORIES

GET

/categories

Returns

Category Tree

Subcategories

Product Count

SEO Information

------------------------------------------------------------

# CATEGORY DETAILS

GET

/categories/{slug}

Returns

Category Information

Featured Products

Filters

Collections

------------------------------------------------------------

# BRANDS

GET

/brands

Returns

Brand List

Brand Logo

Description

Product Count

------------------------------------------------------------

# BRAND DETAILS

GET

/brands/{slug}

Returns

Brand Information

Products

Collections

------------------------------------------------------------

# COLLECTIONS

GET

/collections

Examples

New Arrivals

Best Sellers

Summer Collection

Luxury Skincare

Gift Ideas

------------------------------------------------------------

# PRODUCT REVIEWS

GET

/products/{id}/reviews

Supports

Pagination

Rating Filter

Verified Purchase Filter

Sorting

------------------------------------------------------------

POST

/products/{id}/reviews

Authentication

Required

Business Rules

Only verified customers may submit reviews.

One review per purchased product.

------------------------------------------------------------

# RELATED PRODUCTS

GET

/products/{id}/related

Returns

AI Recommendations

Frequently Bought Together

Customers Also Purchased

Similar Products

------------------------------------------------------------

# INVENTORY STATUS

Possible Values

In Stock

Low Stock

Out of Stock

Pre-Order

Discontinued

------------------------------------------------------------

# PRODUCT LABELS

Examples

Best Seller

New

Limited Edition

Exclusive

Online Only

Award Winner

Editor's Choice

------------------------------------------------------------

# PRODUCT MEDIA

Supported

Images

WebP

AVIF

Future

Videos

360° Viewer

AR Models

------------------------------------------------------------

# SEO SUPPORT

Every product includes

SEO Title

SEO Description

Canonical URL

Structured Data

Open Graph Metadata

------------------------------------------------------------

# ERROR CODES

PRODUCT_NOT_FOUND

CATEGORY_NOT_FOUND

BRAND_NOT_FOUND

INVALID_FILTER

INVALID_SORT

REVIEW_NOT_ALLOWED

------------------------------------------------------------

# RATE LIMITS

Public Catalogue

300 requests/minute

Authenticated Customer

600 requests/minute

Administrator

1500 requests/minute

------------------------------------------------------------

# FUTURE FEATURES

Visual Search

Barcode Search

Voice Search

AI Beauty Advisor

Skin Routine Builder

Virtual Try-On

Routine Recommendations

------------------------------------------------------------

# NEXT CHAPTER

Chapter 5

Shopping Cart API

Topics

• Cart Management

• Cart Items

• Coupons

• Saved Carts

• Guest Cart

• Cart Validation

End of Chapter 4.
