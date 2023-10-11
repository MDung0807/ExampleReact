import {
    HisQuizzes,
    Home,
    PasswordReset,
    Profile,
    Quizzes,
    Register,
    Subjects,
    Transcript,
    Topics,
    SubjectDetail,
    TopicDetail,
    Abouts,
    UpdateProfile,
    Login
} from '../pages/client'

import configs from '../configs'
import {ClientLayouts, AdminLayouts} from '../layouts';

import { HomeAdmin } from '../pages/admin';


const publicRoutes = [
    { path: configs.routes.home, component: Home, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.login, component: Login, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.register, component: Register, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.passReset, component: PasswordReset, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.subjects, component: Subjects, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.topics, component: Topics, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.wishlist, component: Topics, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.quizzes, component: Quizzes, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.history, component: HisQuizzes, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.profile, component: Profile, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.transcript, component: Transcript, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.subjectDetail, component: SubjectDetail, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.topicDetail, component: TopicDetail, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.aboutMe, component: Abouts, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.updateProfile, component: UpdateProfile, layout: ClientLayouts, private: false, roles: []},
];

const privateRoutes= [
    {path: configs.routes.homeAdmin, component: HomeAdmin, layout: AdminLayouts, private: true, roles: ['admin']},
]

const routes = [
    ...publicRoutes,
    ...privateRoutes
]

export default routes;