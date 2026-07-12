# ============================================================
# CHAPTER 15
# AI SECURITY
# Bliss Glow AI & Personalisation Specification
# Version 2.0 (Expanded)
# ============================================================

# PURPOSE

Protect AI systems from abuse and protect customer data
within AI workflows.

------------------------------------------------------------

# CONTROLS

Model Security — models and keys stored as managed secrets

Prompt Protection — chatbot hardened against prompt
injection; system instructions never exposed

Abuse Detection — rate limits on chat, quiz and search APIs

Data Minimisation — AI receives only the fields it needs;
never full card data, never passwords

Access Control — AI admin settings restricted by RBAC role

------------------------------------------------------------

# CHATBOT-SPECIFIC RULES

The bot cannot execute refunds or change orders directly;
it creates requests for the order system with validation.

The bot never reveals another customer's data.

All conversations are stored encrypted and auto-purged
per the data retention policy.

------------------------------------------------------------

# NEXT CHAPTER

Chapter 16

Model Lifecycle

End of Chapter 15.
