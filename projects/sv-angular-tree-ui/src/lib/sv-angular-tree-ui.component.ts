import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sv-angular-tree-ui',
  templateUrl: './sv-angular-tree-ui.html',
  styleUrls: ['./sv-angular-tree-ui.scss'],
})
export class SvAngularTreeUiComponent implements OnChanges, OnInit {

  @Input() treeData: any;
  @Input() treeConfigData!: LibTreeConfig;
  @Output() getSelectedValue: EventEmitter<any> = new EventEmitter();

  libLocalTreeData: Array<{}> = [];
  libOrgTreeStr: string = '';
  libInitParentId: number = 0;
  libSrchText: string = '';
  libSelUniqId: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.libLoadDefaultConfiguration();
    this.libInitializeParentData();
  }

  ngOnChanges(changes: any): void {
  }

  libLoadDefaultConfiguration() {
    this.treeConfigData.hasFilter = (this.treeConfigData.hasFilter !== undefined) ? this.treeConfigData.hasFilter : true;
    this.treeConfigData.filterPlaceHolderText = (this.treeConfigData.filterPlaceHolderText !== undefined) ? this.treeConfigData.filterPlaceHolderText : 'Filter';
    this.treeConfigData.hasExpandCollapseAll = (this.treeConfigData.hasExpandCollapseAll !== undefined) ? this.treeConfigData.hasExpandCollapseAll : true;
    this.treeConfigData.treeNodeSelectColor = (this.treeConfigData.treeNodeSelectColor !== undefined) ? this.treeConfigData.treeNodeSelectColor : '#c9ffd8';
    this.treeConfigData.hightlightTextColor = (this.treeConfigData.hightlightTextColor !== undefined) ? this.treeConfigData.hightlightTextColor : '#f5d105';
    this.treeConfigData.noResultFoundText = (this.treeConfigData.noResultFoundText !== undefined) ? this.treeConfigData.noResultFoundText : 'No items found';
    this.treeConfigData.treeListHeight = (this.treeConfigData.treeListHeight !== undefined) ? this.treeConfigData.treeListHeight : '';
  }

  libInitializeParentData() {
    this.libInitParentId = 0;
    this.libLocalTreeData = this.treeData;
    this.libOrgTreeStr = JSON.stringify([...this.treeData]);
    const updateParentIdToTreeArr = (arrData: Array<any>, parentId: number) => {
      (arrData || []).forEach(r => {
        r.children = (_.has(r, 'children')) ? r.children : [];
        r.parentId = parentId;
        r.hasChild = _.isEmpty(r.children) ? false : true;
        r.isExpanded = false;
        // r.isExpanded = (r.parentId === 0) ? true : false;
        r.uniqueId = ++this.libInitParentId;
        updateParentIdToTreeArr(r.children, r.uniqueId);
      });
    };
    updateParentIdToTreeArr(this.libLocalTreeData, this.libInitParentId);
    this.libOrgTreeStr = JSON.stringify([...this.treeData]);
  }

  libAddRemovePlusMinusIcon(uniqueId: number) {
    const iconId = <HTMLElement>document.querySelector('#libIconId' + uniqueId);

    if (iconId.classList.value.indexOf('libPlusIconCls') > -1) {
      iconId.classList.remove("libPlusIconCls");
      iconId.classList.add("libMinusIconCls");
    } else {
      iconId.classList.remove("libMinusIconCls");
      iconId.classList.add("libPlusIconCls");
    }
  }

  libExpandColapseTree(uniqueId: number) {
    this.libAddRemovePlusMinusIcon(uniqueId);
    const updateExpandCollapseProp = (arrData: Array<any>) => {
      (arrData || []).forEach(val => {
        if (val.parentId === uniqueId) {
          val.isExpanded = !val.isExpanded;
        }
        updateExpandCollapseProp(val.children)
      });
    };
    updateExpandCollapseProp(this.libLocalTreeData);
  }

  libFilterTree(e: any) {
    this.libSelUniqId = 0;
    this.libSrchText = e.target.value;
    const libTempOrgTreeData = JSON.parse(this.libOrgTreeStr);
    const libExpColAllDom = <HTMLElement>document.getElementById('libExpColAllId');
    if (!_.isEmpty(e.target.value)) {
      if (libExpColAllDom) {
        libExpColAllDom.classList.remove("libExpandAllIconCls");
        libExpColAllDom.classList.add("libCollapseAllIconCls");
      }

      const libFilterTreeData = (list: any, filter: string) => {
        return list.filter(function (item: any) {
          // return _.filter(list, (item) => {
          if (item.text.toString().indexOf(filter) > -1) {
            item.hasChild = (_.isEmpty(item.children)) ? false : true;
            return item;
          } else {
            item.children = libFilterTreeData(item.children, filter);
            return !_.isEmpty(item.children);
          }
        });
      }
      this.libLocalTreeData = [...libFilterTreeData(libTempOrgTreeData, e.target.value)];
      this.libExpandCollapseAll(true);
    } else {
      if (libExpColAllDom) {
        libExpColAllDom.classList.remove("libCollapseAllIconCls");
        libExpColAllDom.classList.add("libExpandAllIconCls");
      }
      this.libLocalTreeData = [...JSON.parse(this.libOrgTreeStr)]
      this.libInitializeParentData();
    }
  }

  libExpandCollapseAll(expandStatus: boolean) {
    const loopAllTreeData = (arrData: Array<any>) => {
      (arrData || []).forEach(val => {
        val.isExpanded = expandStatus;
        loopAllTreeData(val.children)
      });
    };
    loopAllTreeData(this.libLocalTreeData);
  }

  libHighLightText(libTreeText: string) {
    const clsTemp = <any>document.getElementsByClassName('libHighLightTextCls');
    for (var i = 0; i < clsTemp.length; i++) {
      clsTemp[i].style.backgroundColor = this.treeConfigData.hightlightTextColor;
    }
    if (!this.libSrchText) {
      return libTreeText;
    }
    return libTreeText.toString().replace(new RegExp(this.libSrchText, "gi"), match => {
      return '<span class="libHighLightTextCls">' + match + '</span>';
    });
  }

  libEmitSelectedTreeVal(libSelItem: any) {
    let libSelectedVal = {};
    const libCurSelTreeDom = <HTMLElement>document.getElementById('parentTree' + libSelItem.uniqueId);
    if (this.libSelUniqId === 0) {
      this.libSelUniqId = libSelItem.uniqueId;
      libCurSelTreeDom.style.backgroundColor = this.treeConfigData.treeNodeSelectColor;
      libSelectedVal = libSelItem.value;
    } else if (this.libSelUniqId === libSelItem.uniqueId) {
      this.libSelUniqId = 0;
      libCurSelTreeDom.style.backgroundColor = '';
      libSelectedVal = {};
    } else {
      const libPrevSelUniqueId = this.libSelUniqId;
      const libPrevSelDom = <HTMLElement>document.getElementById('parentTree' + libPrevSelUniqueId);
      libPrevSelDom.style.backgroundColor = '';
      this.libSelUniqId = libSelItem.uniqueId;
      libCurSelTreeDom.style.backgroundColor = this.treeConfigData.treeNodeSelectColor;
      libSelectedVal = libSelItem.value;
    }
    this.getSelectedValue.emit(libSelectedVal);
  }

  libToggleExpCollAll() {
    const libExpColAllDom = <HTMLElement>document.getElementById('libExpColAllId');
    let expAllStatus: boolean;

    if (libExpColAllDom.classList.value.indexOf('libCollapseAllIconCls') > -1) {
      libExpColAllDom.classList.remove("libCollapseAllIconCls");
      libExpColAllDom.classList.add("libExpandAllIconCls");
      expAllStatus = false;
    } else {
      libExpColAllDom.classList.remove("libExpandAllIconCls");
      libExpColAllDom.classList.add("libCollapseAllIconCls");
      expAllStatus = true;
    }
    this.libExpandCollapseAll(expAllStatus);
  }
}


export interface LibTreeConfig {
  hasFilter: true;
  filterPlaceHolderText: 'Filter';
  hasExpandCollapseAll: true;
  treeNodeSelectColor: '#c9ffd8';
  hightlightTextColor: '#f5d105';
  noResultFoundText: 'No items found';
  treeListHeight: '';
}
