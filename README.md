# Ad Hoc Design Surge 1 - CSS Animation
{:.ds-title}

1/17/2020

[Scott Weber](https://adhocteam.us/our-team/scott-weber/) and [John French](https://adhocteam.us/our-team/john-french/) set out to explore the potential value of adding animation and motion directives into the [CMS Design System (CMSDS)](https://design.cms.gov/). Currently, there is no framework or guidance for animation within the CMSDS. **We spent two days figuring out if that would be valuable and how it could be successful.**
{:.ds-text--lead}

## Why explore adding animation?

When used correctly, motion and animation can broaden the toolkit designers and developers have to help enrich digital services. It can help give a user confirmation that a task has been completed, or let them know that things are happening in the background.

Animation can be used as a part of a larger strategy to improve inclusivity and accessibility of services by adding another layer of context to digital interactions. It can help to highlight connections between elements and information in real time or provide simulated haptic feedback when a button is pressed or selected.

For our work at the Centers for Medicare and Medicaid, defining a standardized framework for animation in line with the CMSDS will allow dozens of teams and projects to use and contribute to the animation standards together. This will lead to consistent, reliable implementation of animation across CMS digital services.

## Defining motion and animation options

We started by assessing common UI animation methods that would provide the highest flexibility and value in the CMSDS. The idea was essentially to create “animation classes” that can be added to an element in the same way the design system handles CSS utilities now.

We came up with the following list: 

* Fade In
* Fade In + Grow
* Fade Out
* Fade Out + Shrink
* Color
* Shake (Directional variations)
* Grow
* Shrink
* Shrink + Fade Out
* Slide (Directional variations)
* Slide + Fade In
* Slide + Fade Out

In addition to defining these set animations, we explored adding variables to allow for control of `animation-durtion` as well as `animation-timing-function` for each animation type. This would give a bot of control on the animation itself while also providing the consistency that variables provide. 

### Governance / Implementation Details

We made a number of governance decisions around the usage of animations in the design system to ensure that animations are adopted properly and consistently across projects. 

#### Animation Class Naming Conventions

Class structuring would work in a similar way as the CMSDS utilties. 

```
.ds-u-animate-fade--[ in | out ]
.ds-u-animate-speed--[ slow | medium | fast ] 
```

We wanted to follow the pre-existing CMSDS methodologies for naming and using utility classes, while also being able to incorportate required animation properties. In an attempt to keep users code as clean as possible, we decided to prepoulate the animations with default variables, so that a user can simple add the class: `ds-u-animate-fade--in` without havin to also specify the speed. If they do choose to adjust the speed using the `ds-u-animate-speed--` class, the default value can be overriden. 

#### Encouraging Contribution

In an effort to ensure consistent, well-tested behavior across sites that utilize the CMS Design System, we recommend users not attempt to combine animation classes to create new animations. Instead, we would encourage users to work with the CMSDS team to request or contribute new animations into the design system itself. This will help ensure that no unexpected errors or usability problems occur if animation classes are combined. 

In order to validate our assumptions around the impact of implementing animations into the CMSDS, we met with Ad Hoc’s accessibility group and discussed general usability concerns with the healthcare.gov team.


##  Animation guidelines

### General

* Animation should be considered early on in the process
* Animation should enhance the UX and serve a purpose
* Animation should feel natural in context of the interaction

### Duration
* Shorter durations should be used for simple animations (Ex: fades and color changes)
* Longer durations should be used for more complex animations (Ex: moving object on the screen and page transitions)
* Duration for mobile devices should be shorter for smaller wearable devices and longer for tablets


## Sample Documentation / Implementation

<header class="ds-u-padding--3 ds-u-sm-padding--6 ds-u-display--block ds-u-fill--gray-lightest">
	<h1 class="ds-display" id="components.alert">Fade In</h1>
	<div class="ds-u-clearfix"></div>
	<div class="ds-u-font-size--small">
		<a class="ds-u-margin-right--2" href="#guidance">Jump to guidance</a>
		<a href="https://standards.usa.gov/components/alerts">View related U.S. Web Design Standard</a>
	</div>
</header>

<div class="ds-u-padding-x--6 ds-u-padding-y--2" style="border: 1px solid #f1f1f1">
	This is where the description of fade in as an animation can go.
	<div class="ds-u-padding--2 ds-u-margin-y--2" style="border: 1px solid #666666">
		<button onclick="reset()" class="ds-c-button ds-c-button--primary">Reset</button>
		<button onclick="newAlert()" class="ds-c-button">Fade In: Alert (slow)</button>
		<button onclick="newModal()" class="ds-c-button">Fade In: Modal (medium)</button>
		<button onclick="newButton()" class="ds-c-button">Fade In: Button (fast)</button>
		<div class="ds-u-margin-y--2" id="add_message" style="min-height: 85px; background: #f1f1f1f1;"></div>
	</div>

</div>

## Example - Fade


For the short scope of the exercise, we decided to implement and provide documents for one of the chosen interactions to create a path forward for adding animation to the design system as a whole. . 

# Fade

Use the fade in utility class to fade an element on to the screen.

**Format**: `ds-u-animate-fade--[in|out]`

<button onclick="reset()" class="ds-c-button">Reset</button>
<button onclick="newAlert()" class="ds-c-button">add alert (slow)</button>
<button onclick="newModal()" class="ds-c-button">add modal (medium)</button>
<button onclick="newButton()" class="ds-c-button">add button (fast)</button>
<div id="add_message"></div>

## Guidance

### Customization
The following animation Sass variables can be overridden to theme animation properties:

* `$animation-speed-very-slow`
* `$animation-speed-slow`
* `$animation-speed-normal`
* `$animation-speed-fast`
* `$animation-speed-very-fast`
* `$animation-timing-function`

### Do
* Do use fade in help grab the attention of the user  
* Do consider the speed and size of the item being faded in 

### Don't 
* Don't use fade in for large blocks of content (Ex: Don't fade in an entire form) 

*****
Resources

* [Understanding motion](https://material.io/design/motion/understanding-motion.html)
* [Including Animation In Your Design System](https://www.smashingmagazine.com/2019/02/animation-design-system/)
* [Lightning Design System Motion](https://archive-1_0_5.lightningdesignsystem.com/design/motion/)
* [The ultimate guide to proper use of animation in UX](https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9)