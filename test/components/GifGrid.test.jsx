import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {
    const category = 'goku'
    test('debe de mostrar el loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gif = [
            {
                id: 'ABC',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            },
            {
                id: '123',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gif,
            isLoading: false
        });
        render(<GifGrid category={category} />)
        expect(screen.queryByText('Cargando...')).toBeNull();
        expect(screen.getAllByRole('img').length).toBe(gif.length);
    });

})