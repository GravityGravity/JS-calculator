# Calculator

Four-function calculator in vanilla HTML, CSS, and ES modules. No dependencies.

## Features

- Operators: `+`, `-`, `*`, `/`
- Chained operations; repeated `=` reuses the previous operator and operand
- Keyboard input: digits, operators, `Enter` (=), `Backspace`/`C` (clear)
- Division by zero returns `NaN`

## Dynamic Sizing

Layout is a nested flex hierarchy: `body` (column, `min-height: 100vh`) → `#calc` → `#digits` → `.row`. Each level uses `flex: 1 1 0`, and button text uses `font-size: 10vmin`, so the grid scales with the viewport.

## Display at Different Sizes

<img src="img/display-small.png" alt="Calculator display, small viewport" width="200">
<img src="img/display-medium.png" alt="Calculator display, medium viewport" width="400">
<img src="img/display-large.png" alt="Calculator display, large viewport" width="600">
