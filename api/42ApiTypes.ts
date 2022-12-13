interface GetUserByLoginResponseType {
    achievements: Achievement[];
    'active?': boolean;
    'alumni?': boolean;
    alumnized_at?: any;
    anonymize_date: string;
    campus: Campus[];
    campus_users: Campususer[];
    correction_point: number;
    created_at: string;
    cursus_users: Cursususer[];
    data_erasure_date: string;
    displayname: string;
    email: string;
    expertises_users: Expertisesuser[];
    first_name: string;
    groups: Group[];
    id: number;
    image: Image;
    kind: string;
    languages_users: Languagesuser[];
    last_name: string;
    location?: any;
    login: string;
    partnerships: any[];
    patroned: Patroned[];
    patroning: any[];
    phone: string;
    pool_month: string;
    pool_year: string;
    projects_users: Projectsuser[];
    roles: any[];
    'staff?': boolean;
    titles: Group[];
    titles_users: Titlesuser[];
    updated_at: string;
    url: string;
    usual_first_name?: any;
    usual_full_name: string;
    wallet: number;
}

interface Titlesuser {
    created_at: string;
    id: number;
    selected: boolean;
    title_id: number;
    updated_at: string;
    user_id: number;
}

interface Projectsuser {
    created_at: string;
    current_team_id: number;
    cursus_ids: [];
    final_mark?: number;
    id: number;
    marked: boolean;
    marked_at?: string;
    occurrence: number;
    project: [];
    retriable_at?: string;
    status: string;
    updated_at: string;
    'validated?'?: boolean;
}

interface Patroned {
    created_at: string;
    godfather_id: number;
    id: number;
    ongoing: boolean;
    updated_at: string;
    user_id: number;
}

interface Languagesuser {
    created_at: string;
    id: number;
    language_id: number;
    position: number;
    user_id: number;
}

interface Image {
    link: string;
    versions: Versions;
}

interface Versions {
    large: string;
    medium: string;
    micro: string;
    small: string;
}

interface Group {
    id: number;
    name: string;
}

interface Expertisesuser {
    contact_me: boolean;
    created_at: string;
    expertise_id: number;
    id: number;
    interested: boolean;
    user_id: number;
    value: number;
}

interface Cursususer {
    begin_at: string;
    blackholed_at?: any;
    created_at: string;
    cursus: [];
    cursus_id: number;
    end_at?: string;
    grade?: string;
    has_coalition: boolean;
    id: number;
    level: number;
    skills: [];
    updated_at: string;
    user: [];
}

interface Campususer {
    campus_id: number;
    created_at: string;
    id: number;
    is_primary: boolean;
    updated_at: string;
    user_id: number;
}

interface Campus {
    active: boolean;
    address: string;
    city: string;
    country: string;
    default_hidden_phone: boolean;
    email_extension: string;
    facebook: string;
    id: number;
    language: [];
    name: string;
    public: boolean;
    time_zone: string;
    twitter: string;
    users_count: number;
    vogsphere_id: number;
    website: string;
    zip: string;
}

interface Achievement {
    description: string;
    id: number;
    image: string;
    kind: string;
    name: string;
    nbr_of_success?: number;
    tier: string;
    users_url: string;
    visible: boolean;
}
export type { GetUserByLoginResponseType };
