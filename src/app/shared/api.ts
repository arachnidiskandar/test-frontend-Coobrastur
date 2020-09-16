import { environment } from 'src/environments/environment';

export const API = {
    CLIENT: `${environment.apiUrl}/users`,
    LOGIN: `${environment.apiUrl}/login`,
}