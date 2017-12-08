import { HttpHeaders } from "@angular/common/http";

import { appKey, appSecret } from '../constants';

export const makeHeader = (type: string): HttpHeaders => {
    if (type === 'Basic') {
        return new HttpHeaders({
            'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
            'Content-Type': 'application/json'
        })
    } return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
    })
}