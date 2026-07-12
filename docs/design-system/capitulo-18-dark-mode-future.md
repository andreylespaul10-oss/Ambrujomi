# CHAPTER 18
# DARK MODE (FUTURE)
# Bliss Glow Design System
# Version 1.0
# ============================================================

# PURPOSE

Dark Mode extends the Bliss Glow Design System by providing an
alternative visual theme that improves comfort in low-light
environments while preserving the brand's premium identity.

Both themes must provide an equivalent user experience.

------------------------------------------------------------

# DESIGN PRINCIPLES

Dark Mode should be:

• Elegant

• Comfortable

• Accessible

• Consistent

• Energy Efficient

• Brand Aligned

------------------------------------------------------------

# THEME STRATEGY

Supported Themes

Light

Dark

Future

High Contrast

Themes must be interchangeable without changing layout or behaviour.

------------------------------------------------------------

# THEME SWITCHING

Users may choose:

Light Mode

Dark Mode

System Preference

The selected preference should persist across sessions.

------------------------------------------------------------

# COLOUR MAPPING

Every Light Mode token must have a corresponding Dark Mode token.

Example

color.background.default

↓

color.background.dark

No component should require custom colour overrides.

------------------------------------------------------------

# BACKGROUND COLOURS

Primary Background

Dark Charcoal

Secondary Background

Soft Black

Cards

Dark Slate

Navigation

Near Black

Modal Overlay

Black with transparency

------------------------------------------------------------

# TEXT COLOURS

Primary Text

Off White

Secondary Text

Light Grey

Disabled Text

Muted Grey

Links

Soft Rose

Headings

Pure White

------------------------------------------------------------

# BRAND COLOURS

The official Bliss Glow brand colours remain recognisable while being
optimised for sufficient contrast in Dark Mode.

Primary accents may be slightly brighter to improve visibility.

------------------------------------------------------------

# COMPONENT ADAPTATION

Buttons

Updated colour tokens

Cards

Dark surfaces

Forms

Dark backgrounds

Tables

Alternating dark rows

Navigation

Dark header

Dark sidebar

------------------------------------------------------------

# IMAGES

Product images retain original colours.

Transparent PNGs and SVGs should support both themes.

Avoid forcing colour inversion.

------------------------------------------------------------

# SHADOWS

Reduce shadow intensity.

Prefer subtle elevation using layered surfaces.

Avoid heavy shadows that disappear on dark backgrounds.

------------------------------------------------------------

# BORDERS

Use soft grey borders.

Avoid bright white outlines.

Maintain clear separation between components.

------------------------------------------------------------

# ICONS

Icons automatically inherit theme colours.

Interactive icons use brand accent colours.

Disabled icons use muted grey.

------------------------------------------------------------

# CHARTS

Analytics charts require dedicated Dark Mode palettes.

Maintain colour distinction.

Support colour-blind accessibility.

------------------------------------------------------------

# ACCESSIBILITY

Dark Mode must also satisfy:

WCAG 2.2 AA

Minimum contrast ratios

Visible focus indicators

Keyboard accessibility

Screen reader compatibility

------------------------------------------------------------

# PERFORMANCE

Theme switching should occur instantly.

Avoid full page reloads.

Use CSS variables or design tokens.

Prevent layout shifts.

------------------------------------------------------------

# DESIGN TOKENS

theme.light

theme.dark

color.background.dark

color.text.dark

color.surface.dark

color.border.dark

------------------------------------------------------------

# USER PREFERENCES

Remember selected theme.

Synchronise across signed-in devices (future).

Respect operating system preferences.

------------------------------------------------------------

# BEST PRACTICES

Never invert colours automatically.

Maintain consistent visual hierarchy.

Preserve brand recognition.

Test all components in both themes.

Validate accessibility after every update.

------------------------------------------------------------

# FUTURE ENHANCEMENTS

High Contrast Theme

Dynamic Accent Colours

Scheduled Theme Switching

Ambient Light Detection

Seasonal Themes

Custom User Themes

------------------------------------------------------------

# NEXT CHAPTER

Chapter 19

Design Tokens

Topics

• Token Architecture

• Colour Tokens

• Typography Tokens

• Spacing Tokens

• Motion Tokens

• Theme Tokens

End of Chapter 18.
