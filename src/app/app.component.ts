import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { SplitAreaDirective } from 'angular-split';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChildren(SplitAreaDirective)
  splitAreas!: QueryList<SplitAreaDirective>;

  title = 'HMI_web_design';
  leftSize = 20;
  leftSizeStorage = this.leftSize;
  rightSize = 20;
  leftPanel = 'home';
  isLeftPanelClose = false;

  public homeClick(e: MatButtonToggleChange): void {
    if (this.leftPanel !== e.value) {
      this.leftPanel = e.value;
      this.expandLeftPanel();
    } else { 
      this.leftPanel = e.value;
      this.toggleLeftPanel();
    }
  }

  private toggleLeftPanel(): void {
    if (this.isLeftPanelClose) {
      this.expandLeftPanel();
    } else {
      this.collapseLeftPanel();
    }
  }

  private collapseLeftPanel(): void {
    this.leftSizeStorage = this.leftSize;
    this.leftSize = 0;
    this.isLeftPanelClose = true;
    this.splitAreas.first.collapse();
  }

  private expandLeftPanel(): void {
    this.leftSize = this.leftSizeStorage;
    this.isLeftPanelClose = false;
    this.splitAreas.first.expand();
  }


}
