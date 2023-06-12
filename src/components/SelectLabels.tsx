import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { HTMLAttributes } from "react";

interface ISelectLabelsProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  data: string[];
  handleChange: (e: SelectChangeEvent<string>) => any;
}

export const SelectLabels: React.FunctionComponent<ISelectLabelsProps> = ({
  data,
  value,
  handleChange,
  ...rest
}) => {
  return (
    <FormControl sx={{ minWidth: 90 }}>
      <InputLabel id="select-labels">Year</InputLabel>
      <Select
        labelId="select-labels"
        id="select-label"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        {data.map((x, index) => {
          return (
            <MenuItem key={index} value={x}>
              {x}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
