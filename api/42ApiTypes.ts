import { Nullable } from 'globals/types';

type Image = {
    link: string;
    versions: Versions;
};

type Versions = {
    large: string;
    medium: string;
    micro: string;
    small: string;
};

type UserResponseType = {
    active?: Nullable<boolean>;
    alumni?: Nullable<boolean>;
    alumnized_at: Nullable<string>;
    anonymize_date: Nullable<string>;
    correction_point: 4;
    created_at: Nullable<string>;
    data_erasure_date: Nullable<string>;
    displayname: Nullable<string>;
    email: Nullable<string>;
    first_name: Nullable<string>;
    id: 37642;
    image: Image;
    kind: Nullable<string>;
    last_name: Nullable<string>;
    location: Nullable<string>;
    login: Nullable<string>;
    phone: Nullable<string>;
    pool_month: Nullable<string>;
    pool_year: Nullable<string>;
    staff?: Nullable<boolean>;
    updated_at: Nullable<string>;
    url: Nullable<string>;
    usual_first_name: null;
    usual_full_name: Nullable<string>;
    wallet: 465;
};

type UsersResponseType = [UserResponseType];

export type { UserResponseType, UsersResponseType };
