import { ReactNode } from "react";

export interface TableColumns {
  title: string;
  render: (rowData: any) => ReactNode;
}
