# ============================================================
# CHAPTER 10
# FRAUD DETECTION AI
# Bliss Glow AI & Personalisation Specification
# Version 2.0 (Expanded)
# ============================================================

# PURPOSE

Protect revenue and customers by detecting fraudulent
behaviour before it costs money.

------------------------------------------------------------

# RISK SIGNALS

Payment: mismatched billing country, repeated declined cards,
unusual order value

Account: disposable email domains, rapid account creation,
credential-stuffing patterns

Behaviour: bot-like browsing, coupon abuse, repeated
refund claims

Delivery: high-risk address patterns, repeated "item not
received" claims

------------------------------------------------------------

# RISK SCORING

Every order receives a risk score 0-100.

0-40 Low -> auto-approve

41-70 Medium -> additional verification (3-D Secure)

71-100 High -> hold for manual review

------------------------------------------------------------

# BUSINESS RULES

Stripe Radar is the first line of defence; platform rules add
context Stripe cannot see (coupon abuse, refund history).

False positives are reviewed weekly to tune thresholds.

No customer is blocked permanently without human review.

------------------------------------------------------------

# NEXT CHAPTER

Chapter 11

Inventory Intelligence

End of Chapter 10.
