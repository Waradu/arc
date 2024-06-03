interface Tab {
  id: number;
  url: string;
  name: string;
  icon: string;
}

interface Space {
  name: string;
  color: string;
  icon: string;
  currentTab: number,
  favorites: Tab[];
  pinned: Tab[];
  tabs: Tab[];
}

interface Settings {
  spaces: Space[];
  currentSpace: number;
  sidebarWidth: number;
  sidebarFloating: boolean;
  currentTab: number;
}