export enum Step {
    LoadingStep,
    ChooseLocation,
    SelectService,
    SelectOptions,
    // SelectedServices,
    ChooseDate,
    ConsentForm,
    // PersonalInfo,
    PayAndConfirm,
    BookingSuccess,
}

export interface Types {
    step: Step
}

export const initialStep: Step = Step.LoadingStep
