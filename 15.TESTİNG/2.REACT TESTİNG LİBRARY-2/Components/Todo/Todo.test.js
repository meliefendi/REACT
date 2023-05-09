 import { render, screen } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";

 import Todo from "./index";

 describe("Todo testleri", ()=> {
    let button, input;

    beforeEach(() => {
        render(<Todo/>);

        button = screen.getByText("Add")
        input = screen.getByLabelText("Text");
    });

    test("varsayılan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);

        expect(items.length).toEqual(3);
    });
    test("input ve button dökümanda bulunmalı", ()=>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("ınputa string girilip butona basılınca listeye eklenmeli", ()=>{
        //inputu doldur
        const name = "Melih";
        userEvent.type(input, name);

        //butona tıkla
        userEvent.click(button);

        //assertion
        expect(screen.getByText(name)).toBeInTheDocument()
    })
 });