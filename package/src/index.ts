import { Observable } from "rxjs";

export default function mockAny(responseData:unknown, time = 0):Observable<any> {
  let ms = 0;
  if (typeof time == "number") {
    ms = time * 1000;
  }
  const observable = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(responseData);
    }, ms);
  });

  return observable;
}
