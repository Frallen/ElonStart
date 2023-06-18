import qs from "qs";

export const overFlow = (state: boolean): void => {
    if (process.client) {
        if (state) {
            document.body.style.overflowY = "hidden";
        } else document.body.style.overflowY = "visible";
    }
};
export const setLoading = (loading: boolean): void => {
    useMain().isLoading = loading;
    overFlow(loading)
}
// получение всех элементов
export const populate = (): string => {
    return qs.stringify(
        {
            populate: "deep",
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
};
export const fillerPage = (value: string): string => {
    return qs.stringify({
        populate: "deep",
        filters: {
            Page: {
                $eq: {value},
            },
        },
    }, {
        encodeValuesOnly: true, // prettify URL
    });
}

export const createError = (): void => {
    showError({message: 'Попробуйте позже или перезагрузите страницу', statusCode: 404})
}
