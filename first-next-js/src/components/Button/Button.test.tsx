import { render } from "@testing-library/react";
import Button from ".";
import React from "react";

describe('Button component unit testing', () => {

  test('Button component unit testing', () => {
    const document = render(<Button label={'Button testing'} onClick={() => console.log('asd')}/>)
    expect(document).toMatchSnapshot()
  })
})