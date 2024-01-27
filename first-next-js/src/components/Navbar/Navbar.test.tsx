import { render, screen } from "@testing-library/react";
import Navbar from ".";
import React from "react";

describe('Navbar component unit testing', () => {

  test('Should render navbar with Pokedex', () => {
    const document = render(<Navbar />)
    expect(document).toMatchSnapshot()
  });

})