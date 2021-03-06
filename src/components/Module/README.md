Modules are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

### Usage

#### Contained

A Module is identifiable as a single, contained unit.

#### Independent

A Module can stand alone, without relying on surrounding elements for context.

#### Individual

A card cannot merge with another card, or divide into multiple cards.

Source: https://material.io/design/components/cards.html#anatomy
Put the name in the top left corner, align controls or actions to the top right corner of the Module and place the information in the content. The ModuleFooter can be used to show additional functionality like sharing or exporting.

Using Modules has additional benefits of flexibility when it comes to responsive design.

### Do not use

#### Default Module on white background
Avoid using the **default** Module with white background. Use the light blue background or the **light** Module instead.

More information: [Elevation in Material UI](https://material.io/design/environment/elevation.html)


### Usage with react
```js
import { Module } from '@wfp/ui';
```