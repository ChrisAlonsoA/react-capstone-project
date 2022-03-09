import { render, screen } from "@testing-library/react";
import { getByLabelText} from '@testing-library/dom'
import { Header } from ".";
import App from "../App";

test('Header ', () => {
    render(<Header />);
    const prueba1 = screen.getByText('Capstone Project');
    expect(prueba1.textContent).toBe('Capstone Project');


});