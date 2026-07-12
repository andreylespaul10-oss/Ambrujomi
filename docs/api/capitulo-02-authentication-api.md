# CHAPTER 2
# AUTHENTICATION API
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Authentication API manages customer and administrator access to the
Bliss Glow platform.

The authentication system must provide:

• Secure registration
• Secure login
• JWT authentication
• Refresh token rotation
• Password recovery
• Email verification
• Session management
• Future Multi-Factor Authentication (MFA)

All authentication endpoints must be served over HTTPS.

------------------------------------------------------------

# AUTHENTICATION FLOW

Customer

↓

Register

↓

Email Verification

↓

Login

↓

Access Token Issued

↓

Refresh Token Issued

↓

Authenticated Requests

↓

Logout

------------------------------------------------------------

# BASE ENDPOINT

/api/v1/auth

------------------------------------------------------------

# ENDPOINT

POST /register

Purpose

Create a new customer account.

Authentication

Not Required

Request Body

{
  "first_name": "Emma",
  "last_name": "Taylor",
  "email": "emma.taylor@example.com",
  "password": "SecurePassword123!",
  "confirm_password": "SecurePassword123!",
  "accept_terms": true,
  "marketing_consent": false
}

Successful Response

HTTP 201 Created

{
  "success": true,
  "message": "Account created successfully. Please verify your email address."
}

Validation Rules

Email must be unique.

Password must meet complexity requirements.

Terms & Conditions must be accepted.

------------------------------------------------------------

# ENDPOINT

POST /login

Purpose

Authenticate an existing customer.

Authentication

Not Required

Request Body

{
  "email": "emma.taylor@example.com",
  "password": "SecurePassword123!"
}

Successful Response

HTTP 200 OK

{
  "success": true,
  "access_token": "jwt_access_token",
  "refresh_token": "jwt_refresh_token",
  "expires_in": 3600,
  "token_type": "Bearer"
}

------------------------------------------------------------

# ACCESS TOKEN

Purpose

Authenticates API requests.

Default Lifetime

60 Minutes

------------------------------------------------------------

# REFRESH TOKEN

Purpose

Generate a new access token without requiring the customer to log in again.

Default Lifetime

30 Days

Security Rules

Single Use Rotation

Immediate Revocation on Logout

Encrypted Storage

------------------------------------------------------------

# ENDPOINT

POST /refresh-token

Purpose

Generate a new access token.

Authentication

Refresh Token Required

Response

HTTP 200 OK

Returns

New Access Token

New Refresh Token

Updated Expiration

------------------------------------------------------------

# ENDPOINT

POST /logout

Purpose

Ends the authenticated session.

Authentication

Required

Behaviour

Invalidate Access Token

Invalidate Refresh Token

Log Security Event

Return

HTTP 204 No Content

------------------------------------------------------------

# ENDPOINT

POST /forgot-password

Purpose

Generate a password reset request.

Authentication

Not Required

Request

{
  "email": "emma.taylor@example.com"
}

Response

HTTP 200 OK

Security Rule

Always return the same response regardless of whether the email exists.

------------------------------------------------------------

# ENDPOINT

POST /reset-password

Purpose

Reset the customer password.

Request

{
  "reset_token": "...",
  "new_password": "...",
  "confirm_password": "..."
}

Response

HTTP 200 OK

Business Rules

Reset tokens expire after 30 minutes.

Tokens may only be used once.

------------------------------------------------------------

# ENDPOINT

POST /verify-email

Purpose

Verify customer email address.

Request

Verification Token

Response

HTTP 200 OK

Successful verification activates the customer account.

------------------------------------------------------------

# ENDPOINT

POST /resend-verification

Purpose

Send a new verification email.

Rate Limit

Maximum 5 requests per hour.

------------------------------------------------------------

# FUTURE ENDPOINT

POST /mfa/verify

Purpose

Verify Multi-Factor Authentication code.

Supported Methods

Authenticator App

Email Code

SMS Code (Future)

Hardware Security Key (Future)

------------------------------------------------------------

# SESSION MANAGEMENT

Each login creates:

Session ID

Device Information

IP Address

Browser

Operating System

Login Timestamp

------------------------------------------------------------

# SECURITY REQUIREMENTS

Passwords

Argon2id hashing (recommended)

Minimum 12 characters

Uppercase letter required

Lowercase letter required

Number required

Special character required

Common password detection

Password history enforcement (Future)

------------------------------------------------------------

# RATE LIMITING

Register

10 requests/hour/IP

Login

10 requests/15 minutes/IP

Forgot Password

5 requests/hour/IP

Verification Email

5 requests/hour/account

------------------------------------------------------------

# AUDIT EVENTS

Track

Registration

Successful Login

Failed Login

Logout

Password Reset

Password Change

Email Verification

Refresh Token Rotation

------------------------------------------------------------

# ERROR CODES

AUTH_INVALID_CREDENTIALS

AUTH_ACCOUNT_DISABLED

AUTH_EMAIL_NOT_VERIFIED

AUTH_TOKEN_EXPIRED

AUTH_REFRESH_INVALID

AUTH_TOO_MANY_ATTEMPTS

AUTH_PASSWORD_TOO_WEAK

AUTH_EMAIL_ALREADY_EXISTS

------------------------------------------------------------

# NEXT CHAPTER

Chapter 3

Customer API

Topics

• Customer Profile

• Addresses

• Preferences

• Wishlist

• Saved Payment Methods

• Notifications

End of Chapter 2.
