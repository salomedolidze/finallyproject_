import { MenuItem, Select } from "@mui/material";
import React from "react";

export const Sort = ({ sort, changeSort }) => {
  return (
    <Select
      value={sort}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
    >
      <MenuItem value="price,desc">ფასის კლებადობით</MenuItem>
      <MenuItem value="price,asc">ფასის ზრდადობით</MenuItem>
      <MenuItem value="name,desc">სახელის კლებადობით</MenuItem>
      <MenuItem value="name,asc">სახელის ზრდადობით</MenuItem>
    </Select>
  );
};
