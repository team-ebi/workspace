import React from "react";
import { render } from "@testing-library/react";
import Team from "../Team";

describe("Team", () => {
    it("should render", () => {
        const { getByText } = render(<Team/>);
        expect(getByText("meet the team")).toBeVisible()
    })
})