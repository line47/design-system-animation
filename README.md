# Ad Hoc Design Surge 1 - CSS Animation
{:.ds-title}

1/17/2020

In this exercise, Scott Weber and John French set out to explore the potential value of adding animation and motion directives into the CMS Design System. Currently, there is no framework or guidance for animation within a design system. **We wanted to spend two days figuring out if that would be valuable and how it would need to work to be successful.**

## Why explore adding animation?
{:.ds-h2}

When used correctly, motion and animation can broaden the toolkit designers and developers have to help enrich digital services. It can help give a user confirmation that a task has been completed, or let them know that things are happening in the background.

Animation can be used as a part of a larger strategy to improve inclusivity and accessibility of services by adding another layer of context to digital interactions. It can help to highlight connections between elements and information in real time or provide simulated haptic feedback when a button is pressed or selected.

For our work at the Centers for Medicare and Medicaid, defining a standardized framework for animation in line with the CMS Design System will allow dozens of teams and projects to use contribute to improving animations standards together across the agency. This will lead to consistent, reliable implementation of animation across CMS digital services.

## Defining the interactions
{:.ds-h2}

We had to start by assessing common UI animation methods that would provide the highest flexibility and value across all components that already exist in the CMS Design System. The idea was essentially to create “animation classes” that can be added to any element in the same way the design system handles CSS utilities now.

* Fade In
* Fade In + Expand
* Fade Out
* Fade Out + Subtract
* Color
* Jiggle
* Shake
* Expand
* Subtract
* Subtract + Fade Out
* Slide
* Slide (Directional variations)
* Slide + Fade In
* Slide + Fade Out

In order to validate our assumptions around the impact of implementing these animations into the CMSDS, we met with Ad Hoc’s accessibility group and discussed general usability concerns with the healthcare.gov team.

We made a number of governance decisions around the usage of animations in the design system to ensure that animations are adopted properly and consistently across projects:

* We will recommend only using one animation class per element to prevent unpredictable and inconsistent behavior.

## Example - Fade In
{:.ds-h2}

For the short scope of the exercise, we decided to implement and provide documents for one of the chosen interactions to create a path forward for adding animation to the design system as a whole. . 


<button onclick="reset()" class="ds-c-button">Reset</button>
<button onclick="newAlert()" class="ds-c-button">add alert (slow)</button>
<button onclick="newModal()" class="ds-c-button">add modal (medium)</button>
<button onclick="newButton()" class="ds-c-button">add button (fast)</button>
<div id="add_message"></div>