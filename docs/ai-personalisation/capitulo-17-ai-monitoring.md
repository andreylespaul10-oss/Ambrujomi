# ============================================================
# CHAPTER 17
# AI MONITORING
# Bliss Glow AI & Personalisation Specification
# Version 2.0 (Expanded)
# ============================================================

# PURPOSE

Detect AI quality problems before customers do.

------------------------------------------------------------

# MONITORED METRICS

Latency — recommendation and search responses under 200 ms

Accuracy — click-through and conversion per model version

Model Drift — input distribution shifts vs training data

Prediction Quality — forecast vs actuals, weekly

Chatbot Quality — resolution rate, escalation rate, CSAT

------------------------------------------------------------

# ALERTS

CTR drops over 20% week-on-week -> alert

Search zero-result rate above 3% -> alert

Chatbot escalation rate above 40% -> alert

Any AI endpoint p95 latency above 500 ms -> alert

------------------------------------------------------------

# DASHBOARD

A dedicated AI health panel inside the admin dashboard
shows every model, its version, KPIs and last review date.

------------------------------------------------------------

# NEXT CHAPTER

Chapter 18

Continuous Learning

End of Chapter 17.
