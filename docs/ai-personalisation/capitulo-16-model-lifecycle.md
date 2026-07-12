# ============================================================
# CHAPTER 16
# MODEL LIFECYCLE
# Bliss Glow AI & Personalisation Specification
# Version 2.0 (Expanded)
# ============================================================

# PURPOSE

Manage AI models from creation to retirement with
engineering discipline.

------------------------------------------------------------

# LIFECYCLE STAGES

Training — on clean, versioned datasets

Validation — accuracy thresholds must pass before deploy

Deployment — versioned, gradual rollout (10% -> 50% -> 100%)

Monitoring — accuracy, latency and drift tracked live

Retirement — replaced models archived with their metrics

------------------------------------------------------------

# VERSIONING RULES

Every model has a semantic version and a changelog.

Rollback to the previous model takes one action.

A/B comparison against the previous version is mandatory
before full rollout.

------------------------------------------------------------

# NEXT CHAPTER

Chapter 17

AI Monitoring

End of Chapter 16.
