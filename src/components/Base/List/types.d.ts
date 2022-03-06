export interface List {
  id: string;
  icon?: React.ReactNode
  label: string;
  handleClick: (id: string) => void;
  defaultOpen?: boolean;
  nested?: boolean;
  children?: List[];
}

export interface DynamicListProps {
  list: List[];
}

export interface NestedItem {
  [key: string]: boolean;
}