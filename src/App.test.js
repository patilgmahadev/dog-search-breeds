import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";
import axios from "axios";

jest.mock("axios");

describe("App tests", () => {
  beforeEach(() => {});

  afterEach(() => {});

  it("should contains the heading - Dog Breed Search", () => {
    render(<App />);
    const heading = screen.getByText(/Dog Breed Search/i);
    expect(heading).toBeInTheDocument();
  });

  it("should contains the label - Enter Dog Name", () => {
    render(<App />);
    expect(screen.getByText("Enter Dog Name")).toBeInTheDocument();
  });

  it("should contains the label - By Sort", () => {
    render(<App />);
    expect(screen.getByText("By Sort")).toBeInTheDocument();
  });

  it("should contains the column - Dog", () => {
    render(<App />);
    expect(screen.getByText("Dog")).toBeInTheDocument();
  });

  it("should contains the column - Breed Details", () => {
    render(<App />);
    expect(screen.getByText("Breed Details")).toBeInTheDocument();
    expect(screen.getByRole("cell")).toHaveTextContent(
      "No matching record found."
    );
  });

  it("Input change event triggered for api call", () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: [
          {
            weight: {
              imperial: "40 - 65",
              metric: "18 - 29",
            },
            height: {
              imperial: "21 - 23",
              metric: "53 - 58",
            },
            id: 4,
            name: "Airedale Terrier",
            bred_for: "Badger, otter hunting",
            breed_group: "Terrier",
            life_span: "10 - 13 years",
            temperament:
              "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
            origin: "United Kingdom, England",
            reference_image_id: "1-7cgoZSh",
          },
        ],
      });
    });
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Enter dog name");
    fireEvent.change(searchInput, { target: { value: "al" } });
    expect(axios.get).not.toBeCalled();
  });
});
