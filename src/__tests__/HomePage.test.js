import React from 'react';
import {render} from "@testing-library/react";
import HomePage from "../components/HomePage";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("HomePage", () => {
    test("the page renders correctly against snapshot", () => {
      const history = createMemoryHistory();
      const { asFragment } = render(
        <Router history={history}>
          <HomePage />
        </Router>
      );
      const component = asFragment();
  
      expect(component).toMatchSnapshot();
    });
  });
