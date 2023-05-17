import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe de mostrar el componente correctamente', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

});