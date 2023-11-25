import { NavBarItemType } from "../types";

class NavBarItem implements NavBarItemType {
  content: string;
  route: string;
  activeIcon: string;
  inactiveIcon: string;
    
  constructor(
    content: string,
    route: string,
    activeIcon: string,
    inactiveIcon: string
  ) {
    this.content = content;
    this.route = route;
    this.activeIcon = activeIcon;
    this.inactiveIcon = inactiveIcon;
  }
}

export default NavBarItem;
