import { test, expect } from "vitest";
import { getCategory } from "./products.js";

test("New product category", () => {
    const product = { condition: "New" };

    expect(getCategory(product)).toBe("new");
});

test("Used product category", () => {
    const product = { condition: "Used" };

    expect(getCategory(product)).toBe("used");
});

test("Uppercase product category", () => {
    const product = { condition: "USED" };

    expect(getCategory(product)).toBe("used");
});