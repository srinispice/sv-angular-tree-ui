
# sv-angular-tree-ui

An unlimited Angular tree level component with filter, hightlight, expand/collapse and height option.


## Dependencies

 - [Lodash](https://lodash.com/)
 

  
## Features

- Unlimited tree level
- Filter
- Expand / Collapse All
- Highlight Feature

  
## Demo

[https://srinivasanofficial.github.io/SrinivasanOfficialAngTree/](https://srinivasanofficial.github.io/SrinivasanOfficialAngTree/)

  
## Installation

After install the above dependencies, install sv-angular-tree-ui
 via:

```bash
  npm i sv-angular-tree-ui
```

Once installed you need to import our main module in your application module:
```bash
  import { SvAngularTreeUiModule } from 'sv-angular-tree-ui';

  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SvAngularTreeUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
    
## Usage

```
<sv-angular-tree-ui 
    [treeConfigData]="treeConfigData" 
    [treeData]="treeData" 
    (getSelectedValue)="getSelectedValue($event)"
></sv-angular-tree-ui>
```
#### @Input treeData
- Whatever string passed under **text** JSON will be used for Display and Filter Condition
- Sameway the values passed under **value** JOSN will be used for passing data to parent component on selecting the tree node. 
- If **children** array is passed, the child node will be created or else it will be ignored.
```
[
  {
    "text": 1527978678434,
    "value": { "newKey": 1527978678434, "newVal": "this can be anything" },
    "children": [
      {
        "text": 1292232152442,
        "value": 1292232152442,
        "children": [
          { "text": 474194771845, "value": 474194771845 },
          { "text": 468086178830, "value": 468086178830, "children": [] }
        ]
      },
      { "text": 1067869237589, "value": 1067869237589, "children": [] },
      { "text": 1166591731429, "value": 1166591731429, "children": [] },
      { "text": 111221786011, "value": 111221786011, "children": [] },
      {
        "text": 641372005975,
        "value": 641372005975,
        "children": [
          { "text": 23082640100, "value": 23082640100, "children": [] }
        ]
      }
    ]
  }
]
```
#### @Input treeConfigData (Optional)
| Parameter                 | Type       | Default Value                       |
| :--------                 | :-------   | :--------------------------------   |
| `hasFilter`               | `Boolean`  | true                                |
| `hasExpandCollapseAll`    | `Boolean`  | true                                |
| `filterPlaceHolderText`   | `String`   | Filter                              |
| `treeNodeSelectColor`     | `String`   | #c9ffd8                             |
| `hightlightTextColor`     | `String`   | #f5d105                             |
| `noResultFoundText`       | `String`   | No items found                      |
| `treeListHeight`          | `String`   | ''                                  |

  
## Authors

- [@SrinivasanOfficial](https://github.com/orgs/SrinivasanOfficial)
## Contributing

I am very appreciate for your ideas, proposals and found bugs which you can leave in github issues. Thanks in advance!

  