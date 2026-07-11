# ============================================================
# CHAPTER 14
# ADMINISTRATION & SYSTEM MANAGEMENT
# Bliss Glow Database Schema
# Version 1.0
# ============================================================

# PURPOSE

This chapter defines the administration layer responsible for managing,
monitoring and securing the Bliss Glow platform.

The administration system must provide:

• Secure administrator access
• Role-based permissions (RBAC)
• Complete audit history
• Operational monitoring
• Feature management
• System configuration
• Background job monitoring
• Business continuity support

The platform should follow the Principle of Least Privilege, ensuring that
administrators only have access to the resources required for their role.

------------------------------------------------------------

# ADMINISTRATION ARCHITECTURE

System Administrator

↓

Role Assignment

↓

Permission Validation

↓

Admin Dashboard

↓

Business Operations

↓

Audit Logging

↓

Monitoring

------------------------------------------------------------

# TABLE: admin_users

Purpose

Stores administrator accounts.

Primary Key

id (UUID)

Columns

id

email

password_hash

first_name

last_name

role_id

status

last_login_at

two_factor_enabled

created_at

updated_at

------------------------------------------------------------

Administrator Status

Active

Suspended

Locked

Disabled

------------------------------------------------------------

Business Rules

Administrator emails must be unique.

Passwords must be securely hashed.

Two-Factor Authentication should be available.

------------------------------------------------------------

# TABLE: admin_roles

Purpose

Defines administrator roles.

Columns

id

role_name

description

system_role

created_at

updated_at

------------------------------------------------------------

Default Roles

Super Administrator

Operations Manager

Customer Support

Marketing Manager

Content Editor

Finance Manager

Warehouse Manager

Analytics Viewer

------------------------------------------------------------

# TABLE: admin_permissions

Purpose

Stores individual permissions.

Examples

Manage Products

Manage Orders

Manage Customers

Manage Discounts

Manage Blog

Manage Settings

View Reports

Export Data

Manage Administrators

------------------------------------------------------------

# TABLE: role_permissions

Purpose

Maps roles to permissions.

Columns

id

role_id

permission_id

------------------------------------------------------------

Relationship

One Role

↓

Many Permissions

------------------------------------------------------------

# TABLE: audit_logs

Purpose

Records every important administrative action.

Columns

id

admin_user_id

entity_type

entity_id

action

old_value

new_value

ip_address

user_agent

created_at

------------------------------------------------------------

Tracked Actions

Create

Update

Delete

Restore

Export

Import

Login

Logout

Permission Change

------------------------------------------------------------

Business Rules

Audit logs must never be deleted.

Sensitive fields should be masked where appropriate.

------------------------------------------------------------

# TABLE: system_settings

Purpose

Stores platform configuration.

Examples

Store Name

Store Currency

Default Language

Tax Configuration

Shipping Rules

Maintenance Mode

Email Configuration

Analytics Keys

------------------------------------------------------------

# TABLE: feature_flags

Purpose

Controls feature availability.

Columns

id

feature_name

enabled

environment

rollout_percentage

created_at

updated_at

------------------------------------------------------------

Examples

AI Recommendations

Wishlist Sharing

One-Click Checkout

Dark Mode

Beta Search

------------------------------------------------------------

# TABLE: background_jobs

Purpose

Tracks scheduled jobs.

Columns

id

job_name

status

started_at

completed_at

execution_time

error_message

retry_count

------------------------------------------------------------

Job Examples

DSers Synchronisation

Inventory Update

Email Queue

Analytics Aggregation

SEO Sitemap Generation

Backup

------------------------------------------------------------

# TABLE: notifications_queue

Purpose

Stores queued notifications.

Notification Types

Email

SMS (Future)

Push Notification (Future)

In-App Notification

Webhook

------------------------------------------------------------

# SYSTEM MONITORING

Track

API Health

Database Health

Queue Size

Memory Usage

CPU Usage

Storage Capacity

Background Job Status

------------------------------------------------------------

# BACKUP STRATEGY

Support

Daily Incremental Backup

Weekly Full Backup

Point-in-Time Recovery

Encrypted Backups

Multi-Region Backup Storage

------------------------------------------------------------

# SECURITY REQUIREMENTS

Mandatory

Role-Based Access Control (RBAC)

Two-Factor Authentication

Session Expiration

Rate Limiting

Password Complexity

Encrypted Secrets

IP Logging

Security Event Logging

------------------------------------------------------------

# BUSINESS CONTINUITY

Support

Maintenance Mode

Graceful Shutdown

Disaster Recovery

Failover Planning

Monitoring Alerts

------------------------------------------------------------

# INDEXES

Create indexes for

email

role_id

status

feature_name

job_name

created_at

------------------------------------------------------------

# PERFORMANCE

Support

Hundreds of administrators

Millions of audit records

Real-time monitoring

Fast permission validation

------------------------------------------------------------

# NEXT CHAPTER

Chapter 15

Database Optimisation, Scalability & Disaster Recovery

Topics

• Index Optimisation

• Partitioning

• Caching

• Replication

• High Availability

• Security Hardening

• Disaster Recovery

• Long-Term Scalability

End of Chapter 14.
