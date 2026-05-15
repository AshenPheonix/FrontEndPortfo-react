import { fromFetch } from "rxjs/fetch";
import { catchError, of, switchMap } from "rxjs";
const server = import.meta.env.VITE_SERVER_URL;

let lastpost = 0;

export function getPosts(lastPost=0){
    if (lastPost === 0) {
        return  fromFetch(`${server}/blog`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).pipe(
            switchMap(response => {
                if (response.ok) {
                    const ret = response.json();
                    lastpost = ret?.length || 0;
                    return ret;
                } else {
                    return of({error: true, message: `Error ${response.status}`});
                }
            }),
            catchError(error => {
                console.error('There was a problem with the fetch operation:', error);
                return of([]);
            })
        )
    } else {
        return fromFetch(`${server}/blog/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).pipe(
            switchMap(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return of({error: true, message: `Error ${response.status}`});
                }
            }),
            catchError(error => {
                console.error('There was a problem with the fetch operation:', error);
                return of([]);
            })
        );
    }
}

export function getPost(which:number){
    return fromFetch(`${server}/posts/${which}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).pipe(
        switchMap(response => {
            if (response.ok) {
                return response.json();
            } else {
                return of({error: true, message: `Error ${response.status}`});
            }
        }),
        catchError(error => {
            console.error('There was a problem with the fetch operation:', error);
            return of([]);
        })
    );
}