# CHAPTER 14
# SDK EXAMPLES
# Bliss Glow API Documentation
# Version 1.0
# ============================================================

# PURPOSE

The Bliss Glow SDKs provide developers with simple and consistent ways
to integrate with the REST API across multiple programming languages.

Each SDK abstracts authentication, request handling, pagination,
error processing and retries while following the same API standards.

------------------------------------------------------------

# SUPPORTED LANGUAGES

Official SDKs

• JavaScript

• TypeScript

• Python

• PHP

Future SDKs

• Java

• C#

• Go

• Swift

• Kotlin

------------------------------------------------------------

# AUTHENTICATION

All SDKs use Bearer Token authentication.

Example Header

Authorization: Bearer <access_token>

Tokens are automatically attached to every authenticated request.

------------------------------------------------------------

# JAVASCRIPT SDK

Installation

npm install @blissglow/sdk

Initialisation
