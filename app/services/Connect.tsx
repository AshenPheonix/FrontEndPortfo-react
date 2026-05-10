import { fromFetch } from "rxjs/fetch";
import 'dotenv/config';
import { catchError, of, switchMap } from "rxjs";

export function getPosts(lastPost=0){
    if (lastPost === 0) {
        return  fromFetch(`${process.env.server}/posts`, {
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
        )
    } else {
        return fromFetch(`${process.env.server}/postsOffset?offset=${lastPost}`, {
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
    return fromFetch(`${process.env.server}/posts/${which}`, {
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