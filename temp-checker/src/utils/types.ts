export interface InputType {
  placeholder: string;
  type: "text" | "password" | "email" | "number";
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  haveAnError?: boolean;
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
  value: string;
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
  element: React.ReactNode;
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

export interface UserStateType {
  isPageLoading: boolean;
  user: UserCustomType | null;
}

export interface AuthStateType {
  isLoading: boolean;
}

export interface EngineValue {
  id: string;
  type: "temperature" | "humidity";
  value: number;
  create_date: Date;
}

export interface UserCustomType {
  uid: string;
  email: string;
  accessToken: string;
  emailVerified: boolean;
  firstName?: string;
  lastName?: string;
}

export interface OtherUserDataType {
  firstName: string;
  lastName: string;
  role?: string;
  receiveEmail?: boolean;
  fcmToken?: string;
  valuesEngine?: EngineValue[];
  engineId?: string;
}

export interface OtherUserDataStateType {
  isLoading: boolean;
  otherUserData: OtherUserDataType | null;
}

export interface RootState {
  user: UserStateType;
  auth: AuthStateType;
  otherUserData: OtherUserDataStateType;
}

export enum StatusKit {
  OFF,
  ON,
}

export interface KitStatusType {
  label: string;
  status: StatusKit;
}

export interface CustomModalType {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel?: string;
  children: JSX.Element;
}

export interface AddSeuilModalType {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface TypeSelectType {
  value: string;
  label: string;
}

export interface LoginDataBodyType {
  email: string;
  password: string;
}

export interface FirebaseErrorType extends Error {
  code: string;
}
