# CHAPTER 15
# MOTION & ANIMATIONS
# Bliss Glow Design System
# Version 1.0
# ============================================================

# PURPOSE

Motion enhances the user experience by providing meaningful feedback,
guiding attention and improving the perception of speed.

Animations must always support usability and never become distracting.

Every animation should have a functional purpose.

------------------------------------------------------------

# DESIGN PRINCIPLES

Motion should be:

• Natural

• Elegant

• Fast

• Purposeful

• Consistent

• Accessible

------------------------------------------------------------

# MOTION PHILOSOPHY

Animations should communicate:

State changes

Relationships

Progress

Success

Errors

Navigation

Never animate purely for decoration.

------------------------------------------------------------

# ANIMATION DURATIONS

Extra Fast

100 ms

Used for

Hover feedback

------------------------------------------------------------

Fast

150 ms

Used for

Buttons

Icons

Small transitions

------------------------------------------------------------

Standard

200 ms

Used for

Cards

Forms

Dropdowns

------------------------------------------------------------

Medium

300 ms

Used for

Modals

Side panels

Navigation drawers

------------------------------------------------------------

Slow

400–500 ms

Used only for

Hero sections

Marketing experiences

Page transitions

------------------------------------------------------------

# EASING CURVES

Default

Ease-Out

Entrance

Ease-Out

Exit

Ease-In

Complex Motion

Ease-In-Out

Animations should feel smooth and predictable.

------------------------------------------------------------

# MICROINTERACTIONS

Hover

Slight elevation

Focus

Visible outline

Press

Subtle scale reduction

Success

Confirmation animation

Error

Gentle shake

Loading

Spinner or skeleton

Completion

Fade and confirmation icon

------------------------------------------------------------

# BUTTON ANIMATIONS

Hover

Elevation + colour transition

Pressed

Scale to 98%

Loading

Spinner replaces icon

Success

Animated checkmark

------------------------------------------------------------

# CARD ANIMATIONS

Hover

Elevation increase

Shadow transition

Image zoom

2–3%

CTA fade-in

Focus

Accessibility outline

------------------------------------------------------------

# NAVIGATION ANIMATIONS

Mega Menu

Fade + slide

Mobile Drawer

Slide from left

Dropdown

Fade + scale

Search Suggestions

Fade + expand

Sticky Header

Smooth reveal

------------------------------------------------------------

# MODAL ANIMATIONS

Open

Fade + scale

Close

Fade + scale down

Background Overlay

Fade

Duration

300 ms

------------------------------------------------------------

# PAGE TRANSITIONS

Allowed

Fade

Slide

Crossfade

Not Allowed

Excessive zoom

Flash effects

Rotation

Distracting transitions

------------------------------------------------------------

# LOADING ANIMATIONS

Skeleton Loaders

Preferred

Spinner

Secondary option

Progress Bar

For long-running tasks

Never leave users without visual feedback.

------------------------------------------------------------

# SUCCESS ANIMATIONS

Order Placed

Animated checkmark

Product Added

Basket confirmation

Profile Saved

Success toast

Payment Approved

Confirmation state

------------------------------------------------------------

# ERROR ANIMATIONS

Gentle horizontal shake

Error icon fade-in

Inline validation message

Colour transition

Animations should remain subtle.

------------------------------------------------------------

# ACCESSIBILITY

Support the user's reduced motion preference.

Disable non-essential animations when

prefers-reduced-motion

is enabled.

Do not use flashing animations.

Avoid motion that could trigger vestibular discomfort.

------------------------------------------------------------

# PERFORMANCE

Use GPU-accelerated properties.

Animate

Opacity

Transform

Avoid animating

Width

Height

Top

Left

Heavy box-shadow effects

------------------------------------------------------------

# DESIGN TOKENS

motion.duration.fast

motion.duration.standard

motion.duration.slow

motion.easing.default

motion.easing.enter

motion.easing.exit

------------------------------------------------------------

# BEST PRACTICES

Keep animations short.

Always provide meaningful feedback.

Avoid overlapping animations.

Maintain consistent timing.

Test performance on low-powered devices.

------------------------------------------------------------

# FUTURE ENHANCEMENTS

Physics-Based Motion

Adaptive Motion System

Context-Aware Animations

AI-Personalised Motion

Advanced Page Transitions

Interactive Product Experiences

------------------------------------------------------------

# NEXT CHAPTER

Chapter 16

Responsive Design

Topics

• Breakpoints

• Adaptive Layouts

• Mobile Optimisation

• Tablet Experience

• Desktop Experience

• Large Screens

End of Chapter 15.
