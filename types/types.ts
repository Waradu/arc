interface Tab {
  url: string;
  name: string;
  icon: string;
}

interface Split {
  Tabs: Tab[];
}

interface Folder {
    name: string;
    content: foldertab[];
}

type foldertab = Folder | Tab;

interface Space {
  name: string;
  color: string;
  icon: string;
  pinned: Tab[];
  favorites: foldertab[];
  tabs: Tab[];
}

interface Settings {
  spaces: Space[];
}