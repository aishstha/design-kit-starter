import 'react-table/react-table.css';
import ReactTable from 'react-table';
import React from 'react';
import PropTypes from 'prop-types';

const Table = props => {
  const {
    data,
    columns,
    selectable,
    noDataText,
    defaultPageSize,
    sortable,
    resizable,
    showPagination,
    minRows,
    ...rest
  } = props;

  return (
    <ReactTable
      data={data}
      columns={columns}
      resizable={resizable}
      defaultPageSize={defaultPageSize}
      minRows={data.length > 0 ? 0 : minRows} // Make min rows to zero if there are rows else 5 to show noDataText clearly
      sortable={sortable}
      showPagination={data.length > defaultPageSize} // Turn off pagination if rows is less than 10
      noDataText={noDataText}
      {...rest}
    />
  );
};

Table.defaultProps = {
  sortable: true,
  resizable: true,
  showPagination: true,
  defaultPageSize: 10,
  noDataText: 'No data to display',
  multiSort: false
};

Table.propTypes = {
  data: PropTypes.array,
  noDataText: PropTypes.string,
  columns: PropTypes.array,
  sortable: PropTypes.bool,
  minRows: PropTypes.number,
  defaultPageSize: PropTypes.number,
  onSelect: PropTypes.func,
  resizable: PropTypes.bool,
  selectable: PropTypes.bool,
  showPagination: PropTypes.bool
};

export default Table;
