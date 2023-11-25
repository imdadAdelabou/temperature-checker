
export interface InputType {
    placeholder: string;
    type: 'text' | 'password' | 'email';
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    haveError?: boolean;
}

export interface BtnType {
    isLoading: boolean;
    content: string;
    disable?: boolean;
    action?: () => void;
    customBgColor?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export interface NavBarItemType {
    content: string;
    route: string;
    activeIcon: string;
    inactiveIcon: string;
}

export interface CardStateType {
    label: string;
    icon: string;
    value: number;
}

export interface TemperatureDataType {
    time: string;
    temperature: number;
}

export interface HumidityDataType {
    time: string;
    humidity: number;
}

export interface ChartType<T> {
    dataKey: string;
    data: T[];
}

export interface CheckIfUserIsConnectedType {
    element: JSX.Element;
}

export interface InfoUserAuthType {
    firstLabel: string;
    secondLabel: string;
    path: string;
}

export interface ShowErrorsType {
    errors: string | undefined;
}

export interface SignUpBodyReqType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}