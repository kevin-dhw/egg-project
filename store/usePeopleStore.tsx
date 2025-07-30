import { create } from "zustand";

export interface TabItem {
  lable: string;
  selected: boolean;
  href: string;
}

interface State {
  tabs: TabItem[];
}

interface Action {
  changeTab: (idx: number) => void;
}

const useTabStore = create<State & Action>((set) => ({
  tabs: [
    {
      lable: "Home",
      href: "#home",
      selected: true,
    },
    {
      lable: "Story",
      href: "#story",
      selected: false,
    },
    {
      lable: "Trading",
      href: "#trading",
      selected: false,
    },
    {
      lable: "Market",
      href: "#market",
      selected: false,
    },
    {
      lable: "Tokenomics",
      href: "#tokenomics",
      selected: false,
    },
    {
      lable: "Listing",
      href: "#listing",
      selected: false,
    },
  ],
  changeTab: (idx) => {
    set((state) => {
      state.tabs.forEach((item, index) => {
        if (idx === index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      return { tabs: state.tabs };
    });
  },
}));

export default useTabStore;
