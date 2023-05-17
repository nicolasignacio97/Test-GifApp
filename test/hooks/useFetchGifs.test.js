import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('goku'));
        const { images, isLoading } = result.current;
        expect(images).toEqual([]);
        expect(isLoading).toBe(true);
    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('goku'));
        await waitFor(() => {
            const { images, isLoading } = result.current;
            expect(images.length).toBeGreaterThan(0);
            expect(isLoading).toBe(false);
        });
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});