# ============================================================
# CHAPTER 3
# PERSONALISED HOMEPAGE
# Bliss Glow AI & Personalisation Specification
# Version 2.0 (Expanded)
# ============================================================

# PURPOSE

Adapt the home page dynamically to each visitor so returning
customers see a shop curated for them.

------------------------------------------------------------

# DYNAMIC SECTIONS

Recently Viewed — resume the journey

Recommended For You — engine output

Your Favourite Categories — reordered category grid

Active Offers — offers matching customer segment

Seasonal Campaigns — scheduled by CMS, targeted by segment

------------------------------------------------------------

# PERSONALISATION LOGIC

Anonymous visitor
• Best sellers + new arrivals + welcome offer

Returning visitor (no purchase)
• Recently viewed + category affinity + first-order coupon

Customer (1+ orders)
• Replenishment reminders + cross-sell + loyalty status

VIP customer
• Early access, premium collections, gold badge treatment

------------------------------------------------------------

# BUSINESS RULES

Personalisation must never slow the page (render under 200 ms,
hydrate asynchronously).

Always provide a non-personalised fallback.

Customers may opt out of personalisation (UK GDPR).

------------------------------------------------------------

# NEXT CHAPTER

Chapter 4

AI Search

End of Chapter 3.
