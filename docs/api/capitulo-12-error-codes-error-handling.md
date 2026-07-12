# CHAPTER 12
# ERROR CODES & ERROR HANDLING
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Error Handling framework provides a consistent structure for all API
errors, enabling client applications to identify, process and display
errors in a predictable manner.

Every API error must return:

• Appropriate HTTP status code
• Standardised error object
• Machine-readable error code
• Human-readable message
• Request identifier
• Timestamp

------------------------------------------------------------

# STANDARD ERROR RESPONSE

{
  "success": false,
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "The requested product could not be found.",
    "details": null,
    "request_id": "REQ-8F2A91B3",
    "timestamp": "2026-07-11T14:20:00Z"
  }
}

------------------------------------------------------------

# VALIDATION ERROR RESPONSE

HTTP 422 Unprocessable Entity

{
  "success": false,
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "One or more fields failed validation.",
    "fields": [
      {
        "field": "email",
        "message": "Please enter a valid email address."
      }
    ]
  }
}

------------------------------------------------------------

# HTTP STATUS CODES

200 OK

201 Created

202 Accepted

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

410 Gone

422 Unprocessable Entity

429 Too Many Requests

500 Internal Server Error

502 Bad Gateway

503 Service Unavailable

504 Gateway Timeout

------------------------------------------------------------

# AUTHENTICATION ERRORS

AUTH_INVALID_CREDENTIALS

AUTH_TOKEN_EXPIRED

AUTH_REFRESH_TOKEN_INVALID

AUTH_EMAIL_NOT_VERIFIED

AUTH_ACCOUNT_LOCKED

AUTH_ACCOUNT_DISABLED

AUTH_TWO_FACTOR_REQUIRED

AUTH_SESSION_EXPIRED

------------------------------------------------------------

# AUTHORISATION ERRORS

ACCESS_DENIED

INSUFFICIENT_PERMISSIONS

ROLE_REQUIRED

FEATURE_DISABLED

ADMIN_ONLY

------------------------------------------------------------

# CUSTOMER ERRORS

CUSTOMER_NOT_FOUND

CUSTOMER_ALREADY_EXISTS

INVALID_CUSTOMER_PROFILE

INVALID_ADDRESS

ADDRESS_NOT_FOUND

LOYALTY_ACCOUNT_NOT_FOUND

------------------------------------------------------------

# PRODUCT ERRORS

PRODUCT_NOT_FOUND

PRODUCT_UNAVAILABLE

PRODUCT_OUT_OF_STOCK

INVALID_VARIANT

CATEGORY_NOT_FOUND

BRAND_NOT_FOUND

REVIEW_NOT_ALLOWED

------------------------------------------------------------

# CART ERRORS

CART_NOT_FOUND

INVALID_CART_ITEM

INVALID_QUANTITY

COUPON_INVALID

COUPON_EXPIRED

COUPON_NOT_APPLICABLE

GIFT_CARD_INVALID

------------------------------------------------------------

# CHECKOUT ERRORS

CHECKOUT_NOT_FOUND

CHECKOUT_VALIDATION_FAILED

INVALID_SHIPPING_METHOD

INVALID_PAYMENT_METHOD

ADDRESS_VALIDATION_FAILED

------------------------------------------------------------

# PAYMENT ERRORS

PAYMENT_DECLINED

PAYMENT_FAILED

PAYMENT_ALREADY_CAPTURED

PAYMENT_EXPIRED

PAYMENT_PROVIDER_ERROR

REFUND_NOT_ALLOWED

REFUND_LIMIT_EXCEEDED

------------------------------------------------------------

# ORDER ERRORS

ORDER_NOT_FOUND

ORDER_ALREADY_CANCELLED

ORDER_NOT_CANCELLABLE

RETURN_NOT_ALLOWED

TRACKING_NOT_AVAILABLE

INVALID_ORDER_STATUS

------------------------------------------------------------

# ADMIN ERRORS

ADMIN_ACCESS_DENIED

IMPORT_VALIDATION_FAILED

EXPORT_FAILED

INVALID_CONFIGURATION

AUDIT_LOG_UNAVAILABLE

------------------------------------------------------------

# INTEGRATION ERRORS

DSERS_CONNECTION_FAILED

SUPPLIER_NOT_AVAILABLE

PRODUCT_SYNC_FAILED

INVENTORY_SYNC_FAILED

TRACKING_IMPORT_FAILED

WEBHOOK_DELIVERY_FAILED

------------------------------------------------------------

# SERVER ERRORS

INTERNAL_SERVER_ERROR

DATABASE_ERROR

CACHE_UNAVAILABLE

SERVICE_UNAVAILABLE

DEPENDENCY_FAILURE

UNKNOWN_ERROR

------------------------------------------------------------

# RATE LIMIT ERROR

HTTP 429

{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later."
  }
}

------------------------------------------------------------

# LOCALISATION

Error messages should support:

English (United Kingdom)

Future Languages

French

German

Spanish

Italian

Portuguese

------------------------------------------------------------

# LOGGING REQUIREMENTS

Every error must record:

Request ID

User ID (if authenticated)

IP Address

Endpoint

HTTP Method

Timestamp

Stack Trace (internal only)

------------------------------------------------------------

# SECURITY RULES

Never expose:

Database schema

SQL queries

Stack traces

Internal file paths

Server configuration

Sensitive credentials

------------------------------------------------------------

# CLIENT GUIDELINES

Applications should:

Handle all HTTP status codes gracefully

Display user-friendly messages

Retry transient failures when appropriate

Respect Retry-After headers

Log request identifiers for support purposes

------------------------------------------------------------

# FUTURE ENHANCEMENTS

Structured error documentation

Error analytics dashboard

AI-assisted diagnostics

Automatic incident correlation

Public error catalogue

------------------------------------------------------------

# NEXT CHAPTER

Chapter 13

API Security

Topics

• JWT Security

• OAuth 2.0

• API Keys

• Encryption

• Rate Limiting

• CORS

• CSRF

• Security Headers

End of Chapter 12.
