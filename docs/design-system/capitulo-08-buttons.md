# CHAPTER 8
# BUTTONS
# Bliss Glow Design System
# Version 1.0
# ============================================================

# PURPOSE

Buttons are the primary interactive components within the Bliss Glow
platform. They guide users through important actions and should provide
clear visual hierarchy, excellent accessibility and consistent behaviour
across every interface.

------------------------------------------------------------

# DESIGN PRINCIPLES

Buttons must be:

• Easy to recognise

• Consistent

• Accessible

• Responsive

• Touch-friendly

• Visually balanced

------------------------------------------------------------

# BUTTON VARIANTS

Primary

Used for the most important action on each screen.

Examples

Add to Basket

Proceed to Checkout

Place Order

Save Changes

------------------------------------------------------------

Secondary

Used for supporting actions.

Examples

Continue Shopping

View Details

Edit Profile

------------------------------------------------------------

Outline

Used when visual emphasis should remain low.

Examples

Learn More

View Collection

------------------------------------------------------------

Ghost

Minimal appearance.

Used inside cards, navigation and secondary interfaces.

------------------------------------------------------------

Danger

Used only for destructive actions.

Examples

Delete Account

Remove Product

Cancel Order

------------------------------------------------------------

Success

Used for confirmation-related actions.

Examples

Confirm Return

Approve Refund

------------------------------------------------------------

# BUTTON SIZES

Small

Height

36 px

Horizontal Padding

16 px

------------------------------------------------------------

Medium

Height

44 px

Horizontal Padding

24 px

Default size.

------------------------------------------------------------

Large

Height

52 px

Horizontal Padding

32 px

------------------------------------------------------------

Extra Large

Height

60 px

Horizontal Padding

40 px

Used in hero sections and key marketing pages.

------------------------------------------------------------

# BORDER RADIUS

Default

12 px

Large Buttons

16 px

Pill Buttons

9999 px

------------------------------------------------------------

# ICON SUPPORT

Icons may appear:

Before text

After text

Icon-only buttons are permitted only when the meaning is universally
recognised and an accessible label is provided.

------------------------------------------------------------

# BUTTON STATES

Default

Hover

Focus

Pressed

Active

Disabled

Loading

Success

Error

Each state must provide clear visual feedback.

------------------------------------------------------------

# LOADING STATE

Replace text with:

Loading spinner

or

Spinner with text

Example

Processing...

Buttons remain disabled while loading to prevent duplicate submissions.

------------------------------------------------------------

# DISABLED STATE

Reduce opacity.

Disable pointer interaction.

Maintain readable text contrast.

Never rely on colour alone to indicate the disabled state.

------------------------------------------------------------

# FOCUS STATE

Visible keyboard focus indicator.

Minimum outline width

2 px

Focus colour

Primary Brand Colour

------------------------------------------------------------

# TOUCH TARGET

Minimum interactive area

44 × 44 px

Recommended

48 × 48 px

------------------------------------------------------------

# BUTTON SPACING

Gap Between Buttons

16 px

Icon to Text

8 px

Button to Form

24 px

------------------------------------------------------------

# TYPOGRAPHY

Font

Inter

Weight

600

Default Size

16 px

Text Transform

None

Letter Spacing

0.2 px

------------------------------------------------------------

# COLOUR RULES

Primary

Background

Primary Rose

Text

White

Hover

Primary Deep Rose

------------------------------------------------------------

Secondary

Transparent background

Primary border

Primary text

------------------------------------------------------------

Danger

Error Red

White text

------------------------------------------------------------

Success

Success Green

White text

------------------------------------------------------------

# RESPONSIVE BEHAVIOUR

Desktop

Buttons size according to layout.

Mobile

Primary actions may expand to full width.

Button height must remain touch-friendly.

------------------------------------------------------------

# ACCESSIBILITY

Buttons must:

Support keyboard navigation

Display visible focus indicators

Have descriptive labels

Meet WCAG 2.2 AA contrast requirements

Never depend solely on colour to communicate meaning

------------------------------------------------------------

# DESIGN TOKENS

button.height.sm

button.height.md

button.height.lg

button.radius.default

button.padding.horizontal

button.padding.vertical

button.colour.primary

button.colour.secondary

button.colour.danger

------------------------------------------------------------

# BEST PRACTICES

Only one Primary button per major section.

Keep button labels concise.

Use verbs that clearly describe the action.

Avoid ambiguous wording such as "Click Here".

Maintain consistent placement throughout the application.

------------------------------------------------------------

# FUTURE ENHANCEMENTS

Split Buttons

Floating Action Buttons

Smart Loading Indicators

Adaptive Button Sizing

Animated Success States

------------------------------------------------------------

# NEXT CHAPTER

Chapter 9

Form Components

Topics

• Input Fields

• Select Menus

• Checkboxes

• Radio Buttons

• Validation

• Accessibility

End of Chapter 8.
