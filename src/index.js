import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { useState, useEffect } from 'react';

function useScrollPosition(throttle) {
  const [scrollPosition, setScrollPosition] = useState({ scrollX: 0, scrollY: 0 });
  // let scrollSubscriber = null;
  useEffect(() => {
    let scrollSubscriber = null;
    if (window) {
      scrollSubscriber = fromEvent(window, 'scroll')
        .pipe(
          throttleTime(throttle),
          map(event => ({ scrollX: window.pageXOffset, scrollY: window.pageYOffset }))
        )
        .subscribe(scrollObject => setScrollPosition(scrollObject));
      return function cleanUp() {
        scrollSubscriber.unsubscribe();
      };
    }
    return null;
  }, [throttle, scrollPosition]);
  return scrollPosition;
}

export default useScrollPosition;
