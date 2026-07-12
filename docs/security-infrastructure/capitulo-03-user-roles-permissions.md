# CHAPTER 3
# USER ROLES & PERMISSIONS
# Bliss Glow
# Version 1.0
# ============================================================

# PURPOSE

This chapter defines the Role-Based Access Control (RBAC) model used by
the Bliss Glow platform.

Every authenticated user receives only the permissions required to
perform their responsibilities, following the Principle of Least
Privilege.

------------------------------------------------------------

# DESIGN PRINCIPLES

Access control must be:

• Secure

• Granular

• Auditable

• Scalable

• Easy to Manage

• Least Privilege by Default

------------------------------------------------------------

# ROLE HIERARCHY

Guest

↓

Customer

↓

Support Agent

↓

Marketing Manager

↓

Inventory Manager

↓

Finance Manager

↓

Administrator

↓

Super Administrator

Higher roles inherit only approved permissions.

------------------------------------------------------------

# ROLE DEFINITIONS

Guest

Browse products

Search catalogue

Manage basket

Guest checkout

View public pages

------------------------------------------------------------

Customer

All Guest permissions

Manage account

View orders

Track deliveries

Save addresses

Wishlist

Reviews

Rewards

------------------------------------------------------------

Support Agent

View customer profiles

Respond to support tickets

Process approved returns

View order history

No access to financial settings

------------------------------------------------------------

Marketing Manager

Manage promotions

Discount codes

Email campaigns

Homepage banners

Collections

Marketing analytics

------------------------------------------------------------

Inventory Manager

Products

Categories

Brands

Stock management

Warehouse information

Supplier records

Inventory reports

------------------------------------------------------------

Finance Manager

Orders

Refunds

Invoices

Payments

Financial reports

Tax information

Payout reconciliation

------------------------------------------------------------

Administrator

Full operational management

User administration

Platform settings

Content management

Audit logs

System monitoring

------------------------------------------------------------

Super Administrator

Complete platform control

Security settings

Role management

Infrastructure configuration

Secrets management

Emergency access

------------------------------------------------------------

# PERMISSION CATEGORIES

Products

Orders

Customers

Payments

Marketing

Reports

Inventory

Content

Settings

Security

Infrastructure

------------------------------------------------------------

# PERMISSION TYPES

Create

Read

Update

Delete

Approve

Export

Import

Publish

Archive

Restore

------------------------------------------------------------

# ACCESS POLICIES

Permissions are granted through roles.

Direct permission assignment should be avoided.

Temporary elevated access must expire automatically.

------------------------------------------------------------

# ADMINISTRATIVE CONTROLS

Sensitive operations require:

Additional confirmation

Audit logging

Role validation

MFA verification

------------------------------------------------------------

# SEPARATION OF DUTIES

Critical actions should be separated.

Examples

Marketing managers cannot approve refunds.

Finance managers cannot modify infrastructure.

Support agents cannot change user roles.

------------------------------------------------------------

# TEMPORARY ACCESS

Temporary permissions must include:

Reason

Approver

Expiry Time

Automatic Revocation

Audit Trail

------------------------------------------------------------

# AUDIT REQUIREMENTS

Record:

Role assignment

Permission changes

Administrative actions

Failed authorisation attempts

Privilege escalation

------------------------------------------------------------

# ACCOUNT DEACTIVATION

Disabled users immediately lose:

Sessions

API access

Administrative permissions

Authentication tokens

------------------------------------------------------------

# SERVICE ACCOUNTS

Dedicated accounts for:

Background jobs

Integrations

Automation

API services

Each service account must use the minimum required permissions.

------------------------------------------------------------

# ACCESS REVIEWS

Quarterly review of:

User roles

Inactive accounts

Privileged access

Temporary permissions

Service accounts

------------------------------------------------------------

# EMERGENCY ACCESS

Break-glass accounts

Protected by:

MFA

Restricted monitoring

Immediate alerts

Mandatory post-use review

------------------------------------------------------------

# ACCESSIBILITY

Administrative permission management must support:

Keyboard navigation

Screen readers

Visible focus indicators

Accessible tables

WCAG 2.2 AA compliance

------------------------------------------------------------

# DESIGN TOKENS

roles.default

roles.admin

permissions.create

permissions.update

permissions.delete

permissions.approve

------------------------------------------------------------

# BEST PRACTICES

Grant the minimum permissions required.

Review privileged accounts regularly.

Remove unused accounts promptly.

Require MFA for elevated roles.

Maintain complete audit trails.

------------------------------------------------------------

# FUTURE ENHANCEMENTS

Attribute-Based Access Control (ABAC)

Context-Aware Permissions

Risk-Based Access Decisions

Delegated Administration

AI Permission Analysis

Automatic Privilege Recommendations

------------------------------------------------------------

# NEXT CHAPTER

Chapter 4

API Security

Topics

• API Authentication

• API Authorisation

• Rate Limiting

• Input Validation

• Secure Headers

• API Monitoring

End of Chapter 3.
