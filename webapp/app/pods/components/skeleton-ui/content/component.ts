import Component from '@glimmer/component';

interface Args {
  height: string;
  width: string;
}

export default class SkeletonUiContent extends Component<Args> {
  get primaryColor() {
    return "var(--body-background-border)";
  }

  get secondaryColor() {
    return "var(--body-background)";
  }
}

