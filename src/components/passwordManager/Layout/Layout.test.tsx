import React from "react";
import { screen, render } from "../../../utils/test-utils/mockProvider";
import { Layout } from "./Layout";

describe("Layout tests", () => {
    test("should render the children", () => {
        render(<Layout><p>test</p></Layout>);
        const test = screen.findAllByText(/test/i);
        expect(test).toBeTruthy();
    });
    test('should render the header component', () => {
        render(<Layout><p>test</p></Layout>);
        const header = screen.findAllByRole('header');
        expect(header).toBeTruthy();
    });
});