import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angLibProj001';

  treeData: any = '';
  treeConfig: any = '';
  selVal: any = '';

  // Default Config Values
  hasFilter = true;
  filterPlaceHolderText = 'Filter';
  hasExpandCollapseAll = true;
  treeNodeSelectColor = '#c9ffd8';
  hightlightTextColor = '#f5d105';
  noResultFoundText = 'No items found';
  treeListHeight = 300;

  constructor() {
  }

  ngOnInit() {
    this.treeData = [{ "text": 1527978678434, "value": { newKey: 1527978678434, newVal: 'this can be anything' }, "children": [{ "text": 1292232152442, "value": 1292232152442, "children": [{ "text": 474194771845, "value": 474194771845 }, { "text": 468086178830, "value": 468086178830, "children": [] }] }, { "text": 1067869237589, "value": 1067869237589, "children": [] }, { "text": 1166591731429, "value": 1166591731429, "children": [] }, { "text": 111221786011, "value": 111221786011, "children": [] }, { "text": 641372005975, "value": 641372005975, "children": [{ "text": 23082640100, "value": 23082640100, "children": [] }] }] }, { "text": 461061327962, "value": 461061327962, "children": [{ "text": 1506341053673, "value": 1506341053673, "children": [{ "text": 667184401986, "value": 667184401986, "children": [] }, { "text": 241807386605, "value": 241807386605, "children": [] }] }, { "text": 611640356387, "value": 611640356387, "children": [] }, { "text": 965973174747, "value": 965973174747, "children": [] }, { "text": 1165962520447, "value": 1165962520447, "children": [] }, { "text": 1485281005318, "value": 1485281005318, "children": [] }] }, { "text": 563115328526, "value": 563115328526, "children": [{ "text": 1143579567060, "value": 1143579567060, "children": [] }, { "text": 1059120598922, "value": 1059120598922, "children": [{ "text": 484064494017, "value": 484064494017, "children": [] }, { "text": 601056326213, "value": 601056326213, "children": [] }, { "text": 1284844531790, "value": 1284844531790, "children": [] }, { "text": 608852654113, "value": 608852654113, "children": [] }] }, { "text": 1219855808710, "value": 1219855808710, "children": [] }, { "text": 413735439845, "value": 413735439845, "children": [] }, { "text": 1549470686419, "value": 1549470686419, "children": [] }, { "text": 1503552686906, "value": 1503552686906, "children": [] }] }, { "text": 505452073429, "value": 505452073429, "children": [{ "text": 1521525871698, "value": 1521525871698, "children": [] }, { "text": 388255816497, "value": 388255816497, "children": [] }, { "text": 756926255505, "value": 756926255505, "children": [] }, { "text": 471408229406, "value": 471408229406, "children": [] }] }, { "text": 1226125795578, "value": 1226125795578, "children": [{ "text": 1382565280988, "value": 1382565280988, "children": [] }, { "text": 1612595248649, "value": 1612595248649, "children": [] }, { "text": 382561147554, "value": 382561147554, "children": [] }, { "text": 1451002704521, "value": 1451002704521, "children": [] }, { "text": 589063686731, "value": 589063686731, "children": [] }] }, { "text": 495286694031, "value": 495286694031, "children": [{ "text": 976796748331, "value": 976796748331, "children": [] }, { "text": 273658032327, "value": 273658032327, "children": [] }] }, { "text": 582062883629, "value": 582062883629, "children": [{ "text": 1587962137932, "value": 1587962137932, "children": [] }, { "text": 654677969697, "value": 654677969697, "children": [] }, { "text": 614353764022, "value": 614353764022, "children": [] }, { "text": 815006430787, "value": 815006430787, "children": [] }, { "text": 3816033110, "value": 3816033110, "children": [] }, { "text": 1369380473672, "value": 1369380473672, "children": [] }, { "text": 1042666479732, "value": 1042666479732, "children": [] }, { "text": 824666401752, "value": 824666401752, "children": [] }, { "text": 1040502337736, "value": 1040502337736, "children": [] }] }, { "text": 1585020951668, "value": 1585020951668, "children": [{ "text": 497033520361, "value": 497033520361, "children": [] }, { "text": 372369682803, "value": 372369682803, "children": [] }] }, { "text": 719672880168, "value": 719672880168, "children": [{ "text": 303683578275, "value": 303683578275, "children": [] }, { "text": 766201108123, "value": 766201108123, "children": [] }, { "text": 769708084954, "value": 769708084954, "children": [] }, { "text": 1547155552560, "value": 1547155552560, "children": [] }, { "text": 977772019906, "value": 977772019906, "children": [] }, { "text": 1328568361, "value": 1328568361, "children": [] }] }, { "text": 141999318851, "value": 141999318851, "children": [{ "text": 416939063292, "value": 416939063292, "children": [] }, { "text": 1445347741788, "value": 1445347741788, "children": [] }, { "text": 1162644340198, "value": 1162644340198, "children": [] }, { "text": 804879113240, "value": 804879113240, "children": [] }] }, { "text": 891853991901, "value": 891853991901, "children": [] }, { "text": 577675120342, "value": 577675120342, "children": [{ "text": 977928473466, "value": 977928473466, "children": [] }] }];

    this.treeConfig = {
      hasFilter: this.hasFilter,
      hightlightTextColor: this.hightlightTextColor,
      filterPlaceHolderText: this.filterPlaceHolderText,
      hasExpandCollapseAll: this.hasExpandCollapseAll,
      treeNodeSelectColor: this.treeNodeSelectColor,
      noResultFoundText: this.noResultFoundText,
      treeListHeight: this.treeListHeight
    }
  }

  getSelectedValue(val: any) {
    console.log('parent');
    console.log(val);
    this.selVal = val;
  }

}
