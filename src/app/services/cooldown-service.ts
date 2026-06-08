import { Injectable } from '@angular/core';
import { map , timer } from 'rxjs';
import { Observable } from 'rxjs';
// The Timer
export interface Cooldown 
{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root',
})
export class CooldownService {
  // The function that handles the timer
  // It can handle two types of values: milliseconds and dates given as string.
  // String form: YYYY-MM-DD <--- it is also specified in the product. 
  startCooldown(targetDate: number | string):Observable<Cooldown> 
  {
    // I handle the incoming type value
    if (typeof targetDate === 'number') 
    {
      targetDate = Date.now() + targetDate;
    }
    if (typeof targetDate === 'string') 
    {
      // I'm breaking the string
      const parts = targetDate.split('-');
      const year = Number(parts[0]);
      const month = Number(parts[1]) - 1; 
      const day = Number(parts[2]);

      targetDate = new Date(year, month, day).getTime();
    }

    return timer(0, 1000).pipe(
    map(() => 
    {
      const distance = targetDate - Date.now();

      if (distance <= 0) { return { days:0, hours:0, minutes:0, seconds:0 };
    }
      // I break down time.
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(distance / (1000 * 60)) % 60;
      const seconds = Math.floor(distance / 1000) % 60;

      return { days, hours, minutes, seconds };
    })
  );
  }
}
