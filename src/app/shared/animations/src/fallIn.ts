import { trigger, transition, style, stagger, animate, query } from '@angular/animations';

export const fallIn = trigger('fallIn', [
  transition('* => *', [
    query('.letter', style({ opacity: 0, transform: 'translate(0, -100px)' })),
    query(
      '.letter',
      stagger('100ms', [
        animate(
          '0.1s ease-out',
          style({ opacity: 1, transform: 'translate(0, 0)' })
        )
      ])
    ),
    query('.letter', [animate(1000, style('*'))])
  ])
]);
