import { FC } from "react";
import { ListResponse } from "../../../state/base-responses";
import {
  BodyTD,
  EmptyText,
  HeaderTH,
  HeaderTR,
  TableElement,
  TR,
} from "./Table.styles";
import { TableColumns } from "./types";

interface Props {
  columns: TableColumns[];
  data?: ListResponse<any>;
}

const Table: FC<Props> = ({ columns, data }) => {
  return (
    <>
      <TableElement>
        <thead>
          <HeaderTR>
            {columns.map((headerItem, index) => (
              <HeaderTH key={index}>{headerItem.title}</HeaderTH>
            ))}
          </HeaderTR>
        </thead>
        <tbody>
          {!!data?.content?.length &&
            data?.content?.map((item, index) => (
              <TR key={index}>
                {columns.map((col, key) => (
                  <BodyTD key={key}>{col.render(item)}</BodyTD>
                ))}
              </TR>
            ))}
        </tbody>
      </TableElement>
      {!data?.content?.length && <EmptyText>No data</EmptyText>}
    </>
  );
};
export default Table;
