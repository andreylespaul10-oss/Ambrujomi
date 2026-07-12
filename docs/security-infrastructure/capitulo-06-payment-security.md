# CHAPTER 6
# PAYMENT SECURITY
# PCI DSS
# ============================================================

# PURPOSE

Provide secure payment processing while complying with PCI DSS
requirements.

------------------------------------------------------------

# PAYMENT PROVIDERS

Stripe

PayPal

Apple Pay

Google Pay

Future

Klarna

------------------------------------------------------------

# CARD DATA

Never store:

Full Card Number

CVV

PIN

Magnetic Stripe Data

------------------------------------------------------------

# TOKENIZATION

Use payment provider tokens.

No raw card information reaches Bliss Glow servers.

------------------------------------------------------------

# PAYMENT FLOW

Customer

↓

Payment Gateway

↓

Authorisation

↓

Confirmation

↓

Order Creation

------------------------------------------------------------

# FRAUD CHECKS

Velocity Checks

Address Verification

Device Analysis

Risk Scoring

------------------------------------------------------------

# REFUNDS

Permission-controlled

Fully logged

Auditable

------------------------------------------------------------

# SECURITY

TLS 1.3

PCI DSS Compliance

MFA for finance staff

Audit logging

------------------------------------------------------------

# NEXT CHAPTER

Chapter 7

GDPR & UK GDPR Compliance
