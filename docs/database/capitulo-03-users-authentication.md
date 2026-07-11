# ============================================================
# CHAPTER 3
# USERS & AUTHENTICATION
# ============================================================

# PURPOSE

This chapter defines the authentication and identity system used by the Bliss Glow platform.

The authentication architecture must be secure, scalable, and compliant with modern security best practices.

------------------------------------------------------------

# TABLE: users

Purpose:

Stores all customer accounts.

Primary Key:

id (UUID)

Columns

id
UUID
PRIMARY KEY

email
VARCHAR(255)
UNIQUE
NOT NULL

password_hash
TEXT
NOT NULL

first_name
VARCHAR(100)

last_name
VARCHAR(100)

phone
VARCHAR(30)

date_of_birth
DATE

profile_image
TEXT

language
VARCHAR(10)

currency
VARCHAR(10)

marketing_consent
BOOLEAN

email_verified
BOOLEAN

phone_verified
BOOLEAN

account_status

Possible values:

ACTIVE

PENDING

BLOCKED

DELETED

last_login_at
TIMESTAMP

created_at
TIMESTAMP

updated_at
TIMESTAMP

deleted_at
TIMESTAMP NULL

------------------------------------------------------------

Indexes

PRIMARY KEY(id)

UNIQUE(email)

INDEX(account_status)

INDEX(created_at)

------------------------------------------------------------

Relationships

users

↓

addresses

orders

wishlists

reviews

notifications

sessions

------------------------------------------------------------

Business Rules

One email per customer.

Passwords must never be stored in plain text.

Passwords must use modern hashing algorithms.

Deleted accounts should use Soft Delete.

------------------------------------------------------------

# TABLE: user_sessions

Purpose

Stores active login sessions.

Columns

id

user_id

refresh_token

ip_address

device

browser

operating_system

expires_at

created_at

------------------------------------------------------------

Business Rules

Expired sessions should be removed automatically.

Users may log in from multiple devices.

------------------------------------------------------------

# TABLE: password_resets

Purpose

Password recovery.

Columns

id

user_id

token

expires_at

used

created_at

------------------------------------------------------------

Security Rules

Token expires after configured time.

Token can only be used once.

------------------------------------------------------------

# TABLE: email_verifications

Purpose

Email verification.

Columns

id

user_id

verification_token

expires_at

verified_at

------------------------------------------------------------

# TABLE: user_addresses

Purpose

Customer addresses.

Columns

id

user_id

full_name

phone

country

state

city

postal_code

street

number

complement

reference

is_default

address_type

Possible Values

HOME

WORK

OTHER

------------------------------------------------------------

Relationships

One User

↓

Many Addresses

------------------------------------------------------------

# TABLE: user_notifications

Purpose

Customer notifications.

Columns

id

user_id

title

message

type

is_read

created_at

------------------------------------------------------------

Notification Types

ORDER

PAYMENT

SHIPPING

PROMOTION

SYSTEM

SECURITY

------------------------------------------------------------

# TABLE: user_preferences

Purpose

Stores customer preferences.

Examples

Preferred language

Preferred currency

Email preferences

SMS preferences

Marketing preferences

Theme

Accessibility settings

------------------------------------------------------------

# SECURITY REQUIREMENTS

Passwords

Use Argon2id (preferred) or bcrypt.

Never store:

Plain passwords

Recovery answers

Sensitive secrets

------------------------------------------------------------

Authentication Features

Email Login

Password Login

Remember Me

Forgot Password

Email Verification

Session Management

Secure Logout

------------------------------------------------------------

Future Support

Google Login

Apple Login

Facebook Login

Passkeys

Two-Factor Authentication (2FA)

------------------------------------------------------------

Next Chapter

Chapter 4

Product Catalog

Products

Categories

Variants

Collections

Product Media

SEO

End of Chapter 3.
