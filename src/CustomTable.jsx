import * as React from "react";
import { FilteringState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow
} from "@devexpress/dx-react-grid-material-ui";
import { Paper, Tooltip } from "@mui/material";

const rows = [
  { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
  { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
  { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
  { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
  { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
  {
    sex: "Male",
    name: "Robert",
    city: "Las Vegas",
    car: "Chevrolet Cruze"
  },
  { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
  { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
  {
    sex: "Male",
    name: "Thomas",
    city: "Rio de Janeiro",
    car: "Honda Accord"
  },
  { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
  { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
  {
    sex: "Male",
    name: "Robert",
    city: "Los Angeles",
    car: "Honda Accord"
  },
  {
    sex: "Male",
    name: "William",
    city: "Los Angeles",
    car: "Honda Civic"
  },
  { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
];

const columns = [
  { name: "name", title: "Name", tooltip: "Name" },
  { name: "sex", title: "Sex", tooltip: "Sex" },
  { name: "city", title: "City", tooltip: "City" },
  { name: "car", title: "Car", tooltip: "Car" }
];

const rowComponent = ({ ...restProps }) => {
  return <Table.Row {...restProps} className="row" />;
};

const setRef = (forwardedRef, node) => {
  if (typeof forwardedRef === "function") {
    forwardedRef(node);
  } else if (forwardedRef) {
    forwardedRef.current = node;
  }
};

const HeaderRowCell = (componentProps) => {
  const { forwardedRef } = componentProps;
  const Cell = React.forwardRef((props, ref) => {
    const innerRef = (node) => {
      setRef(forwardedRef, node);
      setRef(ref, node);
    };
    return (
      <TableHeaderRow.Cell
        {...componentProps}
        {...props}
        forwardedRef={innerRef}
        style={{
          backgroundColor: componentProps.color,
          color: "#fff"
        }}
      />
    );
  });
  return (
    <Tooltip title={componentProps.column.tooltip}>
      <Cell />
    </Tooltip>
  );
};

const CustomTable = () => {
  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <FilteringState />
        <Table />
        <TableHeaderRow
          cellComponent={(props) =>
            HeaderRowCell({ color: "#151515", ...props })
          }
        />
        <TableFilterRow rowComponent={rowComponent} />
      </Grid>
    </Paper>
  );
};

export default CustomTable;
