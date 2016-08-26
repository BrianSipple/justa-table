# Ember Justa Table [![Build Status](https://travis-ci.org/cball/justa-table.svg?branch=master)](https://travis-ci.org/cball/justa-table)

This README outlines the details of collaborating on this Ember addon.

## Installation

Here is the simplest way to get started with justa-table:

```sh
ember install cball/justa-table
ember install ember-cli-sass
```

*Note:* Ember CLI versions < 0.2.3 should use `ember install:addon` instead of `ember install`

**app.scss**
```scss
@import "justa-table/justa-table-structure";
@import "justa-table/justa-table-appearance";
```

## Usage

Currently, this addon is still in its very early stages, but it _is_ usable.

You're encouraged to browse the [full list of components available to your application](/addon/components/), but everything starts by initializing a `justa-table` block
and passing data down to it as `content`:

```hbs
{{#justa-table content=content as |table|}}
  ....
{{/justa-table}}
```

The `justa-table` component will yield back a `table` object, and you can use this within
it's block context to compose even more pieces of your table structure:

```hbs
{{#justa-table content=content as |table|}}
  {{#table-columns table=table as |row|}}

    {{table-column
      row=row
      width=190
      headerName='Name'
      valueBindingPath='displayName'}}

    {{#table-column headerName='Image'}}
      <a href="#">
        <img src={{row.image}} height="32" {{action 'imageClicked' row}} />
      </a>
    {{/table-column}}

    {{#each dynamicColumns as |dynamicColumn index|}}
      {{table-column
        row=row
        index=index
        width=dynamicColumn.width
        headerName=dynamicColumn.label
        valueBindingPath=dynamicColumn.value}}
    {{/each}}

  {{/table-columns}}
{{/justa-table}}
```

### Available Components

  * [`justa-table`](#justa-table)
  * [`basic-header`](#basic-header)
  * [`collapsable-table-row`](#collapsable-table-row)
  * [`collapsable-table-rows`](#collapsable-table-rows)
  * [`column-resize-handle`](#column-resize-handle)
  * [`fixed-table-columns`](#fixed-table-columns)
  * [`in-viewport-checker`](#in-viewport-checker)
  * [`table-column-resizer`](#table-column-resizer)
  * [`table-column`](#table-column)
  * [`table-columns`](#table-columns)
  * [`table-row`](#table-row)
  * [`table-rows`](#table-rows)
  * [`table-vertical-collection`](#table-vertical-collection)
  * [`table-vertical-item`](#table-vertical-item)

### Component APIs

#### `justa-table`

The root component that sets up the overall structure of the table and stores its `content`. When provided with content, this yields itself back to its template's block scope, and serves as
a container for composing inner table components.

  * Parameters:

    + `content` {Array} **required**: A list of objects -- where each object will constitute
    one of the table's rows.

      default: null    


    + `tableHeight` {number}: The initial / max height of the table. ✋ NOTE: The table will overflow if rows exceed this number.

      default: 500    


    + `rowHeight` {number}: The height or each row in the table.

      default: 37    


    + `paginate` {boolean}: Whether or not the table should use pagination. If true, a new page will fire the `on-load-more-rows` action when it enters the viewport.

      default: false    


    + `rowClasses` {Array}: CSS classes to apply to table rows.

      default: null    


    + `rowGroupDataName` {string}: The name of data property for row groups in the table columns.
    If using a `collapsable` table, the `justa-table` component will add a dynamic key to each row in the `collapseTableData` based on the `rowGroupDataName` that recomputes the `collapseTableData`.

      default: 'data'
      constraint: Must be using a `collapsable` table with `collapseTableData`


    + `hideOffscreenContent` {boolean}: Whether or not the component should hide out-of-viewport
    content (vertical only for now).

      default: false    


    + `offscreenContentBufferSize` {number}: The amount of additional rows to load on to the
    top/bottom of the viewport when hiding offscreen content.
    This will round up/down to the nearest row.

      default: 0.5


#### `basic-header`

  * Parameters

    + ``





## Development

* `git clone https://github.com/cball/justa-table.git`
* `cd justa-table`
* `npm install`
* `bower install`

## Previewing

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
