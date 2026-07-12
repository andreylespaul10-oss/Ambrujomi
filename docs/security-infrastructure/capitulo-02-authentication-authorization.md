# CHAPTER 2
# AUTHENTICATION & AUTHORIZATION
# Bliss Glow
# Version 1.0
# ============================================================

# PURPOSE

Authentication verifies the identity of users accessing the platform,
while Authorisation determines which resources and actions each user is
permitted to access.

The system must provide strong security without compromising usability.

------------------------------------------------------------

# AUTHENTICATION PRINCIPLES

Authentication shall be:

• Secure

• User-friendly

• Privacy-focused

• Resilient

• Standards-based

• Scalable

------------------------------------------------------------

# SUPPORTED AUTHENTICATION METHODS

Email and Password

Magic Link

Passkeys (Future)

Google Sign-In

Apple Sign-In

Guest Checkout

Administrator Login

------------------------------------------------------------

# MULTI-FACTOR AUTHENTICATION (MFA)

Supported Methods

Authenticator App (TOTP)

Email Verification Code

SMS Verification (Optional)

Hardware Security Keys (Future)

MFA is mandatory for:

Administrators

Finance Staff

Support Managers

Optional for Customers.

------------------------------------------------------------

# PASSWORD POLICY

Minimum Length

12 characters

Recommended Length

16+ characters

Requirements

Uppercase Letter

Lowercase Letter

Number

Special Character

Passwords must be checked against known breached password databases.

------------------------------------------------------------

# PASSWORD STORAGE

Passwords must never be stored in plain text.

Requirements

Strong adaptive password hashing

Unique cryptographic salt per password

Secure password reset process

No password recovery by email

Password reset links must expire after 15 minutes.

------------------------------------------------------------

# ACCOUNT REGISTRATION

Required Information

First Name

Last Name

Email Address

Password

Marketing Consent (Optional)

Terms & Conditions Acceptance

Email verification required before account activation.

------------------------------------------------------------

# SESSION MANAGEMENT

Secure Session IDs

Automatic Rotation After Login

Idle Timeout

30 minutes

Maximum Session Lifetime

24 hours

Immediate session invalidation after logout.

------------------------------------------------------------

# REMEMBER ME

Optional

Persistent login duration

Maximum 30 days

Automatically revoked after password change.

------------------------------------------------------------

# ACCESS TOKENS

Short-lived Access Tokens

Refresh Tokens

Automatic Token Rotation

Immediate revocation when compromised.

------------------------------------------------------------

# ACCOUNT LOCKOUT

After 5 consecutive failed login attempts:

Temporary lock

Progressive delay

Security notification

Repeated abuse triggers additional verification.

------------------------------------------------------------

# DEVICE MANAGEMENT

Users may view:

Active Sessions

Logged-in Devices

Device Location (Approximate)

Login History

Users can remotely terminate active sessions.

------------------------------------------------------------

# PASSWORD RESET

Process

Request Reset

↓

Verify Email

↓

Receive Secure Link

↓

Create New Password

↓

Invalidate Existing Sessions

------------------------------------------------------------

# EMAIL VERIFICATION

Required for:

New Accounts

Email Address Changes

High-Risk Security Events

------------------------------------------------------------

# ADMIN AUTHENTICATION

Mandatory MFA

Restricted Login Policies

IP Monitoring

Device Monitoring

Enhanced Audit Logging

------------------------------------------------------------

# AUTHORIZATION MODEL

Role-Based Access Control (RBAC)

Future Support

Attribute-Based Access Control (ABAC)

------------------------------------------------------------

# USER ROLES

Guest

Customer

Support Agent

Marketing Manager

Inventory Manager

Finance Manager

Administrator

Super Administrator

------------------------------------------------------------

# SECURITY EVENTS

Log:

Successful Login

Failed Login

Password Change

Password Reset

Email Change

Role Change

MFA Changes

Session Revocation

------------------------------------------------------------

# ACCESSIBILITY

Authentication interfaces must support:

Keyboard Navigation

Password Managers

Screen Readers

High Contrast Mode

WCAG 2.2 AA Compliance

------------------------------------------------------------

# DESIGN TOKENS

auth.session.timeout

auth.password.minimumLength

auth.mfa.enabled

auth.token.expiry

auth.account.lockout

------------------------------------------------------------

# BEST PRACTICES

Never expose authentication errors that reveal account existence.

Rotate credentials regularly.

Require MFA for privileged users.

Monitor suspicious authentication activity.

Provide secure account recovery.

------------------------------------------------------------

# FUTURE ENHANCEMENTS

Passwordless Authentication

Biometric Authentication

Risk-Based Authentication

Behavioural Biometrics

Adaptive MFA

Continuous Identity Verification

------------------------------------------------------------

# NEXT CHAPTER

Chapter 3

User Roles & Permissions

Topics

• Role Definitions

• Permission Matrix

• Administrative Privileges

• Access Control Policies

• Delegated Access

End of Chapter 2.
