# CHAPTER 4
# API SECURITY
# ============================================================

# PURPOSE

The Bliss Glow API is the primary communication layer between web,
mobile, third-party services and internal systems.

Every API endpoint must follow secure-by-default principles.

------------------------------------------------------------

# API PRINCIPLES

• Zero Trust

• HTTPS Only

• Least Privilege

• Strong Authentication

• Secure Defaults

• Version Controlled

------------------------------------------------------------

# AUTHENTICATION

Supported

OAuth 2.1

JWT Access Tokens

Refresh Tokens

API Keys (Internal Only)

Future

mTLS

------------------------------------------------------------

# AUTHORIZATION

RBAC

Endpoint-level permissions

Resource ownership validation

Admin-only endpoints

Scoped permissions

------------------------------------------------------------

# INPUT VALIDATION

Validate

Body

Headers

Path Parameters

Query Parameters

Uploaded Files

Reject

Unexpected fields

Malformed JSON

Oversized payloads

Invalid content types

------------------------------------------------------------

# OUTPUT SECURITY

Hide internal IDs where possible

Remove debug information

Standardise error responses

Never expose stack traces

------------------------------------------------------------

# HTTP SECURITY HEADERS

Strict-Transport-Security

Content-Security-Policy

X-Content-Type-Options

Referrer-Policy

Permissions-Policy

X-Frame-Options

------------------------------------------------------------

# API RATE LIMITS

Guest

60 requests/minute

Authenticated

300 requests/minute

Admin

600 requests/minute

Sensitive endpoints

Custom limits

------------------------------------------------------------

# FILE UPLOAD SECURITY

Validate MIME type

Validate extension

Virus scan

Random filenames

Maximum size limits

------------------------------------------------------------

# AUDIT LOGGING

Record

Authentication

Authorization failures

Sensitive actions

Rate limit violations

API errors

------------------------------------------------------------

# API VERSIONING

Format

/api/v1/

/api/v2/

Old versions supported through deprecation policy.

------------------------------------------------------------

# ERROR RESPONSE

Standard Format

Timestamp

Status Code

Error Code

Message

Request ID

------------------------------------------------------------

# MONITORING

API latency

Error rates

Traffic volume

Abuse detection

Availability

------------------------------------------------------------

# BEST PRACTICES

No sensitive data in URLs.

Use HTTPS exclusively.

Validate every request.

Rotate secrets regularly.

------------------------------------------------------------

# NEXT CHAPTER

Chapter 5

Data Encryption
