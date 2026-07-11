# ============================================================
# CHAPTER 4
# PRODUCT CATALOG
# ============================================================

# PURPOSE

The Product Catalog is the central domain of the Bliss Glow platform.

It manages all products, categories, variants, images, pricing, SEO,
supplier connections, inventory references, and merchandising information.

The architecture must support:

• DSers + AliExpress products
• Private label products
• Physical inventory
• Digital content (future)
• International expansion
• Multiple currencies
• Multiple languages

------------------------------------------------------------

# TABLE: products

Purpose

Stores the main information for every product.

Primary Key

id (UUID)

Columns

id
UUID
PRIMARY KEY

sku
VARCHAR(100)
UNIQUE

slug
VARCHAR(255)
UNIQUE

name
VARCHAR(255)

short_description
TEXT

description
TEXT

brand_id
UUID

category_id
UUID

supplier_id
UUID NULL

product_type

Possible Values

PHYSICAL

DROPSHIPPING

PRIVATE_LABEL

DIGITAL (Future)

status

DRAFT

ACTIVE

OUT_OF_STOCK

ARCHIVED

featured
BOOLEAN

new_arrival
BOOLEAN

best_seller
BOOLEAN

average_rating
DECIMAL(3,2)

review_count
INTEGER

base_price
DECIMAL(12,2)

compare_at_price
DECIMAL(12,2)

cost_price
DECIMAL(12,2)

currency
VARCHAR(10)

weight

height

width

length

seo_title

seo_description

created_at

updated_at

deleted_at

------------------------------------------------------------

Indexes

SKU

Slug

Category

Brand

Status

Featured

New Arrival

Best Seller

------------------------------------------------------------

Business Rules

Each product must have:

• Unique SKU

• Unique Slug

• At least one image

• At least one category

• Valid pricing

------------------------------------------------------------

# TABLE: product_images

Purpose

Stores all product images.

Columns

id

product_id

image_url

alt_text

display_order

is_primary

created_at

------------------------------------------------------------

Business Rules

One image must always be marked as Primary.

Unlimited images per product.

Support future video thumbnails.

------------------------------------------------------------

# TABLE: product_variants

Purpose

Stores product variations.

Examples

Size

Colour

Bundle

Volume

Columns

id

product_id

variant_name

sku

barcode

price

compare_price

cost

weight

inventory_quantity

status

created_at

updated_at

------------------------------------------------------------

Relationships

One Product

↓

Many Variants

------------------------------------------------------------

# TABLE: product_attributes

Purpose

Stores flexible product attributes.

Examples

Skin Type

Ingredients

Fragrance

Material

Finish

Volume

Cruelty Free

Vegan

Columns

id

product_id

attribute_name

attribute_value

------------------------------------------------------------

# TABLE: product_tags

Purpose

Search optimization.

Examples

hydrating

vegan

organic

anti-aging

premium

gift

summer

winter

------------------------------------------------------------

# TABLE: brands

Purpose

Stores product brands.

Columns

id

name

slug

logo

description

website

status

------------------------------------------------------------

# TABLE: categories

Purpose

Product organization.

Columns

id

parent_category_id

name

slug

description

display_order

icon

banner_image

seo_title

seo_description

status

------------------------------------------------------------

Relationships

Category

↓

Subcategory

↓

Products

Unlimited nesting supported.

------------------------------------------------------------

# TABLE: collections

Purpose

Marketing collections.

Examples

Summer Collection

Luxury Collection

Best Sellers

New Arrivals

Limited Edition

Holiday Gifts

------------------------------------------------------------

# TABLE: product_seo

Purpose

SEO optimization.

Columns

product_id

meta_title

meta_description

canonical_url

focus_keyword

structured_data

------------------------------------------------------------

# TABLE: product_translations

Purpose

International expansion.

Fields

Language

Translated Name

Translated Description

SEO

------------------------------------------------------------

# TABLE: product_related

Purpose

Cross-selling.

Examples

Frequently Bought Together

Customers Also Bought

Complete The Routine

Recommended Products

------------------------------------------------------------

# PRODUCT STATUS FLOW

Draft

↓

Review

↓

Active

↓

Out of Stock

↓

Archived

------------------------------------------------------------

# PRODUCT IMPORT SUPPORT

Products may originate from:

DSers

AliExpress

Manual Creation

CSV Import

API Import

Future ERP Integration

------------------------------------------------------------

# PRICE STRUCTURE

Each product stores:

Supplier Cost

Selling Price

Compare At Price

Profit Margin

Discount Percentage

Tax Configuration

------------------------------------------------------------

# PRODUCT MEDIA

Supported Types

Images

Future Support

Videos

360° Images

AR Assets

Instruction PDFs

------------------------------------------------------------

# SEARCHABLE FIELDS

Name

SKU

Description

Brand

Category

Tags

Attributes

Barcode

------------------------------------------------------------

# BUSINESS OBJECTIVES

The product catalog must support:

Millions of products

Fast search

Flexible filtering

Excellent SEO

Easy supplier synchronization

Future AI recommendations

------------------------------------------------------------

NEXT CHAPTER

Chapter 5

Inventory & Supplier Management

• Inventory
• Warehouses
• DSers
• AliExpress
• Supplier Synchronization
• Stock Rules

End of Chapter 4.
