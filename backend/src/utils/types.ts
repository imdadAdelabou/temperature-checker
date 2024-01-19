
interface ErrReq {
    message: string;
    code: number;
}

interface RegisterBody {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    role: string;
};

interface EngineValue {
    id: string;
    type: "temperature" | "humidity";
    value: number;
    create_date: Date;
}

interface User extends RegisterBody {
    role: string;
    receiveEmail: boolean;
    fcmToken?: string;
    notifs?: string[];
    limits?: string[];
    valuesEngine: EngineValue[];
    engineId?: string;
}

export { ErrReq, RegisterBody, User, EngineValue };