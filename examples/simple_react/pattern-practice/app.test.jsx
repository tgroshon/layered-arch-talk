import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { App } from "./app";

describe("<App />", () => {
  it("renders", () => {
    const { getByText } = render(<App />);
    expect(getByText("application")).toHaveTextContent("application");
  });
});
