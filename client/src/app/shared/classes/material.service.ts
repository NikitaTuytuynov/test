import { ElementRef } from "@angular/core";

declare var M: { toast: (arg0: { html: string; }) => void; FloatingActionButton: { init: (arg0: any) => void; }; updateTextFields: () => void; Modal: { init: (arg0: any) => MeterialInstance; }; }

export interface MeterialInstance{
    open?(): void
    close?(): void
    destroy?(): void
}

export class MaterialService{
    static toast(message: string) {
        M.toast({html: message})
    }

    static initializeFloatingButton(ref: ElementRef){
        M.FloatingActionButton.init(ref.nativeElement)
    }

    static updateTextInputs(){
        M.updateTextFields()
    }

    static initModal(ref: ElementRef): MeterialInstance {
        return M.Modal.init(ref.nativeElement)
    }
}