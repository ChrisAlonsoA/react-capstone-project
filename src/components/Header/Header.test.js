import { render, screen } from "@testing-library/react";
import { Header } from "..";

test('Header ', () => {
    render(<Header />);
    const prueba1 = screen.getByText('Capstone Project');
    expect(prueba1.textContent).toBe('Capstone Project');


});