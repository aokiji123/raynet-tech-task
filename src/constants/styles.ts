import {TableStyles} from "react-data-table-component";

const CUSTOM_TABLE_STYLES: TableStyles = {
  headCells: {
    style: {
      backgroundColor: '#49bcc4',
      color: '#fff',
      textAlign: 'left',
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: '#d7f7d2',
      cursor: "pointer"
    },
  },
}

export default CUSTOM_TABLE_STYLES
