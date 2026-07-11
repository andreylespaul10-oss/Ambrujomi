# ============================================================
# CHAPTER 11
# CONTENT MANAGEMENT SYSTEM (CMS)
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

The Content Management System (CMS) enables the Bliss Glow team to create,
manage and publish digital content without requiring software development.

The CMS must support:

• Static pages
• Blog articles
• Beauty guides
• FAQs
• Landing pages
• Homepage sections
• Navigation menus
• Media library
• SEO content
• Multi-language content

The architecture must be scalable and editor-friendly.

------------------------------------------------------------

# CMS ARCHITECTURE

Administrator

↓

Content Editor

↓

Draft

↓

Review

↓

Approved

↓

Published

↓

Archived

------------------------------------------------------------

# TABLE: pages

Purpose

Stores all static website pages.

Examples

Home

About Us

Contact

Shipping Policy

Returns Policy

Privacy Policy

Terms & Conditions

Careers

Columns

id

title

slug

page_type

content

seo_title

seo_description

featured_image

status

published_at

created_by

updated_by

created_at

updated_at

------------------------------------------------------------

Page Status

Draft

Review

Published

Archived

------------------------------------------------------------

# TABLE: blog_categories

Purpose

Organises blog content.

Columns

id

name

slug

description

display_order

status

------------------------------------------------------------

# TABLE: blog_posts

Purpose

Stores educational and marketing articles.

Columns

id

category_id

author_id

title

slug

excerpt

content

featured_image

reading_time

status

published_at

created_at

updated_at

------------------------------------------------------------

Blog Status

Draft

Scheduled

Published

Archived

------------------------------------------------------------

# TABLE: blog_tags

Purpose

Stores article tags.

Examples

Skincare

Beauty

Routine

Makeup

Haircare

Wellness

------------------------------------------------------------

# TABLE: blog_post_tags

Purpose

Creates many-to-many relationships between posts and tags.

Columns

id

post_id

tag_id

------------------------------------------------------------

# TABLE: faqs

Purpose

Stores frequently asked questions.

Columns

id

category

question

answer

display_order

status

created_at

updated_at

------------------------------------------------------------

FAQ Categories

Orders

Payments

Shipping

Returns

Products

Account

General

------------------------------------------------------------

# TABLE: media_library

Purpose

Stores uploaded media assets.

Columns

id

file_name

file_type

mime_type

file_size

storage_path

alt_text

uploaded_by

created_at

------------------------------------------------------------

Supported Media

Images

SVG Icons

Videos

PDF Files

Future 3D Assets

------------------------------------------------------------

# TABLE: navigation_menus

Purpose

Controls website navigation.

Columns

id

menu_name

location

status

------------------------------------------------------------

Menu Locations

Header

Footer

Mobile

Account

Help Centre

------------------------------------------------------------

# TABLE: navigation_items

Purpose

Stores links inside navigation menus.

Columns

id

menu_id

parent_item_id

title

url

display_order

target

status

------------------------------------------------------------

# TABLE: seo_redirects

Purpose

Stores URL redirects.

Columns

id

old_url

new_url

redirect_type

status

created_at

------------------------------------------------------------

Redirect Types

301 Permanent

302 Temporary

------------------------------------------------------------

# TABLE: seo_metadata

Purpose

Stores SEO metadata.

Columns

id

entity_type

entity_id

meta_title

meta_description

canonical_url

robots

open_graph_title

open_graph_description

open_graph_image

twitter_card

structured_data

------------------------------------------------------------

# CONTENT VERSIONING

Every important content update should support version history.

Track

Previous Version

Editor

Revision Date

Reason for Change

------------------------------------------------------------

# MULTI-LANGUAGE SUPPORT

Content should support:

English (Primary)

Future Languages

French

German

Spanish

Italian

Dutch

------------------------------------------------------------

# CONTENT WORKFLOW

Draft

↓

Internal Review

↓

SEO Review

↓

Approval

↓

Publication

↓

Scheduled Updates

↓

Archive

------------------------------------------------------------

# MEDIA OPTIMISATION

Automatically generate:

Responsive Images

WebP Versions

AVIF Versions

Image Thumbnails

Compressed Assets

------------------------------------------------------------

# SEARCH

Content must be searchable by:

Title

Slug

Category

Tags

Keywords

Author

Publication Date

------------------------------------------------------------

# BUSINESS RULES

Published pages require:

Unique slug

SEO title

SEO description

Valid publication status

------------------------------------------------------------

# INDEXES

Create indexes for

slug

status

published_at

category_id

author_id

entity_type

------------------------------------------------------------

# PERFORMANCE

Support

Thousands of pages

Millions of blog views

Fast content delivery

CDN-ready media assets

------------------------------------------------------------

# NEXT CHAPTER

Chapter 12

Analytics & Business Intelligence

Topics

• Customer Analytics

• Product Analytics

• Sales Reports

• Funnel Analysis

• Event Tracking

• KPI Dashboard

End of Chapter 11.
