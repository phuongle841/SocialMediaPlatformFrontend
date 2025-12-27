import React from "react";
import type { FC } from "react";
import { NavLink } from "react-router-dom";
export interface Button {
  name: string;
  patch: string;
  Icon: React.ElementType;
}
export function LinkButton({ name, patch, Icon }: Button) {
  return (
    <div className="flex ">
      <button className="border border-transparent p-3 rounded-4xl hover:bg-[#44444E]">
        <NavLink className="" to={patch}>
          <Icon></Icon>
          {name}
        </NavLink>
      </button>
    </div>
  );
}
